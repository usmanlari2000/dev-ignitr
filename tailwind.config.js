/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "512px",
      },
      spacing: {
        5.5: "22px",
        8.5: "34px",
        17: "68px",
        27: "108px",
        152.25: "612px",
        "5.75xl": "1120px",
      },
      colors: {
        black: "rgb(23, 23, 23)",
        "light-gray": "rgba(0, 0, 0, 0.04)",
        gray: "rgb(102, 102, 102)",
      },
    },
  },
  plugins: [],
};
