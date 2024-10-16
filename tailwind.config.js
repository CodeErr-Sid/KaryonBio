/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        futura: ["Futura W01", "Arial", "Helvetica", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        "custom-blue-1": "#1f5179",
        "custom-blue-2": "#1f709c",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(251deg, #1F3B60 16.14%, #1F80AE 88.21%)",
        "custom-gradient2":
          "linear-gradient(251deg, #1F80AE 16.14%, #1F3B60 88.21%)",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 6s steps(20) infinite alternate, blink .7s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
