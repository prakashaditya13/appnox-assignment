/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'innerHeader': '0px -1px 0px 0px #00000014 inset',
      }
    },
  },
  plugins: [],
}