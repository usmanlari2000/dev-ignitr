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
        "2xs": "384px",
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
      fontSize: {
        "1.5xl": ["22px", "30px"],
        "2.5xl": ["27px", "34px"],
        "3.5xl": ["33px", "38px"],
        "4.5xl": ["42px", "1"],
      },
      colors: {
        black: "rgb(23, 23, 23)",
        gray: "rgb(102, 102, 102)",
        "light-gray": "rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
