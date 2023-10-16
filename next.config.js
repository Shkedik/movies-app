/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.HOST_NAME],
  },
}

module.exports = nextConfig
