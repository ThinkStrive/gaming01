/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#2893F5",
        customGray: "#D9D9D9",
        customPurple: "#52085D",
        customRed: "#FF3B30",
        customBlack: "#000000",
        customGreen: "#00A843",
        customYellow: "#FFEB3B",
        customHistory: "#A82026",
        deepPurple: "#3A3B5A",
        darkNavy: "#0A1F44",
        primaryTxt: "#FFFFFF",
        secondaryTxt: "#EAEAEA",
        softBlue: "#007AFF",
        neonGreen: "#4CD964",
        brightRed: "#FF3B30",
        goldenYellow: "#FFC107",
        off_white: "#F5F5F5",
        customSandle: "#FFFBE3",
        darkBlue: "#0D47A1",
        mediumBlue: "#42A5F5",
        lightBlue: "#BBDEFB",
        normalRed: "#EF5350",
        lightGreen: "#C8E6C9",
        lightBlue1:"#B3E5FC",
        mediumBlue1:"#2196F3",
        darkBlue1:"#0D47A1",
        superPurple:"#7F00FF"
        
      },
      backgroundImage: {
        'purplegrad2': 'linear-gradient(90deg, rgba(2,0,36,1) 16%, rgba(82,9,121,1) 80%, rgba(124,0,255,1) 100%)',
        'purplegrad': 'radial-gradient(circle, rgba(124,0,255,1) 0%, rgba(82,9,121,1) 0%, rgba(2,0,36,1) 100%)',
        'hotRed': "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(252,176,69,1) 0%, rgba(253,29,29,1) 100%)",
        'coldBlue':"linear-gradient(90deg, rgba(54,150,249,1) 0%, rgba(0,228,255,1) 30%, rgba(27,157,241,1) 100%)",
        'stable':"linear-gradient(90deg, rgba(249,168,54,1) 0%, rgba(255,218,0,1) 30%, rgba(241,159,27,1) 100%)",
        'lastHlow':" linear-gradient(90deg, rgba(160,249,54,1) 0%, rgba(255,252,0,1) 30%, rgba(241,188,27,1) 100%)",
        'lastHmedium':"linear-gradient(90deg, rgba(249,132,54,1) 0%, rgba(255,235,0,1) 75%, rgba(241,87,27,1) 100%)",
        'lastHhigh':'linear-gradient(90deg, rgba(178,181,181,1) 0%, rgba(0,95,255,1) 53%, rgba(176,183,186,1) 100%)',
        'Banker':'linear-gradient(90deg, rgba(111,3,3,1) 0%, rgba(205,38,38,1) 65%, rgba(116,15,15,1) 100%)',
        'Player':' linear-gradient(90deg, rgba(4,12,94,1) 0%, rgba(23,70,235,1) 55%, rgba(9,60,139,1) 100%)',
        'Tie':' linear-gradient(107deg, rgba(9,112,22,0.9669117647058824) 0%, rgba(35,196,9,0.9921218487394958) 17%, rgba(20,93,36,1) 100%)',
        // 'purpleGradiant':"linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%)"
        "purpleGradiant":"linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%)"

      },
      screens: {
        "custom-md": "930px", // Custom breakpoint for right panel
        "custom-sm":"500px"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",], // Add your chosen themes here
  },
 
};
