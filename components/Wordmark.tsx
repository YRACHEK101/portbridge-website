import Logo from "./Logo";

/**
 * The portbridge lockup: the merging-streams mark next to the wordmark
 * ("port" in muted ink, "bridge" in the signature gradient).
 */
export function Wordmark({
  className = "",
  markClassName = "h-7 w-7",
  textClassName = "text-lg",
  showText = true,
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  showText?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Logo className={markClassName} />
      {showText && (
        <span className={`font-semibold tracking-tight ${textClassName}`}>
          <span className="text-ink/90">port</span>
          <span className="text-gradient">bridge</span>
        </span>
      )}
    </span>
  );
}

export default Wordmark;
