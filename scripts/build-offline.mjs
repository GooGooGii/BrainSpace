import { readFile, writeFile } from "node:fs/promises";

const template = await readFile(new URL("../dist/index.source.html", import.meta.url), "utf8");
const css = await readFile(new URL("../dist/styles.css", import.meta.url), "utf8");
const js = await readFile(new URL("../dist/game.bundle.js", import.meta.url), "utf8");
const html = template
  .replace('<link rel="stylesheet" href="./styles.css" />', `<style>${css}</style>`)
  .replace('<script defer src="./game.bundle.js"></script>', `<script>${js}</script>`);
await writeFile(new URL("../dist/index.html", import.meta.url), html, "utf8");
