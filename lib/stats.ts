import { site } from "./site";

export type Stats = {
  stars: number | null;
  downloads: number | null;
};

// Revalidate at most once per hour (ISR). Both fetches fail soft: a null
// result simply hides the number rather than blocking or breaking render.
const REVALIDATE_SECONDS = 60 * 60;

async function fetchStars(): Promise<number | null> {
  try {
    const res = await fetch(site.githubApi, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { stargazers_count?: number };
    return typeof data.stargazers_count === "number"
      ? data.stargazers_count
      : null;
  } catch {
    return null;
  }
}

async function fetchDownloads(): Promise<number | null> {
  try {
    const res = await fetch(site.npmDownloads, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { downloads?: number };
    return typeof data.downloads === "number" ? data.downloads : null;
  } catch {
    return null;
  }
}

/** Fetch live-ish project stats at build time; never throws. */
export async function getStats(): Promise<Stats> {
  const [stars, downloads] = await Promise.all([
    fetchStars(),
    fetchDownloads(),
  ]);
  return { stars, downloads };
}

/** 1234 → "1.2k", 999 → "999". Returns null when count is unknown. */
export function formatCompact(n: number | null): string | null {
  if (n == null) return null;
  if (n < 1000) return String(n);
  if (n < 1_000_000) {
    const v = n / 1000;
    return `${v >= 100 ? Math.round(v) : v.toFixed(1).replace(/\.0$/, "")}k`;
  }
  const v = n / 1_000_000;
  return `${v.toFixed(1).replace(/\.0$/, "")}M`;
}
