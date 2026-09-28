# KIRA

Landing page for **Kira** — a rugpull analyzer. Red / white, single page, built with Next.js (App Router) and deployed on Vercel.

## Stack

- Next.js 16 (Turbopack, static prerender)
- React 19, TypeScript
- Tailwind CSS v4 (`@theme` tokens) + a few custom utilities in `app/globals.css`
- Vercel Web Analytics + Speed Insights (`@vercel/analytics`, `@vercel/speed-insights`)

## Analytics

`@vercel/analytics` is already mounted in `app/layout.tsx`, so page views and
Web Vitals are collected automatically **only on Vercel** (the `/_vercel/insights`
endpoint does not exist locally). Enable it once in the dashboard:
*Project → Analytics → Enable Web Analytics* (same tab for Speed Insights).

## Local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Deploy to Vercel

Push to a GitHub repo, then either:

1. **Dashboard** — vercel.com → *Add New* → *Project* → import the repo → Deploy. No config needed; `next build` is auto-detected.
2. **CLI**

```bash
npx vercel        # first deploy (preview)
npx vercel --prod # production
```

## Where to edit

| What | File |
| --- | --- |
| Social links, token CA, steps, copy | `lib/site.ts` |
| Sections / layout | `app/page.tsx` |
| Colors, fonts, animations | `app/globals.css` |

Social links are already set: `https://x.com/DeanBlunn` and
`https://github.com/nanautee`.

Still to fill in: `SITE.token.ca` in `lib/site.ts` — the Solana contract address
shown in the *The coin* section (placeholder `PASTE_TOKEN_CA_HERE` until you
drop the real one in).

## Copy structure

1. Hero — *every rugpull has an address*
2. Problem
3. Input — dev wallet, bundler wallet, token CA
4. How it works — feed → analyze → unwrap the proxy → act
5. Actions — fraud report / exchange submission / SCUM tag
6. Expose — SCUM
7. Stage — idea stage, token launched today
8. Follow — Twitter, GitHub
9. Coin — contract address with copy button

## Deploy

First deploy is already live (temporary, login-gated):
`https://kira-k4rmr97me-nanautee.vercel.app`

To make it permanent, authenticate and redeploy from the project folder:

```bash
npx vercel login
npx vercel --prod
```

For auto-deploys, push this folder to `github.com/nanautee/kira` and import it in
Vercel (Settings → Git).
