/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        optimusRed: "#B11226",
        optimusOrange: "#D92121",
        optimusWhite: "#D3D3D3",
        optimusGrey: "#A8A9AD",
        optimusBlue: "#0047AB",
        optimusSkyblue: "#4682BF",
      },
      fontFamily: {
        deceptibotsChromium: ["DeceptibotsChromium", "sans-serif"],
        deceptibotsHalftone: ["DeceptibotsHalftone", "sans-serif"],
        megatronCondensed: ["MegatronCondensed", "sans-serif"],
        megatronHollowCondensed: ["MegatronHollowCondensed", "sans-serif"],
        transformers: ["Transformers", "sans-serif"],
      },
    },
  },
  plugins: [],
};
