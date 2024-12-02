/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  devIndicators: {
    buildActivity: false,
  },
  // Access the NEXT_PUBLIC_BASE_PATH environment variable
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', // Default to empty if not defined
  // You can also use assetPrefix to set the base path for static assets
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  },
};

module.exports = nextConfig;
