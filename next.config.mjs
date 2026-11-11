/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
      },
      {
        protocol: "https",
        hostname: "streak-stats.demolab.com",
      },
      {
        protocol: "https",
        hostname: "komarev.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "reactnative.dev",
      },
    ],
  },
};

export default nextConfig;
