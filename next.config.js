/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: 'http://localhost:3000',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.picsum.photos',
        port: '',
        pathname: '/id/**',
      },
    ],
  },
}

module.exports = nextConfig
