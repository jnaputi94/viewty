/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "Arial", "sans-serif"],
      },
      colors: {
        "brand-gray-1": "#dadce0",
        "brand-blue-1": "#1967d2",
        "brand-green-1": "#137333",
      },
      boxShadow: {
        white: "0 0 3px 3px #E7E7E7",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      margin: ["first"],
    },
  },
};
