/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/index.css'],
  theme: {
    extend: {
      fontFamily: {
        // eslint-disable-next-line no-undef
        sans: ['Poppins', ...defaultTheme.fontFamily.sans], // Usa "Poppins" como en el XD
      },
      colors: {
        primary: '#f58435', // Naranja principal del fondo
        secondary: '#ffffff', // Blanco
      },
    },
  },
  plugins: [],
}
