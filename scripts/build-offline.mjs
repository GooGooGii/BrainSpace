import { readFile, writeFile } from "node:fs/promises";

const template = await readFile(new URL("../dist/index.source.html", import.meta.url), "utf8");
const css = await readFile(new URL("../dist/styles.css", import.meta.url), "utf8");
const js = await readFile(new URL("../dist/game.bundle.js", import.meta.url), "utf8");
// A literal closing script tag inside an inline bundle terminates the tag in
// HTML parsers, even when it appears inside a JavaScript string. Escape every
// occurrence so the downloadable one-file build also works from Android's
// content:// viewer.
const inlineJs = js.replace(/<\/script/gi, "<\\/script");
const html = template
  .replace('<link rel="stylesheet" href="./styles.css" />', () => `<style>${css}</style>`)
  .replace('<script defer src="./game.bundle.js"></script>', () => `<script>${inlineJs}</script>`);
await writeFile(new URL("../dist/index.html", import.meta.url), html, "utf8");
