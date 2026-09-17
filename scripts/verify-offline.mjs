import { spawn } from "node:child_process";
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const profile = await mkdtemp(join(tmpdir(), "brain-game-check-"));
const url = "file:///C:/Users/USER/Documents/Codex/2026-09-17/brain-it-out/dist/index.html";
const chrome = spawn(chromePath, ["--headless=new", "--no-sandbox", "--use-gl=swiftshader", "--enable-unsafe-swiftshader", "--remote-debugging-port=9237", `--user-data-dir=${profile}`, url], { stdio: "ignore" });

let targets;
for (let i = 0; i < 30; i++) {
  try { targets = await fetch("http://127.0.0.1:9237/json").then(r => r.json()); break; }
  catch { await new Promise(resolve => setTimeout(resolve, 200)); }
}
if (!targets) throw new Error("Chrome debugging endpoint did not start");
const target = targets.find(item => item.type === "page" && item.url.includes("index.html"));
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
let nextId = 1;
function evaluate(expression) {
  return new Promise((resolve, reject) => {
    const id = nextId++;
    const listener = event => {
      const message = JSON.parse(event.data);
      if (message.id !== id) return;
      socket.removeEventListener("message", listener);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result.result.value);
    };
    socket.addEventListener("message", listener);
    socket.send(JSON.stringify({ id, method: "Runtime.evaluate", params: { expression, returnByValue: true, awaitPromise: true } }));
  });
}
await new Promise(resolve => setTimeout(resolve, 1200));
const result = await evaluate(`(() => {
  const canvas = document.querySelector('canvas');
  const rect = canvas.getBoundingClientRect();
  const fire = (type, x, y) => canvas.dispatchEvent(new PointerEvent(type, { bubbles: true, cancelable: true, pointerId: 7, pointerType: 'touch', clientX: x, clientY: y, buttons: type === 'pointerup' ? 0 : 1 }));
  fire('pointerdown', rect.left + rect.width * .25, rect.top + rect.height * .45);
  fire('pointermove', rect.left + rect.width * .42, rect.top + rect.height * .52);
  fire('pointerup', rect.left + rect.width * .42, rect.top + rect.height * .52);
  const started = window.__gameDebug.getState();
  return new Promise(resolve => setTimeout(() => {
    const beforeRejectedDraw = document.querySelector('#strokeCount').textContent.trim();
    fire('pointerdown', rect.left + rect.width * .34, rect.top + rect.height * .23);
    fire('pointerup', rect.left + rect.width * .34, rect.top + rect.height * .23);
    resolve({ ready: document.documentElement.dataset.gameReady, strokes: document.querySelector('#strokeCount').textContent.trim(), canvas: !!canvas, started, later: window.__gameDebug.getState(), rejectedDrawStayedSame: beforeRejectedDraw === document.querySelector('#strokeCount').textContent.trim() });
  }, 500));
})()`);
socket.close();
chrome.kill();
console.log(JSON.stringify(result));
const modes = new Set(result.started.gears.map(gear => gear.mode));
const movingGearChanged = result.later.gears.some((gear, index) => ["constant", "variable"].includes(gear.mode) && gear.angle !== result.started.gears[index].angle);
if (result.ready !== "true" || result.strokes !== "1 / 3" || !result.canvas || !result.started.running || result.later.ball.y >= result.started.ball.y || result.later.firstStrokeY >= result.started.firstStrokeY || result.started.staticSegments < 3 || !["fixed", "impact", "constant", "variable"].every(mode => modes.has(mode)) || !movingGearChanged || !result.rejectedDrawStayedSame) process.exitCode = 1;
