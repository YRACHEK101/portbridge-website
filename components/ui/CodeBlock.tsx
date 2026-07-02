import type { ReactNode } from "react";
import { CopyButton } from "./CopyButton";

/**
 * A framed code block with an optional title bar and a copy button.
 * Pass pre-colored markup via `children`; `code` is what gets copied.
 */
export function CodeBlock({
  code,
  children,
  filename,
  lang,
  className = "",
}: {
  code: string;
  children?: ReactNode;
  filename?: string;
  lang?: string;
  className?: string;
}) {
  const showHeader = Boolean(filename || lang);

  return (
    <div className={`panel overflow-hidden ${className}`}>
      {showHeader && (
        <div className="flex items-center justify-between border-b border-edge bg-panel-light/50 px-4 py-2.5">
          <div className="flex items-center gap-2 text-xs text-ink-muted">
            {filename && (
              <span className="font-mono text-ink/80">{filename}</span>
            )}
            {lang && !filename && (
              <span className="uppercase tracking-wider">{lang}</span>
            )}
          </div>
          <CopyButton value={code} />
        </div>
      )}
      <div className="relative">
        {!showHeader && (
          <div className="absolute right-3 top-3 z-10">
            <CopyButton value={code} iconOnly />
          </div>
        )}
        <pre className="scrollbar-brand overflow-x-auto px-4 py-4 text-[13px] leading-relaxed">
          <code className="font-mono text-ink/90">{children ?? code}</code>
        </pre>
      </div>
    </div>
  );
}

export default CodeBlock;
