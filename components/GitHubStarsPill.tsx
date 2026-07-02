import { Icons } from "./icons";
import { site } from "@/lib/site";

/** GitHub star count pill. Falls back to a plain "Star" label when unknown. */
export function GitHubStarsPill({
  stars,
  className = "",
}: {
  stars: string | null;
  className?: string;
}) {
  return (
    <a
      href={site.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        stars ? `${stars} stars on GitHub` : "Star portbridge on GitHub"
      }
      className={`group inline-flex items-center gap-2 rounded-full border border-edge bg-panel/70 py-1.5 pl-3 pr-3.5 text-sm text-ink-muted transition-colors hover:border-frontend/50 hover:text-ink ${className}`}
    >
      <Icons.github className="h-4 w-4 text-ink/80 group-hover:text-ink" />
      <span className="flex items-center gap-1">
        <Icons.star className="h-3.5 w-3.5 text-amber-300/90" />
        <span className="tabular-nums font-medium text-ink">
          {stars ?? "Star"}
        </span>
      </span>
    </a>
  );
}

export default GitHubStarsPill;
