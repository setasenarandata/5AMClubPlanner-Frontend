/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/index.js"
  ],
  theme: {
    extend: {
      height: {
        "18px": "18px",
      },
      width: {
        "18px": "18px",
      },
      screens: {'sm': { 'max' : '640px' }}
    },
  },
  plugins: [],
}
