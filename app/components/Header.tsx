"use client";

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Itens do menu - Substitua conforme necessário
  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Livros', href: '/livros' },
    { title: 'Contato', href: '/contato' },
    //{ title: 'Blog', href: '/blog' },
  ];

  return (
    <header className="w-full bg-white shadow-sm mb-0">
      <div className="w-full px-4 md:px-6 lg:px-8">
        {/* Header principal */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl md:text-2xl relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professor Inácio
          </Link>

          {/* Menu para desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                className="text-gray-600 hover:text-blue-700 font-medium transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Botão do menu para mobile */}
          <button 
            className="md:hidden flex flex-col justify-center items-center h-10 w-10 relative focus:outline-none bg-transparent hover:bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <span 
              className={`h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}
            />
            <span 
              className={`h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300 ease-in-out mt-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span 
              className={`h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300 ease-in-out mt-1.5 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}
            />
          </button>
        </div>

        {/* Menu mobile */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
          aria-hidden={!isMenuOpen}
        >
          <nav className="flex flex-col items-center space-y-4">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                className="text-gray-600 hover:text-blue-700 font-medium py-2 text-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;