const { colors: defaultColors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...defaultColors,
      black: '#120f2d',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
