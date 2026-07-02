/**
 * Single source of truth for portbridge facts, links and copy fragments.
 * Keeping these here avoids drift between sections.
 */
export const site = {
  name: "portbridge",
  tagline: "One port for your whole stack.",
  description:
    "portbridge runs your frontend and backend dev servers behind a single port — no CORS, merged logs, and a live request dashboard. One command.",
  url: "https://portbridge.dev",
  install: "npm install -g portbridge",
  installShort: "npm i -g portbridge",
  command: "portbridge",
  npm: "https://www.npmjs.com/package/portbridge",
  npmDownloads:
    "https://api.npmjs.org/downloads/point/last-month/portbridge",
  github: "https://github.com/YRACHEK101/dev-bridge",
  githubApi: "https://api.github.com/repos/YRACHEK101/dev-bridge",
  readme: "https://github.com/YRACHEK101/dev-bridge#readme",
  changelog:
    "https://github.com/YRACHEK101/dev-bridge/releases",
  license: "https://github.com/YRACHEK101/dev-bridge/blob/main/LICENSE",
  requirements: {
    node: "Node.js ≥ 20",
    license: "MIT",
    platforms: "Windows · macOS · Linux",
  },
} as const;

export const nav = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Docs", href: site.readme, external: true },
  { label: "FAQ", href: "#faq" },
] as const;
