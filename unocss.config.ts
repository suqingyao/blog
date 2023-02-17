import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

module.exports = defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom'
      }
    }),
    presetTypography({
      selectorName: 'markdown',
      cssExtend: {
        code: {
          color: '#8b5cf6'
        },
        'a:hover': {
          color: '#f43f5e'
        },
        'a:visited': {
          color: '#14b8a6'
        }
      }
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['IBM Plex Sans', 'Outfit']
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: {},
  theme: {
    colors: {
      primary: {
        50: '#F2FDF9',
        100: '#E6FCF3',
        200: '#BFF6E0',
        300: '#99F1CD',
        400: '#4DE7A8',
        DEFAULT: '#00DC82',
        600: '#00C675',
        700: '#00844E',
        800: '#00633B',
        900: '#004227'
      }
    },
    animation: {
      keyframes: {
        floating: `{
          0% { transform: translate(0, 0) }
          100% { transform: translate(0, 10%) }
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
  rules: [
    [
      'divider',
      {
        boxSizing: 'content-box',
        margin: '3rem 0',
        height: '1px'
      },
      { layer: 'components' }
    ]
  ]
})
