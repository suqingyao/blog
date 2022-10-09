const { resolve } = require('path')
const Unocss = require('@unocss/webpack').default
const presetUno = require('@unocss/preset-uno').default()
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src']
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, context) => {
    config.plugins.push(Unocss({ presets: [presetUno] }))
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

module.exports = nextConfig
