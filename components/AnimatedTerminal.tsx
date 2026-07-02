"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { TerminalChrome } from "./TerminalChrome";

const CMD = "portbridge --dashboard";

const BANNER: { label?: string; value: string; accent?: "cyan" | "purple"; head?: boolean }[] = [
  { value: "portbridge  ·  one port for your whole stack", head: true },
  { label: "Open", value: "http://localhost:4000", accent: "cyan" },
  { label: "Dashboard", value: "http://localhost:4000/_portbridge", accent: "purple" },
  { label: "Frontend", value: "npm run dev     → :5173", accent: "cyan" },
  { label: "Backend", value: "npm run server  → :5000  /api/*", accent: "purple" },
];

type Log =
  | { time: string; src: "web" | "api"; kind: "note"; text: string }
  | {
      time: string;
      src: "web" | "api";
      kind: "req";
      method: string;
      path: string;
      status: number;
      ms: string;
    };

const LOGS: Log[] = [
  { time: "10:24:01", src: "web", kind: "note", text: "VITE ready in 412 ms" },
  { time: "10:24:01", src: "api", kind: "note", text: "API listening on http://localhost:5000" },
  { time: "10:24:07", src: "web", kind: "req", method: "GET", path: "/", status: 200, ms: "3ms" },
  { time: "10:24:07", src: "api", kind: "req", method: "GET", path: "/api/todos", status: 200, ms: "18ms" },
  { time: "10:24:09", src: "api", kind: "req", method: "POST", path: "/api/todos", status: 201, ms: "27ms" },
  { time: "10:24:12", src: "web", kind: "req", method: "GET", path: "/assets/index.js", status: 200, ms: "1ms" },
  { time: "10:24:15", src: "api", kind: "req", method: "GET", path: "/api/todos", status: 200, ms: "12ms" },
];

const srcColor = (src: "web" | "api") =>
  src === "web" ? "text-frontend" : "text-backend";

function LogRow({ log, animate }: { log: Log; animate: boolean }) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 6 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-wrap items-center gap-x-2 whitespace-pre"
    >
      <span className="text-ink-muted">[{log.time}]</span>
      <span className={srcColor(log.src)}>[{log.src}]</span>
      {log.kind === "note" ? (
        <span className="text-ink/80">{log.text}</span>
      ) : (
        <>
          <span className="text-ink">{log.method}</span>
          <span className="text-ink/90">{log.path}</span>
          <span className={log.status < 400 ? "text-ok" : "text-err"}>
            {log.status}
          </span>
          <span className="text-ink-muted">{log.ms}</span>
        </>
      )}
    </motion.div>
  );
}

export function AnimatedTerminal() {
  const reduce = useReducedMotion();
  const [charIndex, setCharIndex] = useState(0);
  const [bannerCount, setBannerCount] = useState(0);
  const [logCount, setLogCount] = useState(0);

  useEffect(() => {
    if (reduce) {
      setCharIndex(CMD.length);
      setBannerCount(BANNER.length);
      setLogCount(LOGS.length);
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    const wait = (ms: number) =>
      new Promise<void>((res) => {
        timer = setTimeout(res, ms);
      });

    async function loop() {
      while (!cancelled) {
        setCharIndex(0);
        setBannerCount(0);
        setLogCount(0);
        await wait(700);

        for (let i = 1; i <= CMD.length; i++) {
          if (cancelled) return;
          setCharIndex(i);
          await wait(52);
        }
        await wait(520);

        for (let i = 1; i <= BANNER.length; i++) {
          if (cancelled) return;
          setBannerCount(i);
          await wait(140);
        }
        await wait(420);

        for (let i = 1; i <= LOGS.length; i++) {
          if (cancelled) return;
          setLogCount(i);
          await wait(760);
        }
        await wait(3000);
      }
    }

    loop();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [reduce]);

  const typing = charIndex < CMD.length;
  const showCursor = bannerCount === 0;

  return (
    <TerminalChrome
      title={
        <>
          <span className="hidden sm:inline">~/app</span>
          <span className="text-ink-muted/70">— portbridge</span>
        </>
      }
    >
      <div className="scrollbar-brand h-[360px] overflow-hidden px-4 py-4 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
        {/* Prompt line */}
        <div className="flex items-center whitespace-pre">
          <span className="text-ok">➜</span>
          <span className="ml-2 text-frontend">app</span>
          <span className="ml-2 text-ink">
            {CMD.slice(0, charIndex)}
            {showCursor && (
              <span
                className={`ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.15em] bg-frontend ${
                  typing ? "" : "animate-blink"
                }`}
                aria-hidden
              />
            )}
          </span>
        </div>

        {/* Banner */}
        {bannerCount > 0 && (
          <div className="mt-3 space-y-0.5">
            {BANNER.slice(0, bannerCount).map((line, i) => (
              <motion.div
                key={i}
                initial={reduce ? false : { opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className="whitespace-pre"
              >
                {line.head ? (
                  <span className="font-semibold text-gradient">
                    {"  "}
                    {line.value}
                  </span>
                ) : (
                  <span>
                    {"  "}
                    <span className="text-ink-muted">
                      {line.label?.padEnd(10)}
                    </span>
                    <span
                      className={
                        line.accent === "cyan"
                          ? "text-frontend"
                          : "text-backend"
                      }
                    >
                      {line.value}
                    </span>
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Streaming logs */}
        {logCount > 0 && (
          <div className="mt-3 space-y-0.5">
            {LOGS.slice(0, logCount).map((log, i) => (
              <LogRow key={`${log.time}-${i}`} log={log} animate={!reduce} />
            ))}
          </div>
        )}
      </div>
    </TerminalChrome>
  );
}

export default AnimatedTerminal;
