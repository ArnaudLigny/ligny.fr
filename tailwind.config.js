const colors = require('tailwindcss/colors');

module.exports = {
  presets: [
    require('./themes/links/tailwind.preset.js')
  ],
  content: [
    './layouts/**/*.html.twig',
    './themes/**/layouts/**/*.html.twig',
  ],
  theme: {
    extend: {
      // https://tailwindcss.com/docs/customizing-colors
      colors: {
        //primary: colors.blue,
        primary: {
          50: "#EBF3FE",
          100: "#D8E6FD",
          200: "#B1CEFB",
          300: "#8AB5FA",
          400: "#639CF8",
          500: "#3B82F6",
          600: "#0B60EA",
          700: "#0848B0",
          800: "#053075",
          900: "#03183B",
          950: "#010C1D"
        },
        secondary: colors.slate,
      },
    },
  }
}
