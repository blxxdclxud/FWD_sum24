/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/blxxdclxud.github.io/hw5/" : "",
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
};
export default nextConfig;
