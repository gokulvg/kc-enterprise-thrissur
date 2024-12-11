/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-bg-color': '#973131',
        'app-text-color': ' #F5E7B2',
        'app-secondary-color': ' #F9D689',
        'app-third-color': '#E0A75E',
        'app-error-color': '#ff3333',
      },
      boxShadow: {
        'xl': '5px 5px 20px 3px rgba(0, 0, 255, .2)',
        'xlhover': '5px 5px 20px 3px #F5E7B1',
      },
      fontFamily: {
        'main-heading': ["Bebas Neue",'sans-serif'],
        'sub-heading': ["Montserrat",'sans-serif'],
      },
    },
  },
  plugins: [],
}

