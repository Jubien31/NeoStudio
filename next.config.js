/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
  // Ensure proper static paths
  trailingSlash: true,
  // Configure images for static export
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig