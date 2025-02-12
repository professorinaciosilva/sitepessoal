import './styles/globals.css';
import Menu from './components/Menu';

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
      <body className="bg-white text-gray-900">
        <header className="relative bg-gradient-to-br from-blue-500 to-blue-300 text-white py-6 shadow-lg border-b-4 border-yellow-500 overflow-hidden">
          <div className="absolute inset-0 z-0 flex flex-wrap items-center justify-center text-blue-300 pointer-events-none">
            {Array.from({ length: 100 }).map((_, i) => (
              <span
                key={i}
                className="text-[3rem] leading-none mx-2 my-2"
                style={{ opacity: Math.random() * 0.3 + 0.5 }}
              >
                π
              </span>
            ))}
          </div>
          <div className="container relative z-10 mx-auto flex flex-col items-center">
            <a href="/" className="flex items-center space-x-4">
              <h1 className="text-5xl tracking-wide drop-shadow-md">
                Professor Inácio
              </h1>
            </a>
            <p className="text-lg text-white mt-2">
              Seu professor de matemática, educação e nobreza
            </p>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <Menu />
          {children}
        </main>
        <footer className="bg-blue-600 text-white py-4 text-center text-sm mt-8 border-t-4 border-yellow-500">
          © 2024 Professor Inácio Silva Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}
