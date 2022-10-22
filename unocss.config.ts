import { defineConfig } from 'unocss'
const presetUno = require('@unocss/preset-uno').default()
const presetIcon = require('@unocss/preset-icons').default()

module.exports = defineConfig({
  presets: [presetUno, presetIcon]
})
