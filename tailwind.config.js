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
          md: '#C5C5C5',
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
      },
      boxShadow: {
        'border': "rgba(99, 99, 99, 0.2) 0 2px 8px 0"
      }
    },
  },
  plugins: [],
}
