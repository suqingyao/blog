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
    ],
    [
      'animate-floating',
      {
        animation: 'floating 4s ease-in-out infinite alternate'
      }
    ]
  ],
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
