/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    fontFamily: {
      display: ["Feature mono medium", "monospace"],
    },
    extend: {
      screens: {
        sm: "576px",
      },
      colors: {
        "ace-gold": "#DEAA4C",
        "ace-black": "#272A34",
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
