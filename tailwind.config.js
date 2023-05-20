/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        judul: ["Instrument Serif", "serif"],
        blog: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#111111",
      },
    },
  },
  plugins: [],
};
