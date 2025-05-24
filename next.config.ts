import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  images: { unoptimized: true },
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  reactStrictMode: true
};

export default nextConfig;
