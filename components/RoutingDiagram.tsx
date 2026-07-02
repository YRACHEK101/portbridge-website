"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Animated routing diagram:
 *   browser → :4000 → /api/* → backend (:5000)
 *                    · everything else → frontend (:5173)
 * Built as a single scalable SVG (viewBox) so it stays crisp and responsive.
 * Flow packets use SMIL animateMotion and are omitted under reduced motion.
 */
export function RoutingDiagram() {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 820 360"
      className="h-auto w-full"
      role="img"
      aria-label="The browser talks only to portbridge on port 4000. Requests to /api/* are proxied to the backend on port 5000; everything else goes to the frontend on port 5173."
    >
      <defs>
        <linearGradient id="rd-line-mid" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#38dcf2" stopOpacity="0.25" />
          <stop offset="1" stopColor="#38dcf2" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="rd-line-front" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0.4" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="rd-line-back" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c084fc" stopOpacity="0.4" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
        <linearGradient id="rd-hub" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38dcf2" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
        <filter id="rd-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Connector paths */}
      <path id="rd-p-mid" d="M182 180 H316" fill="none" stroke="url(#rd-line-mid)" strokeWidth="2.5" strokeDasharray="1 0" />
      <path id="rd-p-back" d="M498 200 C 560 250, 580 280, 628 288" fill="none" stroke="url(#rd-line-back)" strokeWidth="2.5" />
      <path id="rd-p-front" d="M498 160 C 560 110, 580 80, 628 72" fill="none" stroke="url(#rd-line-front)" strokeWidth="2.5" />

      {/* Flowing packets */}
      {!reduce && (
        <>
          <circle r="4.5" fill="#eafbff">
            <animateMotion dur="1.5s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href="#rd-p-mid" />
            </animateMotion>
          </circle>
          <circle r="4.5" fill="#c084fc" filter="url(#rd-glow)">
            <animateMotion dur="1.8s" begin="0.4s" repeatCount="indefinite">
              <mpath href="#rd-p-back" />
            </animateMotion>
          </circle>
          <circle r="4.5" fill="#22d3ee" filter="url(#rd-glow)">
            <animateMotion dur="1.8s" begin="0.9s" repeatCount="indefinite">
              <mpath href="#rd-p-front" />
            </animateMotion>
          </circle>
        </>
      )}

      {/* Route labels */}
      <g fontFamily="var(--font-mono, monospace)" fontSize="13">
        <text x="560" y="60" fill="#22d3ee" textAnchor="middle">everything else</text>
        <text x="556" y="300" fill="#c084fc" textAnchor="middle" fontWeight="600">/api/*</text>
      </g>

      {/* Browser node */}
      <g>
        <rect x="26" y="146" width="156" height="68" rx="12" fill="#12161f" stroke="#232838" />
        <rect x="42" y="162" width="124" height="10" rx="3" fill="#232838" />
        <circle cx="50" cy="167" r="2" fill="#8b93a7" />
        <text x="104" y="198" fill="#e6e9ef" fontFamily="var(--font-sans, sans-serif)" fontSize="15" fontWeight="600" textAnchor="middle">Browser</text>
      </g>

      {/* portbridge hub */}
      <g>
        <rect x="316" y="132" width="182" height="96" rx="16" fill="#12161f" stroke="url(#rd-hub)" strokeWidth="1.5" filter="url(#rd-glow)" />
        <circle cx="407" cy="166" r="12" fill="none" stroke="url(#rd-hub)" strokeWidth="3" />
        <circle cx="407" cy="166" r="4.5" fill="#8fe9ff" />
        <text x="407" y="200" fill="#e6e9ef" fontFamily="var(--font-sans, sans-serif)" fontSize="15" fontWeight="700" textAnchor="middle">portbridge</text>
        <text x="407" y="218" fill="#38dcf2" fontFamily="var(--font-mono, monospace)" fontSize="12.5" textAnchor="middle">:4000</text>
      </g>

      {/* Frontend node */}
      <g>
        <rect x="628" y="40" width="166" height="66" rx="12" fill="#12161f" stroke="#22d3ee" strokeOpacity="0.5" />
        <text x="711" y="70" fill="#e6e9ef" fontFamily="var(--font-sans, sans-serif)" fontSize="14" fontWeight="600" textAnchor="middle">Frontend</text>
        <text x="711" y="90" fill="#22d3ee" fontFamily="var(--font-mono, monospace)" fontSize="12.5" textAnchor="middle">:5173</text>
      </g>

      {/* Backend node */}
      <g>
        <rect x="628" y="256" width="166" height="66" rx="12" fill="#12161f" stroke="#c084fc" strokeOpacity="0.5" />
        <text x="711" y="286" fill="#e6e9ef" fontFamily="var(--font-sans, sans-serif)" fontSize="14" fontWeight="600" textAnchor="middle">Backend</text>
        <text x="711" y="306" fill="#c084fc" fontFamily="var(--font-mono, monospace)" fontSize="12.5" textAnchor="middle">:5000</text>
      </g>
    </svg>
  );
}

export default RoutingDiagram;
