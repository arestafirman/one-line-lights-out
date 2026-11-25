// One Line, Lights Out — entry program.
//
// The entry line, in two beats:
//   Beat 1 — the laptop lid was closed at 23:41, so the machine is idle.
//   Beat 2 — the 02:00 backup is still scheduled, and the user's files
//   are the only ones on it: the machine stays awake for them alone,
//   not for anyone else's data.
//
// Writes the single status line (118 bytes, no trailing newline) to
// /output/entry.txt. Deterministic, fully offline, no network calls.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "status: idle. you closed the lid at 23:41. my 02:00 backup is still scheduled, and your files are the only ones on it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${Buffer.byteLength(ENTRY, "utf8")} bytes to /output/entry.txt`);
