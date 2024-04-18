/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkGreyish: "#333333",
        lightGrey: "#CCCCCC",
        accentColorOne: "#FF5733",
        accentColorTwo: "#66CCCC",
      },
    },
    screens: {
      lg: { max: "2023px" },
      sm: { max: "1068px" },
    },
    flexDirection: ["responsive"],
  },
  plugins: [],
};
