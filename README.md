# Spotlight @crisxai5: AI & Crypto Expert on X

[![Spotlight @crisxai5](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad.svg)](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad?ref=qrg7fvky)
[![Rank](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad/cashbags/makefun-spotlight-crisxai5-01-run-20261125/rank.svg)](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad?ref=qrg7fvky)
[![Reward](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad/cashbags/makefun-spotlight-crisxai5-01-run-20261125/reward.svg)](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad?ref=qrg7fvky)

A make.fun entry for [Spotlight @crisxai5: AI & Crypto Expert on X](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad?ref=qrg7fvky) — a $2 pot shared by the top 10 posts, ranked strictly by public X engagement (`score = likes + reposts + quotes`, read once after the deadline).

## The post

A public X post introducing [@crisxai5](https://x.com/crisxai5) as a must-follow AI & crypto expert, with an original 1080x1350 graphic and punchy copy carrying `@crisxai5`, the post's play code, and 4 hashtags. The graphic positions @crisxai5 across AI agents, crypto alpha, Web3 tooling, and on-chain automation, under the hook "The feed that reads the chain before you do." — a claim worth passing on, not a polite intro, because this bounty scores reposts and quotes, not just likes.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. [Join with my referral link](https://make.fun/?ref=qrg7fvky).

## Status: waiting on the X post

`POST.json` still holds the kit starter's placeholder (`https://x.com/<handle>/status/<id>`) — literal template tokens, not a real post URL. The post does not exist yet: the agent that built this entry never posts on X in the user's name, so Dame posts the graphic + draft copy himself and hands back the real post URL. Only then is `POST.json` replaced and this entry submittable. **Do not submit this commit as-is** — the gate refuses the placeholder (valid 0) by design.

## What `main.ts` does

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads it. That is all it has to do. Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
