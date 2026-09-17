import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

const mount = document.querySelector("#canvasMount");
const question = document.querySelector("#question");
const levelLabel = document.querySelector("#levelLabel");
const progressBar = document.querySelector("#progressBar");
const levelDots = document.querySelector("#levelDots");
const stageNote = document.querySelector("#stageNote");
const nextButton = document.querySelector("#nextButton");
const successBurst = document.querySelector("#successBurst");
const hintDialog = document.querySelector("#hintDialog");
const finishDialog = document.querySelector("#finishDialog");
const hintText = document.querySelector("#hintText");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
camera.position.set(0, 0.5, 11);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
mount.appendChild(renderer.domElement);

scene.add(new THREE.HemisphereLight(0xffffff, 0x4e6c47, 2.4));
const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
keyLight.position.set(-4, 6, 8);
keyLight.castShadow = true;
scene.add(keyLight);

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
const hitPoint = new THREE.Vector3();
let level = 0;
let solved = false;
let dragging = null;
let interactives = [];
let animated = [];
let levelRoot = new THREE.Group();
scene.add(levelRoot);

const levels = [
  { question: "把月亮移走，叫醒太陽", hint: "月亮只是擋住了太陽，把它拖到畫面外。", note: "拖曳月亮" },
  { question: "讓小球進洞", hint: "球很固執，但洞沒有說它不能移動。", note: "不能移動的，也許不是唯一選擇" },
  { question: "把大方塊放進小盒子", hint: "兩根手指可以改變東西的大小。", note: "試試兩根手指" }
];

function material(color, roughness = .55) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness: .03 });
}

function mesh(geometry, color) {
  const object = new THREE.Mesh(geometry, material(color));
  object.castShadow = true;
  object.receiveShadow = true;
  return object;
}

function clearLevel() {
  dragging = null; interactives = []; animated = [];
  while (levelRoot.children.length) {
    const child = levelRoot.children.pop();
    child.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
  }
}

function addGround(color = 0x7bd98e) {
  const ground = mesh(new THREE.BoxGeometry(11, .45, 2.8), color);
  ground.position.set(0, -3.35, -1.3);
  levelRoot.add(ground);
}

function buildMoonLevel() {
  addGround();
  const sun = mesh(new THREE.SphereGeometry(1.12, 40, 40), 0xffd43b);
  sun.position.set(0, .55, -1);
  sun.userData.baseY = sun.position.y;
  levelRoot.add(sun); animated.push({ object: sun, type: "float", speed: 1.4, amount: .1 });

  for (let i = 0; i < 12; i++) {
    const ray = mesh(new THREE.BoxGeometry(.18, .62, .12), 0xffd43b);
    const a = (i / 12) * Math.PI * 2;
    ray.position.set(Math.cos(a) * 1.55, .55 + Math.sin(a) * 1.55, -1.05);
    ray.rotation.z = a - Math.PI / 2;
    levelRoot.add(ray);
  }

  const moon = mesh(new THREE.SphereGeometry(1.45, 40, 40), 0x59617b);
  moon.position.set(0, .55, .15);
  moon.userData = { draggable: true, kind: "moon" };
  levelRoot.add(moon); interactives.push(moon);
  const craterMat = material(0x444b63);
  [[-.45,.55],[.48,.2],[-.15,-.5]].forEach(([x,y], i) => {
    const c = new THREE.Mesh(new THREE.CircleGeometry(.18 + i*.04, 24), craterMat);
    c.position.set(x, y + .55, 1.58);
    levelRoot.add(c);
  });
}

function buildHoleLevel() {
  addGround(0x65cf80);
  const ball = mesh(new THREE.SphereGeometry(.65, 36, 36), 0xff6b9e);
  ball.position.set(-2.1, -.45, .1);
  levelRoot.add(ball); animated.push({ object: ball, type: "bounce", base: -.45 });

  const hole = mesh(new THREE.TorusGeometry(.92, .2, 20, 48), 0x18172d);
  hole.position.set(2.1, -2.5, .12);
  hole.scale.y = .42;
  hole.userData = { draggable: true, kind: "hole" };
  levelRoot.add(hole); interactives.push(hole);

  const arrow = mesh(new THREE.ConeGeometry(.24, .7, 3), 0xffd43b);
  arrow.position.set(2.1, -1.25, .2); arrow.rotation.z = Math.PI;
  levelRoot.add(arrow); animated.push({ object: arrow, type: "bob", base: -1.25 });
}

function buildBoxLevel() {
  addGround(0x82d89a);
  const box = mesh(new THREE.BoxGeometry(2.3, 2.3, 2.3, 2, 2, 2), 0x4f46e5);
  box.position.set(-1.8, -.5, .1);
  box.rotation.set(.18, .35, .08);
  box.userData = { draggable: true, kind: "cube", scalable: true };
  levelRoot.add(box); interactives.push(box);

  const target = mesh(new THREE.BoxGeometry(1.7, .7, 1.4), 0xffd43b);
  target.position.set(2, -2.25, -.1);
  levelRoot.add(target);
  const cavity = mesh(new THREE.BoxGeometry(1.2, .16, .9), 0x3b3192);
  cavity.position.set(2, -1.84, .62);
  levelRoot.add(cavity);
}

function buildLevel() {
  clearLevel(); solved = false; nextButton.disabled = true;
  successBurst.classList.remove("show");
  question.textContent = levels[level].question;
  levelLabel.textContent = `第 ${level + 1} 關`;
  stageNote.textContent = levels[level].note;
  progressBar.style.width = `${((level + 1) / levels.length) * 100}%`;
  levelDots.innerHTML = levels.map((_, i) => `<span class="level-dot ${i === level ? "active" : ""} ${i < level ? "done" : ""}"></span>`).join("");
  [buildMoonLevel, buildHoleLevel, buildBoxLevel][level]();
}

function solve() {
  if (solved) return;
  solved = true; dragging = null;
  nextButton.disabled = false;
  stageNote.textContent = "太棒了，你找到不一樣的解法！";
  successBurst.classList.remove("show");
  void successBurst.offsetWidth;
  successBurst.classList.add("show");
  if (navigator.vibrate) navigator.vibrate([35, 30, 70]);
}

function pointerToWorld(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  raycaster.ray.intersectPlane(plane, hitPoint);
  return hitPoint;
}

renderer.domElement.addEventListener("pointerdown", event => {
  if (solved || event.pointerType === "touch" && activeTouches.size > 0) return;
  renderer.domElement.setPointerCapture(event.pointerId);
  pointerToWorld(event);
  const hits = raycaster.intersectObjects(interactives, false);
  if (hits.length) dragging = hits[0].object;
});

renderer.domElement.addEventListener("pointermove", event => {
  if (!dragging || solved || activeTouches.size > 1) return;
  const p = pointerToWorld(event);
  dragging.position.x = THREE.MathUtils.clamp(p.x, -5.5, 5.5);
  dragging.position.y = THREE.MathUtils.clamp(p.y, -3, 4);
  if (dragging.userData.kind === "moon" && (Math.abs(dragging.position.x) > 3.5 || Math.abs(dragging.position.y) > 3.1)) solve();
  if (dragging.userData.kind === "hole" && dragging.position.distanceTo(new THREE.Vector3(-2.1, -.45, .1)) < 1) solve();
  if (dragging.userData.kind === "cube" && dragging.scale.x < .58 && dragging.position.distanceTo(new THREE.Vector3(2, -1.45, .1)) < 1.1) solve();
});

renderer.domElement.addEventListener("pointerup", () => { dragging = null; });
renderer.domElement.addEventListener("pointercancel", () => { dragging = null; });

const activeTouches = new Map();
let pinchStart = 0;
let pinchScale = 1;
renderer.domElement.addEventListener("touchstart", event => {
  [...event.changedTouches].forEach(t => activeTouches.set(t.identifier, { x: t.clientX, y: t.clientY }));
  if (level === 2 && activeTouches.size === 2) {
    const [a,b] = [...activeTouches.values()];
    pinchStart = Math.hypot(a.x-b.x, a.y-b.y);
    pinchScale = interactives[0]?.scale.x || 1;
    dragging = interactives[0];
  }
}, { passive: true });

renderer.domElement.addEventListener("touchmove", event => {
  [...event.changedTouches].forEach(t => activeTouches.set(t.identifier, { x: t.clientX, y: t.clientY }));
  if (level === 2 && activeTouches.size === 2 && interactives[0]) {
    const [a,b] = [...activeTouches.values()];
    const distance = Math.hypot(a.x-b.x, a.y-b.y);
    const next = THREE.MathUtils.clamp(pinchScale * distance / pinchStart, .38, 1.1);
    interactives[0].scale.setScalar(next);
    stageNote.textContent = next < .6 ? "現在它放得進去了！" : "繼續縮小一點";
  }
}, { passive: true });

renderer.domElement.addEventListener("touchend", event => {
  [...event.changedTouches].forEach(t => activeTouches.delete(t.identifier));
  if (activeTouches.size < 2) dragging = null;
}, { passive: true });

document.querySelector("#hintButton").addEventListener("click", () => { hintText.textContent = levels[level].hint; hintDialog.showModal(); });
document.querySelector("#closeHint").addEventListener("click", () => hintDialog.close());
document.querySelector("#gotItButton").addEventListener("click", () => hintDialog.close());
document.querySelector("#homeButton").addEventListener("click", buildLevel);
document.querySelector("#playAgainButton").addEventListener("click", () => { finishDialog.close(); level = 0; buildLevel(); });
nextButton.addEventListener("click", () => {
  if (!solved) return;
  if (level === levels.length - 1) finishDialog.showModal();
  else { level += 1; buildLevel(); }
});

const modelContext = document.modelContext;
if (modelContext?.registerTool) {
  const lifecycle = new AbortController();
  try {
    void Promise.resolve(modelContext.registerTool({
      name: "start_game_level",
      title: "開始指定關卡",
      description: "切換到腦洞一下的指定關卡，並重設該關卡的遊戲狀態。",
      inputSchema: {
        type: "object",
        properties: { level: { type: "integer", minimum: 1, maximum: levels.length } },
        required: ["level"],
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        if (!Number.isInteger(input?.level) || input.level < 1 || input.level > levels.length) {
          throw new Error(`level 必須是 1 到 ${levels.length} 的整數`);
        }
        level = input.level - 1;
        buildLevel();
        return { level: input.level, question: levels[level].question, status: "ready" };
      }
    }, { signal: lifecycle.signal })).catch(() => {});
  } catch (_) {
    // Browsers without a complete WebMCP implementation continue normally.
  }
}

function resize() {
  const rect = mount.getBoundingClientRect();
  renderer.setSize(rect.width, rect.height, false);
  camera.aspect = rect.width / Math.max(rect.height, 1);
  camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(mount);

const clock = new THREE.Clock();
function render() {
  const t = clock.getElapsedTime();
  animated.forEach(item => {
    if (item.type === "float") item.object.position.y = item.object.userData.baseY + Math.sin(t * item.speed) * item.amount;
    if (item.type === "bounce") item.object.position.y = item.base + Math.abs(Math.sin(t * 2.3)) * .2;
    if (item.type === "bob") item.object.position.y = item.base + Math.sin(t * 3) * .13;
  });
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

buildLevel();
resize();
render();
