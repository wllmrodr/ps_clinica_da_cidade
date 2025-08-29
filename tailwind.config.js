export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Mantém a fonte padrão
        display: ['Nunito', 'sans-serif'], // Adiciona a nova fonte para títulos
      },
    },
  },
  plugins: [],
}