/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configure images for static export
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // Ensure proper static paths
  trailingSlash: true,
}

module.exports = nextConfig