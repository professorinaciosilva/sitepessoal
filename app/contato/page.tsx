"use client";
import { useState, MouseEvent } from 'react';
import SocialLinks from '../components/SocialLinks';
import Transition from '../components/Transition';

export default function Contato() {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  
  // Ofuscação do e-mail
  const obfuscateEmail = () => {
    const user = 'professorinaciosilva';
    const domain = 'gmail.com';
    return `${user}@${domain}`;
  };
  
  // Ofuscação do telefone
  const obfuscatePhone = () => {
    const countryCode = '+55';
    const areaCode = '93';
    const number = '991315355';
    return `${countryCode} ${areaCode} ${number}`;
  };
  
  // Link do WhatsApp
  const obfuscateWhatsAppLink = () => {
    const phone = '5593991315355'; // Número no formato internacional
    return `https://wa.me/${phone}`;
  };
  
  // Função para evitar coleta de e-mail por bots
  const handleEmailClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = obfuscateEmail();
    window.location.href = `mailto:${email}`;
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Transition />
      <h2 className="text-3xl mb-8 text-center">Entre em Contato</h2>
      
      <div className="w-full max-w-3xl space-y-12">
        {/* Informações de Contato */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          {/* Telefone protegido com interação humana */}
          <p className="text-lg text-gray-700">
            <strong>Telefone:</strong>{' '}
            {showPhone ? (
              obfuscatePhone()
            ) : (
              <button
                onClick={() => setShowPhone(true)}
                className="text-blue-500 underline hover:text-blue-700 bg-transparent hover:bg-transparent border-none p-0"
              >
                Clique para mostrar
              </button>
            )}{' '}
            <a
              href={obfuscateWhatsAppLink()}
              className="ml-2 px-3 py-1 bg-green-500 text-white text-sm rounded-lg shadow hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
          </p>
          {/* E-mail protegido com interação humana */}
          <p className="text-lg text-gray-700 mt-4">
            <strong>E-mail:</strong>{' '}
            {showEmail ? (
              <a
                href={`mailto:${obfuscateEmail()}`}
                className="text-blue-500 underline hover:text-blue-700"
                onClick={handleEmailClick}
              >
                {obfuscateEmail()}
              </a>
            ) : (
              <button
                onClick={() => setShowEmail(true)}
                className="text-blue-500 underline hover:text-blue-700 bg-transparent hover:bg-transparent border-none p-0"
              >
                Clique para mostrar
              </button>
            )}
          </p>
        </div>
        
        {/* Redes Sociais - SocialLinks já não está mais dentro de um card adicional */}
        <SocialLinks />
      </div>
    </div>
  );
}