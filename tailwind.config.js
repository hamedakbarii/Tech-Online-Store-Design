/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens : {
        'lgHeader' : '1024px' , 
        'xlHeader' : '1280px' , 
      } , 
      colors: {
        'secondaryBlue': '#0156FF',
      },
    },
  },
  plugins: [],
};
