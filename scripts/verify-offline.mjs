import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

const source = await readFile(new URL("../dist/app.js", import.meta.url), "utf8");
const bundle = await readFile(new URL("../dist/game.bundle.js", import.meta.url), "utf8");
const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");

const baseLevels = source.match(/const levels = \[([\s\S]*?)\.\.\.buildExpansionLevels\(\)/)?.[1];
assert.ok(baseLevels, "base level list and expansion call are present");
const baseLevelCount = [...baseLevels.matchAll(/\{ name:/g)].length;
const chapterBlock = source.match(/const expansionChapters = \[([\s\S]*?)\n\];/)?.[1];
assert.ok(chapterBlock, "expansion chapter list is present");
const chapterEntries = [...chapterBlock.matchAll(/\{ title: "([^"]+)", names: \[([^\]]+)\] \}/g)];
const chapters = chapterEntries.map(([, title, names]) => ({ title, levels: [...names.matchAll(/"([^"]+)"/g)].map(([, name]) => name) }));
assert.equal(baseLevelCount, 12, "the original twelve levels are preserved");
assert.equal(chapters.length, 5, "five new chapters are present");
assert.ok(chapters.every(chapter => chapter.levels.length === 10), "each new chapter contains ten named levels");
assert.equal(baseLevelCount + chapters.reduce((sum, chapter) => sum + chapter.levels.length, 0), 62, "the campaign contains 62 levels total");

const goalBlock = source.match(/const expansionGoalPatterns = \[([\s\S]*?)\n\];/)?.[1] ?? "";
const goalTypes = new Set([...goalBlock.matchAll(/"(ballBox|target|wall|strokeBox|spinGear)"/g)].map(([, type]) => type));
assert.equal(goalTypes.size, 5, "the expansion rotates through five goal types");
assert.match(source, /parStrokes: Math\.max\(1, strokesAllowed - 1\)/, "the third-star stroke threshold requires a better-than-maximum solution");
assert.match(source, /chapter === 0/, "the target platform layout avoids later gear clusters");
assert.match(source, /const rimSegments = 40/, "ring gears have physical rim collision segments");
assert.match(source, /unlocked === 12 && levels\.length > 12 && Number\(savedStars\[11\]\) > 0/, "legacy progress advances only after level 12 was cleared");

assert.ok(bundle.length > 400_000, "Three.js and the game are bundled locally");
assert.ok(html.includes("已解鎖 1 / 62"), "offline game shows the full level count");
const inlineStart = html.indexOf("<script>") + "<script>".length;
const inlineEnd = html.lastIndexOf("</script>");
const inlineScript = html.slice(inlineStart, inlineEnd).trimEnd();
const htmlShell = html.replace(inlineScript, "");
assert.ok(inlineScript.startsWith(bundle.slice(0, 200)), "standalone HTML embeds the current game bundle");
assert.ok(inlineScript.endsWith(bundle.trimEnd().slice(-200)), "standalone HTML embeds the end of the current game bundle");
assert.ok(!htmlShell.includes('src="./game.bundle.js"') && !htmlShell.includes('href="./styles.css"'), "download is a single self-contained HTML file");
assert.ok((await stat(new URL("../dist/index.html", import.meta.url))).size > 400_000, "standalone HTML is present and non-empty");

console.log(JSON.stringify({ levels: 62, originalLevels: baseLevelCount, chapters: chapters.map(chapter => ({ name: chapter.title, levels: chapter.levels.length })), expansionGoalTypes: [...goalTypes], standaloneHtmlBytes: (await stat(new URL("../dist/index.html", import.meta.url))).size }));
