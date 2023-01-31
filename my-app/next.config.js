/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['lifeadmin-app.s3.me-south-1.amazonaws.com', 'picsum.photos'],
  },
}

module.exports = nextConfig
