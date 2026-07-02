import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icons } from "@/components/icons";
import Wordmark from "@/components/Wordmark";

const rows: { label: string; manual: boolean; pb: boolean }[] = [
  { label: "Runs both dev servers", manual: true, pb: true },
  { label: "No CORS setup", manual: false, pb: true },
  { label: "One URL for the whole app", manual: false, pb: true },
  { label: "Labelled + timestamped logs", manual: false, pb: true },
  { label: "Live request view", manual: false, pb: true },
  { label: "Port auto-resolution", manual: false, pb: true },
  { label: "Wait-for-ready banner", manual: false, pb: true },
];

function Cell({ value }: { value: boolean }) {
  return value ? (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ok/10 text-ok">
      <Icons.check className="h-4 w-4" />
      <span className="sr-only">Yes</span>
    </span>
  ) : (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-err/10 text-err/80">
      <Icons.x className="h-4 w-4" />
      <span className="sr-only">No</span>
    </span>
  );
}

export function Comparison() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Comparison"
          title={
            <>
              Why not{" "}
              <code className="font-mono text-3xl text-ink-muted sm:text-4xl">
                concurrently
              </code>{" "}
              + CORS?
            </>
          }
        >
          You can wire it up by hand. portbridge just makes the whole thing one
          command — and adds the parts you can&apos;t easily bolt on.
        </SectionHeading>

        <Reveal delay={0.05} className="mx-auto mt-12 max-w-3xl">
          <div className="panel overflow-hidden">
            <div className="scrollbar-brand overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">
                Feature comparison between a manual concurrently plus CORS setup
                and portbridge
              </caption>
              <thead>
                <tr className="border-b border-edge">
                  <th
                    scope="col"
                    className="px-3 py-4 text-left font-medium text-ink-muted sm:px-5"
                  >
                    Capability
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 text-center font-medium text-ink-muted sm:px-4"
                  >
                    <span className="hidden sm:inline">manual </span>
                    <span className="font-mono text-[11px] sm:text-xs">
                      (concurrently + CORS)
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="relative px-4 py-4 text-center"
                  >
                    <span className="absolute inset-x-2 inset-y-0 -z-0 rounded-t-xl bg-brand-gradient-soft" />
                    <span className="relative inline-flex items-center justify-center">
                      <Wordmark markClassName="h-5 w-5" textClassName="text-sm" />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i !== rows.length - 1 ? "border-b border-edge/60" : ""}
                  >
                    <th
                      scope="row"
                      className="px-3 py-3.5 text-left font-normal text-ink sm:px-5"
                    >
                      {row.label}
                    </th>
                    <td className="px-3 py-3.5 text-center sm:px-4">
                      <Cell value={row.manual} />
                    </td>
                    <td className="relative px-3 py-3.5 text-center sm:px-4">
                      <span className="absolute inset-x-2 inset-y-0 -z-0 bg-brand-gradient-soft" />
                      <span className="relative">
                        <Cell value={row.pb} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Comparison;
