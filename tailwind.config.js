const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      main: "#27F5D0",
      transparent: "transparent",
      pink: "#FE3991",
      purple: "#BF2EFD",
      indigo: "#28247E",
      black: colors.black,
      blue: "#5849EB",
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      yellow: colors.yellow,
      red: colors.red,
      green: colors.green,
    },
    screens: {
      ic: "375px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      "3xl": "2600px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
