/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/FWD_Sum24/hw5/out",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["imgs.xkcd.com"],
  },
};

export default nextConfig;
