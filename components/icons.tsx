import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const Icons = {
  // One unified port — concentric target ring.
  port: (p: IconProps) => (
    <svg {...stroke} {...p}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M2 12h4M18 12h4M12 2v4M12 18v4" />
    </svg>
  ),
  // Zero CORS — shield/check.
  shield: (p: IconProps) => (
    <svg {...stroke} {...p}>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.4-3.6" />
    </svg>
  ),
  // Merged, color-coded logs — stacked lines.
  logs: (p: IconProps) => (
    <svg {...stroke} {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9h3M7 13h6M7 17h4" />
      <path d="M14 8.5h3M15.5 12h1.5" />
    </svg>
  ),
  // Live dashboard — activity pulse.
  activity: (p: IconProps) => (
    <svg {...stroke} {...p}>
      <path d="M3 12h4l2-6 4 14 2-8h6" />
    </svg>
  ),
  // Smart init — wand / sparkle.
  wand: (p: IconProps) => (
    <svg {...stroke} {...p}>
      <path d="m15 4-1 3-3 1 3 1 1 3 1-3 3-1-3-1-1-3Z" />
      <path d="M5 19 14 10M5.5 6.5l.01 0M19 15l.01 0" />
    </svg>
  ),
  // Port auto-resolution — refresh loop.
  refresh: (p: IconProps) => (
    <svg {...stroke} {...p}>
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8" />
      <path d="M20 4v4h-4" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 16" />
      <path d="M4 20v-4h4" />
    </svg>
  ),
  // Wait-for-ready — clock.
  clock: (p: IconProps) => (
    <svg {...stroke} {...p}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </svg>
  ),
  // Auto-restart — rotate with dot.
  rotate: (p: IconProps) => (
    <svg {...stroke} {...p}>
      <path d="M21 12a9 9 0 1 1-2.6-6.4" />
      <path d="M21 4v5h-5" />
    </svg>
  ),
  // PORT injection + .env check — key.
  key: (p: IconProps) => (
    <svg {...stroke} {...p}>
      <circle cx="7.5" cy="15.5" r="4" />
      <path d="m10.5 12.5 8-8M17 6l2 2M14 9l2 2" />
    </svg>
  ),
  // HMR-safe — bolt.
  bolt: (p: IconProps) => (
    <svg {...stroke} {...p}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  ),
  // Dev-only & production-safe — leaf/check.
  leaf: (p: IconProps) => (
    <svg {...stroke} {...p}>
      <path d="M11 20A7 7 0 0 1 4 13c0-6 7-9 16-9 0 9-3 16-9 16Z" />
      <path d="M8 17c2-4 5-6 9-7" />
    </svg>
  ),
  // Routing / proxy — split arrows.
  split: (p: IconProps) => (
    <svg {...stroke} {...p}>
      <path d="M3 12h6" />
      <path d="M9 12c5 0 5-6 12-6" />
      <path d="M9 12c5 0 5 6 12 6" />
      <path d="M18 3l3 3-3 3M18 15l3 3-3 3" />
    </svg>
  ),
  arrowRight: (p: IconProps) => (
    <svg {...stroke} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  external: (p: IconProps) => (
    <svg {...stroke} {...p}>
      <path d="M14 4h6v6M20 4l-9 9M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
    </svg>
  ),
  check: (p: IconProps) => (
    <svg {...stroke} {...p} strokeWidth={2.2}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  x: (p: IconProps) => (
    <svg {...stroke} {...p} strokeWidth={2.2}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
  terminal: (p: IconProps) => (
    <svg {...stroke} {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3M13 15h4" />
    </svg>
  ),
  github: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.94c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  ),
  npm: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M2 4v16h20V4H2Zm18 14h-3V8h-4v10H4V6h16v12Z" />
    </svg>
  ),
  star: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.9l-5.81 3.06 1.11-6.47-4.7-4.58 6.5-.95L12 2.5Z" />
    </svg>
  ),
  download: (p: IconProps) => (
    <svg {...stroke} {...p}>
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  ),
  menu: (p: IconProps) => (
    <svg {...stroke} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
};

export type IconName = keyof typeof Icons;
