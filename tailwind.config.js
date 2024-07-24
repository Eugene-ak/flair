/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "2-auto": "minmax(12rem, 17rem) minmax(20rem, 38rem)",
        "2-columns": "repeat(2, 1fr)",
        "3-columns": "50px 1fr 50px"
      },
      gridTemplateRows: {
        "2-rows": "repeat(2, 1fr)"
      },
      fontSize: {
        "clamp-heading": "clamp(2rem, 5vw, 3.5rem)",
        "clamp-paragraph": "clamp(1.2rem, 4vw, 2.25rem)"
      }
    },
  },
  plugins: [],
}

