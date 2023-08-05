/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    fontFamily: {
      display: ["Bebas Neue"],
    },
    extend: {
      screens: {
        sm: "576px",
      },
      colors: {
        "ace-gold": "#A6945B",
        "ace-black": "#2E2E2E",
        "ace-darker": "#21292A",
      },
      keyframes: {
        moveIn: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%,": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        moveIn: "moveIn 650ms ease-in-out",
      },
    },
  },
  plugins: [],
};
