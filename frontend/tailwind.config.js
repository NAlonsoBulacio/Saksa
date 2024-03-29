/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
        'glacial': ['Glacial', 'sans-serif'],
        'glacial-bold': ['GlacialBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}