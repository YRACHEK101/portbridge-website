"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TerminalChrome } from "./TerminalChrome";

type Target = "frontend" | "backend";

type Req = {
  method: string;
  path: string;
  target: Target;
  status: number;
  ms: number;
};

// A believable stream of requests crossing the front/back boundary.
const POOL: Req[] = [
  { method: "GET", path: "/", target: "frontend", status: 200, ms: 4 },
  { method: "GET", path: "/api/todos", target: "backend", status: 200, ms: 18 },
  { method: "GET", path: "/assets/index-4f2.js", target: "frontend", status: 200, ms: 2 },
  { method: "POST", path: "/api/todos", target: "backend", status: 201, ms: 34 },
  { method: "GET", path: "/api/user/me", target: "backend", status: 200, ms: 22 },
  { method: "GET", path: "/@vite/client", target: "frontend", status: 200, ms: 1 },
  { method: "PATCH", path: "/api/todos/42", target: "backend", status: 200, ms: 27 },
  { method: "GET", path: "/api/session", target: "backend", status: 401, ms: 9 },
  { method: "GET", path: "/favicon.svg", target: "frontend", status: 200, ms: 3 },
  { method: "DELETE", path: "/api/todos/7", target: "backend", status: 204, ms: 15 },
  { method: "GET", path: "/api/search?q=port", target: "backend", status: 200, ms: 61 },
  { method: "GET", path: "/dashboard", target: "frontend", status: 200, ms: 5 },
];

const MAX_MS = 70;
const MAX_ROWS = 7;

type Row = Req & { id: number; time: string };

const pad = (n: number) => String(n).padStart(2, "0");
const fmt = (s: number) =>
  `${pad(10 + Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;

function TargetPill({ target }: { target: Target }) {
  const isFront = target === "frontend";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium ${
        isFront
          ? "border-frontend/30 bg-frontend/10 text-frontend"
          : "border-backend/30 bg-backend/10 text-backend"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${isFront ? "bg-frontend" : "bg-backend"}`}
      />
      {isFront ? "frontend" : "backend"}
    </span>
  );
}

function Waterfall({ ms, target }: { ms: number; target: Target }) {
  const pct = Math.max(8, Math.min(100, (ms / MAX_MS) * 100));
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-full max-w-[120px] overflow-hidden rounded-full bg-base-900">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`h-full rounded-full ${
            target === "frontend"
              ? "bg-gradient-to-r from-frontend/60 to-frontend"
              : "bg-gradient-to-r from-backend/60 to-backend"
          }`}
        />
      </div>
      <span className="w-10 shrink-0 text-right tabular-nums text-ink-muted">
        {ms}ms
      </span>
    </div>
  );
}

export function DashboardMock() {
  // This is a "live" product demo, so it streams on every device — the motion
  // is essential to what it communicates (WCAG 2.3.3 exception).
  const [rows, setRows] = useState<Row[]>([]);
  const idRef = useRef(0);
  const poolRef = useRef(0);
  const clockRef = useRef(7); // seconds past 10:24:00

  useEffect(() => {
    const seed = (count: number): Row[] => {
      const out: Row[] = [];
      for (let i = 0; i < count; i++) {
        const req = POOL[poolRef.current % POOL.length];
        poolRef.current += 1;
        clockRef.current += 1 + Math.floor(Math.random() * 3);
        out.unshift({ ...req, id: idRef.current++, time: fmt(clockRef.current) });
      }
      return out;
    };

    setRows(seed(4));
    const interval = setInterval(() => {
      setRows((prev) => {
        const req = POOL[poolRef.current % POOL.length];
        poolRef.current += 1;
        clockRef.current += 1 + Math.floor(Math.random() * 3);
        const next: Row = {
          ...req,
          id: idRef.current++,
          time: fmt(clockRef.current),
        };
        return [next, ...prev].slice(0, MAX_ROWS);
      });
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  return (
    <TerminalChrome
      accent="purple"
      title={
        <>
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <motion.span
                aria-hidden
                className="absolute inline-flex h-full w-full rounded-full bg-ok/70"
                animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
            </span>
            live
          </span>
          <span className="text-ink-muted/70">localhost:4000/_portbridge</span>
        </>
      }
    >
      <div className="px-2 py-2 sm:px-3 sm:py-3">
        {/* Column header */}
        <div className="grid grid-cols-[auto_auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-edge px-3 pb-2 text-[11px] font-medium uppercase tracking-wider text-ink-muted md:grid-cols-[68px_54px_minmax(0,1fr)_104px_48px_170px]">
          <span className="hidden md:block">Time</span>
          <span>Method</span>
          <span>Path</span>
          <span className="hidden md:block">Target</span>
          <span>Status</span>
          <span className="hidden md:block">Duration</span>
        </div>

        <div className="min-h-[280px]">
          <AnimatePresence initial={false}>
            {rows.map((row) => (
              <motion.div
                key={row.id}
                layout
                initial={{ opacity: 0, y: -8, backgroundColor: "rgba(56,220,242,0.06)" }}
                animate={{ opacity: 1, y: 0, backgroundColor: "rgba(0,0,0,0)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-[auto_auto_minmax(0,1fr)_auto] items-center gap-3 rounded-lg px-3 py-2 font-mono text-[12.5px] md:grid-cols-[68px_54px_minmax(0,1fr)_104px_48px_170px]"
              >
                <span className="hidden text-ink-muted md:block">{row.time}</span>
                <span className="font-semibold text-ink/90">{row.method}</span>
                <span className="truncate text-ink">{row.path}</span>
                <span className="hidden md:block">
                  <TargetPill target={row.target} />
                </span>
                <span
                  className={
                    row.status < 400
                      ? "text-ok"
                      : row.status < 500
                        ? "text-amber-300"
                        : "text-err"
                  }
                >
                  {row.status}
                </span>
                <span className="hidden md:block">
                  <Waterfall ms={row.ms} target={row.target} />
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </TerminalChrome>
  );
}

export default DashboardMock;
