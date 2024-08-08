/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        5.5: "22px",
        8.5: "34px",
        12.5: "50px",
        17: "68px",
        27: "108px",
        "6.25xl": "1184px",
      },
      fontSize: {
        "0.5sm": ["15px", "22px"],
        "1.5xl": ["22px", "30px"],
        "4.25xl": ["39px", "1"],
        "5.5xl": ["54px", "1"],
      },
    },
  },
  plugins: [],
};
