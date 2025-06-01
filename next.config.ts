import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ohmycompany.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
