import { CommandBox } from "@/components/ui/CommandBox";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import Logo from "@/components/Logo";
import { Icons } from "@/components/icons";
import { site } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <div className="panel relative overflow-hidden px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* Glow backdrop */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
              <div className="absolute inset-0 bg-grid opacity-[0.35]" />
              <div className="absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(56,220,242,0.18),transparent)]" />
              <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(192,132,252,0.16),transparent)]" />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <Logo className="mx-auto h-12 w-12 animate-float" />
              <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-5xl">
                Stop juggling ports.{" "}
                <span className="text-gradient">Ship faster.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-ink-muted">
                One command runs your whole stack behind a single port — no CORS,
                merged logs, and a live request dashboard.
              </p>

              <div className="mx-auto mt-8 max-w-md">
                <CommandBox command={site.install} />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <ButtonLink href={site.github} external variant="outline" size="lg">
                  <Icons.github className="h-4 w-4" />
                  View on GitHub
                </ButtonLink>
                <ButtonLink href={site.npm} external variant="outline" size="lg">
                  <Icons.npm className="h-4 w-4" />
                  View on npm
                </ButtonLink>
              </div>

              <p className="mt-6 text-xs text-ink-muted">
                {site.requirements.node} · {site.requirements.license} licensed ·{" "}
                {site.requirements.platforms}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FinalCTA;
