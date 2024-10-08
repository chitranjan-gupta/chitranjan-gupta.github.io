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
    ],
  },
};

export default nextConfig;
