/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm-mobile': '0px',
      'mobile': '320px',
      'sm': '640px',
      'md': '800px',
      'lg': '1025px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        blue: {
          300: '#6FBEF3',
          500: '#1f8dd6',
          700: '#2d3e50'
        },
        gray: {
          700: '#282832'
        },
        red: {
          500: '#a92727',
          700: '#77181e'
        },
        white: {
          100: '#fff',
          500: '#dee7e7',
          700: '#c6d6d6'
        }
      }
    },
  },
  plugins: [],
}
