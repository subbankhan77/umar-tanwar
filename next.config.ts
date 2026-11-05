import type { NextConfig } from "next";

const config: NextConfig = {
  // A package-lock.json in the home folder would otherwise be picked as the workspace root.
  turbopack: { root: process.cwd() },
};

export default config;
