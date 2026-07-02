import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion, type AccordionEntry } from "@/components/ui/Accordion";

const code = (s: string) => (
  <code className="rounded bg-panel-light px-1 py-0.5 font-mono text-[0.9em] text-frontend">
    {s}
  </code>
);

const faqs: AccordionEntry[] = [
  {
    q: "Does port 4000 affect my database?",
    a: (
      <>
        No. portbridge sits between the browser and your HTTP servers — it never
        sits between your backend and your database. Your backend connects to
        its database exactly as before; portbridge doesn&apos;t know or care that
        a database exists.
      </>
    ),
  },
  {
    q: "Is portbridge used in production?",
    a: (
      <>
        No — it&apos;s a dev-only tool. It isn&apos;t a dependency, it&apos;s
        never deployed, and it never runs in production. Deploy your app exactly
        as you normally would; keep API calls relative and everything just
        works.
      </>
    ),
  },
  {
    q: "What if port 4000 is already in use?",
    a: (
      <>
        portbridge automatically picks the next free port and tells you which one
        it chose. Want it to fail instead of reassigning? Run with{" "}
        {code("--strict-port")}.
      </>
    ),
  },
  {
    q: "Which frameworks does it support?",
    a: (
      <>
        Any of them. portbridge just runs the commands you give it, so it&apos;s
        framework-agnostic. {code("portbridge init")} can auto-detect Next.js,
        Vite and CRA on the frontend and Express, Fastify, Koa and NestJS on the
        backend to pre-fill your config.
      </>
    ),
  },
  {
    q: "Does it work on Windows?",
    a: <>Yes — portbridge runs on Windows, macOS and Linux. It requires Node.js 20 or newer.</>,
  },
  {
    q: "Do I need to change my code?",
    a: (
      <>
        No. Just use relative {code("/api")} paths like {code("fetch('/api/...')")}
        . Because the browser only ever talks to one origin, those requests are
        routed correctly in dev and continue to work unchanged in production.
      </>
    ),
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container-page">
        <SectionHeading eyebrow="FAQ" title="Questions, answered">
          The things developers actually ask before running{" "}
          <code className="font-mono text-frontend">npx portbridge</code>.
        </SectionHeading>

        <Reveal delay={0.05} className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}

export default FAQ;
