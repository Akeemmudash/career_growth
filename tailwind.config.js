/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      red: colors.red,
      "dark-blue": {
        100: "#FBFDFF",
        200: "#F3F7FF",
        300: "#E6EEFF",
        400: "#3F5482",
        500: "#2F334D",
        600: "#14213D",
      },
      "sky-blue": {
        100: "#32A6FD",
        200: "#01E4FD",
        300: "#01A1FC",
      },
    },
    extend: {},
  },
  plugins: [],
};
