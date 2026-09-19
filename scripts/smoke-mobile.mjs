import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const tempRoot = resolve(tmpdir());
const profile = await mkdtemp(join(tempRoot, "brain-it-out-smoke-"));
const browser = spawn(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--no-first-run",
  "--no-default-browser-check",
  "--remote-debugging-port=0",
  `--user-data-dir=${profile}`,
  "about:blank"
], { stdio: "ignore" });

const delay = ms => new Promise(resolveDelay => setTimeout(resolveDelay, ms));

try {
  let activePort;
  for (let attempt = 0; attempt < 100; attempt++) {
    try {
      activePort = await readFile(join(profile, "DevToolsActivePort"), "utf8");
      break;
    } catch {
      await delay(50);
    }
  }
  assert.ok(activePort, "Chrome exposed a DevTools endpoint");
  const [port, browserPath] = activePort.trim().split(/\r?\n/);
  const socket = new WebSocket(`ws://127.0.0.1:${port}${browserPath}`);
  await new Promise((resolveOpen, rejectOpen) => {
    socket.addEventListener("open", resolveOpen, { once: true });
    socket.addEventListener("error", rejectOpen, { once: true });
  });

  let sequence = 0;
  const pending = new Map();
  socket.addEventListener("message", event => {
    const message = JSON.parse(event.data);
    if (!message.id) return;
    const handler = pending.get(message.id);
    if (!handler) return;
    pending.delete(message.id);
    if (message.error) handler.reject(new Error(message.error.message));
    else handler.resolve(message.result);
  });
  const send = (method, params = {}) => new Promise((resolveSend, rejectSend) => {
    const id = ++sequence;
    pending.set(id, { resolve: resolveSend, reject: rejectSend });
    socket.send(JSON.stringify({ id, method, params }));
  });
  const evaluate = async expression => {
    const response = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
    if (response.exceptionDetails) throw new Error(response.exceptionDetails.text);
    return response.result.value;
  };

  const [{ targetInfos }] = await Promise.all([
    send("Target.getTargets"),
    send("Target.setDiscoverTargets", { discover: true })
  ]);
  const pageTarget = targetInfos.find(target => target.type === "page");
  assert.ok(pageTarget, "Chrome has a page target");
  const { sessionId } = await send("Target.attachToTarget", { targetId: pageTarget.targetId, flatten: true });
  const pagePending = new Map();
  const sendPage = (method, params = {}) => new Promise((resolveSend, rejectSend) => {
    const id = ++sequence;
    pagePending.set(id, { resolve: resolveSend, reject: rejectSend });
    socket.send(JSON.stringify({ id, method, params, sessionId }));
  });
  socket.addEventListener("message", event => {
    const message = JSON.parse(event.data);
    if (message.sessionId !== sessionId || !message.id) return;
    const handler = pagePending.get(message.id);
    if (!handler) return;
    pagePending.delete(message.id);
    if (message.error) handler.reject(new Error(message.error.message));
    else handler.resolve(message.result);
  });
  const evaluatePage = async expression => {
    const response = await sendPage("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
    if (response.exceptionDetails) throw new Error(JSON.stringify(response.exceptionDetails));
    return response.result.value;
  };

  await sendPage("Runtime.enable");
  await sendPage("Page.enable");
  await sendPage("Emulation.setDeviceMetricsOverride", { width: 412, height: 915, deviceScaleFactor: 2.625, mobile: true });
  await sendPage("Page.addScriptToEvaluateOnNewDocument", { source: `
    window.__smokeErrors = [];
    window.addEventListener('error', event => window.__smokeErrors.push(event.message));
    window.addEventListener('unhandledrejection', event => window.__smokeErrors.push(String(event.reason)));
    if (location.protocol === 'file:') localStorage.setItem('brain-physics-unlocked', '100');
  ` });
  const gameUrl = pathToFileURL(resolve("dist/index.html")).href;
  await sendPage("Page.navigate", { url: gameUrl });

  for (let attempt = 0; attempt < 100; attempt++) {
    if (await evaluatePage("document.documentElement?.dataset.gameReady === 'true'")) break;
    await delay(50);
  }

  const menu = await evaluatePage(`(() => {
    const cards = [...document.querySelectorAll('.level-card[data-level]')];
    const first = cards[0]?.getBoundingClientRect();
    return {
      ready: document.documentElement.dataset.gameReady,
      cards: cards.length,
      firstLevel: cards[0]?.dataset.level,
      firstVisible: !!first && first.width > 0 && first.height > 0,
      progress: document.querySelector('#progressText')?.textContent,
      gridHeight: document.querySelector('#levelGrid')?.getBoundingClientRect().height
    };
  })()`);
  assert.equal(menu.ready, "true", "game initialization completed");
  assert.equal(menu.cards, 100, "all 100 level cards rendered");
  assert.equal(menu.firstLevel, "0", "the first level is present");
  assert.ok(menu.firstVisible && menu.gridHeight > 0, "the level grid is visible on a phone viewport");

  const scenes = await evaluatePage(`(async () => {
    const missions = [];
    for (let index = 0; index < 100; index++) {
      const card = document.querySelector('.level-card[data-level="' + index + '"]');
      if (!card || card.disabled) throw new Error('level card unavailable: ' + (index + 1));
      card.click();
      const mission = document.querySelector('#missionText')?.textContent?.trim();
      if (!mission || document.querySelector('#gameApp').classList.contains('hidden')) throw new Error('level did not open: ' + (index + 1));
      missions.push(mission);
      document.querySelector('#levelMenuButton').click();
      await new Promise(resolve => requestAnimationFrame(resolve));
    }
    return { opened: missions.length, distinctMissions: new Set(missions).size, errors: window.__smokeErrors };
  })()`);
  assert.equal(scenes.opened, 100, "all 100 level scenes can be opened on a phone viewport");
  assert.ok(scenes.distinctMissions >= 7, "the campaign includes all seven goal types");
  assert.deepEqual(scenes.errors, [], "opening every level produces no browser errors");

  const dynamicPlay = await evaluatePage(`(() => {
    const card = document.querySelector('.level-card[data-level="62"]');
    card.click();
    const canvas = document.querySelector('#canvasMount canvas');
    const rect = canvas.getBoundingClientRect();
    const emit = (type, x, y, buttons) => canvas.dispatchEvent(new PointerEvent(type, {
      pointerId: 11, pointerType: 'touch', isPrimary: true, bubbles: true, cancelable: true,
      clientX: rect.left + rect.width * x, clientY: rect.top + rect.height * y, buttons
    }));
    emit('pointerdown', 0.5, 0.18, 1);
    emit('pointermove', 0.62, 0.24, 1);
    emit('pointerup', 0.62, 0.24, 0);
    return { mission: document.querySelector('#missionText')?.textContent?.trim(), strokeCount: document.querySelector('#strokeCount')?.textContent?.trim() };
  })()`);
  await delay(180);
  const dynamicErrors = await evaluatePage("window.__smokeErrors");
  assert.equal(dynamicPlay.strokeCount, "1 / 4", "a late dynamic-object level accepts a touch-drawn body");
  assert.deepEqual(dynamicErrors, [], "dynamic-object physics produces no browser errors");

  const magnetPlay = await evaluatePage(`(() => {
    const card = document.querySelector('.level-card[data-level="72"]');
    card.click();
    const canvas = document.querySelector('#canvasMount canvas');
    const rect = canvas.getBoundingClientRect();
    const emit = (type, x, y, buttons) => canvas.dispatchEvent(new PointerEvent(type, {
      pointerId: 13, pointerType: 'touch', isPrimary: true, bubbles: true, cancelable: true,
      clientX: rect.left + rect.width * x, clientY: rect.top + rect.height * y, buttons
    }));
    emit('pointerdown', 0.5, 0.18, 1);
    emit('pointermove', 0.62, 0.24, 1);
    emit('pointerup', 0.62, 0.24, 0);
    return { mission: document.querySelector('#missionText')?.textContent?.trim(), strokeCount: document.querySelector('#strokeCount')?.textContent?.trim() };
  })()`);
  await delay(180);
  const magnetErrors = await evaluatePage("window.__smokeErrors");
  assert.equal(magnetPlay.strokeCount, "1 / 4", "a magnetic-field level accepts a touch-drawn body");
  assert.deepEqual(magnetErrors, [], "magnetic-field physics produces no browser errors");

  assert.equal(await evaluatePage("document.querySelector('.level-card[data-level=\"0\"]').click(); !document.querySelector('#gameApp').classList.contains('hidden')"), true, "the first level opens");
  await delay(100);
  const play = await evaluatePage(`(() => {
    const canvas = document.querySelector('#canvasMount canvas');
    const rect = canvas.getBoundingClientRect();
    const emit = (type, x, y, buttons) => canvas.dispatchEvent(new PointerEvent(type, {
      pointerId: 7, pointerType: 'touch', isPrimary: true, bubbles: true, cancelable: true,
      clientX: rect.left + rect.width * x, clientY: rect.top + rect.height * y, buttons
    }));
    emit('pointerdown', 0.25, 0.28, 1);
    emit('pointermove', 0.38, 0.34, 1);
    emit('pointermove', 0.50, 0.30, 1);
    emit('pointerup', 0.50, 0.30, 0);
    return { canvasWidth: rect.width, canvasHeight: rect.height };
  })()`);
  await delay(150);
  const strokeCount = await evaluatePage("document.querySelector('#strokeCount').textContent.trim()");
  assert.ok(play.canvasWidth > 0 && play.canvasHeight > 0, "the game canvas is visible");
  assert.equal(strokeCount, "1 / 1", "touch drawing creates a physics object");

  console.log(JSON.stringify({ viewport: "412x915", ...menu, scenesOpened: scenes.opened, distinctMissions: scenes.distinctMissions, dynamicLevel: 63, dynamicStrokeCount: dynamicPlay.strokeCount, magnetLevel: 73, magnetStrokeCount: magnetPlay.strokeCount, enteredLevel: 1, strokeCount }));
  socket.close();
} finally {
  browser.kill();
  if (browser.exitCode === null) {
    await Promise.race([
      new Promise(resolveExit => browser.once("exit", resolveExit)),
      delay(1500)
    ]);
  }
  if (resolve(profile).startsWith(`${tempRoot}\\brain-it-out-smoke-`)) {
    await rm(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 150 });
  }
}
