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
    const lateRoutes = [];
    for (let index = 0; index < 100; index++) {
      const card = document.querySelector('.level-card[data-level="' + index + '"]');
      if (!card || card.disabled) throw new Error('level card unavailable: ' + (index + 1));
      card.click();
      const mission = document.querySelector('#missionText')?.textContent?.trim();
      if (!mission || document.querySelector('#gameApp').classList.contains('hidden')) throw new Error('level did not open: ' + (index + 1));
      missions.push(mission);
      if (index >= 62) lateRoutes.push(window.__gameDebug.getState().blueprint.routeBars);
      document.querySelector('#levelMenuButton').click();
      await new Promise(resolve => requestAnimationFrame(resolve));
    }
    const insideWorld = lateRoutes.every(route => route.every(([x, y, length, rotation]) => {
      const halfX = Math.abs(Math.cos(rotation) * length / 2);
      const halfY = Math.abs(Math.sin(rotation) * length / 2);
      return Math.abs(x) + halfX < 4.9 && Math.abs(y) + halfY < 6.9;
    }));
    return {
      opened: missions.length,
      distinctMissions: new Set(missions).size,
      distinctLateRoutes: new Set(lateRoutes.map(JSON.stringify)).size,
      routeComplexities: [...new Set(lateRoutes.map(route => route.length))].sort((a, b) => a - b),
      verticalRouteRails: lateRoutes.flat().filter(([, , , rotation]) => Math.abs(rotation) > 1.2).length,
      lateRoutesInsideWorld: insideWorld,
      errors: window.__smokeErrors
    };
  })()`);
  assert.equal(scenes.opened, 100, "all 100 level scenes can be opened on a phone viewport");
  assert.ok(scenes.distinctMissions >= 7, "the campaign includes all seven goal types");
  assert.equal(scenes.distinctLateRoutes, 38, "all 38 late levels use distinct rail layouts");
  assert.deepEqual(scenes.routeComplexities, [2, 3, 4], "late routes vary between two, three, and four rails");
  assert.ok(scenes.verticalRouteRails >= 8, "some late routes use vertical gates, not only shallow ramps");
  assert.ok(scenes.lateRoutesInsideWorld, "late-game route rails remain within the playable board");
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

  const collisionRegression = await evaluatePage(`(() => {
    const debug = window.__gameDebug;
    debug.loadLevel(3);
    debug.addTestStroke([[-1, 0], [1, 0]], [0, 3]);
    debug.addTestStroke([[-1, 0.25], [1, 0.25]], [0, -3]);
    const bodies = debug.advancePhysics(8).bodies;
    return {
      separation: bodies[1].y - bodies[0].y,
      relativeVerticalSpeed: bodies[0].vy - bodies[1].vy
    };
  })()`);
  assert.ok(collisionRegression.separation >= 0.14, `drawn bodies stay separated after contact: ${JSON.stringify(collisionRegression)}`);
  assert.ok(collisionRegression.relativeVerticalSpeed < 5.5, `drawn-body contact changes their relative speed: ${JSON.stringify(collisionRegression)}`);

  const segmentObstacleRegression = await evaluatePage(`(() => {
    const debug = window.__gameDebug;
    debug.loadLevel(4);
    debug.addTestStroke([[-1.8, -2.9], [1.8, -2.9]]);
    return debug.advancePhysics(1).bodies[0].x;
  })()`);
  assert.ok(segmentObstacleRegression < -0.05, `a line's interior collides with a fixed wall even when both endpoints are clear: ${segmentObstacleRegression}`);

  const magneticTorqueRegression = await evaluatePage(`(() => {
    const debug = window.__gameDebug;
    debug.loadLevel(72);
    const magnet = debug.getState().magnets[0];
    debug.addTestStroke([[magnet.x + 0.2, magnet.y + 0.6], [magnet.x + 1.7, magnet.y + 0.6]]);
    return debug.advancePhysics(1).bodies.at(-1).angularVelocity;
  })()`);
  assert.ok(Math.abs(magneticTorqueRegression) > 0.01, `an asymmetric magnetic field creates angular velocity: ${magneticTorqueRegression}`);

  const magnetProgression = await evaluatePage(`(() => {
    const debug = window.__gameDebug;
    debug.loadLevel(72);
    const introduced = debug.getState().magnets.length;
    debug.loadLevel(99);
    const finale = debug.getState().magnets.length;
    return { introduced, finale };
  })()`);
  assert.equal(magnetProgression.introduced, 2, "the magnetic chapter teaches with two fields");
  assert.equal(magnetProgression.finale, 3, "the final chapter combines three fields");

  const gearDeterminismRegression = await evaluatePage(`(() => {
    const debug = window.__gameDebug;
    debug.loadLevel(10);
    const first = debug.advancePhysics(120).gears.map(gear => gear.angle);
    debug.loadLevel(10);
    const second = debug.advancePhysics(120).gears.map(gear => gear.angle);
    return { first, second };
  })()`);
  assert.deepEqual(gearDeterminismRegression.second, gearDeterminismRegression.first, "gear timing is repeatable over the same number of fixed physics steps");

  await sendPage("Emulation.setCPUThrottlingRate", { rate: 4 });
  const physicsBenchmarkMs = await evaluatePage(`(() => {
    const debug = window.__gameDebug;
    debug.loadLevel(62);
    for (let line = 0; line < 4; line++) {
      const points = Array.from({ length: 160 }, (_, index) => {
        const progress = index / 159;
        return [-3.8 + progress * 7.6, Math.sin(index * 0.22 + line * 0.38) * 2.1];
      });
      debug.addTestStroke(points);
    }
    const start = performance.now();
    debug.advancePhysics(120);
    return performance.now() - start;
  })()`);
  await sendPage("Emulation.setCPUThrottlingRate", { rate: 1 });
  assert.ok(physicsBenchmarkMs > 0, "CPU-throttled mobile physics benchmark completes");

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

  console.log(JSON.stringify({ viewport: "412x915", ...menu, scenesOpened: scenes.opened, distinctMissions: scenes.distinctMissions, distinctLateRoutes: scenes.distinctLateRoutes, routeComplexities: scenes.routeComplexities, verticalRouteRails: scenes.verticalRouteRails, lateRoutesInsideWorld: scenes.lateRoutesInsideWorld, dynamicLevel: 63, dynamicStrokeCount: dynamicPlay.strokeCount, magnetLevel: 73, magnetStrokeCount: magnetPlay.strokeCount, bodyCollision: collisionRegression, segmentObstacleShift: segmentObstacleRegression, magneticTorque: magneticTorqueRegression, magnetProgression, deterministicGearFrames: gearDeterminismRegression.first.length, fourXCpuPhysicsBenchmarkMs: physicsBenchmarkMs, enteredLevel: 1, strokeCount }));
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
