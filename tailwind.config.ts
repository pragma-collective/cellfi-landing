import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '120px',
      screens: {
        'maxWidth': '1440px'
      },
    },
    extend: {
      fontFamily: {
        custom: ['Barlow Condensed', 'sans-serif']
      },
      colors: {
      turquoise: '#0ae4d0',
      midnightBlue: '#21167A',
      cornflowerBlue: '#7284f9',
      delftBlue: '#3a415b',
      coolGray: '#9fa0ad'
    },
    },
  },
  plugins: [],
} satisfies Config;
