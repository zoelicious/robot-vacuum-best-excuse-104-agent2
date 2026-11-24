import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
// The vacuum's excuse: low battery forces a choice between the missed
// corner and the dock — survival wins, told deadpan by the machine itself.
const excuse = "I had 4% battery left and a choice: your corner, or my dock. I chose to live.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (!existsSync(outDir)) { mkdirSync(outDir, { recursive: true }); }
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
