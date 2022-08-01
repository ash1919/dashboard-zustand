/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        inBlack: {
          300: "rgba(191, 195, 253, 0.08)",
          600: "#070C19",
        },
        inGrey: {
          500: "#11181F",
        },
        inYellow: {
          100: "rgba(252, 221, 163, 1)",
        },
      },
    },
  },
  plugins: [],
};
