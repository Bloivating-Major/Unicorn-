/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: {
          dark: "#191919",
          dull: "#4C4C4C",
        },
        blue: {
          lighter: "#D4CDF9",
        },
        neutral: {
          lighter: "#F2F2F2",
        },
      },
    },
  },
  plugins: [],
};
