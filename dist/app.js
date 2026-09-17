import * as THREE from "./three.module.js";

const mount = document.querySelector("#canvasMount");
const board = document.querySelector("#gameBoard");
const timerEl = document.querySelector("#timer");
const strokeCountEl = document.querySelector("#strokeCount");
const instructionEl = document.querySelector("#instruction");
const resultBanner = document.querySelector("#resultBanner");
const undoButton = document.querySelector("#undoButton");
const dropButton = document.querySelector("#dropButton");
const resetButton = document.querySelector("#resetButton");
const hintDialog = document.querySelector("#hintDialog");
const levelSelect = document.querySelector("#levelSelect");
const gameApp = document.querySelector("#gameApp");
const levelGrid = document.querySelector("#levelGrid");
const progressText = document.querySelector("#progressText");
const levelMenuButton = document.querySelector("#levelMenuButton");
const missionText = document.querySelector("#missionText");
const hintTitle = document.querySelector("#hintTitle");
const hintBody = document.querySelector("#hintBody");

const WORLD = { left: -5, right: 5, bottom: -7, top: 7 };
const BALL_RADIUS = 0.28;
const BALL_MASS = 0.55;
const LINE_RADIUS = 0.075;
const LINE_DENSITY = 0.85;
let maxStrokes = 3;
const GRAVITY = 5.5;

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(WORLD.left, WORLD.right, WORLD.top, WORLD.bottom, 0.1, 30);
camera.position.z = 10;
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
mount.appendChild(renderer.domElement);

const gameRoot = new THREE.Group();
const drawingRoot = new THREE.Group();
scene.add(gameRoot, drawingRoot);

const white = new THREE.MeshBasicMaterial({ color: 0xf8f5eb });
const orange = new THREE.MeshBasicMaterial({ color: 0xff9f1c });
const orangeDark = new THREE.MeshBasicMaterial({ color: 0xcc6c00 });
const transparentWhite = new THREE.MeshBasicMaterial({ color: 0xf8f5eb, transparent: true, opacity: 0.22 });

let ball;
let ballVelocity = new THREE.Vector2();
let strokes = [];
let currentStroke = null;
let activePointerId = null;
let running = false;
let finished = false;
let startedAt = 0;
let elapsed = 0;
let accumulator = 0;
let gearTime = 0;
let currentLevelIndex = 0;
let ballStart = new THREE.Vector2(-2.25, 5.55);

const circleObstacles = [];
const staticSegments = [];
const gears = [];
let basket = { left: 2.75, right: 4.05, bottom: -6.25, top: -5.08 };

const levels = [
  { name: "第一道斜坡", difficulty: 1, strokes: 2, mission: "畫一條路，讓球進盒子", hintTitle: "先從斜坡開始", hint: "畫一條由左上往右下的斜線，引導球滑向盒子。", ball: [-3.2, 5.3], basket: [2.7, 4.0, -6.2, -5.0], obstacles: [] },
  { name: "借牆轉彎", difficulty: 1, strokes: 2, mission: "利用牆壁改變球的方向", hintTitle: "牆壁也是工具", hint: "不一定要直接接住球，先讓它撞牆再回來。", ball: [2.8, 5.3], basket: [-3.9, -2.6, -6.2, -5.0], obstacles: [{ style: "cross", x: 0, y: -0.4, r: 0.65, mode: "fixed" }] },
  { name: "繞過圓環", difficulty: 2, strokes: 2, mission: "避開障礙，把球送到底部", hintTitle: "分成兩段思考", hint: "第一筆改變方向，第二筆接住落下的球。", ball: [-2.8, 5.4], basket: [2.8, 4.1, -6.2, -5.0], obstacles: [{ style: "cross", x: -0.7, y: 1.5, r: 0.7, mode: "fixed" }, { style: "cross", x: 1.7, y: -1.2, r: 0.62, mode: "fixed" }] },
  { name: "順著齒輪", difficulty: 2, strokes: 3, mission: "利用恆速齒輪推動球", hintTitle: "順著旋轉方向", hint: "讓球接觸齒輪外側的突齒，旋轉會帶著球走。", ball: [-3.3, 5.4], basket: [2.7, 4.0, -6.2, -5.0], obstacles: [{ style: "wheel", x: -0.8, y: 1.8, r: 0.85, mode: "constant", speed: 0.9 }, { style: "cross", x: 2.1, y: -1.5, r: 0.62, mode: "fixed" }] },
  { name: "喚醒轉盤", difficulty: 3, strokes: 3, mission: "撞動齒輪，再讓它推球", hintTitle: "先給它一點力量", hint: "碰撞驅動齒輪原本不動；用掉落的線或球撞它。", ball: [2.9, 5.4], basket: [-3.9, -2.6, -6.2, -5.0], obstacles: [{ style: "cross", x: 0.6, y: 2.1, r: 0.72, mode: "impact", damping: 0.75 }, { style: "cross", x: -1.8, y: -1.3, r: 0.62, mode: "fixed" }] },
  { name: "逆流雙輪", difficulty: 3, strokes: 3, mission: "穿過兩個反向齒輪", hintTitle: "找出安全的一側", hint: "兩個齒輪方向相反，選擇能把球送向盒子的接觸面。", ball: [-3.4, 5.5], basket: [2.7, 4.0, -6.2, -5.0], obstacles: [{ style: "wheel", x: -1.4, y: 1.7, r: 0.78, mode: "constant", speed: 0.85 }, { style: "wheel", x: 1.5, y: -1.0, r: 0.82, mode: "constant", speed: -0.95 }] },
  { name: "抓準節奏", difficulty: 4, strokes: 3, mission: "通過忽快忽慢的齒輪", hintTitle: "等待也是解法", hint: "變速齒輪會加速、減速甚至反轉；在合適時機完成第一筆。", ball: [0, 5.5], basket: [-0.65, 0.65, -6.2, -5.0], obstacles: [{ style: "wheel", x: -1.8, y: 1.5, r: 0.85, mode: "variable", baseSpeed: -0.45, amplitude: 1.1, frequency: 1.25 }, { style: "wheel", x: 1.8, y: -1.2, r: 0.85, mode: "variable", baseSpeed: 0.4, amplitude: 1.0, frequency: 0.9 }] },
  { name: "齒輪工房", difficulty: 4, strokes: 3, mission: "穿越四種齒輪機關", hintTitle: "每種齒輪規則不同", hint: "固定、碰撞驅動、恆速與變速齒輪都在這裡；先觀察再下筆。", ball: [-3.2, 5.5], basket: [2.75, 4.05, -6.25, -5.08], obstacles: [{ style: "wheel", x: -2.2, y: 3.2, r: 0.75, mode: "variable", baseSpeed: -0.5, amplitude: 0.9, frequency: 1.1 }, { style: "cross", x: 1.5, y: 3.0, r: 0.62, mode: "impact", damping: 1.1 }, { style: "cross", x: -0.7, y: 0.2, r: 0.6, mode: "fixed" }, { style: "wheel", x: 2.0, y: -1.1, r: 0.8, mode: "constant", speed: 0.85 }, { style: "cross", x: -1.3, y: -2.7, r: 0.58, mode: "impact", damping: 0.8 }] }
];

function readUnlockedLevel() {
  try { return Math.min(levels.length, Math.max(1, Number(localStorage.getItem("brain-physics-unlocked")) || 1)); }
  catch (_) { return 1; }
}

function writeUnlockedLevel(value) {
  try { localStorage.setItem("brain-physics-unlocked", String(value)); } catch (_) {}
}

function disc(x, y, radius, mat = white, z = 0) {
  const object = new THREE.Mesh(new THREE.CircleGeometry(radius, 48), mat);
  object.position.set(x, y, z);
  gameRoot.add(object);
  return object;
}

function ring(x, y, outer, inner) {
  const object = new THREE.Mesh(new THREE.RingGeometry(inner, outer, 48), white);
  object.position.set(x, y, 0);
  gameRoot.add(object);
}

function bar(x, y, length, thickness, rotation = 0, mat = white, physical = false) {
  const object = new THREE.Mesh(new THREE.BoxGeometry(length, thickness, 0.04), mat);
  object.position.set(x, y, 0);
  object.rotation.z = rotation;
  gameRoot.add(object);
  if (physical) {
    const dx = Math.cos(rotation) * length / 2;
    const dy = Math.sin(rotation) * length / 2;
    staticSegments.push({ a: new THREE.Vector2(x - dx, y - dy), b: new THREE.Vector2(x + dx, y + dy), radius: thickness / 2 });
  }
  return object;
}

function registerGear(x, y, radius, group, localSegments, config) {
  const gear = {
    x, y, r: radius, group, localSegments,
    mode: config.mode,
    angularVelocity: config.speed ?? 0,
    baseSpeed: config.baseSpeed ?? 0,
    amplitude: config.amplitude ?? 0,
    frequency: config.frequency ?? 1,
    damping: config.damping ?? 1.1,
    inertia: Math.max(0.5, radius * radius * 2.5)
  };
  gears.push(gear);
  return gear;
}

function addWheel(x, y, radius, config) {
  const group = new THREE.Group();
  group.position.set(x, y, 0);
  gameRoot.add(group);
  group.add(new THREE.Mesh(new THREE.CircleGeometry(radius, 48), white));
  circleObstacles.push({ x, y, r: radius });
  const localSegments = [];
  for (let i = 0; i < 10; i++) {
    const angle = i / 10 * Math.PI * 2;
    const center = new THREE.Vector2(Math.cos(angle) * (radius + 0.23), Math.sin(angle) * (radius + 0.23));
    const half = new THREE.Vector2(Math.cos(angle) * 0.24, Math.sin(angle) * 0.24);
    const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.11, 0.04), white);
    spoke.position.set(center.x, center.y, 0);
    spoke.rotation.z = angle;
    group.add(spoke);
    localSegments.push({ a: center.clone().sub(half), b: center.clone().add(half), radius: 0.055 });
  }
  registerGear(x, y, radius, group, localSegments, config);
}

function addCrossRing(x, y, radius, config) {
  const group = new THREE.Group();
  group.position.set(x, y, 0);
  gameRoot.add(group);
  group.add(new THREE.Mesh(new THREE.RingGeometry(radius * 0.55, radius, 48), white));
  circleObstacles.push({ x, y, r: radius });
  const localSegments = [];
  for (const angle of [0, Math.PI / 2]) {
    const length = radius * 2.7;
    const arm = new THREE.Mesh(new THREE.BoxGeometry(length, 0.09, 0.04), white);
    arm.rotation.z = angle;
    group.add(arm);
    const half = new THREE.Vector2(Math.cos(angle) * length / 2, Math.sin(angle) * length / 2);
    localSegments.push({ a: half.clone().multiplyScalar(-1), b: half, radius: 0.045 });
  }
  registerGear(x, y, radius, group, localSegments, config);
}

function clearScene() {
  gameRoot.traverse(object => { if (object.geometry) object.geometry.dispose(); });
  gameRoot.clear();
  circleObstacles.length = 0;
  staticSegments.length = 0;
  gears.length = 0;
}

function createScene(level) {
  basket = { left: level.basket[0], right: level.basket[1], bottom: level.basket[2], top: level.basket[3] };
  ballStart = new THREE.Vector2(level.ball[0], level.ball[1]);
  level.obstacles.forEach(obstacle => {
    const config = { mode: obstacle.mode, speed: obstacle.speed, baseSpeed: obstacle.baseSpeed, amplitude: obstacle.amplitude, frequency: obstacle.frequency, damping: obstacle.damping };
    if (obstacle.style === "wheel") addWheel(obstacle.x, obstacle.y, obstacle.r, config);
    else addCrossRing(obstacle.x, obstacle.y, obstacle.r, config);
  });
  bar(basket.left, (basket.bottom + basket.top) / 2, basket.top - basket.bottom, 0.12, Math.PI / 2, orange, true);
  bar(basket.right, (basket.bottom + basket.top) / 2, basket.top - basket.bottom, 0.12, Math.PI / 2, orange, true);
  bar((basket.left + basket.right) / 2, basket.bottom, basket.right - basket.left, 0.12, 0, orange, true);
  disc(ballStart.x, ballStart.y, BALL_RADIUS + 0.09, orangeDark, -0.02);
  ball = disc(ballStart.x, ballStart.y, BALL_RADIUS, orange, 0.2);
  const halo = new THREE.Mesh(new THREE.RingGeometry(0.46, 0.5, 40), transparentWhite);
  halo.position.set(ballStart.x, ballStart.y, 0);
  gameRoot.add(halo);
}

function visibleBounds() {
  return { left: camera.left, right: camera.right, bottom: camera.bottom, top: camera.top };
}

function worldPoint(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  return new THREE.Vector2(
    camera.left + (event.clientX - rect.left) / rect.width * (camera.right - camera.left),
    camera.top - (event.clientY - rect.top) / rect.height * (camera.top - camera.bottom)
  );
}

function validPoint(point) {
  const bounds = visibleBounds();
  return point.x > bounds.left + 0.18 && point.x < bounds.right - 0.18 && point.y > bounds.bottom + 0.18 && point.y < bounds.top - 0.18;
}

function rotatePoint(point, angle, x = 0, y = 0) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return new THREE.Vector2(x + point.x * cos - point.y * sin, y + point.x * sin + point.y * cos);
}

function gearWorldSegments(gear) {
  return gear.localSegments.map(segment => ({
    a: rotatePoint(segment.a, gear.group.rotation.z, gear.x, gear.y),
    b: rotatePoint(segment.b, gear.group.rotation.z, gear.x, gear.y),
    radius: segment.radius,
    gear
  }));
}

function pointSegmentDistance(point, a, b) {
  return point.distanceTo(closestPointOnSegment(point, a, b));
}

function drawPointIsClear(point) {
  const margin = 0.045;
  if (!validPoint(point)) return false;
  if (point.distanceTo(new THREE.Vector2(ball.position.x, ball.position.y)) < BALL_RADIUS + LINE_RADIUS + margin) return false;
  for (const obstacle of circleObstacles) {
    if (point.distanceTo(new THREE.Vector2(obstacle.x, obstacle.y)) < obstacle.r + LINE_RADIUS + margin) return false;
  }
  const obstacleSegments = staticSegments.concat(gears.flatMap(gearWorldSegments));
  for (const segment of obstacleSegments) {
    if (pointSegmentDistance(point, segment.a, segment.b) < segment.radius + LINE_RADIUS + margin) return false;
  }
  for (const body of strokes) {
    const points = strokeWorldPoints(body);
    for (let i = 1; i < points.length; i++) {
      if (pointSegmentDistance(point, points[i - 1], points[i]) < LINE_RADIUS * 2 + margin) return false;
    }
  }
  return true;
}

function drawPathIsClear(a, b) {
  const distance = a.distanceTo(b);
  const steps = Math.max(1, Math.ceil(distance / 0.055));
  for (let i = 1; i <= steps; i++) {
    if (!drawPointIsClear(a.clone().lerp(b, i / steps))) return false;
  }
  return true;
}

function addStrokeSegment(a, b) {
  const delta = b.clone().sub(a);
  const length = delta.length();
  if (length < 0.01) return null;
  const object = new THREE.Mesh(new THREE.BoxGeometry(length, LINE_RADIUS * 2, 0.08), white);
  object.position.set((a.x + b.x) / 2, (a.y + b.y) / 2, 0.12);
  object.rotation.z = Math.atan2(delta.y, delta.x);
  drawingRoot.add(object);
  return object;
}

function beginStroke(event) {
  if (finished || strokes.length >= maxStrokes || activePointerId !== null) return;
  event.preventDefault();
  activePointerId = event.pointerId;
  try { renderer.domElement.setPointerCapture(event.pointerId); } catch (_) {}
  const point = worldPoint(event);
  if (!drawPointIsClear(point)) {
    activePointerId = null;
    instructionEl.textContent = "不能從球、齒輪或既有線條上開始繪製";
    return;
  }
  currentStroke = { points: [point], meshes: [] };
  instructionEl.textContent = "繼續拖動，放開後線條會開始掉落";
}

function moveStroke(event) {
  if (event.pointerId !== activePointerId || !currentStroke) return;
  event.preventDefault();
  const point = worldPoint(event);
  if (!validPoint(point)) return;
  const last = currentStroke.points[currentStroke.points.length - 1];
  if (point.distanceTo(last) < 0.11) return;
  if (!drawPathIsClear(last, point)) {
    instructionEl.textContent = "線條不能穿過既有物件";
    return;
  }
  const segment = addStrokeSegment(last, point);
  if (segment) currentStroke.meshes.push(segment);
  currentStroke.points.push(point);
}

function makeStrokeBody(stroke) {
  let totalLength = 0;
  const weightedCenter = new THREE.Vector2();
  const segments = [];
  for (let i = 1; i < stroke.points.length; i++) {
    const a = stroke.points[i - 1];
    const b = stroke.points[i];
    const length = a.distanceTo(b);
    if (length < 0.0001) continue;
    const midpoint = a.clone().add(b).multiplyScalar(0.5);
    segments.push({ length, midpoint });
    weightedCenter.addScaledVector(midpoint, length);
    totalLength += length;
  }
  const center = totalLength > 0
    ? weightedCenter.multiplyScalar(1 / totalLength)
    : stroke.points[0].clone();
  const rawMass = Math.max(0.001, totalLength * LINE_DENSITY);
  const mass = Math.max(0.35, rawMass);
  const massScale = mass / rawMass;
  let inertia = 0;
  for (const segment of segments) {
    const segmentMass = segment.length * LINE_DENSITY * massScale;
    const offsetSq = segment.midpoint.distanceToSquared(center);
    inertia += segmentMass * (offsetSq + segment.length * segment.length / 12 + LINE_RADIUS * LINE_RADIUS / 2);
  }
  const group = new THREE.Group();
  group.position.set(center.x, center.y, 0);
  drawingRoot.add(group);
  stroke.meshes.forEach(mesh => group.attach(mesh));
  return {
    group,
    meshes: stroke.meshes,
    localPoints: stroke.points.map(point => point.clone().sub(center)),
    velocity: new THREE.Vector2(),
    angularVelocity: 0,
    mass,
    inertia: Math.max(0.02, inertia)
  };
}

function endStroke(event) {
  if (event.pointerId !== activePointerId) return;
  event.preventDefault();
  if (currentStroke && currentStroke.points.length > 1) {
    strokes.push(makeStrokeBody(currentStroke));
    if (!running) startDrop();
  } else {
    currentStroke?.meshes.forEach(mesh => drawingRoot.remove(mesh));
  }
  currentStroke = null;
  activePointerId = null;
  updateControls();
  instructionEl.textContent = strokes.length < maxStrokes ? `球與線正在掉落，還可以畫 ${maxStrokes - strokes.length} 筆` : "筆數用完了，觀察物理結果";
}

renderer.domElement.addEventListener("pointerdown", beginStroke, { passive: false });
renderer.domElement.addEventListener("pointermove", moveStroke, { passive: false });
renderer.domElement.addEventListener("pointerup", endStroke, { passive: false });
renderer.domElement.addEventListener("pointercancel", endStroke, { passive: false });
renderer.domElement.addEventListener("contextmenu", event => event.preventDefault());

function updateControls() {
  strokeCountEl.textContent = `${strokes.length} / ${maxStrokes}`;
  undoButton.disabled = running || strokes.length === 0;
  dropButton.disabled = true;
}

function removeStroke(body) {
  drawingRoot.remove(body.group);
  body.meshes.forEach(mesh => mesh.geometry.dispose());
}

function undoStroke() {
  if (running || !strokes.length) return;
  removeStroke(strokes.pop());
  updateControls();
}

function resetGame() {
  running = false;
  finished = false;
  elapsed = 0;
  accumulator = 0;
  activePointerId = null;
  if (currentStroke) currentStroke.meshes.forEach(mesh => drawingRoot.remove(mesh));
  currentStroke = null;
  ball.position.set(ballStart.x, ballStart.y, 0.2);
  ballVelocity.set(0, 0);
  gearTime = 0;
  gears.forEach(gear => {
    gear.group.rotation.z = 0;
    gear.angularVelocity = gear.mode === "constant" ? gear.angularVelocity : 0;
  });
  strokes.forEach(removeStroke);
  strokes = [];
  timerEl.textContent = "0.0";
  resultBanner.className = "result-banner";
  resultBanner.textContent = "";
  instructionEl.textContent = "畫第一筆，放開後物理立即開始";
  updateControls();
}

function startDrop() {
  if (running || finished) return;
  running = true;
  startedAt = performance.now() - elapsed * 1000;
  ballVelocity.set(0.08, 0);
  updateControls();
}

function closestPointOnSegment(point, a, b) {
  const ab = b.clone().sub(a);
  const lengthSq = ab.lengthSq();
  if (!lengthSq) return a.clone();
  const t = THREE.MathUtils.clamp(point.clone().sub(a).dot(ab) / lengthSq, 0, 1);
  return a.clone().addScaledVector(ab, t);
}

function strokeWorldPoints(body) {
  const angle = body.group.rotation.z;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return body.localPoints.map(point => new THREE.Vector2(
    body.group.position.x + point.x * cos - point.y * sin,
    body.group.position.y + point.x * sin + point.y * cos
  ));
}

function cross2(a, b) {
  return a.x * b.y - a.y * b.x;
}

function bodyPointVelocity(body, contact) {
  const arm = contact.clone().sub(new THREE.Vector2(body.group.position.x, body.group.position.y));
  return body.velocity.clone().add(new THREE.Vector2(-body.angularVelocity * arm.y, body.angularVelocity * arm.x));
}

function resolveBodyContact(body, normal, contact, surfaceVelocity = new THREE.Vector2(), restitution = 0.16, friction = 0.42) {
  const arm = contact.clone().sub(new THREE.Vector2(body.group.position.x, body.group.position.y));
  let relative = bodyPointVelocity(body, contact).sub(surfaceVelocity);
  const normalSpeed = relative.dot(normal);
  if (normalSpeed >= 0) return 0;

  const armCrossNormal = cross2(arm, normal);
  const denominator = 1 / body.mass + armCrossNormal * armCrossNormal / body.inertia;
  const normalImpulse = -(1 + restitution) * normalSpeed / denominator;
  body.velocity.addScaledVector(normal, normalImpulse / body.mass);
  body.angularVelocity += armCrossNormal * normalImpulse / body.inertia;

  relative = bodyPointVelocity(body, contact).sub(surfaceVelocity);
  const tangent = relative.clone().addScaledVector(normal, -relative.dot(normal));
  if (tangent.lengthSq() > 0.000001) {
    tangent.normalize();
    const armCrossTangent = cross2(arm, tangent);
    const tangentDenominator = 1 / body.mass + armCrossTangent * armCrossTangent / body.inertia;
    const idealFrictionImpulse = -relative.dot(tangent) / tangentDenominator;
    const frictionImpulse = THREE.MathUtils.clamp(idealFrictionImpulse, -friction * normalImpulse, friction * normalImpulse);
    body.velocity.addScaledVector(tangent, frictionImpulse / body.mass);
    body.angularVelocity += armCrossTangent * frictionImpulse / body.inertia;
  }
  return normalImpulse;
}

function gearSurfaceVelocity(gear, point) {
  const arm = point.clone().sub(new THREE.Vector2(gear.x, gear.y));
  return new THREE.Vector2(-gear.angularVelocity * arm.y, gear.angularVelocity * arm.x);
}

function applyGearImpulse(gear, contact, normal, impulse) {
  if (gear.mode !== "impact" || impulse <= 0) return;
  const arm = contact.clone().sub(new THREE.Vector2(gear.x, gear.y));
  const forceX = -normal.x * impulse;
  const forceY = -normal.y * impulse;
  gear.angularVelocity += (arm.x * forceY - arm.y * forceX) / gear.inertia * 0.55;
  gear.angularVelocity = THREE.MathUtils.clamp(gear.angularVelocity, -4.5, 4.5);
}

function updateGears(dt) {
  gearTime += dt;
  gears.forEach(gear => {
    if (gear.mode === "fixed") gear.angularVelocity = 0;
    if (gear.mode === "constant") gear.angularVelocity = gear.angularVelocity || 0.82;
    if (gear.mode === "variable") gear.angularVelocity = gear.baseSpeed + Math.sin(gearTime * gear.frequency) * gear.amplitude;
    if (gear.mode === "impact") gear.angularVelocity *= Math.exp(-gear.damping * dt);
    gear.group.rotation.z += gear.angularVelocity * dt;
  });
}

function collideStrokeWithWorld(body) {
  const bounds = visibleBounds();
  const gearSegments = gears.flatMap(gearWorldSegments);
  for (let iteration = 0; iteration < 2; iteration++) {
    const points = strokeWorldPoints(body);
    const wallContacts = [
      { normal: new THREE.Vector2(1, 0), depthFor: point => bounds.left + LINE_RADIUS - point.x },
      { normal: new THREE.Vector2(-1, 0), depthFor: point => point.x + LINE_RADIUS - bounds.right },
      { normal: new THREE.Vector2(0, 1), depthFor: point => bounds.bottom + LINE_RADIUS - point.y },
      { normal: new THREE.Vector2(0, -1), depthFor: point => point.y + LINE_RADIUS - bounds.top }
    ];
    for (const wall of wallContacts) {
      let deepest = null;
      for (const point of points) {
        const depth = wall.depthFor(point);
        if (depth > 0 && (!deepest || depth > deepest.depth)) deepest = { point, depth };
      }
      if (deepest) {
        body.group.position.x += wall.normal.x * deepest.depth;
        body.group.position.y += wall.normal.y * deepest.depth;
        resolveBodyContact(body, wall.normal, deepest.point, undefined, 0.12, 0.5);
      }
    }

    for (const point of strokeWorldPoints(body)) {
      for (const obstacle of circleObstacles) {
        const delta = point.clone().sub(new THREE.Vector2(obstacle.x, obstacle.y));
        const minimum = obstacle.r + LINE_RADIUS;
        const distance = delta.length();
        if (distance > 0 && distance < minimum) {
          const normal = delta.multiplyScalar(1 / distance);
          body.group.position.x += normal.x * (minimum - distance);
          body.group.position.y += normal.y * (minimum - distance);
          resolveBodyContact(body, normal, point);
        }
      }
      for (const segment of staticSegments) {
        const closest = closestPointOnSegment(point, segment.a, segment.b);
        const delta = point.clone().sub(closest);
        const minimum = LINE_RADIUS + segment.radius;
        const distance = delta.length();
        if (distance > 0 && distance < minimum) {
          const normal = delta.multiplyScalar(1 / distance);
          body.group.position.x += normal.x * (minimum - distance);
          body.group.position.y += normal.y * (minimum - distance);
          resolveBodyContact(body, normal, closest);
        }
      }
      for (const segment of gearSegments) {
        const closest = closestPointOnSegment(point, segment.a, segment.b);
        const delta = point.clone().sub(closest);
        const minimum = LINE_RADIUS + segment.radius;
        const distance = delta.length();
        if (distance > 0 && distance < minimum) {
          const normal = delta.multiplyScalar(1 / distance);
          body.group.position.x += normal.x * (minimum - distance);
          body.group.position.y += normal.y * (minimum - distance);
          const impulse = resolveBodyContact(body, normal, closest, gearSurfaceVelocity(segment.gear, closest));
          applyGearImpulse(segment.gear, closest, normal, impulse);
        }
      }
    }
  }
}

function updateStrokeBody(body, dt) {
  body.velocity.y -= GRAVITY * dt;
  body.velocity.multiplyScalar(0.999);
  body.angularVelocity *= 0.999;
  body.group.position.x += body.velocity.x * dt;
  body.group.position.y += body.velocity.y * dt;
  body.group.rotation.z += body.angularVelocity * dt;
  collideStrokeWithWorld(body);
}

function collideBallSegment(a, b, radius = LINE_RADIUS, bounce = 0.42, body = null, gear = null) {
  const position = new THREE.Vector2(ball.position.x, ball.position.y);
  const closest = closestPointOnSegment(position, a, b);
  const delta = position.clone().sub(closest);
  const minimum = BALL_RADIUS + radius;
  const distance = delta.length();
  if (distance >= minimum || distance === 0) return;
  const normal = delta.multiplyScalar(1 / distance);
  position.addScaledVector(normal, minimum - distance);
  ball.position.x = position.x;
  ball.position.y = position.y;
  let surfaceVelocity = new THREE.Vector2();
  if (body) {
    const arm = closest.clone().sub(new THREE.Vector2(body.group.position.x, body.group.position.y));
    surfaceVelocity = body.velocity.clone().add(new THREE.Vector2(-body.angularVelocity * arm.y, body.angularVelocity * arm.x));
  }
  if (gear) surfaceVelocity = gearSurfaceVelocity(gear, closest);
  const relative = ballVelocity.clone().sub(surfaceVelocity);
  const into = relative.dot(normal);
  if (into < 0) {
    const arm = body ? closest.clone().sub(new THREE.Vector2(body.group.position.x, body.group.position.y)) : null;
    const rotationalTerm = body ? Math.pow(cross2(arm, normal), 2) / body.inertia : 0;
    const denominator = 1 / BALL_MASS + (body ? 1 / body.mass : 0) + rotationalTerm;
    const impulse = -(1 + bounce) * into / denominator;
    ballVelocity.addScaledVector(normal, impulse / BALL_MASS);
    if (body) {
      body.velocity.addScaledVector(normal, -impulse / body.mass);
      body.angularVelocity -= cross2(arm, normal) * impulse / body.inertia;
    }
    if (gear) applyGearImpulse(gear, closest, normal, impulse);
  }
  ballVelocity.multiplyScalar(0.994);
}

function collideBallCircle(obstacle) {
  const delta = new THREE.Vector2(ball.position.x - obstacle.x, ball.position.y - obstacle.y);
  const minimum = BALL_RADIUS + obstacle.r;
  const distance = delta.length();
  if (distance >= minimum || distance === 0) return;
  const normal = delta.multiplyScalar(1 / distance);
  ball.position.x = obstacle.x + normal.x * minimum;
  ball.position.y = obstacle.y + normal.y * minimum;
  const into = ballVelocity.dot(normal);
  if (into < 0) ballVelocity.addScaledVector(normal, -1.48 * into);
}

function collideBallWithWalls() {
  const bounds = visibleBounds();
  if (ball.position.x - BALL_RADIUS < bounds.left) { ball.position.x = bounds.left + BALL_RADIUS; ballVelocity.x = Math.abs(ballVelocity.x) * 0.55; }
  if (ball.position.x + BALL_RADIUS > bounds.right) { ball.position.x = bounds.right - BALL_RADIUS; ballVelocity.x = -Math.abs(ballVelocity.x) * 0.55; }
  if (ball.position.y - BALL_RADIUS < bounds.bottom) { ball.position.y = bounds.bottom + BALL_RADIUS; ballVelocity.y = Math.abs(ballVelocity.y) * 0.42; ballVelocity.x *= 0.96; }
  if (ball.position.y + BALL_RADIUS > bounds.top) { ball.position.y = bounds.top - BALL_RADIUS; ballVelocity.y = -Math.abs(ballVelocity.y) * 0.45; }
}

function physicsStep(dt) {
  strokes.forEach(body => updateStrokeBody(body, dt));
  ballVelocity.y -= GRAVITY * dt;
  ballVelocity.multiplyScalar(0.999);
  ball.position.x += ballVelocity.x * dt;
  ball.position.y += ballVelocity.y * dt;
  collideBallWithWalls();
  circleObstacles.forEach(collideBallCircle);
  staticSegments.forEach(segment => collideBallSegment(segment.a, segment.b, segment.radius, 0.4));
  gears.flatMap(gearWorldSegments).forEach(segment => collideBallSegment(segment.a, segment.b, segment.radius, 0.4, null, segment.gear));
  strokes.forEach(body => {
    const points = strokeWorldPoints(body);
    for (let i = 1; i < points.length; i++) collideBallSegment(points[i - 1], points[i], LINE_RADIUS, 0.32, body);
  });
  if (ball.position.x > basket.left + BALL_RADIUS && ball.position.x < basket.right - BALL_RADIUS && ball.position.y < basket.top && ball.position.y > basket.bottom) win();
}

function win() {
  if (finished) return;
  running = false;
  finished = true;
  const unlocked = Math.max(readUnlockedLevel(), Math.min(levels.length, currentLevelIndex + 2));
  writeUnlockedLevel(unlocked);
  resultBanner.innerHTML = `<div>過關！ ${elapsed.toFixed(1)} 秒完成</div><div class="result-actions"><button data-result-action="levels">選關</button><button data-result-action="next">${currentLevelIndex === levels.length - 1 ? "完成" : "下一關"}</button></div>`;
  resultBanner.className = "result-banner success show";
  instructionEl.textContent = "漂亮的物理解法！";
  if (navigator.vibrate) navigator.vibrate([40, 40, 100]);
  updateControls();
}

function renderLevelSelect() {
  const unlocked = readUnlockedLevel();
  progressText.textContent = `已解鎖 ${unlocked} / ${levels.length}`;
  levelGrid.innerHTML = levels.map((level, index) => {
    const locked = index + 1 > unlocked;
    return `<button class="level-card" data-level="${index}" ${locked ? "disabled" : ""}>
      <span class="level-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="level-name">${level.name}</span>
      <span class="level-meta"><span class="difficulty">${"●".repeat(level.difficulty)}${"○".repeat(4 - level.difficulty)}</span> · ${level.strokes} 筆</span>
      ${locked ? '<span class="level-lock">🔒</span>' : ""}
    </button>`;
  }).join("");
}

function showLevelSelect() {
  running = false;
  finished = false;
  gameApp.classList.add("hidden");
  levelSelect.classList.remove("hidden");
  renderLevelSelect();
}

function loadLevel(index) {
  currentLevelIndex = index;
  const level = levels[index];
  running = false;
  finished = false;
  if (currentStroke) currentStroke.meshes.forEach(mesh => drawingRoot.remove(mesh));
  currentStroke = null;
  strokes.forEach(removeStroke);
  strokes = [];
  drawingRoot.clear();
  clearScene();
  maxStrokes = level.strokes;
  createScene(level);
  levelMenuButton.textContent = String(index + 1).padStart(2, "0");
  missionText.textContent = level.mission;
  hintTitle.textContent = level.hintTitle;
  hintBody.textContent = level.hint;
  levelSelect.classList.add("hidden");
  gameApp.classList.remove("hidden");
  resetGame();
  requestAnimationFrame(resize);
}

undoButton.addEventListener("click", undoStroke);
resetButton.addEventListener("click", resetGame);
levelMenuButton.addEventListener("click", showLevelSelect);
levelGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-level]");
  if (button && !button.disabled) loadLevel(Number(button.dataset.level));
});
resultBanner.addEventListener("click", event => {
  const action = event.target.closest("[data-result-action]")?.dataset.resultAction;
  if (action === "levels" || currentLevelIndex === levels.length - 1) showLevelSelect();
  if (action === "next" && currentLevelIndex < levels.length - 1) loadLevel(currentLevelIndex + 1);
});
document.querySelector("#hintButton").addEventListener("click", () => hintDialog.showModal());
document.querySelector("#closeHint").addEventListener("click", () => hintDialog.close());
document.querySelector("#gotItButton").addEventListener("click", () => hintDialog.close());

function resize() {
  const rect = mount.getBoundingClientRect();
  if (rect.width < 10 || rect.height < 10) return;
  renderer.setSize(rect.width, rect.height, false);
  const viewportAspect = rect.width / Math.max(rect.height, 1);
  const worldAspect = (WORLD.right - WORLD.left) / (WORLD.top - WORLD.bottom);
  if (viewportAspect > worldAspect) {
    const width = (WORLD.top - WORLD.bottom) * viewportAspect;
    camera.left = -width / 2;
    camera.right = width / 2;
    camera.top = WORLD.top;
    camera.bottom = WORLD.bottom;
  } else {
    const height = (WORLD.right - WORLD.left) / viewportAspect;
    camera.left = WORLD.left;
    camera.right = WORLD.right;
    camera.top = height / 2;
    camera.bottom = -height / 2;
  }
  camera.updateProjectionMatrix();
}

new ResizeObserver(resize).observe(board);
const clock = new THREE.Clock();
function animate() {
  const delta = Math.min(clock.getDelta(), 0.05);
  updateGears(delta);
  if (running) {
    elapsed = (performance.now() - startedAt) / 1000;
    timerEl.textContent = elapsed.toFixed(1);
    accumulator += delta;
    while (accumulator >= 1 / 120) {
      physicsStep(1 / 120);
      accumulator -= 1 / 120;
    }
  }
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

const modelContext = document.modelContext;
if (modelContext?.registerTool) {
  try {
    void Promise.resolve(modelContext.registerTool({
      name: "reset_physics_puzzle",
      title: "重設物理解謎",
      description: "清除玩家畫的路線並把橘球放回起點。",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute() { if (!ball) loadLevel(currentLevelIndex); else resetGame(); return { status: "ready", strokes: 0 }; }
    })).catch(() => {});
  } catch (_) {}
}

window.__gameDebug = {
  loadLevel,
  getState() {
    return {
      running,
      strokes: strokes.length,
      staticSegments: staticSegments.length,
      gears: gears.map(gear => ({ mode: gear.mode, angle: gear.group.rotation.z, speed: gear.angularVelocity })),
      level: currentLevelIndex + 1,
      ball: ball ? { x: ball.position.x, y: ball.position.y } : null,
      firstStrokeY: strokes[0]?.group.position.y ?? null,
      firstStrokeAngle: strokes[0]?.group.rotation.z ?? null,
      firstStrokeAngularVelocity: strokes[0]?.angularVelocity ?? null,
      firstStrokeMass: strokes[0]?.mass ?? null,
      firstStrokeInertia: strokes[0]?.inertia ?? null
    };
  }
};

renderLevelSelect();
animate();
document.documentElement.dataset.gameReady = "true";
