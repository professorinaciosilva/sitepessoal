'use client';

import { useState } from 'react';

const tabs = [
  {
    label: 'Texto 1',
    content: 'Este é o conteúdo do primeiro texto. É exibido por padrão.',
  },
  {
    label: 'Texto 2',
    content: 'Aqui está o conteúdo do segundo texto. Escolha outro para explorar.',
  },
  {
    label: 'Texto 3',
    content: 'Este é o conteúdo do terceiro texto. Experimente todas as opções!',
  },
];

export default function TextTabs() {
  const [selectedTab, setSelectedTab] = useState(0); // O índice da aba selecionada

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 shadow-lg rounded-lg text-center">
      {/* Título */}
      <h2 className="text-3xl font-bold mb-6">Artigos</h2>

      {/* Abas */}
      <div className="flex border-b border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`px-4 py-2 text-sm font-medium ${
              selectedTab === index
                ? 'bg-yellow-500 text-gray-900 rounded-t-md'
                : 'text-white hover:bg-yellow-500 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Conteúdo da aba selecionada */}
      <div className="mt-4 text-white">
        <p className="text-lg">{tabs[selectedTab].content}</p>
      </div>
    </div>
  );
}
