/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-in-out',
      },
      backgroundImage: {
        'herobg': "url('/assets/images/herobg.png')", // Replace with the correct file path
      },
      colors: {
        'primary-orange': '#FF5722',
      },
      
    },
  },
  
  plugins: [],
}