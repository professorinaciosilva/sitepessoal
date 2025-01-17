import './styles/globals.css';
import Menu from './components/Menu';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
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
              <img src="/images/logo.svg" alt="Logo" className="w-16 h-16" />
              <h1 className="text-5xl font-extrabold tracking-wide text-white drop-shadow-md">
                Professor Inácio
              </h1>
            </a>
            <p className="text-lg mt-2 text-yellow-300">
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
