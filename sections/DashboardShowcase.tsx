import { DashboardMock } from "@/components/DashboardMock";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icons } from "@/components/icons";

const bullets = [
  {
    icon: Icons.activity,
    title: "Real-time timeline",
    body: "Every request streams over WebSocket the instant it happens — no refresh, no polling.",
  },
  {
    icon: Icons.split,
    title: "Front ↔ back at a glance",
    body: "Color-coded targets show exactly which server handled each request.",
  },
  {
    icon: Icons.clock,
    title: "Waterfall durations",
    body: "A per-request bar makes slow endpoints obvious the moment they appear.",
  },
];

export function DashboardShowcase() {
  return (
    <section id="dashboard" className="section">
      <div className="container-page">
        <SectionHeading eyebrow="Live dashboard" title="See every request, the moment it happens">
          Run with{" "}
          <code className="rounded bg-panel-light px-1.5 py-0.5 font-mono text-sm text-frontend">
            --dashboard
          </code>{" "}
          and open{" "}
          <code className="rounded bg-panel-light px-1.5 py-0.5 font-mono text-sm text-ink">
            /_portbridge
          </code>{" "}
          for a live view of traffic crossing the front↔back boundary.
        </SectionHeading>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <DashboardMock />
            <p className="mt-3 text-center text-sm text-ink-muted">
              See every request cross the front↔back boundary, live.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="space-y-5">
              {bullets.map((b) => (
                <li key={b.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-edge bg-panel text-frontend">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      {b.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {b.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default DashboardShowcase;
