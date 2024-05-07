/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      proxima: ["Proxima Nova Condensed", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1780px",
        "4xl": "2160px", // only need to control product grid mode in ultra 4k device
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
