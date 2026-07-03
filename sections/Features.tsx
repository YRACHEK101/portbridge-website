import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Icons, type IconName } from "@/components/icons";

type Feature = {
  icon: IconName;
  title: string;
  body: string;
  accent: "cyan" | "purple";
};

const features: Feature[] = [
  {
    icon: "port",
    title: "One unified port, zero CORS",
    body: "The browser talks only to :4000. /api/* proxies to the backend, everything else to the frontend — no CORS config, ever.",
    accent: "cyan",
  },
  {
    icon: "logs",
    title: "Merged, color-coded logs",
    body: "Both servers interleaved in one terminal. Each line timestamped and prefixed — [web] cyan, [api] magenta, errors red.",
    accent: "purple",
  },
  {
    icon: "activity",
    title: "Live request dashboard",
    body: "Run with --dashboard for a real-time timeline at /_portbridge, streaming every request over WebSocket with a waterfall bar.",
    accent: "cyan",
  },
  {
    icon: "wand",
    title: "Smart init",
    body: "Auto-detects Next.js / Vite / CRA and Express / Fastify / Koa / NestJS, then pre-fills your commands and ports.",
    accent: "purple",
  },
  {
    icon: "refresh",
    title: "Port auto-resolution",
    body: "If a port is taken, portbridge picks a free one and tells you. Prefer to fail fast? Pass --strict-port.",
    accent: "cyan",
  },
  {
    icon: "clock",
    title: "Wait-for-ready",
    body: "Waits until both servers are actually listening before showing the banner — and warns you if one never comes up.",
    accent: "purple",
  },
  {
    icon: "rotate",
    title: "Auto-restart on crash",
    body: "Opt in with restartOnCrash and portbridge revives a downed server, with a crash-loop guard so it never spins.",
    accent: "cyan",
  },
  {
    icon: "key",
    title: "PORT injection + .env check",
    body: "Injects PORT into each child process and warns when .env.example keys are missing from your .env.",
    accent: "purple",
  },
  {
    icon: "bolt",
    title: "HMR-safe",
    body: "Forwards WebSocket upgrades to the frontend, so Vite and Next.js hot module replacement keep working through the proxy.",
    accent: "cyan",
  },
  {
    icon: "leaf",
    title: "Dev-only & production-safe",
    body: "Never a dependency, never deployed. It nudges you toward relative /api/... calls that work identically in dev and prod.",
    accent: "purple",
  },
];

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container-page">
        <SectionHeading eyebrow="Features" title="Everything you need to run a full-stack dev loop">
          One small CLI that removes the papercuts of running two servers side by
          side — from CORS to crash recovery.
        </SectionHeading>

        <RevealGroup
          stagger={0.05}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => {
            const Icon = Icons[f.icon];
            const ring =
              f.accent === "cyan"
                ? "group-hover:border-frontend/50 group-hover:shadow-glow"
                : "group-hover:border-backend/50 group-hover:shadow-glow-purple";
            const iconTint =
              f.accent === "cyan"
                ? "from-frontend/20 to-frontend/5 text-frontend"
                : "from-backend/20 to-backend/5 text-backend";
            return (
              <RevealItem key={f.title}>
                <div
                  className={`group h-full rounded-2xl border border-edge bg-panel p-6 transition-all duration-300 ${ring}`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border border-edge bg-gradient-to-br ${iconTint}`}
                  >
                    <Icon className="h-[22px] w-[22px]" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {f.body}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

export default Features;
