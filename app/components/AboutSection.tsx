import Image from 'next/image'; // Importe o componente Image do Next.js

export default function AboutSection() {
  return (
    <section className="mt-16 flex flex-col items-center text-center md:text-left max-w-5xl mx-auto px-4">
      {/* Título */}
      <h2 className="text-3xl mb-8 text-center">Sobre</h2>

      {/* Conteúdo: Imagem e Texto */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full">
        {/* Foto de Perfil */}
        <div className="flex-shrink-0 md:mr-8 mb-6 md:mb-0">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full shadow-lg bg-gradient-to-r from-blue-300 via-white to-blue-200 p-1">
            <Image
              src="/images/fotoperfil.png"
              alt="Foto de Inácio Frota da Silva"
              width={256} // Largura da imagem
              height={256} // Altura da imagem
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="flex flex-col justify-center max-w-3xl">
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Meu nome é <strong>Inácio Frota da Silva</strong>, professor e escritor. Formado pela Universidade Federal do Amazonas (UFAM). Prezo pela liberdade do ensino pela internet para estudantes qualificados, que valorizam o ensino, os princípios, a formação profissional, o caráter, a família e a nobreza.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
            Dedico-me a compartilhar conhecimentos e inspirações por meio das minhas obras e da educação, oferecendo suporte às famílias que praticam o ensino em casa (homeschooling), com a finalidade de reestruturar a nobreza: a elite moral responsável por liderar em direção a um Brasil melhor. Acredito na próxima geração, que virá para resgatar a grandeza de nossa sociedade.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
            Apresento meus livros disponíveis à venda na Amazon, suporte a dúvidas de alunos por meio de meu contato e todas as minhas redes sociais onde publico aulas introdutórias, histórias e fatos interessantes.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
            Seja bem-vindo à minha turma. Este professor de internet tem grande prazer em apresentar o melhor ensino que puder.
          </p>
        </div>
      </div>
    </section>
  );
}