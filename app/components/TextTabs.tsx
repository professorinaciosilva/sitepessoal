'use client';

import { useState } from 'react';

const tabs = [
  {
    label: 'A Nobreza e Sua Importância na Restauração da Monarquia',
    content: `A nobreza, no contexto dos regimes monárquicos, não se restringe apenas a um título ou status social, mas é, na verdade, a representação de famílias que se destacaram ao longo da história por virtudes, princípios e feitos grandiosos. A verdadeira nobreza, em sua essência, é formada por aqueles que conquistaram seu prestígio por meio de ações que beneficiaram a sociedade, marcaram época e elevam o espírito humano a um padrão superior. Não se trata de privilégios hereditários vazios, mas de um legado de responsabilidade e compromisso com o bem comum, com a ética e com a justiça. A nobreza é, assim, um símbolo de responsabilidade, um exemplo de liderança, que inspira os demais a buscarem virtudes e altos objetivos.

    Ao longo dos séculos, famílias da nobreza exerceram um papel central na construção das nações, seja pela defesa de valores que sustentam a ordem social, seja por suas ações em prol do progresso, da educação e da cultura. A nobreza, com suas tradições, é uma força que mantém vivos os princípios que tornam as sociedades dignas e prósperas. Essas famílias, ao se distinguirem por suas virtudes, não apenas conquistam títulos, mas assumem uma missão de grande importância histórica: liderar pelo exemplo, criar uma rede de confiança e zelo pelo futuro da nação.

    Hoje, no Brasil, vemos que o povo encontra-se perdido, sem um horizonte claro de objetivos grandiosos. A falta de um modelo que inspire os cidadãos a seguir um caminho de dignidade e responsabilidade tem gerado uma sociedade marcada pela degradação de valores, pela busca incessante por bens materiais e pela ausência de um ideal maior. A busca por um propósito de vida parece ter se perdido em um mar de superficialidades. Para restaurar a grandeza da nação e devolver ao povo brasileiro o orgulho de viver com um propósito maior, é imprescindível restaurar a nobreza.

    A restauração da monarquia, portanto, exige a presença de uma nobreza renovada, uma nobreza que seja formada por famílias comprometidas com os altos valores da ética, da honra e da justiça. Sem ela, o estado monárquico não terá a base necessária para resistir aos vícios e à degradação que caracterizam as repúblicas contemporâneas. A ausência de uma nobreza sólida e consciente de seu papel social e político deixa o país vulnerável aos erros e à corrupção que se perpetuam nos sistemas republicanos, onde a busca por poder muitas vezes se sobrepõe aos reais interesses da nação. Sem uma nobreza que sirva como referência, a sociedade perde seu rumo, os governantes se tornam suscetíveis aos vícios e a destruição das virtudes torna-se inevitável.

    Por fim, a educação e a proteção dos filhos dessa nova nobreza são fundamentais para garantir que esse ciclo virtuoso continue. A formação de novas gerações, com valores sólidos e um compromisso com o bem comum, será a chave para que a monarquia restaurada seja eficaz na construção de uma sociedade de virtude. Assim como as famílias da nobreza do passado educavam seus filhos para liderar com sabedoria e respeito, a restauração da nobreza no Brasil dependerá da dedicação dos pais em formar cidadãos comprometidos com o futuro da nação, com a preservação dos valores que fazem a grandeza de um país. A educação é, portanto, o pilar fundamental para a construção de um futuro digno e grandioso para todos.`
  },
  {
    label: 'A Restauração da Nobreza e a Jornada do Êxodo',
    content: `A restauração da nobreza no Brasil é, sem dúvida, um desafio que se estende por várias gerações. Assim como a história do povo de Israel, descrita no livro do Êxodo, a jornada para a verdadeira liberdade, dignidade e grandeza é longa e exige paciência, perseverança e, acima de tudo, um comprometimento profundo com os ideais mais elevados. A história do Êxodo, em que o povo hebreu saiu da escravidão do Egito, atravessou o mar vermelho, caminhou pelo deserto por 40 anos e, finalmente, alcançou a terra prometida, serve como um poderoso paralelo para compreendermos a magnitude desse processo de restauração.

    No início do Êxodo, o povo de Israel estava submisso à escravidão, à opressão e à degradação. Eles não tinham liberdade nem a capacidade de conquistar um destino grandioso por si mesmos. Da mesma forma, a sociedade brasileira contemporânea encontra-se, em muitos aspectos, aprisionada pela falta de uma visão clara de futuro e pela perda dos valores que antes guiavam as grandes nações. A corrupção, a moral em declínio e a falta de propósitos elevados têm levado o povo a uma espécie de escravidão moderna, onde os objetivos de vida são muitas vezes superficiais e sem grandeza.

    Assim como Moisés, escolhido por Deus para liderar os israelitas rumo à liberdade, o Brasil precisa de uma liderança firme e inspiradora que aponte para um futuro em que a nobreza, com suas virtudes e valores, seja restaurada. No entanto, essa liderança não pode vir de um único momento ou de um único líder; ela deve ser construída ao longo do tempo, através de gerações inteiras que se dedicam a cultivar a sabedoria, a ética e a honra. A restauração da nobreza no Brasil, tal como a travessia do deserto, será feita passo a passo, enfrentando desafios e superando dificuldades.

    O povo de Israel caminhou pelo deserto por 40 anos. Esse longo período foi essencial para que as gerações que saíram do Egito fossem purificadas, transformadas e preparadas para a vida que os aguardava na terra prometida. Não foi um processo imediato nem fácil, mas foi um período de preparação que permitiu ao povo se tornar digno de herdar a terra de suas promessas. Da mesma forma, a restauração da nobreza no Brasil exigirá um esforço contínuo ao longo de muitas décadas. Cada geração será responsável por transmitir os valores fundamentais de uma verdadeira nobreza aos seus filhos, preparando-os para que, um dia, possam exercer o papel de líderes sábios e virtuosos, capazes de guiar a nação para um futuro digno e grandioso.

    A travessia do deserto também simboliza as dificuldades que enfrentaremos ao longo dessa jornada de restauração. Como o povo de Israel, o Brasil terá que lutar contra as tentações da corrupção, da indiferença e da falta de propósito. Muitos serão os obstáculos que surgirão, e as gerações que se dedicam à causa terão que suportar dificuldades e, por vezes, desilusões. No entanto, assim como a terra prometida estava sempre no horizonte, o objetivo de restaurar a nobreza e reerguer a grandeza da nação brasileira deve ser o guia constante que nos mantém firmes. Cada passo dado no deserto, cada desafio superado, será um passo mais próximo da vitória.

    E, como o povo de Israel, que finalmente alcançou a terra prometida após anos de provações, o Brasil, através da restauração da nobreza, alcançará um novo período de grandeza, onde os valores da honra, da virtude e da justiça prevalecerão. Esta terra prometida não será apenas um território físico, mas um Estado de espírito, onde as famílias nobres, com seus princípios elevados e feitos grandiosos, serão a base para uma sociedade próspera e digna. Mas, como no Êxodo, a terra prometida não será uma dádiva fácil ou instantânea. Ela será conquistada através de sacrifícios, esforço coletivo e a perseverança de um povo comprometido com a verdade, com a moral e com a nobreza.

    Para que essa jornada se realize, a educação e a formação das novas gerações são absolutamente essenciais. Assim como Moisés educou e formou o povo de Israel para que estivessem prontos para a terra prometida, também nós, no Brasil, precisamos investir na formação de nossos filhos com valores sólidos. Eles são a chave para garantir que a nobreza restaurada seja preservada e que o legado de honra e virtude seja transmitido ao longo das gerações, até que, finalmente, possamos alcançar a verdadeira grandeza e prosperidade que nos aguardam.

    Assim como o povo de Israel não poderia alcançar a terra prometida sem uma liderança firme, sem uma moral íntegra e sem a força da unidade, o Brasil também não poderá alcançar sua verdadeira grandeza sem a restauração da nobreza e sem um compromisso profundo com os valores que fazem uma nação verdadeiramente digna. Este é o desafio de várias gerações, mas, como o Êxodo nos ensina, aqueles que perseverarem, aqueles que educarem suas gerações no caminho da virtude, alcançarão, finalmente, a terra prometida.`
  },
  {
    label: 'A Educação para a Nobreza',
    content: `A educação para a nobreza é mais do que uma simples transmissão de conhecimentos; ela é um compromisso com a formação integral do ser humano, exigindo responsabilidade, visão de longo prazo e um sólido alicerce moral. Neste contexto, pais e educadores desempenham um papel central ao preparar as futuras gerações para serem líderes virtuosos, conscientes de seus papéis na sociedade e capazes de realizar feitos grandiosos. Este texto propõe uma reflexão sobre como a educação pode se tornar um instrumento de transformação, fundamentado em valores e princípios éticos.

    O primeiro aspecto a ser considerado é a diferença fundamental entre a educação tradicional e a educação voltada para a nobreza. Enquanto a primeira frequentemente delega a formação das crianças ao sistema escolar, a segunda requer um envolvimento ativo dos pais. O sistema educacional atual, muitas vezes estruturado para atender aos interesses dominantes, tende a moldar indivíduos para o conformismo, negligenciando o estímulo à reflexão crítica e à busca de um propósito maior. Assim, cabe às famílias romper com essa dinâmica, assumindo a responsabilidade pela formação ética e moral de seus filhos.

    Outro ponto crucial está na limitação dos currículos escolares, que frequentemente ignoram a profundidade transformadora do conhecimento. Em vez de despertar nos jovens uma paixão pela história heroica, pelas virtudes que moldaram civilizações ou pela busca do bem comum, o ensino se restringe a reproduzir conteúdos que perpetuam a acomodação e a mediocridade. Essa abordagem contribui para uma sociedade que perde de vista os valores fundamentais da nobreza, como a honra, a coragem e a dignidade.

    Diante desse cenário, a responsabilidade dos pais vai além de acompanhar o que é ensinado nas escolas. Eles devem complementar a educação formal com ensinamentos que promovam virtudes essenciais, como respeito, disciplina e integridade. Essa formação vai muito além da sala de aula: ela se manifesta no cotidiano, nas ações e nas escolhas que os pais exemplificam para seus filhos. A educação para a nobreza exige, assim, um esforço conjunto, no qual o lar se torna o principal espaço de aprendizado e inspiração.

    Além disso, é necessário que os educadores também compreendam a profundidade de sua missão. Eles não devem apenas transmitir conteúdos acadêmicos, mas também formar o caráter dos jovens, inspirando-os a perseguir valores elevados. A figura do professor, nesse contexto, se eleva a um papel de mentor, um guia que não apenas ensina, mas também molda líderes éticos, capazes de transformar a sociedade por meio de suas virtudes e de seus feitos.

    A educação para a nobreza é uma responsabilidade exclusiva das famílias que conquistam, por mérito e esforço, os padrões elevados que ela exige. Não cabe à sociedade como um todo, pois a maioria do povo permanece presa a condições que a tornam incapaz de alcançar esses ideais. Somente as famílias vitoriosas e virtuosas podem transmitir os valores da nobreza às suas gerações. Nesse contexto, a valorização da cultura, das artes e da história é essencial para formar indivíduos capazes de liderar e inspirar. Apreciar literatura, música, grandes obras de arte e feitos históricos conecta essas famílias aos valores mais elevados, preparando-as para exercer seu papel como exemplos de virtude e liderança.

    Por fim, é imprescindível reconhecer que a educação para a nobreza não é apenas uma questão individual, mas um projeto coletivo com implicações para toda a sociedade. Formar indivíduos comprometidos com princípios elevados é o caminho mais eficaz para restaurar a grandeza de uma nação. Quando pais, avós e educadores assumem a missão de transmitir valores sólidos, estão plantando as sementes de um futuro digno, próspero e repleto de propósito.

    Concluindo, o desafio de educar para a nobreza é, antes de tudo, um compromisso com a construção de uma sociedade virtuosa. Exige esforço, dedicação e uma visão clara do futuro que desejamos para nossos filhos e netos. Ao abraçarmos essa missão, estaremos não apenas transformando vidas individuais, mas também pavimentando o caminho para uma nação mais justa, honrada e grandiosa, guiada pelos mais elevados ideais de virtude e liderança.`
  },
];
  
export default function TextTabs() {
  const [selectedTab, setSelectedTab] = useState(0); // O índice da aba selecionada

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 shadow-lg rounded-lg">
      {/* Título */}
      <h2 className="text-3xl mb-6 text-center">Artigos</h2>

      {/* Abas */}
      <div className="flex border-b border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`px-4 py-2 text-sm font-medium ${
              selectedTab === index
                ? 'bg-white text-gray-900 rounded-t-md hover:bg-white'
                : 'text-gray-900 bg-blue-100 hover:bg-white hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Conteúdo da aba selecionada */}
      <div className="mt-4 text-justify whitespace-pre-wrap leading-relaxed">
        <p className="text-lg text-gray-700">{tabs[selectedTab].content}</p>
      </div>
    </div>
  );
}
