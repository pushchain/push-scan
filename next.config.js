/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
  basePath: '/push-analytics-dashboard', // Set this to the repo name if deploying to a subdirectory
  assetPrefix: '/push-analytics-dashboard', // Ensures assets are served from the correct path
};

module.exports = nextConfig;
