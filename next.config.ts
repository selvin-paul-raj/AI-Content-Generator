import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn-icons-png.flaticon.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
},
};

export default nextConfig;
