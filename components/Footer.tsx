import Wordmark from "./Wordmark";
import { Icons } from "./icons";
import { site } from "@/lib/site";

const linkGroups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Dashboard", href: "#dashboard" },
      { label: "Quick start", href: "#quick-start" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "npm package", href: site.npm, external: true },
      { label: "GitHub", href: site.github, external: true },
      { label: "Docs (README)", href: site.readme, external: true },
      { label: "Changelog", href: site.changelog, external: true },
      { label: "MIT license", href: site.license, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              {site.tagline} Run your frontend and backend dev servers behind a
              single port — no CORS, merged logs, and a live request dashboard.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="portbridge on GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-edge bg-panel/70 text-ink-muted transition-colors hover:border-frontend/50 hover:text-ink"
              >
                <Icons.github className="h-4 w-4" />
              </a>
              <a
                href={site.npm}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="portbridge on npm"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-edge bg-panel/70 text-ink-muted transition-colors hover:border-frontend/50 hover:text-ink"
              >
                <Icons.npm className="h-4 w-4" />
              </a>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                      {"external" in link && link.external && (
                        <Icons.external className="h-3 w-3 opacity-60" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-edge pt-6 text-sm text-ink-muted sm:flex-row sm:items-center">
          <p>Built for developers. MIT licensed.</p>
          <p className="flex items-center gap-2">
            <span>{site.requirements.node}</span>
            <span aria-hidden className="text-edge">
              •
            </span>
            <span>{site.requirements.platforms}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
