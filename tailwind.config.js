/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode based on class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define colors for light theme
        light: {
          primary: '#02A9F7', // Adjust colors as needed
          secondary: '#003852',
          gray:'#2F2F2F',
          text:'#1D1D1D',
          background:"#FFFFFF"
          // Add more colors for the light theme as needed
        },
        // Define colors for dark theme
        dark: {
          primary: '#02A9F7', // Adjust colors as needed
          secondary: '#003852',
          gray:'#2F2F2F',
          text:'#EBEBEB',
          background:"#020E14" 
        },
      },
    },
  },

  variants: {
    // extend: {
    //   // Enable dark mode variants for background and text colors
    //   backgroundColor: ['dark'],
    //   textColor: ['dark'],
    // },
  },

  plugins: [],
}