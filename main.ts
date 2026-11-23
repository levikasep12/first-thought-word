// One Word, First Thought — make.fun entry for u-0xkianno-one-word-first-thought-106abaf8
// Writes the entry's single word to /output/entry.txt.
// Deterministic: the same bytes on every run. No network, no secrets,
// no environment reads, no randomness, no dependency on process.cwd().
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "serendipity";

// The gate allows 1 to 24 characters: refuse to emit a word that would fail it.
if (LINE.length < 1 || LINE.length > 24) {
  throw new Error(`entry word is ${LINE.length} characters, must be 1-24`);
}

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${OUT_FILE}`);
