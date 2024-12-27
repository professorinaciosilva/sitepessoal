import './styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">
        <header className="bg-blue-500 text-white py-6 shadow-lg border-b-4 border-yellow-500">
  <div className="container mx-auto flex items-center justify-center space-x-4">
    {/* Imagem à esquerda */}
    <img
      src="/images/minha-foto.jpg" /* Substitua pelo caminho da sua foto */
      alt="Inácio Frota da Silva"
      className="w-24 h-24 rounded-full object-cover border-4 border-yellow-500"
    />
    {/* Nome e Títulos */}
    <div className="text-center">
      <h1 className="text-5xl font-extrabold tracking-wide text-yellow-500 drop-shadow-md">
        Professor Inácio Silva
      </h1>
      <p className="text-lg mt-2 text-white">
        Seu professor de matemática, educação e nobresa
      </p>
    </div>
  </div>
</header>


        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-blue-600 text-white py-4 text-center text-sm mt-8 border-t-4 border-yellow-500">
  © 2024 Professor Inácio Silva Todos os direitos reservados.
</footer>

      </body>
    </html>
  );
}
