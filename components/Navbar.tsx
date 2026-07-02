"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Wordmark from "./Wordmark";
import GitHubStarsPill from "./GitHubStarsPill";
import { CopyButton } from "./ui/CopyButton";
import { Icons } from "./icons";
import { nav, site } from "@/lib/site";

export function Navbar({ stars }: { stars: string | null }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-edge/80 bg-base-900/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-page flex h-16 items-center justify-between gap-4"
      >
        <a href="#top" className="rounded-lg" aria-label="portbridge home">
          <Wordmark />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...("external" in item && item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="rounded-lg px-3 py-2 text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <div className="hidden sm:block">
            <GitHubStarsPill stars={stars} />
          </div>

          <div className="hidden items-center gap-2 rounded-xl border border-edge bg-panel/70 py-1 pl-3 pr-1 md:flex">
            <code className="font-mono text-sm text-ink">
              <span className="text-frontend">$</span> {site.installShort}
            </code>
            <CopyButton value={site.install} iconOnly className="!py-1" />
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-edge bg-panel/70 text-ink lg:hidden"
          >
            {menuOpen ? (
              <Icons.x className="h-5 w-5" />
            ) : (
              <Icons.menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-edge bg-base-900/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  {...("external" in item && item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="rounded-lg px-3 py-2.5 text-sm text-ink-muted transition-colors hover:bg-panel-light/50 hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 flex items-center justify-between gap-3">
                <GitHubStarsPill stars={stars} />
                <a
                  href={site.npm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-edge bg-panel/70 px-3 py-1.5 text-sm text-ink-muted hover:text-ink"
                >
                  <Icons.npm className="h-4 w-4" /> npm
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
