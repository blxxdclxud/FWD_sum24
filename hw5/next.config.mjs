/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["imgs.xkcd.com"],
  },
};

export default nextConfig;
