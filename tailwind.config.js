/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#2893F5",
        customGray: "#D9D9D9",
        customPurple: "#52085D",
        customRed: "#FF0000",
        customGreen: "#00BF00",
        customHistory: "#A82026",
      },
    },
  },
  plugins: [],
};
