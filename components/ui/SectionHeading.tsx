import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Consistent centered section header: eyebrow · gradient title · lead text. */
export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-frontend">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {children && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
          {children}
        </p>
      )}
    </Reveal>
  );
}

export default SectionHeading;
