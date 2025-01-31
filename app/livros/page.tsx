'use client';

const books = [
  {
    id: 1,
    title: 'E-book: Logaritmos para autodidatas e homeschooling',
    description: 'Para fornecer uma compreensão abrangente e acessível de Logaritmos para autodidatas ou para aqueles envolvidos no ensino em casa (homeschooling)',
    image: '/images/capalogaritmo.jpg', // Substitua pelo caminho da capa do livro
    link: 'https://www.amazon.com.br/dp/B0DF5W98WT', // Link para o livro na Amazon
  },
  {
    id: 2,
    title: 'E-book: Álgebra e teoria dos números para autodidatas e homeschooling',
    description: 'Para quem deseja explorar o fascinante universo da álgebra e da teoria dos números voltado para autodidatas e famílias que praticam homeschooling',
    image: '/images/capaalgebra.jpg', // Substitua pelo caminho da capa do livro
    link: 'https://www.amazon.com.br/dp/B0DPXYND6Z', // Link para o livro na Amazon
  },
  {
    id: 3,
    title: 'E-book: matemática e educação financeira para autodidatas e homeschooling',
    description: 'O mais completo livro de Educação financeira para autodidatas e famílias que praticam homeschooling. Um guia para estruturar sua vida financeira',
    image: '/images/capafinanceiro.jpeg', // Substitua pelo caminho da capa do livro
    link: 'https://www.amazon.com.br/dp/B0DV9Y4S8R', // Link para o livro na Amazon
  },
  {
    id: 4,
    title: 'Livro físico: matemática e educação financeira para autodidatas e homeschooling',
    description: 'O mais completo livro de Educação financeira para autodidatas e famílias que praticam homeschooling. Um guia para estruturar sua vida financeira',
    image: '/images/capafinanceiro.jpeg', // Substitua pelo caminho da capa do livro
    link: 'https://www.amazon.com/dp/B0DVJ2Z1FD', // Link para o livro na Amazon
  },
];

export default function BooksPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Meus Livros</h1>
      <div className="space-y-8">
  {books.map((book) => (
    <div key={book.id} className="flex gap-6 items-start">
      {/* Capa do Livro com Link */}
      <a
        href={book.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0"
      >
        <img
          src={book.image}
          alt={book.title}
          className="w-40 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
        />
      </a>

      {/* Detalhes do Livro */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-600">
          <a
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {book.title}
          </a>
        </h2>
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
