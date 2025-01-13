/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6138', // Laranja
        secondary: '#43B02A', // Verde Escuro
        accent: '#C4D600', // Verde Claro
        neutral: '#A2AAAD', // Cinza Neutro
        base: '#ffffff', // Fundo principal
        "gray-50": "#C1C1C1",
        "orange-50": "#FFEFEB"
      },
      fontFamily: {
        primary: ['Myriad MM', 'Tahoma', 'sans-serif'],
        secondary: ['Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        dsoptheme: {
          "primary": "#FF6138", // Laranja
          "secondary": "#43B02A", // Verde Escuro
          "accent": "#C4D600", // Verde Claro
          "neutral": "#A2AAAD", // Cinza Neutro
          "base-100": "#ffffff", // Fundo principal
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
          "gray-50": "#C1C1C1",
          "orange-50": "#FFEFEB",
        },
      },
      "dark",    // Tema escuro padrão do daisyUI
      "cupcake"  // Tema claro e pastel do daisyUI
    ],
  },
}
