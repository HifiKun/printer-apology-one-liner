import { mkdirSync, writeFileSync } from "node:fs";

// One-line apology from an office printer to the people who keep jamming
// it: it jammed again, but the paper was so cheap it apologised to the
// printer first — so the printer ate it out of pity.
const LINE =
  "Sorry I jammed again. The paper you buy is so cheap it apologised to me first, so I ate it out of pity.";

if ([...LINE].length > 120) {
  throw new Error(`apology is ${[...LINE].length} characters, over the 120 limit`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("apology must be a single non-empty line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read it back: the file the judge sees must be byte-identical to the line.
import { readFileSync } from "node:fs";
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the apology line");
}
