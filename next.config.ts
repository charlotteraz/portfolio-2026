import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // S3 static website hosting has no rewrite/server layer — every route
  // needs a real "<route>/index.html" file (hence trailingSlash), and
  // next/image's optimizer requires a server we won't have.
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 100],
  },
};

export default nextConfig;
