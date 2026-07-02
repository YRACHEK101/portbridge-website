import type { Config } from "tailwindcss";

/**
 * portbridge brand design tokens.
 * Signature gradient: #38dcf2 → #c084fc (frontend cyan → backend purple).
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        base: {
          DEFAULT: "#0b0d14",
          900: "#0b0d14",
          800: "#0f1117",
        },
        // Panels / cards
        panel: {
          DEFAULT: "#12161f",
          light: "#171a23",
        },
        edge: "#232838",
        // Accents
        frontend: "#22d3ee", // cyan
        backend: "#c084fc", // purple
        grad: {
          from: "#38dcf2",
          to: "#c084fc",
        },
        // Text
        ink: {
          DEFAULT: "#e6e9ef",
          muted: "#8b93a7",
        },
        ok: "#4ade80",
        err: "#f87171",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #38dcf2 0%, #c084fc 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(56,220,242,0.15) 0%, rgba(192,132,252,0.15) 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56,220,242,0.10), 0 20px 60px -20px rgba(56,220,242,0.25)",
        "glow-purple":
          "0 0 0 1px rgba(192,132,252,0.10), 0 20px 60px -20px rgba(192,132,252,0.25)",
        panel: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 24px 60px -30px rgba(0,0,0,0.8)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.4)", opacity: "0" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        blink: "blink 1s step-end infinite",
        "gradient-shift": "gradient-shift 6s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
