/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "316BFF",
          red: "FF543D",
          violet: "878CFF",
        },
        secondary: {
          orange: "FFAF4E",
          varient: "A4CDE3",
        },
        black: "#141416",
        gray: "#8E94A3",
        background: "#FAFBFF",
      },
    },
  },
  plugins: [],
};
