import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Tabs } from "@/components/ui/Tabs";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { CommandBox } from "@/components/ui/CommandBox";
import { site } from "@/lib/site";

const installs = [
  { id: "npm", label: "npm", cmd: "npm install -g portbridge" },
  { id: "pnpm", label: "pnpm", cmd: "pnpm add -g portbridge" },
  { id: "yarn", label: "yarn", cmd: "yarn global add portbridge" },
  { id: "bun", label: "bun", cmd: "bun add -g portbridge" },
];

const CONFIG_RAW = `{
  "frontend": { "command": "npm run dev",    "port": 5173, "cwd": "./client" },
  "backend":  { "command": "npm run server", "port": 5000, "cwd": "./server" },
  "proxy":    { "port": 4000, "apiPrefix": "/api" }
}`;

const K = ({ children }: { children: ReactNode }) => (
  <span className="text-backend">{children}</span>
);
const S = ({ children }: { children: ReactNode }) => (
  <span className="text-ok">{children}</span>
);
const N = ({ children }: { children: ReactNode }) => (
  <span className="text-frontend">{children}</span>
);
const P = ({ children }: { children: ReactNode }) => (
  <span className="text-ink-muted">{children}</span>
);

/** Hand-colored render of the config; CONFIG_RAW is what gets copied. */
function ConfigJson() {
  return (
    <>
      <P>{"{"}</P>
      {"\n  "}
      <K>&quot;frontend&quot;</K>
      <P>: {"{ "}</P>
      <K>&quot;command&quot;</K>
      <P>: </P>
      <S>&quot;npm run dev&quot;</S>
      <P>, </P>
      <span className="text-transparent">{"   "}</span>
      <K>&quot;port&quot;</K>
      <P>: </P>
      <N>5173</N>
      <P>, </P>
      <K>&quot;cwd&quot;</K>
      <P>: </P>
      <S>&quot;./client&quot;</S>
      <P>{" }"},</P>
      {"\n  "}
      <K>&quot;backend&quot;</K>
      <P>: {" {"} </P>
      <K>&quot;command&quot;</K>
      <P>: </P>
      <S>&quot;npm run server&quot;</S>
      <P>, </P>
      <K>&quot;port&quot;</K>
      <P>: </P>
      <N>5000</N>
      <P>, </P>
      <K>&quot;cwd&quot;</K>
      <P>: </P>
      <S>&quot;./server&quot;</S>
      <P>{" }"},</P>
      {"\n  "}
      <K>&quot;proxy&quot;</K>
      <P>: {"   {"} </P>
      <K>&quot;port&quot;</K>
      <P>: </P>
      <N>4000</N>
      <P>, </P>
      <K>&quot;apiPrefix&quot;</K>
      <P>: </P>
      <S>&quot;/api&quot;</S>
      <P>{" }"}</P>
      {"\n"}
      <P>{"}"}</P>
    </>
  );
}

export function QuickStart() {
  return (
    <section id="quick-start" className="section">
      <div className="container-page">
        <SectionHeading eyebrow="Quick start" title="Up and running in under a minute">
          Install globally (or run with{" "}
          <code className="rounded bg-panel-light px-1.5 py-0.5 font-mono text-sm text-ink">
            npx portbridge
          </code>
          ), drop in a config, then run one command.
        </SectionHeading>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6">
          <Reveal className="min-w-0">
            <div className="min-w-0">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-ink-muted">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-[#08111a]">
                  1
                </span>
                Install
              </div>
              <Tabs
                tabs={installs.map((it) => ({
                  id: it.id,
                  label: it.label,
                  content: <CommandBox command={it.cmd} size="md" />,
                }))}
              />
            </div>
          </Reveal>

          <Reveal delay={0.05} className="min-w-0">
            <div className="min-w-0">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-ink-muted">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-[#08111a]">
                  2
                </span>
                Configure
              </div>
              <CodeBlock code={CONFIG_RAW} filename="portbridge.config.json">
                <ConfigJson />
              </CodeBlock>
              <p className="mt-2 text-xs text-ink-muted">
                Prefer code? The same config works as{" "}
                <code className="font-mono text-ink/80">.js</code>,{" "}
                <code className="font-mono text-ink/80">.mjs</code>,{" "}
                <code className="font-mono text-ink/80">.cjs</code> or{" "}
                <code className="font-mono text-ink/80">.ts</code> — or run{" "}
                <code className="font-mono text-frontend">portbridge init</code>{" "}
                to generate it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="min-w-0">
            <div className="min-w-0">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-ink-muted">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-[#08111a]">
                  3
                </span>
                Run
              </div>
              <CommandBox command={`${site.command} --dashboard`} size="md" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default QuickStart;
