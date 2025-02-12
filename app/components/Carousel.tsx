'use client';

import { useState, useEffect } from 'react';

const images = [
  {
    src: '/images/capalogaritmo.jpg',
    alt: 'logaritmos para autodidatas e homeschooling',
    link: 'https://www.amazon.com.br/dp/B0DF5W98WT',
    description: 'Para fornecer uma compreensão abrangente e acessível de Logaritmos para autodidatas ou para aqueles envolvidos no ensino em casa (homeschooling)',
  },
  {
    src: '/images/capaalgebra.jpg',
    alt: 'álgebra e teoria dos números para autodidatas e homeschooling',
    link: 'https://www.amazon.com.br/dp/B0DPXYND6Z',
    description: 'Para quem deseja explorar o fascinante universo da álgebra e da teoria dos números voltado para autodidatas e famílias que praticam homeschooling',
  },
  {
    src: '/images/capafinanceiro.jpeg',
    alt: 'Matemática e educação financeira para autodidatas e homeschooling',
    link: 'https://www.amazon.com.br/dp/B0DV9Y4S8R',
    description: 'O mais completo livro de Educação financeira para autodidatas e famílias que praticam homeschooling. Um guia para estruturar sua vida financeira',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto mt-8">
      {/* Título */}
      <h2 className="text-3xl mb-6 text-center">Meus livros na Amazon</h2>
      
      <div className="relative mx-auto h-[60vh] aspect-[2/3] overflow-hidden rounded-lg shadow-lg">
        {/* Imagens no Carrossel */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-full relative"
            >
              <a
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
              >
                <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain"
                />
              </a>
              
              {/* Descrição da Imagem */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-sm p-4">
                {image.description}
              </div>
            </div>
          ))}
        </div>
        {/* Botões de Navegação */}
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}


