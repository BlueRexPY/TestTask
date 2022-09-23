/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  node :{
    fs: 'empty'
  }
}

module.exports = nextConfig
