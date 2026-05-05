import type { NextConfig } from "next";
const basePath = process.env.NODE_ENV === 'production' ? '/my-app' : '';
const assetPrefix = process.env.NODE_ENV === 'production' ? '/my-app' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
};
export default nextConfig;
