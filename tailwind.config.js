/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        default: "#087f65",
      },
    },
  },
  plugins: [require("daisyui")],
};
