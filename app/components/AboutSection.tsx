export default function AboutSection() {
  return (
    <section className="mt-16 flex flex-col items-center text-center md:text-left max-w-5xl mx-auto">
      {/* Título */}
      <h2 className="text-3xl font-bold mb-6 text-center">Sobre</h2>

      {/* Conteúdo: Imagem e Texto */}
      <div className="flex flex-col md:flex-row items-center md:items-center justify-center w-full">
        {/* Foto de Perfil */}
        <div className="flex-shrink-0 md:mr-8 self-center">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full shadow-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <img
              src="/images/fotoperfil.png"
              alt="Foto de Inácio Frota da Silva"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="mt-6 md:mt-0 flex flex-col justify-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl text-justify">
            Meu nome é <strong>Inácio Frota da Silva</strong>, professor e escritor. Escolhi não ser professor de rede pública e preferi a liberdade do ensino pela internet para estudantes qualificados, que valorizam o ensino, princípios, qualificação profissional, formação de caráter, de família e nobreza.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mt-4 text-justify">
            Dedico-me a compartilhar conhecimentos e inspirações através das minhas obras e da educação para um Brasil melhor. Acredito na próxima geração que há de vir para resgatar a grandeza de nossa sociedade. Que a verdade liberte as pessoas.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mt-4 text-justify">
            Neste site, apresento meus livros disponíveis à venda na Amazon, suporte a dúvidas de alunos por meio de meu contato e todas as minhas redes sociais onde publico aulas introdutórias, histórias e fatos interessantes.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mt-4 text-justify">
            Seja bem-vindo à minha turma. Este professor de internet tem grande prazer em apresentar o melhor ensino que puder.
          </p>
        </div>
      </div>
    </section>
  );
}
