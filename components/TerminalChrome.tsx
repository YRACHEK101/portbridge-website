import type { ReactNode } from "react";

/** Reusable macOS-style window chrome for terminal / dashboard mocks. */
export function TerminalChrome({
  title,
  children,
  className = "",
  accent = "cyan",
}: {
  title: ReactNode;
  children: ReactNode;
  className?: string;
  accent?: "cyan" | "purple";
}) {
  const glow =
    accent === "cyan" ? "shadow-glow" : "shadow-glow-purple";
  return (
    <div
      className={`panel overflow-hidden ${glow} ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-edge bg-panel-light/60 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </span>
        <span className="ml-2 flex items-center gap-2 truncate font-mono text-xs text-ink-muted">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

export default TerminalChrome;
