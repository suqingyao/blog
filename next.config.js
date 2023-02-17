const { resolve } = require('path')
const UnoCSS = require('@unocss/webpack').default
/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['pages', 'utils', 'types', 'hooks', 'components']
  },
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: ['./']
  },
  webpack: (config, { isServer, buildId }) => {
    config.cache = false
    config.plugins.push(UnoCSS())
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname)
    }
    return config
  }
}
