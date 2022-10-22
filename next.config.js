const { resolve } = require('path')
const Unocss = require('@unocss/webpack').default
/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src']
  },
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {},
  webpack: (config, context) => {
    config.plugins.push(Unocss())
    if (context.buildId === 'development') {
      // * disable filesystem cache for build
      // * https://github.com/unocss/unocss/issues/419
      // * https://webpack.js.org/configuration/cache/
      config.cache = false
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname)
    }
    return config
  }
}
