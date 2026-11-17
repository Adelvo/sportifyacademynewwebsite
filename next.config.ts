import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // 75 is the default for every photo; 90 is used only for the full-width homepage hero.
    qualities: [75, 90],
  },
};

export default nextConfig;
