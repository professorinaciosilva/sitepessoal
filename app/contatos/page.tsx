"use client";

import SocialLinks from '../components/SocialLinks';

export default function ContactPage() {
  const obfuscateEmail = () => {
    const user = 'professorinaciosilva';
    const domain = 'gmail.com';
    return `${user}@${domain}`;
  };

  const obfuscatePhone = () => {
    const countryCode = '+55';
    const areaCode = '93';
    const number = '991315355';
    return `${countryCode} ${areaCode} ${number}`;
  };

  const obfuscateWhatsAppLink = () => {
    const phone = '5593991315355'; // Número no formato internacional
    return `https://wa.me/${phone}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl mb-6 text-center">Entre em Contato</h2>
      
      <div className="w-full max-w-md space-y-8">
        {/* Informações de Contato */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          
          <p className="text-lg text-gray-700">
            <strong>Telefone:</strong>{' '}
            {obfuscatePhone()}{' '}
            <a
              href={obfuscateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-3 py-1 bg-green-500 text-white text-sm rounded-lg shadow hover:bg-green-600"
            >
              WhatsApp
            </a>
          </p>
          <p className="text-lg text-gray-700 mt-2">
            <strong>E-mail:</strong>{' '}
            <a
              href="#"
              className="text-blue-500 underline hover:text-blue-700"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${obfuscateEmail()}`;
              }}
            >
              {obfuscateEmail()}
            </a>
          </p>
        </div>

        {/* Redes Sociais */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
