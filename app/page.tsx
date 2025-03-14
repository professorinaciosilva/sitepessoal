'use client'; // Adicione isso no topo do arquivo para usar hooks
import { useState, useEffect } from 'react'; // Importe useState e useEffect
import LoadingSpinner from './components/LoadingSpinner'; // Caminho corrigido
import Banner from './components/Banner';
import Carousel from './components/Carousel';
import SocialLinks from './components/SocialLinks';
import AboutSection from './components/AboutSection';
import TextTabs from './components/TextTabs';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  // Simule o carregamento da página
  useEffect(() => {
    // Simula o carregamento da página por 2 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    // Limpa o timer ao desmontar o componente
    return () => clearTimeout(timer);
  }, []);

  // Exibe o LoadingSpinner enquanto a página está carregando
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Retorna o conteúdo da página após o carregamento
  return (
    <>
      <Banner />
      <Carousel />
      <SocialLinks />
      <AboutSection />
      <TextTabs />
      <ContactSection />
    </>
  );
}