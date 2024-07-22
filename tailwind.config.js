/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: { fade: "fadeIn 0.7s ease-in-out" },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slide: {
          from: { translateX: "-100%" },
          to: { translateX: "0%" },
        },
      },
      transitionProperty: { height: "height" },
      colors: { "opacity-modal": "rgba(0,0,0,0.5)" },
    },
  },
  plugins: [],
};
