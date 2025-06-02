import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ohmycompany.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "ohmycompany.imgix.net",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
