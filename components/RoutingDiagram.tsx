"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import Logo from "./Logo";

/**
 * Animated routing diagram:
 *   browser → :4000 → /api/* → backend (:5000)
 *                    · everything else → frontend (:5173)
 *
 * Built with responsive flex + real HTML text (readable at every size) and
 * Framer Motion "flow" pulses that work across browsers, including mobile
 * Safari — vertical stack on phones, horizontal flow on larger screens.
 */

type Accent = "cyan" | "purple" | "neutral" | "brand";

const accentRing: Record<Accent, string> = {
  cyan: "border-frontend/50",
  purple: "border-backend/50",
  neutral: "border-edge",
  brand: "border-transparent",
};

function Node({
  title,
  port,
  caption,
  accent = "neutral",
  highlight = false,
  icon,
  className = "",
}: {
  title: string;
  port?: string;
  caption?: ReactNode;
  accent?: Accent;
  highlight?: boolean;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative flex min-w-[9.5rem] flex-col items-center rounded-xl border bg-panel px-4 py-3 text-center ${accentRing[accent]} ${
        highlight ? "shadow-glow" : ""
      } ${className}`}
      style={
        highlight
          ? {
              backgroundImage:
                "linear-gradient(#12161f,#12161f), linear-gradient(135deg,#38dcf2,#c084fc)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              border: "1.5px solid transparent",
            }
          : undefined
      }
    >
      {icon && <div className="mb-1.5">{icon}</div>}
      <span className="text-sm font-semibold text-ink">{title}</span>
      {port && (
        <span
          className={`font-mono text-xs ${
            accent === "cyan"
              ? "text-frontend"
              : accent === "purple"
                ? "text-backend"
                : "text-frontend"
          }`}
        >
          {port}
        </span>
      )}
      {caption && (
        <span className="mt-1 text-[11px] leading-tight text-ink-muted">
          {caption}
        </span>
      )}
    </div>
  );
}

/**
 * A connector "pipe" that renders vertically on mobile and horizontally on
 * larger screens, with a glowing pulse traveling along it (motion-safe).
 */
function Pipe({
  from = "#38dcf2",
  to = "#c084fc",
  delay = 0,
}: {
  from?: string;
  to?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  const Dot = ({ vertical }: { vertical: boolean }) =>
    reduce ? null : (
      <motion.span
        aria-hidden
        className="absolute h-2 w-2 rounded-full"
        style={{
          background: to,
          boxShadow: `0 0 8px 1px ${to}`,
          ...(vertical
            ? { left: "50%", marginLeft: -4 }
            : { top: "50%", marginTop: -4 }),
        }}
        initial={vertical ? { top: "0%" } : { left: "0%" }}
        animate={vertical ? { top: ["0%", "100%"] } : { left: ["0%", "100%"] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
      />
    );

  return (
    <div
      aria-hidden
      className="flex shrink-0 items-center justify-center md:flex-1"
    >
      {/* vertical (mobile) */}
      <span
        className="relative block h-7 w-[2px] md:hidden"
        style={{ background: `linear-gradient(${from}, ${to})` }}
      >
        <Dot vertical />
      </span>
      {/* horizontal (desktop) */}
      <span
        className="relative hidden h-[2px] w-full min-w-[2.5rem] md:block"
        style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
      >
        <Dot vertical={false} />
      </span>
    </div>
  );
}

export function RoutingDiagram() {
  return (
    <div
      role="img"
      aria-label="The browser talks only to portbridge on port 4000. Requests to /api/* are proxied to the backend on port 5000; everything else goes to the frontend on port 5173."
      className="flex flex-col items-center gap-0 md:flex-row md:justify-center"
    >
      <Node
        title="Browser"
        icon={
          <span className="flex gap-1" aria-hidden>
            <span className="h-1.5 w-1.5 rounded-full bg-ink-muted/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-ink-muted/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-ink-muted/30" />
          </span>
        }
      />

      <Pipe from="#8b93a7" to="#38dcf2" />

      <Node
        title="portbridge"
        port=":4000"
        highlight
        icon={<Logo className="h-7 w-7" aria-hidden />}
      />

      <Pipe from="#38dcf2" to="#c084fc" delay={0.4} />

      <div className="flex flex-col gap-3">
        <Node
          title="Frontend"
          port=":5173"
          accent="cyan"
          caption={
            <>
              <span className="text-frontend">●</span> everything else
            </>
          }
        />
        <Node
          title="Backend"
          port=":5000"
          accent="purple"
          caption={
            <>
              <span className="text-backend">●</span>{" "}
              <span className="font-mono">/api/*</span>
            </>
          }
        />
      </div>
    </div>
  );
}

export default RoutingDiagram;
