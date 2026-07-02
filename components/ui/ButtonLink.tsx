import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all focus-visible:outline-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-gradient text-[#08111a] font-semibold hover:shadow-glow hover:brightness-110",
  outline:
    "border border-edge bg-panel/50 text-ink hover:border-frontend/50 hover:bg-panel-light/60",
  ghost: "text-ink-muted hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-[15px]",
};

/** Anchor styled as a button. External links get the right rel/target. */
export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  external,
  className = "",
  href,
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const extProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...extProps}
      {...rest}
    >
      {children}
    </a>
  );
}

export default ButtonLink;
