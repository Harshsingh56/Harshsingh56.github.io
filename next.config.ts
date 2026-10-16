import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build a fully static site into the `out/` folder (no server needed).
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
