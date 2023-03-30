/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  future: { webpack5: true },
  output: "export",
};

module.exports = nextConfig;
