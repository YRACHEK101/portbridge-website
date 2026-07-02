import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root to this project (a stray lockfile lives in $HOME).
  outputFileTracingRoot: projectRoot,
  // Ignore the unrelated sibling project when tracing the file system.
  outputFileTracingExcludes: {
    "*": ["./ai-dev-team/**/*"],
  },
};

export default nextConfig;
