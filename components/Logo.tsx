import type { SVGProps } from "react";

/**
 * portbridge logo mark — two streams (cyan + purple) merging into one
 * glowing port ring. Rendered as an accessible, self-contained inline SVG so
 * it inherits crisp rendering at any size and needs no network asset.
 */
export function Logo({
  title = "portbridge logo",
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="pb-stream-top" x1="2" y1="14" x2="30" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" stopOpacity="0.15" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="pb-stream-bottom" x1="2" y1="34" x2="30" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c084fc" stopOpacity="0.15" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
        <linearGradient id="pb-ring" x1="30" y1="12" x2="46" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38dcf2" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
        <radialGradient id="pb-core" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#eafbff" />
          <stop offset="0.55" stopColor="#8fe9ff" />
          <stop offset="1" stopColor="#c084fc" stopOpacity="0.2" />
        </radialGradient>
        <filter id="pb-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Two streams flowing in and merging toward the ring */}
      <g filter="url(#pb-glow)" strokeLinecap="round" fill="none" strokeWidth="3.2">
        <path d="M3 15 C 16 15, 22 20, 33 24" stroke="url(#pb-stream-top)" />
        <path d="M3 33 C 16 33, 22 28, 33 24" stroke="url(#pb-stream-bottom)" />
      </g>

      {/* The unified port ring */}
      <g filter="url(#pb-glow)">
        <circle cx="34" cy="24" r="10" stroke="url(#pb-ring)" strokeWidth="3.4" fill="none" />
        <circle cx="34" cy="24" r="4.4" fill="url(#pb-core)" />
      </g>
    </svg>
  );
}

export default Logo;
