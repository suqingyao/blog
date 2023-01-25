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
    },
    animation: {
      keyframes: {
        floating: `{
          0%: { transform: translate(0, 0) },
          100%: { transform: translate(0, 10%) }
        }`
      },
      durations: {
        floating: '4s'
      },
      timingFns: {
        floating: 'ease-in-out'
      },
      counts: {
        floating: 'infinite'
      }
    }
  },
  rules: [],
  presets: [presetUno(), presetIcons()],
  transformers: [transformerDirectives()]
})
