const { resolve } = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname)
    }
    return config
  }
}

module.exports = nextConfig
