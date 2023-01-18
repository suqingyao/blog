import {
  defineConfig,
  presetUno,
  presetIcons,
  transformerDirectives
} from 'unocss'

module.exports = defineConfig({
  presets: [presetUno(), presetIcons()],
  transformers: [transformerDirectives()]
})
