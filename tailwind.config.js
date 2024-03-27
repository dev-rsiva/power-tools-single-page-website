/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        LeagueSpartan: ["League Spartan", "sans-serif"],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        primOrange: "#F29C38",
        seconBlue: "#05204A",
        seconLightBlue: "#05398BE",
        seconDarkPink: "#AA1155",
      },
    },
  },
  plugins: [],
};
