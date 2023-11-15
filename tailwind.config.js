/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
    },
    fontFamily: {
      Primary: ["Inter",'sans-serif'],
      Secondary: ["Montserrat",'sans-serif'],
    },
    colors:{
      maincolor: '#33475b',
    }
  },
  
  plugins: [],
}

