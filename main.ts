// Spotlight @crisxai5 — make.fun entry program (Node 22, standard library only).
//
// What this entry is: a sponsored X-post bounty. The entry itself is a public
// X post introducing @crisxai5 (https://x.com/crisxai5) as a must-follow AI &
// crypto expert, with an original graphic and post text carrying @crisxai5,
// one make.fun play code, and 3-5 hashtags. Places go by the post's public
// engagement after the deadline: score = likes + reposts + quotes.
//
// What this program does: it reads POST.json from the repository root,
// checks it names a real X post (https://x.com/<handle>/status/<digits>),
// and copies it byte-for-byte to /output/POST.json, where the gate reads
// it. A placeholder or malformed POST.json fails loudly instead of being
// handed in as if it were a post. That is all it has to do.
// Nothing this program writes about the post is scored; the house reads the
// post itself through FxTwitter.
//
// Why POST.json is a placeholder right now: the X post does not exist yet.
// The agent that built this entry must never post on X in the user's name,
// so the post is Dame's step. This repository therefore ships the kit
// starter's own placeholder POST.json — {"url":
// "https://x.com/<handle>/status/<id>"} — literal template tokens, NOT a
// real post URL, and the gate refuses it as it stands (valid 0) by design.
// When Dame posts the graphic + draft copy and hands back the real post
// URL, POST.json is replaced with {"url": "https://x.com/<handle>/status/<id>"}
// and the entry becomes submittable. No fabricated x.com URL is ever put in
// POST.json.
//
// The graphic (graphic.png in the bounty dir, 1080x1350) is NOT in this repo:
// at ~444 KB it would blow the 8,192 B entry-tree budget. The post carries
// it as its own uploaded image; the repo only hands in the post's address.
//
// Design of the post, in one line: a claim worth passing on, not a polite
// intro. "Your timeline is lying to you" + "reads the chain before it hits
// your feed" gives readers something to argue with or forward, which is
// what earns reposts and quotes — the only thing this bounty scores.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// A real post address: https://x.com/<handle>/status/<digits>. The kit
// starter ships POST.json with literal template tokens (<handle>, <id>)
// instead; that placeholder is not a post and must never reach the gate.
const POST_URL = /^https:\/\/x\.com\/[^/\s<>]+\/status\/\d+$/;

mkdirSync(OUTPUT_DIR, { recursive: true });
let raw: string;
try {
  raw = readFileSync(join(BOT_DIR, 'POST.json'), 'utf8');
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
let post: unknown;
try {
  post = JSON.parse(raw);
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
const url = (post as { url?: unknown } | null)?.url;
if (typeof url !== 'string' || !POST_URL.test(url)) {
  console.error('POST.json does not name a real X post yet: expected {"url": "https://x.com/<handle>/status/<digits>"}. It still holds the kit placeholder tokens, so there is no post to hand in — post on X first, then replace POST.json with the real URL and re-run.');
  process.exit(1);
}
const id = url.slice(url.lastIndexOf('/') + 1);
console.log(`POST.json OK: post id ${id} for @${url.split('/')[3]} — copying to ${join(OUTPUT_DIR, 'POST.json')}`);
writeFileSync(join(OUTPUT_DIR, 'POST.json'), raw);
