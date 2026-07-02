import { ImageResponse } from "next/og";

export const alt = "portbridge — one port for your whole stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The logo mark, inlined as a data URI so the OG renderer needs no network.
const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="180" height="180">
  <defs>
    <linearGradient id="t" x1="2" y1="14" x2="30" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#22d3ee" stop-opacity="0.2"/><stop offset="1" stop-color="#22d3ee"/></linearGradient>
    <linearGradient id="b" x1="2" y1="34" x2="30" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#c084fc" stop-opacity="0.2"/><stop offset="1" stop-color="#c084fc"/></linearGradient>
    <linearGradient id="r" x1="30" y1="12" x2="46" y2="36" gradientUnits="userSpaceOnUse"><stop stop-color="#38dcf2"/><stop offset="1" stop-color="#c084fc"/></linearGradient>
    <radialGradient id="c" cx="0.5" cy="0.5" r="0.5"><stop stop-color="#eafbff"/><stop offset="0.55" stop-color="#8fe9ff"/><stop offset="1" stop-color="#c084fc" stop-opacity="0.2"/></radialGradient>
  </defs>
  <g stroke-linecap="round" fill="none" stroke-width="3.2">
    <path d="M3 15 C 16 15, 22 20, 33 24" stroke="url(#t)"/>
    <path d="M3 33 C 16 33, 22 28, 33 24" stroke="url(#b)"/>
  </g>
  <circle cx="34" cy="24" r="10" stroke="url(#r)" stroke-width="3.4" fill="none"/>
  <circle cx="34" cy="24" r="4.4" fill="url(#c)"/>
</svg>`;

const LOGO_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(LOGO_SVG)}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(1000px 500px at 20% 0%, rgba(56,220,242,0.18), transparent 60%), radial-gradient(900px 500px at 90% 100%, rgba(192,132,252,0.20), transparent 60%), linear-gradient(180deg, #0b0d14 0%, #0f1117 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_DATA_URI} width={132} height={132} alt="" />
          <div style={{ display: "flex", fontSize: 88, fontWeight: 800, letterSpacing: -3 }}>
            <span style={{ color: "#e6e9ef" }}>port</span>
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #38dcf2, #c084fc)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              bridge
            </span>
          </div>
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 60,
            fontWeight: 700,
            color: "#f4f7fb",
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          One port for your whole stack.
        </div>

        <div style={{ marginTop: 24, fontSize: 30, color: "#8b93a7", maxWidth: 940 }}>
          Run your frontend + backend dev servers behind a single port — no CORS,
          merged logs, and a live request dashboard.
        </div>

        <div
          style={{
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 30,
            fontFamily: "monospace",
            color: "#22d3ee",
            border: "1px solid #232838",
            background: "#12161f",
            borderRadius: 14,
            padding: "16px 26px",
            alignSelf: "flex-start",
          }}
        >
          <span style={{ color: "#8b93a7" }}>$</span>
          <span>npm i -g portbridge</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
