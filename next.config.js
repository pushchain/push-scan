/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  devIndicators: {
    buildActivity: false,
  },
  // Access the NEXT_PUBLIC_BASE_PATH environment variable
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined, // Default to empty if not defined
  // You can also use assetPrefix to set the base path for static assets
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || undefined,

  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://donut.push.network',
        permanent: true, // 308
      },
    ];
  },
};

module.exports = nextConfig;
