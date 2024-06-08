/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      main: {
        primary: "#df0000",
        secondery: "#9e0000",
        third: "#000000",
        fourth: "#ffffff",
      },
      side: {
        first: "#464646",
        second: "#d48f11"
      }
    },
    size: {
      "1.5x": "150%"
    },
  },
  plugins: [],
};
