# portbridge — marketing site

The landing page for **[portbridge](https://www.npmjs.com/package/portbridge)**,
an open-source CLI that runs your frontend and backend dev servers behind a
single port — no CORS, merged logs, and a live request dashboard.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**.
Fully static / SSG and deployable to Vercel with zero config.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Scripts

| Script          | What it does                              |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Start the dev server with HMR             |
| `npm run build` | Production build (static export of pages) |
| `npm run start` | Serve the production build                |
| `npm run lint`  | Run ESLint (`next/core-web-vitals`)       |

## Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In [Vercel](https://vercel.com/new), **Import** the repository.
3. Framework preset is auto-detected as **Next.js** — no configuration needed.
4. Click **Deploy**.

Or from the CLI:

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

> The page is statically rendered and revalidated hourly (ISR). Live GitHub
> stars and npm downloads are fetched at build time and fail soft — if either
> API is unreachable, the numbers simply hide rather than blocking the build.

## Project structure

```
app/
  layout.tsx           Root layout, fonts, SEO metadata, theme
  page.tsx             Assembles all sections; fetches live stats (ISR)
  globals.css          Tailwind layers + brand base styles
  opengraph-image.tsx  OG/Twitter image generated at build time (next/og)
  icon.svg             Favicon (logo mark)
components/
  ui/                  CopyButton, CommandBox, CodeBlock, Tabs, Accordion,
                       Reveal, SectionHeading, ButtonLink
  Logo.tsx / Wordmark.tsx        Brand mark + lockup (inline SVG)
  Navbar.tsx / Footer.tsx        Chrome + GitHub stars pill
  AnimatedTerminal.tsx           Looping typed command + streaming logs
  DashboardMock.tsx              Live request table + waterfall bars
  RoutingDiagram.tsx             Animated browser → :4000 → front/back diagram
  icons.tsx                      Icon set
sections/              Hero, Problem, HowItWorks, Features, DashboardShowcase,
                       QuickStart, Comparison, ProductionSafe, FAQ, FinalCTA
lib/
  site.ts              Single source of truth for links + copy
  stats.ts             GitHub stars + npm downloads (ISR, graceful fallback)
tailwind.config.ts     Brand design tokens (colors, gradient, shadows, motion)
```

## Design tokens

Defined in [`tailwind.config.ts`](./tailwind.config.ts):

- Background `#0b0d14 → #0f1117`, panels `#12161f`/`#171a23`, borders `#232838`
- Frontend accent (cyan) `#22d3ee`, backend accent (purple) `#c084fc`
- Signature gradient `#38dcf2 → #c084fc` (`bg-brand-gradient`, `.text-gradient`)
- Text `#e6e9ef`, muted `#8b93a7`, success `#4ade80`, error `#f87171`
- Type: **Inter** (UI) + **JetBrains Mono** (code/terminal) via `next/font`

## Accessibility & performance

- Semantic HTML, keyboard-navigable tabs/accordion, skip-to-content link
- WCAG AA contrast, visible focus rings
- `prefers-reduced-motion` respected everywhere (terminal, dashboard, diagram,
  scroll reveals) — animations collapse to their final static state
- Static output, optimized fonts, copy-to-clipboard on every code block

## Links

- npm: <https://www.npmjs.com/package/portbridge>
- GitHub: <https://github.com/YRACHEK101/dev-bridge>

MIT licensed.
