"use client";
import { useState } from 'react';

export default function ContactSection() {
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
    const number = '99131-5355';
    return `${countryCode} ${areaCode} ${number}`;
  };
  
  // Link do WhatsApp
  const obfuscateWhatsAppLink = () => {
    const phone = '5593991315355'; // Número no formato internacional
    return `https://wa.me/${phone}`;
  };
  
  // Função para evitar coleta de e-mail por bots
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = obfuscateEmail();
    window.location.href = `mailto:${email}`;
  };
  
  return (
    <section className="mt-16 text-center">
      <h2 className="text-3xl mb-6 text-center">Contato</h2>
      <div className="text-lg text-gray-700">
        {/* Email protegido com interação humana */}
        <p>
          <strong>Email:</strong>{' '}
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
              className="text-blue-500 underline hover:bg-transparent bg-transparent border-none p-0" // Removido fundo azul
            >
              Clique para mostrar
            </button>
          )}
        </p>
        {/* Telefone protegido com interação humana */}
        <p className="mt-4">
          <strong>Telefone:</strong>{' '}
          {showPhone ? (
            obfuscatePhone()
          ) : (
            <button
              onClick={() => setShowPhone(true)}
              className="text-blue-500 underline bg-transparent hover:bg-transparent border-none p-0" // Removido fundo azul
            >
              Clique para mostrar
            </button>
          )}{' '}
          <a
            href={obfuscateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-3 py-1 bg-green-500 text-white text-sm rounded-lg shadow hover:bg-green-600"
          >
            WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}