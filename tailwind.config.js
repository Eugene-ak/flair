/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "2-columns": "repeat(2, 1fr)"
      },
      gridTemplateRows: {
        "2-rows": "repeat(2, 1fr)"
      }
    },
  },
  plugins: [],
}

