/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Diretório do App Router
    './components/**/*.{js,ts,jsx,tsx}', // Componentes compartilhados
    './pages/**/*.{js,ts,jsx,tsx}', // Se você tiver páginas no Pages Router
    './public/**/*.html', // Arquivos estáticos HTML (opcional)
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centraliza o container automaticamente
        padding: '1rem', // Adiciona espaçamento interno ao container
      },
      colors: {
        softGold: '#C9A959', // Um dourado metálico suave
      },
    },
  },
  plugins: [],
};
