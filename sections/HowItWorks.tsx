import { RoutingDiagram } from "@/components/RoutingDiagram";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Icons } from "@/components/icons";

const steps = [
  {
    n: "01",
    title: "Initialize",
    body: "portbridge init auto-detects your frontend and backend, then writes a ready-to-run config.",
    code: "portbridge init",
    lang: "bash",
  },
  {
    n: "02",
    title: "Run one command",
    body: "portbridge boots both servers, waits until they're ready, and shows a single banner.",
    code: "portbridge",
    lang: "bash",
  },
  {
    n: "03",
    title: "Open one URL",
    body: "Your whole stack lives on one origin. Add --dashboard for the live request timeline.",
    code: "open http://localhost:4000",
    lang: "bash",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container-page">
        <SectionHeading eyebrow="How it works" title="One proxy in front of everything">
          The browser talks to a single origin. portbridge routes{" "}
          <code className="rounded bg-panel-light px-1.5 py-0.5 font-mono text-sm text-backend">
            /api/*
          </code>{" "}
          to your backend and everything else to your frontend — HMR WebSockets
          included.
        </SectionHeading>

        <Reveal delay={0.05} className="mt-12">
          <div className="panel bg-gradient-to-b from-panel to-base-800/40 p-5 sm:p-8">
            <RoutingDiagram />
          </div>
        </Reveal>

        <RevealGroup className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <RevealItem key={step.n}>
              <div className="relative h-full rounded-2xl border border-edge bg-panel p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-gradient">
                    {step.n}
                  </span>
                  {i < steps.length - 1 && (
                    <Icons.arrowRight className="hidden h-4 w-4 text-edge md:block" />
                  )}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {step.body}
                </p>
                <div className="mt-4">
                  <CodeBlock code={step.code}>
                    <span>
                      <span className="text-frontend">$ </span>
                      <span className="text-ink">{step.code}</span>
                    </span>
                  </CodeBlock>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export default HowItWorks;
