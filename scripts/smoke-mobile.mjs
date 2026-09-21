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
    if (location.protocol === 'file:') localStorage.setItem('brain-physics-unlocked', '150');
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
  assert.equal(menu.cards, 150, "all 150 level cards rendered");
  assert.match(menu.progress, /150 \/ 150/, "the level selector reports the full 150-level campaign");
  assert.equal(menu.firstLevel, "0", "the first level is present");
  assert.ok(menu.firstVisible && menu.gridHeight > 0, "the level grid is visible on a phone viewport");

  const scenes = await evaluatePage(`(async () => {
    const missions = [];
    const lateRoutes = [];
    const blueprints = [];
    for (let index = 0; index < 150; index++) {
      const card = document.querySelector('.level-card[data-level="' + index + '"]');
      if (!card || card.disabled) throw new Error('level card unavailable: ' + (index + 1));
      card.click();
      const mission = document.querySelector('#missionText')?.textContent?.trim();
      if (!mission || document.querySelector('#gameApp').classList.contains('hidden')) throw new Error('level did not open: ' + (index + 1));
      missions.push(mission);
      const blueprint = window.__gameDebug.getState().blueprint;
      blueprints.push(blueprint);
      if (index >= 62) lateRoutes.push(blueprint.routeBars);
      document.querySelector('#levelMenuButton').click();
      await new Promise(resolve => requestAnimationFrame(resolve));
    }
    const world = { left: -5, right: 5, bottom: -7, top: 7, ballRadius: 0.28 };
    const issues = [];
    const missionContracts = {
      draw: /畫.*物件/,
      ballBox: /球.*(?:盒子|杯子)/,
      strokeBox: /手繪物件.*(?:進|入).*杯子/,
      target: /球.*靶心/,
      wall: /球.*牆面/,
      ground: /球.*地面/,
      checkpoints: /依序.*節點/,
      spinGear: /轉(?:輪|盤).*轉/
    };
    const methodLanguage = /利用|穿過|越過|撞動|再把|經過|通過/;
    const pointSegmentDistance = (point, a, b) => {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const lengthSq = dx * dx + dy * dy;
      const t = lengthSq ? Math.max(0, Math.min(1, ((point.x - a.x) * dx + (point.y - a.y) * dy) / lengthSq)) : 0;
      return Math.hypot(point.x - a.x - dx * t, point.y - a.y - dy * t);
    };
    const segmentOf = (item, thickness = 0.16) => {
      const rotation = item.rotation ?? 0;
      const halfX = Math.cos(rotation) * item.length / 2;
      const halfY = Math.sin(rotation) * item.length / 2;
      return {
        a: { x: item.x - halfX, y: item.y - halfY },
        b: { x: item.x + halfX, y: item.y + halfY },
        radius: (item.thickness ?? thickness) / 2
      };
    };
    const rectFits = (left, right, bottom, top) => left >= world.left && right <= world.right && bottom >= world.bottom && top <= world.top;
    const barFits = (item, defaultThickness = 0.16) => {
      const halfX = Math.abs(Math.cos(item.rotation ?? 0) * item.length / 2) + (item.thickness ?? defaultThickness) / 2;
      const halfY = Math.abs(Math.sin(item.rotation ?? 0) * item.length / 2) + (item.thickness ?? defaultThickness) / 2;
      return rectFits(item.x - halfX, item.x + halfX, item.y - halfY, item.y + halfY);
    };
    const worldPoint = (x, y, radius = 0) => rectFits(x - radius, x + radius, y - radius, y + radius);
    for (const [index, board] of blueprints.entries()) {
      const addIssue = reason => issues.push(String(index + 1) + ':' + reason);
      const goal = board.goal;
      const mission = missions[index];
      if (!goal || !(board.strokesAllowed > 0)) addIssue('missing-goal-or-draw-budget');
      if (goal && !missionContracts[goal.type]?.test(mission)) addIssue('mission-does-not-match-goal');
      if (methodLanguage.test(mission)) addIssue('mission-describes-a-method');
      if (board.start && !worldPoint(board.start[0], board.start[1], world.ballRadius)) addIssue('ball-start-outside-world');
      if (board.routeBars.some(bar => !barFits({ x: bar[0], y: bar[1], length: bar[2], rotation: bar[3] ?? 0 }))) addIssue('rail-outside-world');
      if (board.dynamics.some(bar => !barFits(bar, 0.15))) addIssue('moving-support-outside-world');
      if (board.basket && !rectFits(...board.basket)) addIssue('basket-outside-world');
      if (board.noDraw.some(zone => !rectFits(zone.x - zone.w / 2, zone.x + zone.w / 2, zone.y - zone.h / 2, zone.y + zone.h / 2))) addIssue('no-draw-zone-outside-world');
      for (const gear of board.obstacles) {
        const extent = gear.style === 'wheel' ? gear.r + 0.47 : gear.r * 1.35 + 0.05;
        if (!worldPoint(gear.x, gear.y, extent)) addIssue('gear-outside-world');
      }
      for (const magnet of board.magnets) {
        if (!worldPoint(magnet.x, magnet.y, (magnet.r ?? 0.42) + 0.14)) addIssue('magnet-outside-world');
      }
      if (goal?.type === 'ballBox' && (!board.start || !board.basket || board.basket[1] - board.basket[0] <= world.ballRadius * 2)) addIssue('invalid-ball-cup');
      if (goal?.type === 'strokeBox' && (!board.basket || !board.noDraw.length)) addIssue('invalid-stroke-cup');
      if (goal?.type === 'target' && (!board.start || goal.r <= 0 || !worldPoint(goal.x, goal.y, goal.r + 0.12))) addIssue('invalid-target');
      if (goal?.type === 'wall' && (!board.start || !['left', 'right'].includes(goal.side) || goal.minY >= goal.maxY || goal.minY < world.bottom || goal.maxY > world.top)) addIssue('invalid-wall-target');
      if (goal?.type === 'ground' && (!board.start || goal.minX >= goal.maxX || goal.minX < world.left || goal.maxX > world.right)) addIssue('invalid-ground-target');
      if (goal?.type === 'checkpoints' && (!board.start || !goal.targets?.length || goal.targets.some(point => point.r <= 0 || !worldPoint(point.x, point.y, point.r + 0.12)))) addIssue('invalid-checkpoint-route');
      if (goal?.type === 'spinGear' && (!board.obstacles.some(gear => gear.mode === 'impact') || !(goal.speed > 0))) addIssue('invalid-spin-goal');
      if (board.start) {
        const start = { x: board.start[0], y: board.start[1] };
        for (const rail of board.routeBars.map(values => ({ x: values[0], y: values[1], length: values[2], rotation: values[3] ?? 0 }))) {
          const segment = segmentOf(rail);
          if (pointSegmentDistance(start, segment.a, segment.b) < world.ballRadius + segment.radius) addIssue('ball-start-overlaps-rail');
        }
        for (const bar of board.dynamics) {
          const segment = segmentOf(bar, 0.15);
          if (pointSegmentDistance(start, segment.a, segment.b) < world.ballRadius + segment.radius) addIssue('ball-start-overlaps-moving-support');
        }
        for (const gear of board.obstacles) {
          const dx = start.x - gear.x;
          const dy = start.y - gear.y;
          if (gear.style === 'wheel') {
            if (Math.hypot(dx, dy) < world.ballRadius + gear.r) addIssue('ball-start-overlaps-wheel');
            for (let spoke = 0; spoke < 10; spoke++) {
              const angle = spoke / 10 * Math.PI * 2;
              const cx = Math.cos(angle) * (gear.r + 0.23);
              const cy = Math.sin(angle) * (gear.r + 0.23);
              const hx = Math.cos(angle) * 0.24;
              const hy = Math.sin(angle) * 0.24;
              if (pointSegmentDistance(start, { x: gear.x + cx - hx, y: gear.y + cy - hy }, { x: gear.x + cx + hx, y: gear.y + cy + hy }) < world.ballRadius + 0.055) addIssue('ball-start-overlaps-wheel-spoke');
            }
          } else {
            if (Math.abs(Math.hypot(dx, dy) - gear.r) < world.ballRadius + 0.045) addIssue('ball-start-overlaps-gear-rim');
            for (const angle of [0, Math.PI / 2]) {
              const half = gear.r * 1.35;
              const axisX = Math.cos(angle) * half;
              const axisY = Math.sin(angle) * half;
              if (pointSegmentDistance(start, { x: gear.x - axisX, y: gear.y - axisY }, { x: gear.x + axisX, y: gear.y + axisY }) < world.ballRadius + 0.045) addIssue('ball-start-overlaps-gear-arm');
            }
          }
        }
      }
      let clearDrawSamples = 0;
      for (let x = -4.75; x <= 4.75; x += 0.5) for (let y = -6.75; y <= 6.75; y += 0.5) {
        if (board.start && Math.hypot(x - board.start[0], y - board.start[1]) < world.ballRadius + 0.2) continue;
        if (board.noDraw.some(zone => Math.abs(x - zone.x) < zone.w / 2 + 0.12 && Math.abs(y - zone.y) < zone.h / 2 + 0.12)) continue;
        if (board.routeBars.some(values => {
          const segment = segmentOf({ x: values[0], y: values[1], length: values[2], rotation: values[3] ?? 0 });
          return pointSegmentDistance({ x, y }, segment.a, segment.b) < segment.radius + 0.12;
        })) continue;
        if (board.dynamics.some(bar => {
          const segment = segmentOf(bar, 0.15);
          return pointSegmentDistance({ x, y }, segment.a, segment.b) < segment.radius + 0.12;
        })) continue;
        if (board.obstacles.some(gear => Math.hypot(x - gear.x, y - gear.y) < (gear.style === 'wheel' ? gear.r + 0.2 : gear.r * 1.35 + 0.2))) continue;
        clearDrawSamples++;
      }
      if (!clearDrawSamples) addIssue('no-clear-draw-space');
    }
    const insideWorld = lateRoutes.every(route => route.every(([x, y, length, rotation]) => {
      const halfX = Math.abs(Math.cos(rotation) * length / 2);
      const halfY = Math.abs(Math.sin(rotation) * length / 2);
      return Math.abs(x) + halfX < 4.9 && Math.abs(y) + halfY < 6.9;
    }));
    const expertBoards = blueprints.slice(100);
    return {
      opened: missions.length,
      distinctMissions: new Set(missions).size,
      distinctLateRoutes: new Set(lateRoutes.map(JSON.stringify)).size,
      distinctExpertMechanics: new Set(expertBoards.map(board => JSON.stringify({ obstacles: board.obstacles, dynamics: board.dynamics, magnets: board.magnets }))).size,
      expertGoalTypes: new Set(expertBoards.map(board => board.goal.type)).size,
      routeComplexities: [...new Set(lateRoutes.map(route => route.length))].sort((a, b) => a - b),
      verticalRouteRails: lateRoutes.flat().filter(([, , , rotation]) => Math.abs(rotation) > 1.2).length,
      lateRoutesInsideWorld: insideWorld,
      playabilityIssueCount: issues.length,
      playabilityIssues: issues.slice(0, 20),
      errors: window.__smokeErrors
    };
  })()`);
  assert.equal(scenes.opened, 150, "all 150 level scenes can be opened on a phone viewport");
  assert.ok(scenes.distinctMissions >= 7, "the campaign includes all seven goal types");
  assert.equal(scenes.distinctLateRoutes, 88, "all 88 advanced levels use distinct rail layouts");
  assert.equal(scenes.distinctExpertMechanics, 50, "levels 101-150 use distinct machine, support, and magnet configurations");
  assert.equal(scenes.expertGoalTypes, 7, "levels 101-150 exercise every gameplay goal type");
  assert.deepEqual(scenes.routeComplexities, [2, 3, 4], "late routes vary between two, three, and four rails");
  assert.ok(scenes.verticalRouteRails >= 8, "some late routes use vertical gates, not only shallow ramps");
  assert.ok(scenes.lateRoutesInsideWorld, "late-game route rails remain within the playable board");
  assert.equal(scenes.playabilityIssueCount, 0, `all levels pass the structural playability audit: ${JSON.stringify(scenes.playabilityIssues)}`);
  assert.deepEqual(scenes.errors, [], "opening every level produces no browser errors");

  const goalConditionRegression = await evaluatePage(`(() => {
    const debug = window.__gameDebug;
    const representatives = {};
    for (let index = 0; index < 150; index++) {
      debug.loadLevel(index);
      const type = debug.getState().goal;
      if (!(type in representatives)) representatives[type] = index;
    }
    return Object.entries(representatives).map(([type, index]) => {
      debug.loadLevel(index);
      const result = debug.triggerGoalForTest();
      return { type, level: index + 1, finished: result.finished };
    });
  })()`);
  assert.equal(goalConditionRegression.length, 8, "all seven gameplay goals and the draw tutorial have completion fixtures");
  assert.ok(goalConditionRegression.every(result => result.finished), `every goal type can register a valid win: ${JSON.stringify(goalConditionRegression)}`);

  const allLevelGoalRegression = await evaluatePage(`(() => {
    const debug = window.__gameDebug;
    const failures = [];
    for (let index = 0; index < 150; index++) {
      debug.loadLevel(index);
      const result = debug.triggerGoalForTest();
      if (!result.finished) failures.push({ level: index + 1, goal: result.goal });
    }
    return { checked: 150, failures };
  })()`);
  assert.deepEqual(allLevelGoalRegression, { checked: 150, failures: [] }, `every level can register its declared win condition: ${JSON.stringify(allLevelGoalRegression)}`);

  const legacyProgressRegression = await evaluatePage(`(() => {
    const debug = window.__gameDebug;
    const previousUnlocked = localStorage.getItem('brain-physics-unlocked');
    const previousStars = localStorage.getItem('brain-physics-stars');
    localStorage.setItem('brain-physics-unlocked', '100');
    localStorage.setItem('brain-physics-stars', JSON.stringify({ 99: 1 }));
    const migrated = debug.getUnlockedLevel();
    if (previousUnlocked === null) localStorage.removeItem('brain-physics-unlocked');
    else localStorage.setItem('brain-physics-unlocked', previousUnlocked);
    if (previousStars === null) localStorage.removeItem('brain-physics-stars');
    else localStorage.setItem('brain-physics-stars', previousStars);
    return migrated;
  })()`);
  assert.equal(legacyProgressRegression, 101, "a player who cleared the old finale automatically unlocks level 101");

  const openEndedLevelRegression = await evaluatePage(`(() => {
    const debug = window.__gameDebug;
    debug.loadLevel(7);
    const mission = document.querySelector('#missionText')?.textContent?.trim();
    const hint = document.querySelector('#hintBody')?.textContent?.trim();
    const { finished } = debug.triggerGoalForTest();
    return { mission, hintMentionsTurntable: hint?.includes('轉盤'), finished };
  })()`);
  assert.deepEqual(openEndedLevelRegression, {
    mission: "把球送進左側橙色杯子",
    hintMentionsTurntable: true,
    finished: true
  }, `level 8 states only the enforced goal while keeping the turntable as an optional hint: ${JSON.stringify(openEndedLevelRegression)}`);

  const levelElevenPassiveWinRegression = await evaluatePage(`(() => {
    const debug = window.__gameDebug;
    debug.loadLevel(10);
    const before = debug.getState();
    const after = debug.advancePhysics(1200);
    return {
      mission: document.querySelector('#missionText')?.textContent?.trim(),
      startX: before.ball.x,
      basketCenterX: (before.blueprint.basket[0] + before.blueprint.basket[1]) / 2,
      finished: after.finished,
      strokes: after.strokes
    };
  })()`);
  assert.equal(levelElevenPassiveWinRegression.mission, "把球送進右下方橙色盒子", "level 11 clearly names the relocated goal");
  assert.ok(Math.abs(levelElevenPassiveWinRegression.startX - levelElevenPassiveWinRegression.basketCenterX) > 4, "level 11 starts the ball away from the cup's gravity-only path");
  assert.equal(levelElevenPassiveWinRegression.finished, false, `level 11 cannot complete after ten seconds without drawing: ${JSON.stringify(levelElevenPassiveWinRegression)}`);
  assert.equal(levelElevenPassiveWinRegression.strokes, 0, "the passive-win check does not add a hidden stroke");

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

  const finalePlay = await evaluatePage(`(() => {
    const card = document.querySelector('.level-card[data-level="149"]');
    card.click();
    const canvas = document.querySelector('#canvasMount canvas');
    const rect = canvas.getBoundingClientRect();
    const emit = (type, x, y, buttons) => canvas.dispatchEvent(new PointerEvent(type, {
      pointerId: 15, pointerType: 'touch', isPrimary: true, bubbles: true, cancelable: true,
      clientX: rect.left + rect.width * x, clientY: rect.top + rect.height * y, buttons
    }));
    emit('pointerdown', 0.15, 0.12, 1);
    emit('pointermove', 0.22, 0.16, 1);
    emit('pointermove', 0.29, 0.19, 1);
    emit('pointerup', 0.29, 0.19, 0);
    const state = window.__gameDebug.getState();
    return { chapter: state.chapter, level: state.level, strokeCount: document.querySelector('#strokeCount')?.textContent?.trim() };
  })()`);
  await delay(180);
  assert.deepEqual(finalePlay, { chapter: "百五十關終極試煉", level: 150, strokeCount: "1 / 4" }, "level 150 opens and accepts touch drawing on a phone viewport");
  assert.deepEqual(await evaluatePage("window.__smokeErrors"), [], "the extended finale produces no browser errors");

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
    debug.loadLevel(149);
    const extendedFinale = debug.getState().magnets.length;
    return { introduced, finale, extendedFinale };
  })()`);
  assert.equal(magnetProgression.introduced, 2, "the magnetic chapter teaches with two fields");
  assert.equal(magnetProgression.finale, 3, "the level-100 finale combines three fields");
  assert.equal(magnetProgression.extendedFinale, 3, "the level-150 finale keeps three readable fields");

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
    debug.loadLevel(149);
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
    const samples = 300;
    const pointAt = index => {
      const angle = index * 0.08;
      return [0.5 + Math.cos(angle) * 0.26, 0.46 + Math.sin(angle) * 0.18];
    };
    const [startX, startY] = pointAt(0);
    emit('pointerdown', startX, startY, 1);
    for (let index = 1; index <= samples; index++) {
      const [x, y] = pointAt(index);
      emit('pointermove', x, y, 1);
    }
    const instructionBeforeRelease = document.querySelector('#instruction')?.textContent?.trim();
    const [endX, endY] = pointAt(samples);
    emit('pointerup', endX, endY, 0);
    const points = window.__gameDebug.getState().bodies.at(-1).points;
    const physicalLength = points.slice(1).reduce((sum, point, index) => {
      const previous = points[index];
      return sum + Math.hypot(point.x - previous.x, point.y - previous.y);
    }, 0);
    return { canvasWidth: rect.width, canvasHeight: rect.height, instructionBeforeRelease, bodyPoints: points.length, physicalLength };
  })()`);
  await delay(150);
  const strokeCount = await evaluatePage("document.querySelector('#strokeCount').textContent.trim()");
  assert.ok(play.canvasWidth > 0 && play.canvasHeight > 0, "the game canvas is visible");
  assert.equal(strokeCount, "1 / 1", "touch drawing creates a physics object");
  assert.ok(!play.instructionBeforeRelease.includes("上限"), `a 300-sample touch gesture no longer reaches the old drawing limit: ${JSON.stringify(play)}`);
  assert.equal(play.bodyPoints, 256, "long touch gestures are resampled to the mobile-safe physics limit");
  assert.ok(play.physicalLength > 40, `the retained physical path is substantially longer than the old minimum-length ceiling: ${JSON.stringify(play)}`);

  console.log(JSON.stringify({ viewport: "412x915", ...menu, scenesOpened: scenes.opened, distinctMissions: scenes.distinctMissions, distinctLateRoutes: scenes.distinctLateRoutes, distinctExpertMechanics: scenes.distinctExpertMechanics, expertGoalTypes: scenes.expertGoalTypes, routeComplexities: scenes.routeComplexities, verticalRouteRails: scenes.verticalRouteRails, lateRoutesInsideWorld: scenes.lateRoutesInsideWorld, playabilityIssueCount: scenes.playabilityIssueCount, goalConditionRegression, allLevelGoalRegression, legacyProgressRegression, openEndedLevelRegression, levelElevenPassiveWinRegression, dynamicLevel: 63, dynamicStrokeCount: dynamicPlay.strokeCount, magnetLevel: 73, magnetStrokeCount: magnetPlay.strokeCount, finalePlay, bodyCollision: collisionRegression, segmentObstacleShift: segmentObstacleRegression, magneticTorque: magneticTorqueRegression, magnetProgression, deterministicGearFrames: gearDeterminismRegression.first.length, fourXCpuPhysicsBenchmarkLevel: 150, fourXCpuPhysicsBenchmarkMs: physicsBenchmarkMs, enteredLevel: 1, strokeCount, longStrokeBodyPoints: play.bodyPoints, longStrokeLength: play.physicalLength }));
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
