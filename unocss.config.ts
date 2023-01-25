import {
  defineConfig,
  presetUno,
  presetIcons,
  transformerDirectives
} from 'unocss'

module.exports = defineConfig({
  shortcuts: {},
  theme: {
    colors: {
      primary: '#6366f1'
    }
  },
  presets: [presetUno(), presetIcons()],
  transformers: [transformerDirectives()]
})
