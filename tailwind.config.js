/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      cyan: {
        dark: '#5ba4a4',
      },
      'grayish-cyan': {
        light: '#eef6f6',
        medium: '#7b8e8e',
        dark: '#2c3a3a',
      },
      white: colors.white,
      black: colors.black,
    },
    extend: {
      fontFamily: {
        'league-sparton': "'League Spartan', sans-serif;",
      },
      fontSize: {
        base: '0.938rem',
      },
    },
  },
  plugins: [],
};
