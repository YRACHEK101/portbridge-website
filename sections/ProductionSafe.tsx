import { Reveal } from "@/components/ui/Reveal";
import { Icons } from "@/components/icons";

const assurances = [
  "Not a dependency — it never ships in your bundle",
  "Never deployed and never used in production",
  "Sits between the browser and your HTTP servers — never near your database",
];

export function ProductionSafe() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal className="mx-auto max-w-4xl">
          <div className="panel overflow-hidden">
            <div className="grid grid-cols-1 gap-8 p-6 sm:p-9 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-ok/25 bg-ok/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ok">
                  <Icons.leaf className="h-3.5 w-3.5" />
                  Dev-only &amp; production-safe
                </span>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  It never ships. It never touches your database.
                </h2>
                <p className="mt-3 text-pretty leading-relaxed text-ink-muted">
                  portbridge is a development tool. Keep your API calls relative
                  and the exact same code works in dev and prod — because in
                  production your platform serves everything from one origin
                  anyway.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {assurances.map((a) => (
                    <li key={a} className="flex items-start gap-2.5 text-sm text-ink/90">
                      <Icons.check className="mt-0.5 h-4 w-4 shrink-0 text-ok" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-w-0 space-y-3">
                <div className="rounded-xl border border-ok/25 bg-ok/[0.04] p-4">
                  <div className="mb-2 flex items-center gap-2 text-xs font-medium text-ok">
                    <Icons.check className="h-4 w-4" />
                    Do this — relative path
                  </div>
                  <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed">
                    <code>
                      <span className="text-backend">fetch</span>
                      <span className="text-ink-muted">(</span>
                      <span className="text-ok">&apos;/api/users&apos;</span>
                      <span className="text-ink-muted">)</span>
                    </code>
                  </pre>
                  <p className="mt-2 text-xs text-ink-muted">
                    Works identically in dev and production.
                  </p>
                </div>

                <div className="rounded-xl border border-err/25 bg-err/[0.04] p-4">
                  <div className="mb-2 flex items-center gap-2 text-xs font-medium text-err">
                    <Icons.x className="h-4 w-4" />
                    Not this — hard-coded origin
                  </div>
                  <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed">
                    <code>
                      <span className="text-backend">fetch</span>
                      <span className="text-ink-muted">(</span>
                      <span className="text-err/90 line-through decoration-err/40">
                        &apos;http://localhost:4000/api/users&apos;
                      </span>
                      <span className="text-ink-muted">)</span>
                    </code>
                  </pre>
                  <p className="mt-2 text-xs text-ink-muted">
                    Breaks the moment you deploy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ProductionSafe;
