/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  assetPrefix: "./",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["imgs.xkcd.com"],
  },
};

export default nextConfig;
