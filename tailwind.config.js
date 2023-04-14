/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens : {
        'phone' : '400px' ,
        'tablet' : '500px' , 
        'lgHeader' : '1024px' , 
        'xlHeader' : '1280px' , 
      } , 
      colors: {
        'secondaryBlue': '#0156FF',
      },
      keyframes: {
        Accardion: {
          '0%': { opacity : `${0}` },
          '100%': { opacity : `${1}` },
        },
        Opacity : {
          '0%' : {} ,
          '100%' : {} , 
        }
      },
      animation: {
        'Accardion': 'Accardion .3s ease forwards',
        'Opacity': 'Opacity .6s ease forwards',
      },
    },
  },
  plugins: [],
};
