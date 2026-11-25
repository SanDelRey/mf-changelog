import { mkdirSync, writeFileSync } from 'node:fs';

const TEXT = 'v41.2: fixed a bug where the brain replays one embarrassing sentence from 2014 at random intervals, including mid-meeting.';
const dir = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/+$/, '');
mkdirSync(dir, { recursive: true });
// the patch note, one line, plus the newline that makes it a text file
writeFileSync(`${dir}/entry.txt`, `${TEXT}\n`);
