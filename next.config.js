/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["api-bwa-storegg.herokuapp.com"],
  },
};

module.exports = nextConfig;
