import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        caramel: "#A0622E",
        "dark-brown": "#3D2B1F",
        gold: "#D4A855",
        cream: "#FDF8F3",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        noto: ['"Noto Serif JP"', "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
