"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Componente de Nuvem Reutilizável
const Cloud = ({ size, opacity, top, animation, delay, reverse }) => {
  return (
    <Image
      src="/images/clouds.svg"
      alt="Nuvem"
      width={size}
      height={size}
      className="absolute"
      style={{
        opacity,
        top,
        left: reverse ? '100%' : `-${size}px`, // Posiciona fora da tela no início
        animation: `${animation} ${delay}s linear infinite`,
      }}
    />
  );
};

const Transition = () => {
  const [height, setHeight] = useState('50vh');
  
  // Define a altura do banner APENAS no carregamento inicial
  useEffect(() => {
    // Função para definir a altura inicial
    const setInitialHeight = () => {
      const vh = window.innerHeight;
      setHeight(`${Math.max(vh * 0.7, 350)}px`);
    };
    
    // Define a altura apenas uma vez no carregamento
    setInitialHeight();
    
    // Não adiciona mais o evento de redimensionamento para evitar atualizações durante o scroll
  }, []);
  
  // Configurações das nuvens
  const clouds = [
    { size: 300, opacity: 0.4, top: '15%', animation: 'cloud-move-slow', delay: 60, reverse: false },
    { size: 200, opacity: 0.3, top: '40%', animation: 'cloud-move-medium', delay: 40, reverse: false },
    { size: 130, opacity: 0.2, top: '60%', animation: 'cloud-move-fast', delay: 30, reverse: false },
    { size: 280, opacity: 0.5, top: '30%', animation: 'cloud-move-slow-reverse', delay: 55, reverse: true },
    { size: 180, opacity: 0.4, top: '70%', animation: 'cloud-move-medium-reverse', delay: 45, reverse: true },
    { size: 120, opacity: 0.3, top: '20%', animation: 'cloud-move-fast-reverse', delay: 35, reverse: true },
  ];
  
  return (
    <div
      className="w-full relative overflow-hidden mt-0 transition-all duration-300"
      style={{
        height,
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
      }}
    >
      {/* Fundo com nuvens animadas */}
      <div className="absolute inset-0 z-0">
        {clouds.map((cloud, index) => (
          <Cloud key={index} {...cloud} />
        ))}
      </div>
      {/* Conteúdo do Banner */}
      <div className="w-full h-full flex items-center justify-center px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* SVG Ícone */}
          <div className="w-24 h-24 md:w-32 md:h-32 text-blue-600 animate-float">
            <Image
              src="/images/transition.svg"
              alt="transition svg"
              width={128} // Largura da imagem
              height={128} // Altura da imagem
              className="w-full h-full object-cover"
            />
          </div>
          {/* Texto */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 font-poppins text-gray-800">
              Conteúdo para{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Homescooling
                </span>
              </span>
              ,
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              educação e{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                nobreza
              </span>
              .
            </h3>
            <p className="text-gray-600 max-w-lg">
              O melhor para suporte ao pais que querem o melhor para a nova geração.
            </p>
          </div>
        </div>
      </div>
      {/* Transição suave no final do banner */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Transition;