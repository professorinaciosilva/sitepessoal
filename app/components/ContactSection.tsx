"use client";

export default function ContactSection() {
  const obfuscateEmail = () => {
    const user = 'professorinaciosilva';
    const domain = 'gmail.com';
    return `${user}@${domain}`;
  };

  const obfuscatePhone = () => {
    const countryCode = '+55';
    const areaCode = '93';
    const number = '99131-5355';
    return `${countryCode} ${areaCode} ${number}`;
  };

  const obfuscateWhatsAppLink = () => {
    const phone = '5593991315355'; // Número no formato internacional
    return `https://wa.me/${phone}`;
  };

  return (
    <section className="mt-16 text-center">
      <h2 className="text-3xl mb-6 text-center">Contato</h2>
      <div className="text-lg text-gray-700">
        {/* Email protegido */}
        <p>
          <strong>Email:</strong>{' '}
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

        {/* Telefone protegido */}
        <p className="mt-4">
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
      </div>
    </section>
  );
}
