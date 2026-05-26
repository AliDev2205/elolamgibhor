import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 500,
        aggregateTimeout: 200,
        ignored: ['**/node_modules', '**/.next'],
      };
    }
    return config;
  },
  onDemandEntries: {
    maxInactiveAge: 5 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;