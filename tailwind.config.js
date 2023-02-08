const colors = require('tailwindcss/colors')

module.exports = {
  jit: true,
  content: ['./dist/*.html', './dist/*.js', './src/*.html', './src/*.js'],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1100px',
          },
          '@screen xl': {
            maxWidth: '1220px',
          },
        }
      })
    }
  ]
}
