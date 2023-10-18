/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      overpass: ["Overpass", "sans-serif"],
    },
    fontSize: {
      base: "1rem",
      "2xl": "1.75rem",
    },
    colors: {
      orange: "hsl(25, 97%, 53%)",
      white: "hsl(0, 0%, 100%)",
      "light-grey": "hsl(217, 12%, 63%)",
      "medium-grey": "hsl(213, 19%, 18%)",
      "dark-blue": "hsl(215, 20%, 16%)",
      "very-dark-blue": "hsl(228, 11%, 8%)",
    },

    extend: {},
  },
  plugins: [],
};

