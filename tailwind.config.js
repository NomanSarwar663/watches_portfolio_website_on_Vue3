/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      white: "#ffffff",
      black: "#000000",
      transparent: "#ffffff00",
      lightgray: {
        100: "#f7f8fa",
        200: "#f4f5f8",
        300: "#5A5A5A",
      },
      gray: "#bebebe",
      darkNight: "#0f0f0f",
    },
  },
  plugins: [],
};
