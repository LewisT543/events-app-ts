/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'wembleypark.com',
      'rickandmortyapi.com'
    ],
    loader: 'custom',
    path: '/'
  }
}

module.exports = nextConfig
