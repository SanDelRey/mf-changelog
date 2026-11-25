import { mkdirSync, writeFileSync } from 'node:fs';
// terse release note for a bug in human biology
// exactly one line, nothing else
const LINE = 'v41.2: fixed a bug where the brain replays one embarrassing sentence from 2014 at random intervals, including mid-meeting.';
const out = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/$/, '');
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${LINE}\n`);
