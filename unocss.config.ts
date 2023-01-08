import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import transformerDirectives from '@unocss/transformer-directives'

module.exports = defineConfig({
  presets: [presetUno(), presetIcons()],
  transformers: [transformerDirectives()]
})
