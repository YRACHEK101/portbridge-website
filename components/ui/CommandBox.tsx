"use client";

import { useCopy } from "./CopyButton";

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CopyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

/**
 * The hero-grade "click to copy" install command. The whole box is a button
 * for a big, forgiving target; it announces the copied state to screen readers.
 */
export function CommandBox({
  command,
  size = "lg",
  className = "",
}: {
  command: string;
  size?: "md" | "lg";
  className?: string;
}) {
  const { copied, copy } = useCopy();
  const big = size === "lg";

  return (
    <button
      type="button"
      onClick={() => copy(command)}
      aria-label={copied ? "Copied to clipboard" : `Copy command: ${command}`}
      className={`group flex w-full items-center justify-between gap-4 rounded-xl border border-edge bg-panel/80 text-left transition-all hover:border-frontend/50 hover:shadow-glow ${
        big ? "px-5 py-4" : "px-4 py-3"
      } ${className}`}
    >
      <span className={`flex min-w-0 items-center gap-3 font-mono ${big ? "text-base sm:text-lg" : "text-sm"}`}>
        <span className="select-none text-frontend" aria-hidden>
          $
        </span>
        <span className="truncate text-ink">{command}</span>
      </span>
      <span
        className={`flex shrink-0 items-center gap-1.5 text-xs font-medium transition-colors ${
          copied ? "text-ok" : "text-ink-muted group-hover:text-ink"
        }`}
      >
        {copied ? (
          <>
            <CheckIcon className="h-4 w-4" />
            Copied!
          </>
        ) : (
          <>
            <CopyIcon className="h-4 w-4" />
            Copy
          </>
        )}
      </span>
    </button>
  );
}

export default CommandBox;
