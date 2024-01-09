/* eslint-disable no-undef */
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
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        // 'sans' is used as the default font-family, you can also customize other font families like 'serif' or 'mono' here
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        // You can add additional font families here as needed
      },
    },
  },

  variants: {
    extend: {
      // Enable dark mode variants for background and text colors
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}