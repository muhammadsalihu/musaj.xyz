/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#E8262D',
          light: '#FEE2E2',
        },
        dark: '#0F1523',
        surface: '#F8F9FA',
      },
    },
  },
  plugins: [],
}