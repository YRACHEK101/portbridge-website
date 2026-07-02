import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Icons } from "@/components/icons";
import { site } from "@/lib/site";

const pains = [
  {
    title: "Ports scattered everywhere",
    body: "Frontend on :5173, backend on :5000, and you're memorizing which tab is which.",
    icon: Icons.split,
    snippet: "localhost:5173 · localhost:5000 · localhost:???",
  },
  {
    title: "CORS errors, again",
    body: "Two origins means preflight failures, proxy hacks, and header juggling.",
    icon: Icons.shield,
    snippet: "Access to fetch blocked by CORS policy",
  },
  {
    title: "Logs in three terminals",
    body: "Web here, API there — tab-hopping to trace a single request through the stack.",
    icon: Icons.logs,
    snippet: "$ tab 1  $ tab 2  $ tab 3 …",
  },
  {
    title: "Zero request visibility",
    body: "Which requests hit the frontend vs backend? How slow? You're guessing.",
    icon: Icons.activity,
    snippet: "GET /api/todos → ??? ms",
  },
];

export function Problem() {
  return (
    <section className="section relative">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-err/90">
            Sound familiar?
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Local dev across two servers is death by a thousand ports.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((pain) => (
            <RevealItem key={pain.title} className="min-w-0">
              <div className="h-full min-w-0 rounded-2xl border border-err/20 bg-err/[0.04] p-5 transition-colors hover:border-err/35">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-err/25 bg-err/10 text-err">
                  <pain.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {pain.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {pain.body}
                </p>
                <p className="mt-4 truncate rounded-md border border-edge/70 bg-base-900/60 px-2.5 py-1.5 font-mono text-[11px] text-err/80">
                  {pain.snippet}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-12 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-edge bg-panel/70 py-2 pl-4 pr-5 text-sm">
            <span className="text-ink-muted">One command fixes all of it</span>
            <Icons.arrowRight className="h-4 w-4 text-ink-muted" />
            <code className="font-mono font-medium text-gradient">
              {site.command}
            </code>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Problem;
