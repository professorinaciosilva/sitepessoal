'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useRecursiveTimeout } from './useRecursiveTimeout';

const images = [
  {
    src: '/images/capalogaritmo.jpg',
    alt: 'logaritmos para autodidatas e homeschooling',
    link: 'https://www.amazon.com.br/dp/B0DF5W98WT',
    description:
      'Para fornecer uma compreensão abrangente e acessível de Logaritmos para autodidatas ou para aqueles envolvidos no ensino em casa (homeschooling)',
  },
  {
    src: '/images/capaalgebra.jpg',
    alt: 'álgebra e teoria dos números para autodidatas e homeschooling',
    link: 'https://www.amazon.com.br/dp/B0DPXYND6Z',
    description:
      'Para quem deseja explorar o fascinante universo da álgebra e da teoria dos números voltado para autodidatas e famílias que praticam homeschooling',
  },
  {
    src: '/images/capafinanceiro.jpeg',
    alt: 'Matemática e educação financeira para autodidatas e homeschooling',
    link: 'https://www.amazon.com.br/dp/B0DV9Y4S8R',
    description:
      'O mais completo livro de Educação financeira para autodidatas e famílias que praticam homeschooling. Um guia para estruturar sua vida financeira',
  },
  {
    src: '/images/capabitcoin.jpg',
    alt: 'Bitcoin para autodidatas e homeschooling',
    link: 'https://www.amazon.com.br/dp/B0DX3GFGLH',
    description:
      'O guia essencial sobre Bitcoin para iniciantes e entusiastas. Entenda a tecnologia, segurança e como usá-lo na nova economia digital.',
  },
  {
    src: '/images/capainteligencia.jpg',
    alt: 'Inteligência Artificial e Automação para Usuários',
    link: 'https://www.amazon.com.br/dp/B0F1C9WF6D',
    description:
      'O Guia de Inteligência Artificial para Iniciantes e Entusiastas: Descubra como a tecnologia funciona, aprenda a utilizá-la, explore dicas de prompts e saiba como se posicionar neste novo mercado de trabalho.',
  },
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Configuração do autoplay
  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    } else {
      emblaApi.scrollTo(0);
    }
  }, [emblaApi]);

  useRecursiveTimeout(autoplay, 5000);

  return (
    <section className="w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl mb-6 text-center">Meus livros na Amazon</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Último Lançamento (Latest Release) Section */}
        <div className="w-full md:w-1/3 flex flex-col">
          <h3 className="text-2xl mb-6 text-center">Último Lançamento</h3>
          <div className="relative mx-auto h-[60vh] aspect-[2/3] overflow-hidden rounded-lg shadow-lg">
            <a
              href="https://www.amazon.com.br/dp/B0F1C9WF6D"
              className="block w-full h-full"
            >
              <Image
                src="/images/capainteligencia.jpg"
                alt="Inteligência Artificial e Automação para Usuários"
                width={200}
                height={300}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-sm p-4">
                O Guia de Inteligência Artificial para Iniciantes e Entusiastas: Descubra como a tecnologia funciona,
                aprenda a utilizá-la, explore dicas de prompts e saiba como se posicionar neste novo mercado de trabalho.
              </div>
            </a>
          </div>
        </div>

        {/* Embla Carousel Section */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h3 className="text-2xl mb-6 text-center">Catálogo</h3>
          <div className="relative mx-auto h-[60vh] aspect-[2/3] overflow-hidden rounded-lg shadow-lg">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {images.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0 h-full relative">
                    <a
                      href={image.link}
                      className="block w-full h-full"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={200}
                        height={300}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-sm p-4">
                        {image.description}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700"
            >
              &#8592;
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700"
            >
              &#8594;
            </button>

            {/* Indicadores de slides (dots) */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === selectedIndex ? 'bg-blue-600' : 'bg-gray-400'
                  }`}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Book Section */}
        <div className="w-full md:w-1/3 flex flex-col">
          <h3 className="text-2xl mb-6 text-center">Mais Vendido</h3>
          <div className="relative mx-auto h-[60vh] aspect-[2/3] overflow-hidden rounded-lg shadow-lg">
            <a
              href="https://www.amazon.com.br/dp/B0DV9Y4S8R"
              className="block w-full h-full"
            >
              <Image
                src="/images/capafinanceiro.jpeg"
                alt="Mais Vendido"
                width={200}
                height={300}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-sm p-4">
                Matemática e educação financeira para autodidatas e homeschooling
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}