const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './layouts/**/*.html.twig',
  ],
  theme: {
    extend: {
      colors: {
        // https://tailwindcss.com/docs/customizing-colors
        //primary: colors.sky,
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
        neutral: colors.slate,
        social: {
          twitter: '#1da1f2',
          github: '#333',
          linkedin: '#0077b5',
          instagram: '#c13584',
          youtube: '#ff0000',
          mastodon: '#6364FF',
          steam: '#171A21',
          bluesky: '#1285FE',
          threads: '#000',
        },
      },
    },
  },
}
