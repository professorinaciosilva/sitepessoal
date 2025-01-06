'use client';

import { useState } from 'react';

const articles = [
  {
    id: 1,
    title: 'Como escrever um bom artigo?',
    content: 'Escrever um bom artigo exige prática, pesquisa e dedicação...',
    tags: ['Escrita', 'Dicas'],
  },
  {
    id: 2,
    title: 'Os desafios da vida de um professor',
    content: 'Ser professor é uma profissão desafiadora, mas também recompensadora...',
    tags: ['Educação', 'Experiência'],
  },
  {
    id: 3,
    title: 'A importância do artesanato na cultura local',
    content: 'O artesanato desempenha um papel crucial na preservação das tradições...',
    tags: ['Artesanato', 'Cultura'],
  },
];

const tags = ['Todos', 'Escrita', 'Dicas', 'Educação', 'Experiência', 'Artesanato', 'Cultura'];

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState('Todos');

  const filteredArticles = selectedTag === 'Todos'
    ? articles
    : articles.filter((article) => article.tags.includes(selectedTag));

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Blog</h1>

      {/* Menu de Tags */}
      <div className="flex gap-4 mb-6 overflow-x-auto">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 text-sm font-medium rounded-lg ${
              selectedTag === tag
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Lista de Artigos */}
      <div className="space-y-6">
        {filteredArticles.map((article) => (
          <article key={article.id} className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600">{article.title}</h2>
            <p className="text-gray-700 mt-2">{article.content}</p>
            <div className="mt-4 flex gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
        {filteredArticles.length === 0 && (
          <p className="text-gray-700">Nenhum artigo encontrado para esta tag.</p>
        )}
      </div>
    </div>
  );
}
