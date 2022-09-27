/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggleItem: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
      },
    },
    animation: {
      wiggleItem: "wiggleItem 300ms ease-in-out",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
};
