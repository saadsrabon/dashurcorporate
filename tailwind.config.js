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
          primary: '#3B82F6', // Adjust colors as needed
          secondary: '#F59E0B',
          // Add more colors for the light theme as needed
        },
        // Define colors for dark theme
        dark: {
          primary: '#10B981', // Adjust colors as needed
          secondary: '#FBBF24',
          // Add more colors for the dark theme as needed
        },
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

  plugins: [],
}