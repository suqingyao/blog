import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives
} from 'unocss'

module.exports = defineConfig({
  presets: [presetUno(), presetIcons()],
  transformers: [transformerDirectives()]
})
