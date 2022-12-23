/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['futura-pt', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        'green': {
          light: '#9CC9B3',
          DEFAULT: '#339966',
          dark: '#196E46'
        },
        'white': '#fff',
        'gray': {
          light: '#EFEFEF',
          DEFAULT: '#727272',
          dark: '#434343'
        },
        'error': {
          DEFAULT: '#DB243D'
        }
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms'
      }
    },
  },
  plugins: [],
}
