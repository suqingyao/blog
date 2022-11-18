const { resolve } = require('path')
const Unocss = require('@unocss/webpack').default
const { i18n } = require('./next-i18next.config')
/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src']
  },
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: ['./src']
  },
  i18n,
  webpack: (config, { isServer, buildId }) => {
    config.plugins.push(Unocss())
    if (buildId === 'development') {
      // * disable filesystem cache for build
      // * https://github.com/unocss/unocss/issues/419
      // * https://webpack.js.org/configuration/cache/
      config.cache = false
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, 'src'),
      '@root': resolve(__dirname)
    }
    return config
  }
}
