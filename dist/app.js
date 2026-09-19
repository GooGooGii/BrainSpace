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
const forbiddenRed = new THREE.MeshBasicMaterial({ color: 0xe74c5b, transparent: true, opacity: 0.2 });

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
const dynamicBodies = [];
let basket = null;
let target = null;
let checkpointHits = new Set();
let checkpointMarkers = [];

const expansionChapters = [
  { title: "重力與落點", names: ["第一道斜坡", "下坡撞靶", "左牆折返", "杯口外投放", "落點窄門", "跨越高牆", "雙層導軌", "右牆回彈", "雙靶接力", "繞過石柱"] },
  { title: "重心與路線", names: ["偏心推球", "禁區投杯", "兩段接力", "窄帶落點", "借牆入靶", "高低雙台", "柱間穿梭", "反向投放", "三點連線", "最後一個支點"] },
  { title: "齒輪初體驗", names: ["撞醒大齒輪", "外緣施力", "固定輪與活輪", "順時針推進", "輪後藏靶", "雙輪接力", "轉輪投杯", "齒間落球", "三種輪速", "重錘傳動"] },
  { title: "節奏與變速", names: ["慢輪入口", "變速撞靶", "牆面折返", "順逆雙輪", "抓反轉時機", "快慢兩層", "動輪窄門", "輪間投杯", "三靶計時", "變速長廊"] },
  { title: "機關組合試煉", names: ["四輪迷陣", "雙靶狙擊", "極限反彈", "禁區空投", "啟動再接球", "逆流長廊", "偏心密室", "機關靶場", "五段接力", "最後一轉"] },
  { title: "精密連鎖", names: ["齒輪階梯", "三次反彈", "活輪守門", "偏心入杯", "地面節點", "連鎖靶心", "高速轉盤", "逆向導軌", "輪下落點", "長距離接力"] },
  { title: "容器與反彈", names: ["杯口斜投", "牆角回彈", "窄口靶心", "雙禁區翻身", "落地分流", "重心繞柱", "撞輪入杯", "高牆投放", "三段彈跳", "最後的容器"] },
  { title: "時間機關", names: ["變速起點", "等候缺口", "逆轉靶心", "快輪下杯", "節拍落地", "交錯節點", "轉盤窗口", "雙速長廊", "延遲反彈", "機關倒數"] },
  { title: "百關終極試煉", names: ["八輪入口", "末段靶心", "牆邊極限", "禁區翻越", "地面狙擊", "五點路線", "最後齒輪", "百關完成"] }
];
const barSpec = (x, y, length, rotation = 0, thickness = 0.16) => ({ x, y, length, thickness, rotation });
const cross = (x, y, r = 0.62, mode = "fixed", extra = {}) => ({ style: "cross", x, y, r, mode, ...extra });
const wheel = (x, y, r = 0.76, mode = "constant", speed = 0.8, extra = {}) => ({ style: "wheel", x, y, r, mode, speed, ...extra });
const cupAt = (x, y = -5.55, w = 1.45, h = 1.15) => [x - w / 2, x + w / 2, y - h / 2, y + h / 2];
const boxBoard = (ball, cupX, cupY = -5.55, extra = {}) => ({ ...extra, ball, basket: cupAt(cupX, cupY), goal: { type: "ballBox" } });
const targetBoard = (ball, x, y, extra = {}) => ({ ...extra, ball, goal: { type: "target", x, y, r: 0.58 } });
const wallBoard = (ball, side, minY, maxY, extra = {}) => ({ ...extra, ball, goal: { type: "wall", side, minY, maxY } });
const strokeCupBoard = (cupX, cupY, extra = {}) => ({ ...extra, basket: cupAt(cupX, cupY, 1.6, 1.2), goal: { type: "strokeBox" }, noDraw: [{ x: cupX, y: cupY + 1.0, w: 2.1, h: 2.4 }, ...(extra.noDraw ?? [])] });
const groundBoard = (ball, minX, maxX, extra = {}) => ({ ...extra, ball, goal: { type: "ground", minX, maxX } });
const routeBoard = (ball, targets, extra = {}) => ({ ...extra, ball, goal: { type: "checkpoints", targets: targets.map(([x, y, r = 0.5]) => ({ x, y, r })) } });
const spinBoard = (gear, speed, extra = {}) => ({ ...extra, goal: { type: "spinGear", speed }, obstacles: [gear, ...(extra.obstacles ?? [])] });
const dynamicBar = (x, y, length, rotation = 0, mass = 1) => ({ x, y, length, rotation, mass });

// Authored board recipes: each entry changes the start, route, landing zone, or
// machine layout. Mechanics are introduced, then recombined in later chapters.
const expansionBoards = [
  [
    boxBoard([-3.25, 5.25], 3.25),
    targetBoard([-3.4, 5.35], 3.35, -3.85, { bars: [barSpec(0.0, 1.25, 4.4, -0.1)] }),
    wallBoard([2.8, 5.45], "left", -5.5, -2.8, { bars: [barSpec(-0.1, -1.8, 4.2, 0.18)] }),
    strokeCupBoard(-3.2, -5.45),
    groundBoard([-3.1, 5.45], -0.9, 0.9, { bars: [barSpec(-1.4, -2.3, 3.2, -0.12)] }),
    boxBoard([-3.25, 5.45], 3.25, -5.45, { bars: [barSpec(0.2, -1.9, 4.8, Math.PI / 2)] }),
    targetBoard([3.15, 5.2], -3.3, -2.5, { bars: [barSpec(0.1, 2.7, 5.0, 0), barSpec(-0.2, -0.1, 4.1, 0.14)] }),
    wallBoard([-3.1, 5.35], "right", -1.6, 1.6, { obstacles: [cross(0.15, -1.1, 0.68)] }),
    routeBoard([-3.25, 5.4], [[-1.5, 1.0], [2.4, -3.9]], { bars: [barSpec(0.1, 3.0, 4.4, 0), barSpec(-0.4, -1.0, 4.0, 0.12)] }),
    boxBoard([3.2, 5.4], -3.25, -5.45, { obstacles: [cross(-0.9, 0.0, 0.72)] })
  ],
  [
    boxBoard([-3.3, 5.25], 3.25, -5.45, { bars: [barSpec(0, -0.9, 4.2, 0.12)], obstacles: [cross(1.35, -3.0, 0.58)] }),
    strokeCupBoard(3.2, -5.5, { bars: [barSpec(-0.2, 0.1, 4.0, -0.22)] }),
    routeBoard([3.2, 5.25], [[1.3, 1.0], [-1.6, -1.6], [-3.2, -4.65]], { bars: [barSpec(0.3, 3.05, 4.1, 0), barSpec(-0.25, -0.2, 4.6, 0.1)] }),
    groundBoard([-3.2, 5.35], 1.15, 2.0, { bars: [barSpec(0.0, 0.7, 4.2, -0.16)], obstacles: [cross(2.7, -2.0, 0.62)] }),
    targetBoard([-3.25, 5.2], 3.2, -5.0, { bars: [barSpec(-0.1, 2.8, 4.5, 0), barSpec(0.2, -1.1, 4.8, -0.18)] }),
    wallBoard([3.1, 5.25], "left", -5.2, -3.3, { obstacles: [cross(-0.4, 0.2, 0.72)], bars: [barSpec(-0.2, -2.1, 4.0, 0.12)] }),
    boxBoard([-3.25, 5.4], 3.15, -3.9, { obstacles: [cross(-1.5, 1.5, 0.65), cross(1.5, -1.4, 0.65)], bars: [barSpec(0, -4.8, 3.3, 0)] }),
    targetBoard([3.15, 5.2], -3.2, 1.5, { obstacles: [cross(-1.15, -1.5, 0.7)], bars: [barSpec(0.15, 2.4, 4.1, 0.12), barSpec(0, -3.8, 4.5, -0.12)] }),
    strokeCupBoard(-3.2, -5.5, { bars: [barSpec(0.2, -2.0, 4.6, 0.18)], noDraw: [{ x: 1.9, y: -3.0, w: 1.4, h: 2.0 }] }),
    boxBoard([3.25, 5.35], -3.2, -5.45, { obstacles: [cross(-1.3, 2.0, 0.6), cross(1.4, -0.5, 0.7)], bars: [barSpec(0, -3.4, 3.6, 0.18)] })
  ],
  [
    boxBoard([-3.25, 5.35], 3.2, -5.45, { obstacles: [wheel(-0.6, 1.1, 0.8, "impact", 0, { damping: 0.7 })] }),
    spinBoard(cross(0.3, -0.6, 0.8, "impact", { damping: 0.65 }), 0.58),
    boxBoard([3.2, 5.3], -3.2, -5.45, { obstacles: [cross(-1.3, 0.6, 0.65), wheel(1.2, -1.9, 0.72, "constant", -0.78)] }),
    targetBoard([-3.3, 5.4], 3.1, -3.7, { obstacles: [wheel(0.2, 1.4, 0.78, "constant", 0.85)], bars: [barSpec(0, -2.0, 4.8, -0.15)] }),
    strokeCupBoard(3.15, -5.45, { obstacles: [cross(-0.5, 0.2, 0.74, "fixed"), wheel(1.1, -2.0, 0.72, "impact", 0, { damping: 0.75 })] }),
    spinBoard(wheel(-0.2, 0.8, 0.84, "impact", 0, { damping: 0.6 }), 0.72, { obstacles: [cross(2.3, -2.0, 0.62)] }),
    boxBoard([-3.2, 5.25], 3.2, -5.4, { obstacles: [wheel(-1.4, 1.2, 0.72, "constant", -0.9), wheel(1.4, -1.5, 0.72, "impact", 0, { damping: 0.7 })], bars: [barSpec(0, -3.5, 3.8, 0.12)] }),
    groundBoard([3.2, 5.3], -0.65, 0.65, { obstacles: [cross(-1.2, -0.8, 0.66), wheel(1.3, 1.4, 0.78, "constant", 0.9)] }),
    routeBoard([-3.2, 5.4], [[-1.6, 2.3], [1.8, -0.2], [3.2, -4.8]], { obstacles: [wheel(-1.0, 0.1, 0.74, "impact", 0, { damping: 0.6 }), cross(1.1, -2.4, 0.6)], bars: [barSpec(0.1, 3.7, 4.2, 0)] }),
    boxBoard([3.2, 5.35], -3.2, -5.45, { obstacles: [cross(-1.9, 2.4, 0.6), wheel(0.1, 0.1, 0.78, "constant", -0.82), wheel(1.7, -2.7, 0.68, "impact", 0, { damping: 0.7 })] })
  ],
  [
    boxBoard([-3.2, 5.3], 3.2, -5.4, { obstacles: [wheel(-1.5, 1.6, 0.76, "variable", 0, { baseSpeed: 0.15, amplitude: 1.05, frequency: 1.0 })] }),
    targetBoard([3.2, 5.35], -3.2, -3.9, { obstacles: [wheel(-1.3, 1.0, 0.74, "variable", 0, { baseSpeed: -0.25, amplitude: 1.1, frequency: 1.2 }), cross(1.0, -1.2, 0.62)], bars: [barSpec(0, 2.5, 4.5, 0.12)] }),
    wallBoard([-3.2, 5.25], "right", -4.9, -2.0, { obstacles: [wheel(-0.8, 1.4, 0.78, "constant", 0.9), wheel(1.1, -1.8, 0.74, "variable", 0, { baseSpeed: 0.05, amplitude: 1.0, frequency: 0.85 })] }),
    boxBoard([3.2, 5.35], -3.2, -5.4, { obstacles: [wheel(-1.4, 1.6, 0.75, "constant", -0.9), wheel(1.3, -1.5, 0.75, "constant", 0.9)], bars: [barSpec(0, -3.6, 4.0, -0.14)] }),
    routeBoard([-3.2, 5.3], [[0, 2.7], [2.8, -3.5]], { obstacles: [wheel(0, 0.2, 0.82, "variable", 0, { baseSpeed: -0.15, amplitude: 1.15, frequency: 1.25 })], bars: [barSpec(-1.5, -2.2, 3.2, 0.2)] }),
    groundBoard([3.2, 5.25], -0.9, 0.9, { obstacles: [wheel(-1.7, 1.7, 0.72, "variable", 0, { baseSpeed: 0.1, amplitude: 0.9, frequency: 0.75 }), wheel(1.6, -1.2, 0.76, "constant", -0.85)], bars: [barSpec(0, -3.8, 4.2, 0)] }),
    targetBoard([-3.2, 5.4], 3.15, -4.8, { obstacles: [wheel(-1.7, 1.3, 0.76, "variable", 0, { baseSpeed: -0.1, amplitude: 1.0, frequency: 1.1 }), cross(1.3, -1.5, 0.67)], bars: [barSpec(0.1, 3.2, 4.3, 0)] }),
    strokeCupBoard(-3.2, -5.45, { obstacles: [wheel(0, 0.5, 0.8, "constant", 0.95), cross(2.0, -2.6, 0.62)], bars: [barSpec(-1.0, -2.0, 3.6, 0.18)] }),
    routeBoard([3.2, 5.4], [[1.3, 1.7], [-1.6, -1.0], [-3.2, -4.9]], { obstacles: [wheel(-1.6, 1.7, 0.72, "variable", 0, { baseSpeed: 0, amplitude: 1.05, frequency: 1.3 }), wheel(1.4, -1.9, 0.72, "constant", -0.95)], bars: [barSpec(0, 3.4, 4.2, 0)] }),
    boxBoard([-3.2, 5.3], 3.2, -5.4, { obstacles: [wheel(-1.8, 2.2, 0.72, "variable", 0, { baseSpeed: 0.12, amplitude: 1.05, frequency: 1.0 }), wheel(0.1, -0.1, 0.82, "constant", -1.0), wheel(1.8, -3.0, 0.72, "variable", 0, { baseSpeed: -0.08, amplitude: 0.95, frequency: 1.4 })], bars: [barSpec(-0.5, -4.1, 3.1, 0.2)] })
  ],
  [
    routeBoard([-3.2, 5.4], [[-2.0, 2.1], [0.5, -0.5], [3.15, -4.7]], { obstacles: [wheel(-1.4, 2.1, 0.72, "variable", 0, { baseSpeed: 0.1, amplitude: 1.0, frequency: 1.1 }), wheel(1.2, -1.2, 0.78, "constant", -1.0)], bars: [barSpec(0, 3.5, 4.4, 0), barSpec(-0.1, -3.1, 4.3, 0.12)] }),
    targetBoard([3.2, 5.3], -3.15, -4.8, { obstacles: [cross(-1.4, 1.0, 0.64), wheel(0.5, -0.8, 0.8, "variable", 0, { baseSpeed: 0, amplitude: 1.2, frequency: 1.15 }), cross(1.8, -3.0, 0.6)], bars: [barSpec(0.1, 2.8, 4.0, -0.1)] }),
    wallBoard([-3.2, 5.35], "right", -5.5, -2.6, { obstacles: [wheel(-1.7, 1.7, 0.72, "constant", 1.0), cross(0.1, -0.2, 0.68), wheel(1.6, -2.3, 0.72, "variable", 0, { baseSpeed: 0, amplitude: 1.1, frequency: 1.3 })] }),
    strokeCupBoard(3.2, -5.4, { obstacles: [wheel(-1.2, 1.4, 0.76, "variable", 0, { baseSpeed: 0.1, amplitude: 1.0, frequency: 0.9 }), cross(1.0, -1.3, 0.68), wheel(1.8, -3.1, 0.72, "constant", -0.9)], bars: [barSpec(0, 0.3, 4.8, 0.15)] }),
    spinBoard(wheel(0.2, 0.2, 0.84, "impact", 0, { damping: 0.55 }), 0.78, { obstacles: [wheel(-2.0, 2.3, 0.68, "variable", 0, { baseSpeed: 0, amplitude: 0.9, frequency: 1.1 }), cross(2.1, -2.4, 0.62)] }),
    groundBoard([3.2, 5.3], -0.7, 0.7, { obstacles: [wheel(-1.6, 1.8, 0.72, "variable", 0, { baseSpeed: -0.1, amplitude: 1.1, frequency: 1.0 }), wheel(0.4, -0.4, 0.8, "constant", 1.0), cross(2.0, -3.1, 0.62)], bars: [barSpec(-0.2, -4.7, 3.2, 0)] }),
    boxBoard([-3.2, 5.4], 3.2, -5.4, { obstacles: [wheel(-1.6, 1.8, 0.72, "constant", -0.95), wheel(0.5, 0.0, 0.78, "impact", 0, { damping: 0.65 }), wheel(1.7, -2.4, 0.72, "variable", 0, { baseSpeed: 0, amplitude: 1.0, frequency: 1.2 })], bars: [barSpec(-0.1, 3.5, 4.2, 0)] }),
    routeBoard([-3.2, 5.3], [[-1.7, 2.4], [1.7, 0.0], [3.2, -4.7]], { obstacles: [wheel(-1.2, 1.3, 0.72, "variable", 0, { baseSpeed: 0.05, amplitude: 1.0, frequency: 1.35 }), cross(0.6, -1.2, 0.64), wheel(1.5, -2.8, 0.74, "constant", -1.05)], bars: [barSpec(0, 3.7, 4.1, 0), barSpec(-0.2, -3.5, 3.8, 0.12)] }),
    targetBoard([3.2, 5.3], -3.2, -4.9, { obstacles: [wheel(-1.8, 2.2, 0.7, "variable", 0, { baseSpeed: 0, amplitude: 1.1, frequency: 1.4 }), wheel(0, 0.0, 0.84, "constant", 0.95), wheel(1.7, -2.6, 0.72, "variable", 0, { baseSpeed: 0, amplitude: 0.95, frequency: 0.85 })], bars: [barSpec(0.2, 3.4, 4.3, 0)] }),
    boxBoard([-3.2, 5.4], 3.2, -5.4, { obstacles: [wheel(-1.9, 2.4, 0.7, "variable", 0, { baseSpeed: 0, amplitude: 1.1, frequency: 1.2 }), wheel(-0.1, 0.3, 0.82, "constant", -1.0), cross(1.8, -2.0, 0.63), wheel(0.0, -3.5, 0.7, "impact", 0, { damping: 0.6 })], bars: [barSpec(0, 3.8, 4.2, 0), barSpec(0, -4.7, 3.6, 0.1)] })
  ]
];

// The final 38 boards keep the same physics vocabulary but raise the number
// of interacting steps. Their recipe is indexed explicitly by chapter/slot so
// the later campaign does not fall back to the old repeated-coordinate loop.
const lateLayouts = [
  { start: [-3.55, 5.45], cupX: 3.45, cupY: -5.35, target: [3.0, -4.15], wall: [-5.3, -2.9], ground: [-2.0, -0.6], checkpoints: [[-2.1, 2.5, 0.52], [0.3, -0.25, 0.48]], first: [-1.9, 2.0, 0.65], second: [1.4, -1.3, 0.58], bars: [barSpec(-1.2, 3.3, 3.3, -0.18), barSpec(1.1, -2.9, 2.8, 0.25)], dynamics: [dynamicBar(-2.6, 4.0, 2.4, -0.22, 0.9), dynamicBar(0.8, 1.2, 1.8, 0.15, 1.1)], spin: [0.2, -0.7, 0.78] },
  { start: [-3.25, 5.25], cupX: 3.25, cupY: -4.95, target: [2.75, -3.35], wall: [-4.6, -1.2], ground: [0.4, 1.8], checkpoints: [[-0.8, 3.0, 0.5], [2.0, 0.1, 0.48]], first: [-0.9, 1.0, 0.72], second: [2.0, -2.4, 0.62], bars: [barSpec(0.4, 2.7, 4.6, 0), barSpec(-1.4, -1.0, 2.7, -0.3)], dynamics: [dynamicBar(-1.9, 3.5, 3.1, 0.3, 1.0), dynamicBar(1.9, 0.4, 1.6, -0.22, 0.8)], spin: [-0.8, 0.6, 0.82] },
  { start: [-3.7, 5.5], cupX: 3.0, cupY: -5.55, target: [3.35, -2.75], wall: [-5.0, -3.25], ground: [-1.1, 0.3], checkpoints: [[-2.7, 1.2, 0.5], [1.2, -1.8, 0.5]], first: [-2.4, -0.1, 0.6], second: [0.2, -2.6, 0.72], bars: [barSpec(-2.0, 1.7, 2.4, 0.3), barSpec(1.3, -3.6, 3.6, 0.1)], dynamics: [dynamicBar(-2.3, 3.0, 2.0, 0.1, 1.2), dynamicBar(1.8, -0.3, 2.4, -0.35, 1.0), dynamicBar(0.0, -4.2, 2.2, 0.2, 0.85)], spin: [1.1, 1.1, 0.72] },
  { start: [-3.15, 5.35], cupX: 3.55, cupY: -5.1, target: [2.6, -4.7], wall: [-3.8, -0.7], ground: [-0.4, 1.0], checkpoints: [[-1.8, 2.9, 0.5], [1.6, 0.2, 0.5]], first: [-1.0, 2.7, 0.6], second: [2.3, 0.0, 0.66], bars: [barSpec(-0.8, 3.6, 3.0, -0.24), barSpec(-1.2, -2.2, 4.0, 0.18), barSpec(2.0, -4.0, 1.8, 0)], dynamics: [dynamicBar(-2.2, 4.25, 2.6, 0.28, 1.0), dynamicBar(1.0, 1.4, 2.1, -0.12, 1.2)], spin: [-1.0, -0.1, 0.86] },
  { start: [-3.45, 5.2], cupX: 2.85, cupY: -5.45, target: [3.45, -3.8], wall: [-5.5, -2.4], ground: [-2.5, -1.1], checkpoints: [[-1.2, 2.2, 0.48], [2.3, -2.7, 0.5]], first: [-2.3, 1.0, 0.68], second: [1.0, -1.0, 0.7], bars: [barSpec(-2.0, 2.7, 2.0, 0), barSpec(0.0, 0.2, 3.0, -0.25), barSpec(1.8, -3.1, 2.2, 0.35)], dynamics: [dynamicBar(-2.6, 3.7, 2.5, -0.18, 0.85), dynamicBar(0.3, 1.6, 2.8, 0.2, 1.25)], spin: [0.6, -1.7, 0.76] },
  { start: [-3.3, 5.45], cupX: 3.4, cupY: -4.8, target: [2.9, -2.9], wall: [-4.7, -1.8], ground: [1.0, 2.4], checkpoints: [[-2.4, 3.1, 0.5], [0.5, -0.8, 0.48]], first: [-0.6, 0.5, 0.72], second: [2.0, -1.7, 0.62], bars: [barSpec(-2.5, 3.8, 2.5, 0.18), barSpec(0.0, 1.4, 4.0, 0.1), barSpec(-1.0, -3.8, 2.4, -0.15)], dynamics: [dynamicBar(-1.6, 4.4, 3.0, 0.12, 1.15), dynamicBar(1.9, 0.7, 1.9, -0.25, 0.9), dynamicBar(-0.3, -2.5, 2.1, 0.3, 1.0)], spin: [-1.3, 1.3, 0.8] },
  { start: [-3.6, 5.3], cupX: 3.05, cupY: -5.3, target: [3.25, -4.35], wall: [-5.1, -3.6], ground: [-0.1, 1.3], checkpoints: [[-2.6, 1.8, 0.5], [1.8, -2.1, 0.52]], first: [-1.6, 2.9, 0.58], second: [1.1, -2.8, 0.72], bars: [barSpec(-0.5, 4.0, 4.0, 0), barSpec(1.6, 0.3, 2.6, -0.3), barSpec(-1.8, -2.7, 2.0, 0.28)], dynamics: [dynamicBar(-2.7, 3.1, 1.9, -0.4, 0.95), dynamicBar(0.9, 2.0, 3.0, 0.18, 1.25)], spin: [0.1, 1.7, 0.74] },
  { start: [-3.2, 5.5], cupX: 3.6, cupY: -5.0, target: [2.7, -3.1], wall: [-4.4, -0.8], ground: [-2.7, -1.3], checkpoints: [[-1.7, 3.2, 0.48], [2.2, -0.5, 0.5]], first: [-2.7, 1.8, 0.64], second: [0.3, -0.6, 0.64], bars: [barSpec(-1.8, 3.2, 2.0, -0.2), barSpec(0.3, 1.0, 2.5, 0.25), barSpec(1.7, -2.5, 3.4, -0.12)], dynamics: [dynamicBar(-2.0, 4.0, 2.7, 0.22, 1.05), dynamicBar(1.8, 0.1, 2.4, -0.3, 1.0), dynamicBar(-0.6, -3.6, 2.8, 0.16, 0.9)], spin: [1.3, -1.0, 0.84] },
  { start: [-3.5, 5.25], cupX: 3.3, cupY: -5.55, target: [3.1, -4.65], wall: [-5.4, -2.2], ground: [0.8, 2.2], checkpoints: [[-2.2, 2.7, 0.5], [1.0, -1.3, 0.5]], first: [-0.8, 1.8, 0.7], second: [2.4, -0.9, 0.58], bars: [barSpec(-2.2, 2.4, 3.2, 0.2), barSpec(-0.1, -0.7, 3.0, -0.18), barSpec(1.9, -3.6, 1.8, 0.3)], dynamics: [dynamicBar(-2.8, 3.55, 2.2, -0.28, 1.2), dynamicBar(0.7, 1.0, 3.2, 0.12, 0.9)], spin: [-0.5, 0.4, 0.79] },
  { start: [-3.35, 5.4], cupX: 3.5, cupY: -5.2, target: [2.85, -2.4], wall: [-4.9, -1.0], ground: [-1.8, -0.4], checkpoints: [[-2.5, 1.4, 0.5], [1.6, -2.5, 0.48]], first: [-1.2, 0.2, 0.75], second: [1.5, -2.9, 0.62], bars: [barSpec(-1.8, 3.5, 3.2, -0.1), barSpec(0.8, 0.2, 4.2, 0.22), barSpec(-1.2, -3.4, 2.7, 0)], dynamics: [dynamicBar(-2.4, 4.1, 2.9, 0.34, 1.0), dynamicBar(1.4, 1.1, 2.2, -0.2, 1.3), dynamicBar(-0.2, -2.2, 1.8, 0.3, 0.85)], spin: [0.8, 1.0, 0.81] }
];

const mirrorBar = (item, direction) => ({ ...item, x: item.x * direction, rotation: item.rotation * direction });
const mirrorDynamic = (item, direction) => ({ ...item, x: item.x * direction, rotation: item.rotation * direction });

const lateBoard = (chapter, slot) => {
  const layout = lateLayouts[slot];
  const direction = slot % 2 === 0 ? 1 : -1;
  const start = [layout.start[0] * direction, layout.start[1] + (chapter - 5) * 0.035];
  const cupX = layout.cupX * direction;
  const center = direction * ((layout.ground[0] + layout.ground[1]) / 2);
  const mode = chapter === 5 ? "fixed" : chapter === 6 ? "constant" : chapter === 7 ? "variable" : "impact";
  const firstLayout = layout.first;
  const secondLayout = layout.second;
  const firstMachine = mode === "fixed"
    ? cross(firstLayout[0] * direction, firstLayout[1], firstLayout[2])
    : wheel(firstLayout[0] * direction, firstLayout[1], firstLayout[2], mode, mode === "constant" ? 0.82 * direction : 0, {
        baseSpeed: 0.08 * direction,
        amplitude: 1.05,
        frequency: 0.82 + slot * 0.045,
        damping: 0.62 + (slot % 3) * 0.08
      });
  const secondMachine = chapter >= 6
    ? wheel(secondLayout[0] * direction, secondLayout[1], secondLayout[2], chapter === 8 ? "impact" : "variable", chapter === 8 ? 0 : 0, {
        baseSpeed: -0.1 * direction,
        amplitude: 0.95,
        frequency: 0.9 + (slot % 4) * 0.1,
        damping: 0.68
      })
    : cross(secondLayout[0] * direction, secondLayout[1], secondLayout[2]);
  const routeBars = layout.bars.map(item => mirrorBar(item, direction));
  const machines = [firstMachine, secondMachine];
  const dynamics = layout.dynamics.map(item => mirrorDynamic(item, direction));
  if (chapter >= 7) dynamics.push(dynamicBar(0.25 * direction, -1.05 + (slot % 2) * 0.55, 2.0 + (slot % 3) * 0.2, (slot % 2 ? -0.2 : 0.24) * direction, 1.1));
  const kind = ["ballBox", "target", "wall", "strokeBox", "ground", "checkpoints", "spinGear"][(chapter * 2 + slot) % 7];
  const targetPoint = [layout.target[0] * direction, layout.target[1] + (chapter - 5) * 0.08];
  const wallRange = layout.wall;
  const groundRange = [layout.ground[0] * direction, layout.ground[1] * direction].sort((a, b) => a - b);
  const checkpoints = layout.checkpoints.map(([x, y, r]) => [x * direction, y + (chapter - 5) * 0.06, r]);
  if (kind === "ballBox") return boxBoard(start, cupX, layout.cupY, { bars: routeBars, obstacles: machines, dynamics });
  if (kind === "target") return targetBoard(start, targetPoint[0], targetPoint[1], { bars: routeBars, obstacles: machines, dynamics });
  if (kind === "wall") return wallBoard(start, direction > 0 ? "right" : "left", wallRange[0], wallRange[1], { bars: routeBars, obstacles: machines, dynamics });
  if (kind === "strokeBox") return strokeCupBoard(cupX, layout.cupY, { bars: routeBars, obstacles: machines, dynamics, noDraw: [{ x: 0.4 * direction, y: -3.0, w: 1.4 + (slot % 3) * 0.3, h: 2.0 }] });
  if (kind === "ground") return groundBoard(start, groundRange[0], groundRange[1], { bars: routeBars, obstacles: machines, dynamics });
  if (kind === "checkpoints") return routeBoard(start, [...checkpoints, [cupX, -4.75]], { bars: routeBars, obstacles: machines, dynamics });
  return spinBoard(wheel(layout.spin[0] * direction, layout.spin[1], layout.spin[2], "impact", 0, { damping: 0.55 + (slot % 3) * 0.08 }), 0.66 + chapter * 0.025, { bars: routeBars, obstacles: machines, dynamics });
};

const lateExpansionBoards = [
  Array.from({ length: 10 }, (_, slot) => lateBoard(5, slot)),
  Array.from({ length: 10 }, (_, slot) => lateBoard(6, slot)),
  Array.from({ length: 10 }, (_, slot) => lateBoard(7, slot)),
  Array.from({ length: 8 }, (_, slot) => lateBoard(8, slot))
];
expansionBoards.push(...lateExpansionBoards);

function buildExpansionLevels() {
  const hints = {
    ballBox: ["先搭一段路", "接住下落的球，再把斜面朝杯口傾斜；短物件也能改變球的方向。", "把球送進橙色盒子"],
    target: ["先看靶心高度", "直接落下不一定會命中，利用牆面或導軌改變球的水平速度。", "讓球碰到橙色靶心"],
    wall: ["牆也是終點", "橙色標記只涵蓋牆面的一段，先把球送到正確高度再撞牆。", "讓球碰到橙色牆面"],
    strokeBox: ["物件也有重心", "紅色區不能下筆。畫一個有長短差的形狀，讓它翻轉後落入杯中。", "把手繪物件送進橙色杯子"],
    spinGear: ["撞外緣才會轉", "落下的物件需要在齒輪中心之外接觸，才能產生旋轉力矩。", "讓白色轉輪轉起來"],
    ground: ["瞄準地板標記", "利用一次碰撞調整落點；球碰到橙色地面區域就算完成。", "讓球落在橙色地面標記"],
    checkpoints: ["按順序串起路線", "球要依序碰過每個橙色節點。先觀察節點高度，再決定要借哪一道牆。", "依序碰過所有橙色節點"]
  };
  return expansionChapters.flatMap((chapterInfo, chapter) => expansionBoards[chapter].map((board, slot) => {
    const type = board.goal.type;
    const [hintTitle, hint, mission] = hints[type];
    const strokesAllowed = chapter < 2 ? 2 : chapter < 4 ? 3 : 4;
    return {
      chapter: chapterInfo.title,
      name: chapterInfo.names[slot],
      difficulty: Math.min(4, 1 + chapter + Math.floor(slot / 5)),
      strokes: strokesAllowed,
      mission,
      hintTitle,
      hint,
      parTime: 14 + chapter * 4 + slot,
      parStrokes: Math.max(1, strokesAllowed - 1),
      obstacles: [],
      ...board
    };
  }));
}

const levels = [
  { name: "第一筆", difficulty: 1, strokes: 1, mission: "畫出任意物件", hintTitle: "畫什麼都可以", hint: "在深色區域拖動手指，放開後物件會受到重力。", ball: null, goal: { type: "draw" }, parTime: 6, parStrokes: 1, obstacles: [] },
  { name: "推向左牆", difficulty: 1, strokes: 1, mission: "讓球碰到橙色牆面", hintTitle: "用重量推球", hint: "在球的右上方畫一個有重量的斜物件。", ball: [1.8, 3.8], goal: { type: "wall", side: "left", minY: -4.8, maxY: 1.2 }, parTime: 10, parStrokes: 1, bars: [{ x: -1.3, y: 0.8, length: 4.6, thickness: 0.16, rotation: -0.18 }], obstacles: [] },
  { name: "物件入杯", difficulty: 1, strokes: 1, mission: "把手繪物件放進橙色杯子", hintTitle: "紅色區不能畫", hint: "在杯口上方畫一個小物件，利用重力讓它落入杯中。", ball: null, basket: [-0.8, 0.8, -5.8, -4.2], goal: { type: "strokeBox" }, noDraw: [{ x: 0, y: -5.1, w: 2.3, h: 2.7 }], parTime: 8, parStrokes: 1, obstacles: [] },
  { name: "第一道斜坡", difficulty: 1, strokes: 1, mission: "把球送進右下方盒子", hintTitle: "一條斜線就夠", hint: "讓線條落下後形成往右的斜坡。", ball: [-3.2, 4.9], basket: [2.7, 4.05, -6.2, -5.0], goal: { type: "ballBox" }, parTime: 12, parStrokes: 1, obstacles: [] },
  { name: "越過高牆", difficulty: 2, strokes: 2, mission: "讓球越過中央牆進盒子", hintTitle: "先接，再導向", hint: "不要只畫一條長斜線；想想如何讓物件的重心替你改變角度。", ball: [-3.1, 5.1], basket: [2.75, 4.05, -6.2, -5.0], goal: { type: "ballBox" }, parTime: 15, parStrokes: 2, bars: [{ x: 0.3, y: -2.9, length: 5.1, thickness: 0.18, rotation: Math.PI / 2 }], obstacles: [] },
  { name: "穿過窄門", difficulty: 2, strokes: 2, mission: "讓球穿過缺口碰到目標", hintTitle: "控制落下的方向", hint: "上下兩道牆之間只有一個入口，短而重的形狀比長線更好控制。", ball: [-3.2, 4.9], goal: { type: "target", x: 3.4, y: -4.7, r: 0.58 }, parTime: 16, parStrokes: 2, bars: [{ x: 0.5, y: 2.8, length: 5.2, thickness: 0.16, rotation: 0 }, { x: -1.2, y: -1.3, length: 5.4, thickness: 0.16, rotation: 0 }], obstacles: [{ style: "cross", x: 1.5, y: 0.5, r: 0.62, mode: "fixed" }] },
  { name: "喚醒轉盤", difficulty: 2, strokes: 1, mission: "讓白色轉盤轉起來", hintTitle: "撞偏一點", hint: "撞中心只會推，不會轉；讓重物打在轉盤外側。", ball: null, goal: { type: "spinGear", speed: 0.5 }, parTime: 10, parStrokes: 1, obstacles: [{ style: "cross", x: 0, y: -1.4, r: 0.9, mode: "impact", damping: 0.55 }] },
  { name: "借輪轉向", difficulty: 3, strokes: 2, mission: "撞動轉盤，再把球送進左杯", hintTitle: "先啟動機關", hint: "碰撞式轉盤會慢慢減速；先讓落下物撞動它，再利用旋轉方向導球。", ball: [3.0, 5.2], basket: [-4.0, -2.65, -6.2, -5.0], goal: { type: "ballBox" }, parTime: 20, parStrokes: 2, obstacles: [{ style: "wheel", x: 0.8, y: 0.8, r: 0.88, mode: "impact", damping: 0.5 }, { style: "cross", x: -1.7, y: -2.5, r: 0.6, mode: "fixed" }] },
  { name: "逆向輸送", difficulty: 3, strokes: 2, mission: "利用恆速齒輪把球送往右側", hintTitle: "碰哪一側很重要", hint: "齒輪上下兩側的推動方向相反，先觀察再畫導軌。", ball: [-3.25, 5.25], basket: [2.75, 4.05, -6.2, -5.0], goal: { type: "ballBox" }, parTime: 18, parStrokes: 2, obstacles: [{ style: "wheel", x: -0.8, y: 0.8, r: 0.9, mode: "constant", speed: -1.05 }, { style: "cross", x: 1.8, y: -2.3, r: 0.62, mode: "fixed" }] },
  { name: "從禁區外投放", difficulty: 3, strokes: 2, mission: "讓手繪物穿過障礙落入杯中", hintTitle: "畫一個會翻身的形狀", hint: "禁畫區封住直線路徑，利用偏心物件落地後的翻轉。", ball: null, basket: [2.7, 4.0, -6.2, -5.0], goal: { type: "strokeBox" }, noDraw: [{ x: 3.35, y: -4.8, w: 2.1, h: 3.2 }], parTime: 18, parStrokes: 2, bars: [{ x: 1.1, y: -2.2, length: 4.5, thickness: 0.16, rotation: -0.25 }], obstacles: [{ style: "cross", x: -1.2, y: 0.4, r: 0.7, mode: "fixed" }] },
  { name: "抓準節奏", difficulty: 4, strokes: 3, mission: "穿過忽快忽慢的雙輪", hintTitle: "等待也是解法", hint: "變速齒輪會加速、減速甚至反轉；下筆的時機也是解法之一。", ball: [0, 5.45], basket: [-0.68, 0.68, -6.2, -5.0], goal: { type: "ballBox" }, parTime: 24, parStrokes: 3, obstacles: [{ style: "wheel", x: -1.8, y: 1.3, r: 0.85, mode: "variable", baseSpeed: -0.45, amplitude: 1.1, frequency: 1.25 }, { style: "wheel", x: 1.8, y: -1.4, r: 0.85, mode: "variable", baseSpeed: 0.4, amplitude: 1.0, frequency: 0.9 }] },
  { name: "齒輪工房", difficulty: 4, strokes: 3, mission: "穿越四種機關把球送進盒子", hintTitle: "逐段解開", hint: "固定、碰撞驅動、恆速與變速齒輪規則都不同；先替球規劃三段路。", ball: [-3.2, 5.5], basket: [2.75, 4.05, -6.25, -5.08], goal: { type: "ballBox" }, parTime: 30, parStrokes: 3, bars: [{ x: 0.2, y: -4.0, length: 3.0, thickness: 0.15, rotation: 0.12 }], obstacles: [{ style: "wheel", x: -2.2, y: 3.0, r: 0.75, mode: "variable", baseSpeed: -0.5, amplitude: 0.9, frequency: 1.1 }, { style: "cross", x: 1.5, y: 3.0, r: 0.62, mode: "impact", damping: 1.1 }, { style: "cross", x: -0.7, y: 0.2, r: 0.6, mode: "fixed" }, { style: "wheel", x: 2.0, y: -1.1, r: 0.8, mode: "constant", speed: 0.85 }, { style: "cross", x: -1.3, y: -2.7, r: 0.58, mode: "impact", damping: 0.8 }] },
  ...buildExpansionLevels()
];

function readUnlockedLevel() {
  try {
    let unlocked = Math.min(levels.length, Math.max(1, Number(localStorage.getItem("brain-physics-unlocked")) || 1));
    const savedStars = JSON.parse(localStorage.getItem("brain-physics-stars") || "{}");
    if (unlocked === 12 && levels.length > 12 && Number(savedStars[11]) > 0) {
      unlocked = 13;
      localStorage.setItem("brain-physics-unlocked", "13");
    }
    return unlocked;
  }
  catch (_) { return 1; }
}

function writeUnlockedLevel(value) {
  try { localStorage.setItem("brain-physics-unlocked", String(value)); } catch (_) {}
}

function readStars() {
  try { return JSON.parse(localStorage.getItem("brain-physics-stars") || "{}"); }
  catch (_) { return {}; }
}

function writeLevelStars(index, value) {
  try {
    const stars = readStars();
    stars[index] = Math.max(Number(stars[index]) || 0, value);
    localStorage.setItem("brain-physics-stars", JSON.stringify(stars));
  } catch (_) {}
}

function disc(x, y, radius, mat = white, z = 0) {
  const object = new THREE.Mesh(new THREE.CircleGeometry(radius, 48), mat);
  object.position.set(x, y, z);
  gameRoot.add(object);
  return object;
}

function ring(x, y, outer, inner, mat = white) {
  const object = new THREE.Mesh(new THREE.RingGeometry(inner, outer, 48), mat);
  object.position.set(x, y, 0);
  gameRoot.add(object);
  return object;
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
  const localSegments = [];
  const rimSegments = 40;
  for (let i = 0; i < rimSegments; i++) {
    const a = i / rimSegments * Math.PI * 2;
    const b = (i + 1) / rimSegments * Math.PI * 2;
    localSegments.push({
      a: new THREE.Vector2(Math.cos(a) * radius, Math.sin(a) * radius),
      b: new THREE.Vector2(Math.cos(b) * radius, Math.sin(b) * radius),
      radius: 0.045
    });
  }
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
  dynamicBodies.length = 0;
  checkpointHits.clear();
  checkpointMarkers = [];
}

function createScene(level) {
  ball = null;
  basket = level.basket ? { left: level.basket[0], right: level.basket[1], bottom: level.basket[2], top: level.basket[3] } : null;
  target = level.goal?.type === "target" ? level.goal : null;
  if (level.ball) ballStart = new THREE.Vector2(level.ball[0], level.ball[1]);
  (level.obstacles ?? []).forEach(obstacle => {
    const config = { mode: obstacle.mode, speed: obstacle.speed, baseSpeed: obstacle.baseSpeed, amplitude: obstacle.amplitude, frequency: obstacle.frequency, damping: obstacle.damping };
    if (obstacle.style === "wheel") addWheel(obstacle.x, obstacle.y, obstacle.r, config);
    else addCrossRing(obstacle.x, obstacle.y, obstacle.r, config);
  });
  (level.bars ?? []).forEach(item => bar(item.x, item.y, item.length, item.thickness, item.rotation ?? 0, white, true));
  (level.dynamics ?? []).forEach(addDynamicBar);
  (level.noDraw ?? []).forEach(zone => {
    const area = new THREE.Mesh(new THREE.PlaneGeometry(zone.w, zone.h), forbiddenRed);
    area.position.set(zone.x, zone.y, -0.15);
    gameRoot.add(area);
  });
  if (basket) {
    bar(basket.left, (basket.bottom + basket.top) / 2, basket.top - basket.bottom, 0.12, Math.PI / 2, orange, true);
    bar(basket.right, (basket.bottom + basket.top) / 2, basket.top - basket.bottom, 0.12, Math.PI / 2, orange, true);
    bar((basket.left + basket.right) / 2, basket.bottom, basket.right - basket.left, 0.12, 0, orange, true);
  }
  if (target) {
    ring(target.x, target.y, target.r + 0.12, target.r, orange);
    disc(target.x, target.y, target.r * 0.32, orange, -0.02);
  }
  if (level.goal?.type === "checkpoints") {
    level.goal.targets.forEach((point, index) => {
      checkpointMarkers.push({ index, ring: ring(point.x, point.y, point.r + 0.12, point.r, orange), dot: disc(point.x, point.y, point.r * 0.3, orange, -0.02) });
    });
  }
  if (level.goal?.type === "ground") {
    bar((level.goal.minX + level.goal.maxX) / 2, WORLD.bottom + 0.1, level.goal.maxX - level.goal.minX, 0.14, 0, orange, false);
  }
  if (level.goal?.type === "wall") {
    const x = level.goal.side === "left" ? WORLD.left + 0.08 : WORLD.right - 0.08;
    bar(x, (level.goal.minY + level.goal.maxY) / 2, level.goal.maxY - level.goal.minY, 0.16, Math.PI / 2, orange, true);
  }
  if (level.ball) {
    disc(ballStart.x, ballStart.y, BALL_RADIUS + 0.09, orangeDark, -0.02);
    ball = disc(ballStart.x, ballStart.y, BALL_RADIUS, orange, 0.2);
    const halo = new THREE.Mesh(new THREE.RingGeometry(0.46, 0.5, 40), transparentWhite);
    halo.position.set(ballStart.x, ballStart.y, 0);
    gameRoot.add(halo);
  }
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
  if (ball && point.distanceTo(new THREE.Vector2(ball.position.x, ball.position.y)) < BALL_RADIUS + LINE_RADIUS + margin) return false;
  for (const zone of levels[currentLevelIndex].noDraw ?? []) {
    if (Math.abs(point.x - zone.x) < zone.w / 2 + LINE_RADIUS && Math.abs(point.y - zone.y) < zone.h / 2 + LINE_RADIUS) return false;
  }
  for (const obstacle of circleObstacles) {
    if (point.distanceTo(new THREE.Vector2(obstacle.x, obstacle.y)) < obstacle.r + LINE_RADIUS + margin) return false;
  }
  const obstacleSegments = staticSegments.concat(gears.flatMap(gearWorldSegments));
  for (const segment of obstacleSegments) {
    if (pointSegmentDistance(point, segment.a, segment.b) < segment.radius + LINE_RADIUS + margin) return false;
  }
  for (const body of strokes.concat(dynamicBodies)) {
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

function addDynamicBar(item) {
  const rotation = item.rotation ?? 0;
  const half = new THREE.Vector2(Math.cos(rotation) * item.length / 2, Math.sin(rotation) * item.length / 2);
  const a = new THREE.Vector2(item.x, item.y).sub(half);
  const b = new THREE.Vector2(item.x, item.y).add(half);
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(item.length, item.thickness ?? LINE_RADIUS * 2, 0.08), white);
  mesh.position.set(item.x, item.y, 0.12);
  mesh.rotation.z = rotation;
  drawingRoot.add(mesh);
  const body = makeStrokeBody({ points: [a, b], meshes: [mesh] });
  body.mass *= Math.max(0.35, item.mass ?? 1);
  body.inertia *= Math.max(0.35, item.mass ?? 1);
  body.initialPosition = body.group.position.clone();
  body.initialRotation = body.group.rotation.z;
  body.initialVelocity = new THREE.Vector2();
  body.initialAngularVelocity = 0;
  dynamicBodies.push(body);
  return body;
}

function endStroke(event) {
  if (event.pointerId !== activePointerId) return;
  event.preventDefault();
  if (currentStroke && currentStroke.points.length > 1) {
    strokes.push(makeStrokeBody(currentStroke));
    if (!running) startDrop();
    checkGoal();
  } else {
    currentStroke?.meshes.forEach(mesh => drawingRoot.remove(mesh));
  }
  currentStroke = null;
  activePointerId = null;
  updateControls();
  if (!finished) instructionEl.textContent = strokes.length < maxStrokes ? `物件正在運動，還可以畫 ${maxStrokes - strokes.length} 筆` : "筆數用完了，觀察物理結果";
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
  if (ball) ball.position.set(ballStart.x, ballStart.y, 0.2);
  ballVelocity.set(0, 0);
  gearTime = 0;
  checkpointHits.clear();
  checkpointMarkers.forEach(marker => { marker.ring.material = orange; marker.dot.material = orange; });
  gears.forEach(gear => {
    gear.group.rotation.z = 0;
    gear.angularVelocity = gear.mode === "constant" ? gear.angularVelocity : 0;
  });
  dynamicBodies.forEach(body => {
    body.group.position.copy(body.initialPosition);
    body.group.rotation.z = body.initialRotation;
    body.velocity.copy(body.initialVelocity);
    body.angularVelocity = body.initialAngularVelocity;
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
  dynamicBodies.forEach(body => updateStrokeBody(body, dt));
  strokes.forEach(body => updateStrokeBody(body, dt));
  if (ball) {
    ballVelocity.y -= GRAVITY * dt;
    ballVelocity.multiplyScalar(0.999);
    ball.position.x += ballVelocity.x * dt;
    ball.position.y += ballVelocity.y * dt;
    collideBallWithWalls();
    circleObstacles.forEach(collideBallCircle);
    staticSegments.forEach(segment => collideBallSegment(segment.a, segment.b, segment.radius, 0.4));
    gears.flatMap(gearWorldSegments).forEach(segment => collideBallSegment(segment.a, segment.b, segment.radius, 0.4, null, segment.gear));
    strokes.concat(dynamicBodies).forEach(body => {
      const points = strokeWorldPoints(body);
      for (let i = 1; i < points.length; i++) collideBallSegment(points[i - 1], points[i], LINE_RADIUS, 0.32, body);
    });
  }
  checkGoal();
}

function checkGoal() {
  if (finished) return;
  const goal = levels[currentLevelIndex].goal;
  if (!goal) return;
  if (goal.type === "draw" && strokes.length > 0) return win();
  if (goal.type === "ballBox" && ball && basket && ball.position.x > basket.left + BALL_RADIUS && ball.position.x < basket.right - BALL_RADIUS && ball.position.y < basket.top && ball.position.y > basket.bottom) return win();
  if (goal.type === "strokeBox" && basket && strokes.some(body => strokeWorldPoints(body).every(point => point.x > basket.left + LINE_RADIUS && point.x < basket.right - LINE_RADIUS && point.y > basket.bottom + LINE_RADIUS && point.y < basket.top - LINE_RADIUS))) return win();
  if (goal.type === "target" && ball && new THREE.Vector2(ball.position.x, ball.position.y).distanceTo(new THREE.Vector2(goal.x, goal.y)) < goal.r) return win();
  if (goal.type === "checkpoints" && ball) {
    const nextIndex = checkpointHits.size;
    const point = goal.targets[nextIndex];
    if (point && new THREE.Vector2(ball.position.x, ball.position.y).distanceTo(new THREE.Vector2(point.x, point.y)) < point.r) {
        checkpointHits.add(nextIndex);
        const marker = checkpointMarkers[nextIndex];
        if (marker) marker.ring.material = marker.dot.material = orangeDark;
    }
    if (checkpointHits.size === goal.targets.length) return win();
  }
  if (goal.type === "ground" && ball && ball.position.y <= WORLD.bottom + BALL_RADIUS + 0.12 && ball.position.x >= goal.minX && ball.position.x <= goal.maxX) return win();
  if (goal.type === "wall" && ball) {
    const touchedSide = goal.side === "left" ? ball.position.x <= WORLD.left + BALL_RADIUS + 0.18 : ball.position.x >= WORLD.right - BALL_RADIUS - 0.18;
    if (touchedSide && ball.position.y >= goal.minY && ball.position.y <= goal.maxY) return win();
  }
  if (goal.type === "spinGear" && gears.some(gear => gear.mode === "impact" && Math.abs(gear.angularVelocity) >= goal.speed)) return win();
}

function win() {
  if (finished) return;
  running = false;
  finished = true;
  const unlocked = Math.max(readUnlockedLevel(), Math.min(levels.length, currentLevelIndex + 2));
  writeUnlockedLevel(unlocked);
  const level = levels[currentLevelIndex];
  const earnedStars = 1 + (strokes.length <= level.parStrokes ? 1 : 0) + (elapsed <= level.parTime ? 1 : 0);
  writeLevelStars(currentLevelIndex, earnedStars);
  resultBanner.innerHTML = `<div class="win-stars">${"★".repeat(earnedStars)}${"☆".repeat(3 - earnedStars)}</div><div>過關！ ${elapsed.toFixed(1)} 秒・${strokes.length} 筆</div><div class="result-actions"><button data-result-action="levels">選關</button><button data-result-action="next">${currentLevelIndex === levels.length - 1 ? "完成" : "下一關"}</button></div>`;
  resultBanner.className = "result-banner success show";
  instructionEl.textContent = "漂亮的物理解法！";
  if (navigator.vibrate) navigator.vibrate([40, 40, 100]);
  updateControls();
}

function renderLevelSelect() {
  const unlocked = readUnlockedLevel();
  const savedStars = readStars();
  const totalStars = Object.values(savedStars).reduce((sum, value) => sum + Number(value || 0), 0);
  progressText.textContent = `已解鎖 ${unlocked} / ${levels.length}　★ ${totalStars} / ${levels.length * 3}`;
  levelGrid.innerHTML = levels.map((level, index) => {
    const locked = index + 1 > unlocked;
    const stars = Number(savedStars[index]) || 0;
    const chapter = level.chapter ?? "基礎課程";
    const previousChapter = index ? levels[index - 1].chapter ?? "基礎課程" : null;
    const chapterEnd = levels.findIndex((candidate, candidateIndex) => candidateIndex > index && (candidate.chapter ?? "基礎課程") !== chapter);
    const chapterLast = chapterEnd === -1 ? levels.length : chapterEnd;
    const chapterHeading = chapter !== previousChapter ? `<h2 class="chapter-heading"><span>${chapter}</span><small>${String(index + 1).padStart(2, "0")}—${String(chapterLast).padStart(2, "0")}</small></h2>` : "";
    return `${chapterHeading}<button class="level-card" data-level="${index}" ${locked ? "disabled" : ""}>
      <span class="level-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="level-name">${level.name}</span>
      <span class="level-meta"><span class="difficulty">${"●".repeat(level.difficulty)}${"○".repeat(4 - level.difficulty)}</span> · ${level.strokes} 筆　<span class="card-stars">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</span></span>
      ${locked ? '<span class="level-lock">🔒</span>' : ""}
    </button>`;
  }).join("");
  requestAnimationFrame(() => levelGrid.querySelector(`[data-level="${Math.max(0, unlocked - 1)}"]`)?.scrollIntoView({ block: "center" }));
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
  dynamicBodies.forEach(body => body.meshes.forEach(mesh => mesh.geometry.dispose()));
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
      finished,
      strokes: strokes.length,
      staticSegments: staticSegments.length,
      gears: gears.map(gear => ({ mode: gear.mode, angle: gear.group.rotation.z, speed: gear.angularVelocity })),
      level: currentLevelIndex + 1,
      levelName: levels[currentLevelIndex].name,
      chapter: levels[currentLevelIndex].chapter ?? "基礎課程",
      goal: levels[currentLevelIndex].goal?.type ?? null,
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
