"use client";

import { useId, useRef, useState, type ReactNode } from "react";

export type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

/** Accessible tab group with full arrow-key navigation (WAI-ARIA pattern). */
export function Tabs({ tabs, className = "" }: { tabs: Tab[]; className?: string }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = (i: number) => {
    const next = (i + tabs.length) % tabs.length;
    setActive(next);
    btnRefs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      focusTab(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusTab(active - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(tabs.length - 1);
    }
  };

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label="Package manager"
        onKeyDown={onKeyDown}
        className="inline-flex items-center gap-1 rounded-xl border border-edge bg-panel/70 p-1"
      >
        {tabs.map((tab, i) => {
          const selected = i === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                btnRefs.current[i] = el;
              }}
              role="tab"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
                selected
                  ? "bg-panel-light text-ink shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={i !== active}
          className="mt-4"
        >
          {i === active && tab.content}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
