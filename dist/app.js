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

const WORLD = { left: -5, right: 5, bottom: -7, top: 7 };
const BALL_RADIUS = 0.28;
const LINE_RADIUS = 0.075;
const MAX_STROKES = 3;
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

const circleObstacles = [];
const staticSegments = [];
const gears = [];
const basket = { left: 2.75, right: 4.05, bottom: -6.25, top: -5.08 };

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

function createScene() {
  addWheel(-2.25, 3.75, 0.82, { mode: "variable", baseSpeed: -0.55, amplitude: 0.85, frequency: 1.2 });
  addCrossRing(1.65, 3.45, 0.66, { mode: "impact", damping: 1.35 });
  addCrossRing(-0.65, 0.55, 0.64, { mode: "fixed" });
  addWheel(2.25, -0.5, 0.86, { mode: "constant", speed: 0.82 });
  addCrossRing(-1.25, -2.45, 0.64, { mode: "impact", damping: 0.9 });
  bar(basket.left, (basket.bottom + basket.top) / 2, basket.top - basket.bottom, 0.12, Math.PI / 2, orange, true);
  bar(basket.right, (basket.bottom + basket.top) / 2, basket.top - basket.bottom, 0.12, Math.PI / 2, orange, true);
  bar((basket.left + basket.right) / 2, basket.bottom, basket.right - basket.left, 0.12, 0, orange, true);
  disc(-2.25, 5.55, BALL_RADIUS + 0.09, orangeDark, -0.02);
  ball = disc(-2.25, 5.55, BALL_RADIUS, orange, 0.2);
  const halo = new THREE.Mesh(new THREE.RingGeometry(0.46, 0.5, 40), transparentWhite);
  halo.position.set(-2.25, 5.55, 0);
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
  if (finished || strokes.length >= MAX_STROKES || activePointerId !== null) return;
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
  const center = stroke.points.reduce((sum, point) => sum.add(point), new THREE.Vector2()).multiplyScalar(1 / stroke.points.length);
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
    mass: Math.max(0.8, stroke.points.length * 0.035)
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
  instructionEl.textContent = strokes.length < MAX_STROKES ? `球與線正在掉落，還可以畫 ${MAX_STROKES - strokes.length} 筆` : "三筆用完了，觀察物理結果";
}

renderer.domElement.addEventListener("pointerdown", beginStroke, { passive: false });
renderer.domElement.addEventListener("pointermove", moveStroke, { passive: false });
renderer.domElement.addEventListener("pointerup", endStroke, { passive: false });
renderer.domElement.addEventListener("pointercancel", endStroke, { passive: false });
renderer.domElement.addEventListener("contextmenu", event => event.preventDefault());

function updateControls() {
  strokeCountEl.textContent = `${strokes.length} / ${MAX_STROKES}`;
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
  ball.position.set(-2.25, 5.55, 0.2);
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

function bounceBody(body, normal, contact, strength = 0.35) {
  const into = body.velocity.dot(normal);
  if (into < 0) {
    const impulse = -(1 + strength) * into;
    body.velocity.addScaledVector(normal, impulse);
    const arm = contact.clone().sub(new THREE.Vector2(body.group.position.x, body.group.position.y));
    body.angularVelocity += (arm.x * normal.y - arm.y * normal.x) * impulse * 0.025 / body.mass;
  }
  body.velocity.multiplyScalar(0.985);
  body.angularVelocity *= 0.985;
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
  let points = strokeWorldPoints(body);
  const bounds = visibleBounds();
  let shiftX = 0;
  let shiftY = 0;
  for (const point of points) {
    if (point.x - LINE_RADIUS < bounds.left) shiftX = Math.max(shiftX, bounds.left + LINE_RADIUS - point.x);
    if (point.x + LINE_RADIUS > bounds.right) shiftX = Math.min(shiftX, bounds.right - LINE_RADIUS - point.x);
    if (point.y - LINE_RADIUS < bounds.bottom) shiftY = Math.max(shiftY, bounds.bottom + LINE_RADIUS - point.y);
    if (point.y + LINE_RADIUS > bounds.top) shiftY = Math.min(shiftY, bounds.top - LINE_RADIUS - point.y);
  }
  if (shiftX) { body.group.position.x += shiftX; body.velocity.x *= -0.28; body.angularVelocity *= 0.8; }
  if (shiftY) { body.group.position.y += shiftY; body.velocity.y *= -0.24; body.velocity.x *= 0.94; body.angularVelocity *= 0.8; }
  points = strokeWorldPoints(body);

  for (const point of points) {
    for (const obstacle of circleObstacles) {
      const delta = point.clone().sub(new THREE.Vector2(obstacle.x, obstacle.y));
      const minimum = obstacle.r + LINE_RADIUS;
      const distance = delta.length();
      if (distance > 0 && distance < minimum) {
        const normal = delta.multiplyScalar(1 / distance);
        body.group.position.x += normal.x * (minimum - distance);
        body.group.position.y += normal.y * (minimum - distance);
        bounceBody(body, normal, point);
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
        bounceBody(body, normal, point);
      }
    }
    for (const segment of gears.flatMap(gearWorldSegments)) {
      const closest = closestPointOnSegment(point, segment.a, segment.b);
      const delta = point.clone().sub(closest);
      const minimum = LINE_RADIUS + segment.radius;
      const distance = delta.length();
      if (distance > 0 && distance < minimum) {
        const normal = delta.multiplyScalar(1 / distance);
        const relative = body.velocity.clone().sub(gearSurfaceVelocity(segment.gear, closest));
        const impulse = Math.max(0, -relative.dot(normal)) * body.mass;
        body.group.position.x += normal.x * (minimum - distance);
        body.group.position.y += normal.y * (minimum - distance);
        bounceBody(body, normal, point);
        applyGearImpulse(segment.gear, closest, normal, impulse);
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
    const impulse = -(1 + bounce) * into;
    ballVelocity.addScaledVector(normal, impulse);
    if (body) {
      body.velocity.addScaledVector(normal, -impulse * 0.12 / body.mass);
      const arm = closest.clone().sub(new THREE.Vector2(body.group.position.x, body.group.position.y));
      body.angularVelocity -= (arm.x * normal.y - arm.y * normal.x) * impulse * 0.018 / body.mass;
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
  resultBanner.textContent = `過關！ ${elapsed.toFixed(1)} 秒完成`;
  resultBanner.className = "result-banner success show";
  instructionEl.textContent = "漂亮的物理解法！";
  if (navigator.vibrate) navigator.vibrate([40, 40, 100]);
  updateControls();
}

undoButton.addEventListener("click", undoStroke);
resetButton.addEventListener("click", resetGame);
document.querySelector("#hintButton").addEventListener("click", () => hintDialog.showModal());
document.querySelector("#closeHint").addEventListener("click", () => hintDialog.close());
document.querySelector("#gotItButton").addEventListener("click", () => hintDialog.close());

function resize() {
  const rect = mount.getBoundingClientRect();
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
      execute() { resetGame(); return { status: "ready", strokes: 0 }; }
    })).catch(() => {});
  } catch (_) {}
}

window.__gameDebug = {
  getState() {
    return {
      running,
      strokes: strokes.length,
      staticSegments: staticSegments.length,
      gears: gears.map(gear => ({ mode: gear.mode, angle: gear.group.rotation.z, speed: gear.angularVelocity })),
      ball: { x: ball.position.x, y: ball.position.y },
      firstStrokeY: strokes[0]?.group.position.y ?? null
    };
  }
};

createScene();
resize();
resetGame();
animate();
document.documentElement.dataset.gameReady = "true";
