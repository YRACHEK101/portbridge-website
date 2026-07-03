import { AnimatedTerminal } from "@/components/AnimatedTerminal";
import { CommandBox } from "@/components/ui/CommandBox";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import Logo from "@/components/Logo";
import { Icons } from "@/components/icons";
import { site } from "@/lib/site";
import { formatCompact } from "@/lib/stats";

export function Hero({ downloads }: { downloads: number | null }) {
  const dl = formatCompact(downloads);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient background: grid + dual gradient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-[0.5]" />
        <div className="absolute -top-24 left-1/2 h-[520px] w-[880px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(56,220,242,0.16),transparent)]" />
        <div className="absolute right-[-10%] top-24 h-[420px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(192,132,252,0.16),transparent)]" />
      </div>

      <div className="container-page grid grid-cols-1 items-center gap-12 pb-16 pt-28 sm:pt-32 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24 lg:pt-36">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-edge bg-panel/70 py-1.5 pl-2 pr-3.5 text-sm text-ink-muted">
              <Logo className="h-5 w-5" />
              <span>
                Open source dev tool ·{" "}
                <span className="text-ink">{site.requirements.license}</span>
              </span>
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              One port for your{" "}
              <span className="text-gradient">whole stack.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
              {site.name} runs your frontend and backend dev servers behind a
              single port — no CORS, merged logs, and a live request dashboard.{" "}
              <span className="text-ink">One command.</span>
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 max-w-md">
              <CommandBox command={site.install} />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <ButtonLink href={site.github} external variant="outline" size="lg">
                <Icons.github className="h-4 w-4" />
                View on GitHub
              </ButtonLink>
              <ButtonLink href={site.npm} external variant="ghost" size="lg">
                <Icons.npm className="h-4 w-4" />
                npm
                <Icons.external className="h-3.5 w-3.5 opacity-60" />
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-muted">
              <li className="flex items-center gap-1.5">
                <Icons.check className="h-4 w-4 text-ok" />
                No CORS config
              </li>
              <li className="flex items-center gap-1.5">
                <Icons.check className="h-4 w-4 text-ok" />
                Framework-agnostic
              </li>
              <li className="flex items-center gap-1.5">
                <Icons.check className="h-4 w-4 text-ok" />
                {site.requirements.node}
              </li>
              {dl && (
                <li className="flex items-center gap-1.5">
                  <Icons.download className="h-4 w-4 text-frontend" />
                  <span className="tabular-nums text-ink">{dl}</span> downloads/mo
                </li>
              )}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="min-w-0 lg:pl-2">
          <AnimatedTerminal />
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
