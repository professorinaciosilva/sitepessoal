'use client';

const books = [
  {
    id: 1,
    title: 'Logaritmos para autodidatas e homeschooling',
    description: 'Para fornecer uma compreensão abrangente e acessível de Logaritmos para autodidatas ou para aqueles envolvidos no ensino em casa (homeschooling)',
    image: '/images/capalogaritmo.jpg', // Substitua pelo caminho da capa do livro
    link: 'https://www.amazon.com.br/dp/B0DF5W98WT', // Link para o livro na Amazon
  },
  {
    id: 2,
    title: 'Álgebra e teoria dos números para autodidatas e homeschooling',
    description: 'Para quem deseja explorar o fascinante universo da álgebra e da teoria dos números voltado para autodidatas e famílias que praticam homeschooling',
    image: '/images/capaalgebra.jpg', // Substitua pelo caminho da capa do livro
    link: 'https://www.amazon.com.br/dp/B0DPXYND6Z', // Link para o livro na Amazon
  },
  {
    id: 3,
    title: 'Matemática e educação financeira para autodidatas e homeschooling',
    description: 'O mais completo livro de Educação financeira para autodidatas e famílias que praticam homeschooling. Um guia para estruturar sua vida financeira',
    image: '/images/capafinanceiro.jpeg', // Substitua pelo caminho da capa do livro
    link: 'https://www.amazon.com.br/dp/B0DV9Y4S8R', // Link para o livro na Amazon
  },
  {
    id: 4,
    title: 'Bitcoin para autodidatas e homeschooling',
    description: 'O guia essencial sobre Bitcoin para iniciantes e entusiastas. Entenda a tecnologia, segurança e como usá-lo na nova economia digital',
    image: '/images/capabitcoin.jpg', // Substitua pelo caminho da capa do livro
    link: 'https://www.amazon.com.br/dp/B0DX3GFGLH', // Link para o livro na Amazon
  },
  {
    id: 5,
    title: 'Inteligência Artificial e Automação para Usuários',
    description: 'O Guia de Inteligência Artificial para Iniciantes e Entusiastas: Descubra como a tecnologia funciona, aprenda a utilizá-la, explore dicas de prompts e saiba como se posicionar neste novo mercado de trabalho.',
    image: '/images/capainteligencia.jpg', // Substitua pelo caminho da capa do livro
    link: 'https://www.amazon.com.br/dp/B0F1C9WF6D', // Link para o livro na Amazon
  },

];

export default function BooksPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl mb-6 text-center">Meus Livros</h2>
      <div className="space-y-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex flex-col md:flex-row gap-6 items-center md:items-start"
          >
            {/* Capa do Livro com Link */}
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-auto md:mx-0"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-40 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
              />
            </a>

            {/* Detalhes do Livro */}
            <div>
              <h3 className="text-2xl mb-4 text-center">
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:underline"
                >
                  {book.title}
                </a>
              </h3>
              <p className="text-gray-700 mt-2">
                {book.description}{' '}
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Saiba mais sobre o livro
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
}
