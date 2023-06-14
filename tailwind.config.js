/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      }
      
    },
  },
  plugins: [ require('@tailwindcss/postcss7-compat'),],
}