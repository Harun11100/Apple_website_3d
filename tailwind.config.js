/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:'#2397ff',
        gray:{
          default:'#83868b',
          100:'#83939d',
          200:'#afafaa',
          300: "#43435579"
        },
        zinc:'#101009'



      }
    },
  },
  plugins: [],
}

