/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {fontFamily: {
      roboto: ['Roboto Slab'],
      inter: ['Inter']
    }},
    colors: {
      cream: '#FAFFD8',
      mindaro: '#ECFFB0',
      ash: '#9AA899',
      violet: '#54577C',
      steel: "#4A7B9D",
      black: '#000000',
      darkGray: '#161618',
      space:'#212124',
      white: "#ffffff",
      gray: "#818181"
    },
  },
  plugins: [],
}

