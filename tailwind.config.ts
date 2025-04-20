import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        maxWidth: "1535px",
      },
    },
    extend: {
      screens: {
        "3xl": "1800px",
      },
      fontFamily: {
        custom: ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        turquoise: "#0ae4d0",
        midnightBlue: "#21167A",
        cornflowerBlue: "#7284f9",
        delftBlue: "#3a415b",
        coolGray: "#D7D7DA",
      },
    },
  },
  plugins: [],
} satisfies Config;
