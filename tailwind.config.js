const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),],
    
  theme: {
    extend: {
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;',
      },
      animation: {
        showup: 'showup 10s infinite',
        reveal: 'reveal 10s infinite',
        slideIn: 'slideIn 10s infinite',
      },

      keyframes: {
        showup: {
          '0%': { opacity:'0' },
          '20%': { opacity:'1' },
          '80%': { opacity:'1' },
          '100%': { opacity:'0' },
        },
        reveal: {
          '0%': { opacity:'0', width:'0px' },
          '20%': { opacity:'1', width:'0px' },
          '30%': { width:'400px' },
          '80%': { opacity:'1' },
          '100%': { opacity:'0', width:'400px' },
        },
        slideIn: {
          '0%': { marginLeft:'-800px' },
          '20%': { marginLeft:'-800px' },
          '35%': { marginLeft:'0px' },
          '100%': { marginLeft:'0px' },
        },

      },
      
      
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

