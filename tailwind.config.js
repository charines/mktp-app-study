/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FE5000',
        greenDark: '#43B02A',
        greenLight: '#C4D600',
        gray: '#A2AAAD',
        textLight: '#ffffff',
        textDark: '#213547',
      },
      fontFamily: {
        sans: ['Tahoma', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
