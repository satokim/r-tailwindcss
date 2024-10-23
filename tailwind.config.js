/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "#050505",
        "selected-text": "#AAA3FF",
        theme: "#5c318c",
        secondary: "#9191A4",
        badge: "#3f3f51",
        inputBorder: "#565666",
        input: "#2a2a33",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
