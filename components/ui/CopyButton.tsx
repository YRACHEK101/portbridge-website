"use client";

import { useCallback, useEffect, useRef, useState } from "react";

async function copyText(text: string) {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to legacy path */
  }
  // Legacy fallback for non-secure contexts.
  try {
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    return true;
  } catch {
    return false;
  }
}

/** Small hook powering every copy interaction; returns a 2s "copied" latch. */
export function useCopy(timeout = 2000) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = useCallback(
    async (text: string) => {
      const ok = await copyText(text);
      if (ok) {
        setCopied(true);
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), timeout);
      }
      return ok;
    },
    [timeout],
  );

  return { copied, copy };
}

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

export function CopyButton({
  value,
  label = "Copy",
  className = "",
  iconOnly = false,
}: {
  value: string;
  label?: string;
  className?: string;
  iconOnly?: boolean;
}) {
  const { copied, copy } = useCopy();

  return (
    <button
      type="button"
      onClick={() => copy(value)}
      aria-label={copied ? "Copied to clipboard" : `Copy: ${value}`}
      data-copied={copied}
      className={`group inline-flex items-center gap-1.5 rounded-lg border border-edge bg-panel-light/60 px-2.5 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-frontend/50 hover:text-ink focus-visible:text-ink ${className}`}
    >
      {copied ? (
        <CheckIcon className="h-3.5 w-3.5 text-ok" />
      ) : (
        <CopyIcon className="h-3.5 w-3.5" />
      )}
      {!iconOnly && (
        <span className={copied ? "text-ok" : ""}>
          {copied ? "Copied!" : label}
        </span>
      )}
    </button>
  );
}

export default CopyButton;
