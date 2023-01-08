/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['roboto', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        'green': {
          light: '#43E89B',
          DEFAULT: '#1E9C61',
          dark: '#146941'
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms'
      },
      boxShadow: {
        'border': "rgba(99, 99, 99, 0.2) 0 2px 8px 0",
        'underlined': "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
      }
    },
  },
  plugins: [],
}
