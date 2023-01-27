import {
  defineConfig,
  presetUno,
  presetIcons,
  presetWebFonts,
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
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      fonts: {
        sans: ['IBM Plex Sans', 'Outfit'],
        mono: ['IBM Plex Sans:400,500,600,700', 'Outfit:400,700']
      }
    })
  ],
  transformers: [transformerDirectives()]
})
