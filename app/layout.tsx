import './styles/globals.css';
import Header from './components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
        
    <html lang="pt-BR">
      <head>
        <title>Professor Inácio Silva | Matemática e Educação</title>
        <meta name="description" content="Bem-vindo ao site oficial do Professor Inácio Silva. Explore recursos educacionais incríveis e conteúdos de matemática." />
        <meta name="keywords" content="matemática, educação, professor Inácio Silva, ensino, matemática financeira, educação financeira, recursos educacionais" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      
        {/* Open Graph */}
      {/*
        <meta property="og:title" content="Professor Inácio Silva | Matemática e Educação" />
        <meta property="og:description" content="Bem-vindo ao site oficial do Professor Inácio Silva. Explore recursos educacionais incríveis e conteúdos de matemática financeira." />
        <meta property="og:url" content="https://seusite.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Imagem de destaque do Professor Inácio Silva" />
      */}
        
        {/* Twitter Cards */}
      {/*
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professor Inácio Silva | Matemática e Educação" />
        <meta name="twitter:description" content="Bem-vindo ao site oficial do Professor Inácio Silva. Explore conteúdos de matemática financeira e educação." />
        <meta name="twitter:image" content="/images/twitter-image.png" />
      */}

      </head>
      <body className="bg-white text-gray-900 m-0 p-0">
        <Header />
        <main className="w-full">
          {children}
        </main>
        <footer className="bg-blue-600 text-white py-4 text-center text-sm border-t-4 border-yellow-500">
          © 2024 Professor Inácio Silva Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}
