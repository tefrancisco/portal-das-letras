const contentData = {
  introducao: {
    title: 'Introdução à literatura',
    quote: {
      text: '“A literatura é a maneira mais agradável de ignorar a vida.”',
      author: 'Fernando Pessoa'
    },
    image: '/img/intro-literatura.jpg', // Imagem principal da página
    imageBetweenSections: null, // Imagem opcional entre sections
    sections: [
      {
        title: 'O que é a literatura?',
        content: [
          'A literatura é uma arte como qualquer outra, que tem como matéria prima a palavra, a qual é trabalhada de diversas formas, utilizando seu som e brincando com seus sentidos. Em suma, a literatura é a arte de escrever.',
        ],
        image: null,
        caption: 'Imagem ilustrativa da literatura'
      },
      {
        title: 'Funções da literatura',
        content: ['Podemos concluir que a literatura em nossa sociedade possui 3 funções claras, sendo elas:'],
        // list: [
        //   'Histórica',
        //   'Social',
        //   'Entretenimento'
        // ],
        subsections: [
          {
            subtitle: 'Histórica',
            content: [
              'Todo o ambiente e a época vivida pelo autor influencia, mesmo que por vezes inconscientemente, tudo o que ele escreve, possibilitando a nós que possamos resgatar aspectos históricos do tempo vivido por ele. Tomamos, por exemplo, o estudo de A Ilíada, livro escrito por Homero e que conta fantasiosamente o período da Guerra de Troia. Por mais que fantasioso, foi utilizado para compreender como era a sociedade na época em que foi escrito, pois o autor transfere suas vivências para dentro da história.'
            ],
            image: null, // Imagem opcional dentro da subsection
            caption: 'Representação histórica da literatura',
            // list: [
            //   'A literatura reflete a cultura e sociedade.',
            //   'Permite compreender períodos históricos.',
            //   'Pode ser usada para estudo da evolução humana.'
            // ]
          },
          {
            subtitle: 'Social',
            content: [
              'A literatura é arte, e isso é fato. Mas algumas obras literárias podem ser um pouco a mais do que arte, podem ter também preocupações sociais. Podemos citar como exemplo dessa função os poemas de Castro Alves, que criticavam a escravidão e denunciava a opressão do povo.'
            ],
            image: null,
            caption: null,
            example: {
              title: 'Exemplo de literatura histórica',
              content: 'Trecho retirado de um manuscrito que descreve a sociedade da época.'
            }
          },
          {
            subtitle: 'Entretenimento',
            content: [
              'Por último e não menos importante, a literatura serve também para o entretenimento. A literatura é uma forma de passar o tempo, de se divertir, a partir de livros dos mais variados gêneros, é um mundo sem fim.'
            ],
            image: '/img/intro-literatura-2.jpg',
            caption: 'Literatura e causas sociais'
          }
        ]
      },
      
      {
        title: 'Texto literário e não-literário',
        content: [
          'Agora, é importante deixar claro que nem todo texto pode ser considerado como literário, assim como nem toda fotografia pode ser considerada arte. O texto não-literário pode ser definido como um texto objetivo, com ênfase no conteúdo, uma tradução da realidade com linguagem objetiva, com finalidade de, por exemplo, informar. Já o texto literário utiliza de uma linguagem poética e lírica, com conotações e uma recriação da realidade, onde o texto carrega sentimentos e valores do emissor.'
        ],
        highlight: 'Seguem dois exemplos de textos, não-literário e literário, respectivamente:',
        examples: [
          {
            title: 'O golpe de 1964 e a instauração do regime militar',
            content: 'Na madrugada do dia 31 de março de 1964, um golpe militar foi deflagrado contra o governo legalmente constituído de João Goulart. A falta de reação do governo e dos grupos que lhe davam apoio foi notável. Não se conseguiu articular os militares legalistas. Também fracassou uma greve geral proposta pelo Comando Geral dos Trabalhadores (CGT) em apoio ao governo. (CPDOC - FVG - O Golpe de 1964).'
          },
          {
            title: 'Meu Caro Amigo (Chico Buarque - 1976)',
            content: [
              'Meu caro amigo me perdoe, por favor',
              'Se eu não lhe faço uma visita',
              'Mas como agora apareceu um portador',
              'Mando notícias nessa fita',
              '', // Quebra de estrofe
              'Aqui na terra tão jogando futebol',
              'Tem muito samba, muito choro e rock\'n\'roll',
              'Uns dias chove, noutros dias bate sol',
              'Mas o que eu quero é lhe dizer que a coisa aqui tá preta'
            ]
          }

        ]
      }
    ]
  },
  poema: {
    title: 'Poema',
    quote: {
      text: '“O poema é a arte da palavra.”',
      author: 'Autor desconhecido'
    },
    sections: [
      {
        title: 'Estrutura do poema',
        content: [
          'O poema é estruturado em versos e estrofes, podendo ter diversos estilos e formas.'
        ],
        examples: [
          {
            title: 'Meu Caro Amigo (Chico Buarque - 1976)',
            content: [
              'Meu caro amigo me perdoe, por favor',
              'Se eu não lhe faço uma visita',
              'Mas como agora apareceu um portador',
              'Mando notícias nessa fita',
              '', // Quebra de estrofe
              'Aqui na terra tão jogando futebol',
              'Tem muito samba, muito choro e rock\'n\'roll',
              'Uns dias chove, noutros dias bate sol',
              'Mas o que eu quero é lhe dizer que a coisa aqui tá preta'
            ]
          }
        ]
      }
    ]
  },
};

export default contentData;