const contentData = {
  introducao: {
    title: "Introdução à literatura",
    quote: {
      text: "“A literatura é a maneira mais agradável de ignorar a vida.”",
      author: "Fernando Pessoa",
    },
    image: "/img/intro-literatura.jpg", // Imagem principal da página
    imageBetweenSections: null, // Imagem opcional entre sections
    sections: [
      {
        title: "O que é a literatura?",
        content: [
          "A literatura é uma arte como qualquer outra, que tem como matéria prima a palavra, a qual é trabalhada de diversas formas, utilizando seu som e brincando com seus sentidos. Em suma, a literatura é a arte de escrever.",
        ],
        image: null,
        caption: "Imagem ilustrativa da literatura",
      },
      {
        title: "Funções da literatura",
        content: [
          "Podemos concluir que a literatura em nossa sociedade possui 3 funções claras, sendo elas:",
        ],
        // list: [
        //   'Histórica',
        //   'Social',
        //   'Entretenimento'
        // ],
        subsections: [
          {
            subtitle: "Histórica",
            content: [
              "Todo o ambiente e a época vivida pelo autor influencia, mesmo que por vezes inconscientemente, tudo o que ele escreve, possibilitando a nós que possamos resgatar aspectos históricos do tempo vivido por ele. Tomamos, por exemplo, o estudo de A Ilíada, livro escrito por Homero e que conta fantasiosamente o período da Guerra de Troia. Por mais que fantasioso, foi utilizado para compreender como era a sociedade na época em que foi escrito, pois o autor transfere suas vivências para dentro da história.",
            ],
            image: null, // Imagem opcional dentro da subsection
            caption: "Representação histórica da literatura",
            // list: [
            //   'A literatura reflete a cultura e sociedade.',
            //   'Permite compreender períodos históricos.',
            //   'Pode ser usada para estudo da evolução humana.'
            // ]
          },
          {
            subtitle: "Social",
            content: [
              "A literatura é arte, e isso é fato. Mas algumas obras literárias podem ser um pouco a mais do que arte, podem ter também preocupações sociais. Podemos citar como exemplo dessa função os poemas de Castro Alves, que criticavam a escravidão e denunciava a opressão do povo.",
            ],
            image: null,
            caption: null,
            example: {
              title: "Exemplo de literatura histórica",
              content:
                "Trecho retirado de um manuscrito que descreve a sociedade da época.",
            },
          },
          {
            subtitle: "Entretenimento",
            content: [
              "Por último e não menos importante, a literatura serve também para o entretenimento. A literatura é uma forma de passar o tempo, de se divertir, a partir de livros dos mais variados gêneros, é um mundo sem fim.",
            ],
            image: "/img/intro-literatura-2.jpg",
            caption: "Literatura e causas sociais",
          },
        ],
      },

      {
        title: "Texto literário e não-literário",
        content: [
          "Agora, é importante deixar claro que nem todo texto pode ser considerado como literário, assim como nem toda fotografia pode ser considerada arte. O texto não-literário pode ser definido como um texto objetivo, com ênfase no conteúdo, uma tradução da realidade com linguagem objetiva, com finalidade de, por exemplo, informar. Já o texto literário utiliza de uma linguagem poética e lírica, com conotações e uma recriação da realidade, onde o texto carrega sentimentos e valores do emissor.",
        ],
        highlight:
          "Seguem dois exemplos de textos, não-literário e literário, respectivamente:",
        examples: [
          {
            title: "O golpe de 1964 e a instauração do regime militar",
            content:
              "Na madrugada do dia 31 de março de 1964, um golpe militar foi deflagrado contra o governo legalmente constituído de João Goulart. A falta de reação do governo e dos grupos que lhe davam apoio foi notável. Não se conseguiu articular os militares legalistas. Também fracassou uma greve geral proposta pelo Comando Geral dos Trabalhadores (CGT) em apoio ao governo. (CPDOC - FVG - O Golpe de 1964).",
          },
          {
            title: "Meu Caro Amigo (Chico Buarque - 1976)",
            content: [
              "Meu caro amigo me perdoe, por favor",
              "Se eu não lhe faço uma visita",
              "Mas como agora apareceu um portador",
              "Mando notícias nessa fita",
              "", // Quebra de estrofe
              "Aqui na terra tão jogando futebol",
              "Tem muito samba, muito choro e rock'n'roll",
              "Uns dias chove, noutros dias bate sol",
              "Mas o que eu quero é lhe dizer que a coisa aqui tá preta",
            ],
          },
        ],
      },
    ],
  },
  poema: {
    title: "Poema",
    quote: {
      text: "“Quem faz um poema abre uma janela. Respira, tu que estás numa cela abafada, esse ar que entra por ela.”",
      author: "Mário Quintana",
    },
    image: "/img/poema.jpg",
    sections: [
      {
        title: "Poemas",
        content: [
          "Um poema é basicamente um modelo textual, é um texto escrito em versos (que consistem em uma linha dentro do poema), que formam estrofes (como se fossem parágrafos, agrupam os versos). Segue um exemplo de um poema: ",
        ],
        examples: [
          {
            title: "Logias e analogias de Antônio Carlos de Brito",
            content: [
              "No Brasil a medicina vai bem",
              "mas o doente ainda vai mal.",
              "Qual o segredo profundo",
              "desta ciência original?",
              "É banal: certamente",
              "não é o paciente",
              "que acumula capital.",
            ],
          },
        ],
      },
      {
        title: "Características do poema",
        subsections: [
          {
            subtitle: "Versos",
            content: [
              "Os poemas podem ser classificados de acordo com a quantidade de sílabas poéticas presentes por verso.",
            ],
          },
          {
            subtitle: "O que são sílabas poéticas",
            content: [
              "Sílabas poéticas consistem em contar as sílabas de um verso mas não da forma convencional, mas de acordo com a sua sonoridade, o processo de contá-las é denominado escansão. A utilização de sílabas poéticas é antiga e persiste nos poemas até hoje, têm como objetivo valorizar a estrutura do poema e enriquecê-lo, prezando pela harmonia ao pronunciá-lo.",
            ],
          },
          {
            subtitle: "Contando as sílabas poéticas",
            content: [
              "Como dito anteriormente, a contagem é realizada verso por verso, ou seja, se o autor definir que o poema é composto de 10 sílabas poéticas, cada verso deve possuir 10 sílabas poéticas. A contagem é baseada na sonoridade, então é preciso pronunciar o verso e estar atento ao som das palavras. Note que vamos além da noção gramatical, e por exemplo, se a pronúncia de 2 palavras seguidas unirem certas letras, então as mesmas serão enquadradas na mesma sílaba poética. Segue um exemplo de contagem das sílabas poéticas e também da junção de 2 palavras numa única sílaba poética: ",
            ],
            examples: [
              {
                content: ["O ho/mem /sa/iu da á/rea"],
              },
            ],
          },
          {
            content: [
              "Nesse verso, temos 4 sílabas poéticas e podemos ver como as palavras podem se juntar em uma única sílaba poética de acordo com a sonoridade da pronúncia das mesmas. Note no som ao falar O homem, O e ho se juntam e depois vêm mem. O mesmo acontece em saiu da área, sa separa-se de iu na pronúncia, e iu da á se enquadra na mesma sílaba poética. Você já deve ter se perguntado por que há apenas 4 sílabas poéticas se visualmente há 5 divisões? Isso acontece pois nesse caso, área é proparoxítona, e a última sílaba poética tem de ser a última tônica do verso, então não contamos o resto, no caso rea. Pode haver casos onde a última palavra é oxítona ou um monossílabo, onde nesse caso, a contagem vai até o final do verso, como no exemplo:",
            ],
            examples: [
              {
                content: ["E /com /is/so /fui /pa/ra/ o /Pa/rá"],
              },
            ],
          },
          {
            content: [
              "Como Pará é oxítona, a escansão vai até o final do verso, totalizando 10 sílabas poéticas. Agora que você já sabe o que são sílabas poéticas e como contá-las, vamos para como classificar versos de acordo com o número de sílabas poéticas presentes em cada verso:",
            ]
          },
          {
            content: [
              ''
            ],
            list: [
              "monossílabo: verso com uma sílaba poética",
              "dissílabo: verso com duas sílabas poéticas",
              "trissílabo: verso com três sílabas poéticas",
              "tetrassílabo: verso com quatro sílabas poéticas",
              "pentassílabo: verso com cinco sílabas poéticas",
              "hexassílabo: verso com seis sílabas poéticas",
              "heptassílabo: verso com sete sílabas poéticas",
              "octossílabo: verso com oito sílabas poéticas",
              "eneassílabo: verso com nove sílabas poéticas",
              "decassílabo: verso com dez sílabas poéticas",
              "hendecassílabo: verso com onze sílabas poéticas",
              "dodecassílabo: verso com doze sílabas poéticas",
            ],
          },
          {
            subtitle: "Métrica",
            content: [
              'Os versos de um poema podem ser discernidos de acordo com a sua medida: '
            ]
          },
          {
            content: [
              'Versos regulares: são aqueles que possuem a mesma medida e apresentam esquema de rima. Como por exemplo, com métrica e rima:'
            ],
            examples: [
              {
                content: [
                  'O sol se põe no campo, a brisa acalma (10 sílabas)',
                  'A luz dourada envolve o horizonte (10 sílabas)',
                  'A noite traz silêncio e a alma (10 sílabas)',
                  'Encontra paz onde o sonho responde (10 sílabas)' 
                ]
              }
            ]
          },
          {
            content: [
              'Versos livres: são aqueles que possuem medidas diferentes, ou seja, são irregulares e podem ou não ter rima, geralmente utilizado pra expressar sentimentos de forma mais livre. Como no exemplo, sem métrica e rima:'
            ],
            examples: [
              {
                content: [
                  'A cidade acorda com o som das ruas',
                  'O vento entra pelas janelas abertas,',
                  'mas ninguém percebe a mudança do dia.',
                  'Há uma sensação estranha no ar,',
                  'como se o tempo tivesse parado.'
                ]
              }
            ]
          },
          {
            content: [
            'Versos brancos: são aqueles que não apresentam esquemas de rima, no entanto, podem apresentar métrica (medida). '
            ],
            examples: [
              {
                content: [
                  'A lua brilha, mas não faz som, (8 sílabas)',
                  'O vento corre leve pela rua, (8 sílabas)',
                  'Cada estrela observa, imóvel, (8 sílabas)',
                  'O mistério da noite se espalha, (8 sílabas)',
                  'E o mundo parece em paz. (7 sílabas) '
                ]
              }
            ]
          },
          {
            subtitle: 'Estrofe',
            content: [
              'As estrofes nada mais são do que um agrupamento de versos, as quais podem ser classificadas de acordo com a forma do grupamento: '
            ]
          },
          {
            list: [
              'monóstico: estrofe com um verso',
              'dístico: estrofe com dois versos',
              'terceto: estrofe com três versos',
              'quadra ou quarteto: estrofe com quatro versos',
              'quintilha: estrofe com cinco versos',
              'sextilha: estrofe com seis versos',
              'setilha: estrofe com sete versos',
              'oitava: estrofe com oito versos',
              'nona: estrofe com nove versos',
              'décima: estrofe com dez versos' 
            ]
          },
          {
            subtitle: 'Rima',
            content: [
              'É a sonoridade semelhante que pode haver no final de cada verso, diretamente ligada ao ritmo. Os versos que não contêm rima são denominados de versos brancos, seguem exemplos de trechos de poemas com rima e sem rima, respectivamente: '
            ],
            examples: [
              {
                title: 'Sem rima (Amor é fogo que arde sem se ver, de Luiz Vaz de Camões)',
                content: [
                  'Amor é fogo que arde sem se ver,',
                  'é ferida que dói, e não se sente;',
                  'é um contentamento descontente,',
                  'é dor que desatina sem doer. (...) '
                ]
              },
              {
                title: 'Com rima (O sonho, de Clarice Lispector)',
                content: [
                  'Sonhe com aquilo que você quer ser,',
                  'porque você possui apenas uma vida',
                  'e nela só se tem uma chance',
                  'de fazer aquilo que quer.',
                  'Tenha felicidade bastante para fazê-la doce.',
                  'Dificuldades para fazê-la forte.',
                  'Tristeza para fazê-la humana.',
                  'E esperança suficiente para fazê-la feliz.'
                ]
              }
            ]
          },
          {
            subtitle: 'Ritmo',
            content: [
              'O ritmo é a melodia presente no poema, produzido de maneira intencional, o que o torna harmonioso de ler, ainda mais em voz alta, como nesse exemplo: '
            ],
            examples: [
              {
                title: 'Trecho do poema I-Juca-Pirama, de Gonçalves Dias',
                content: [
                  'Meu canto de morte,',
                  'Guerreiros, ouvi:',
                  'Sou filho das selvas,',
                  'Nas selvas cresci;',
                  'Guerreiros, descendo',
                  'Da tribo tupi.',
                  'Da tribo pujante,',
                  'Que agora anda errante',
                  'Por fado inconstante,',
                  'Guerreiros, nasci:',
                  'Sou bravo, sou forte,',
                  'Sou filho do Norte;',
                  'Meu canto de morte,',
                  'Guerreiros, ouvi. (...)'
                ]
              }
            ],
            image: '/img/poema-2.webp',
            caption: 'Os poemas são compostos por diversos fatores',
          }
        ],
      },
      {
        title: 'Classificação dos poemas',
        content: [
          'Os poemas podem também ser classificados em tipos, sendo eles:'
        ],
        subsections: [
          {
            subtitle: 'Poemas líricos',
            content: [
              'São poemas os quais contém a presença de herois, como por exemplo, as fábulas: '
            ],
            examples: [
              {
                title: 'Trecho de Os Lusíadas, de Luíz Vaz de Camões',
                content: [
                  'As armas e os Barões assinalados',
                  'Que da Ocidental praia Lusitana',
                  'Por mares nunca de antes navegados',
                  'Passaram ainda além da Taprobana,',
                  'Em perigos e guerras esforçados',
                  'Mais do que prometia a força humana',
                  'E entre gente remota edificaram',
                  'Novo Reino, que tanto sublimaram. (...)'
                ]
              }
            ]
          },
          {
            subtitle: 'Poemas narrativos',
            content: [
              'São poemas criados com o objetivo principal de serem encenados, como por exemplo: '
            ],
            examples: [
              {
                title: 'Trecho do Auto da Compadecida, de Ariano Suassuna',
                content: [
                  'Fique atento nesta narração',
                  'É a história de um cabra-macho',
                  'Mas preste bastante atenção',
                  'Não tinha sossego no facho',
                  'De ninguém era capacho',
                  'Só arrumava confusão',
                  'O nome dele era João',
                  'Grilo era só um apelido',
                  'Tinha um grande coração',
                  'Chicó era seu melhor amigo',
                  'Viviam sempre em perigo',
                  'Nessa história de armação'
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'Poemas de forma fixa',
        content: [
          'Existem ainda, poemas de forma fixa, são poemas que seguem uma métrica específica, e podem ser nomeados em: '
        ],
        subsections: [
          {
            subtitle: 'Soneto',
            content: [
              'Formado por 14 versos, sendo que dois deles são quartetos (conjunto de quatro versos) e dois são tercetos (conjunto de três versos). Segue como exemplo um famoso soneto: '
            ],
            examples: [
              {
                title: 'Soneto de Fidelidade, de Vinícius de Moraes',
                content: [

                'De tudo ao meu amor serei atento',
                'Antes, e com tal zelo, e sempre, e tanto',
                'Que mesmo em face do maior encanto',
                'Dele se encante mais meu pensamento.',
                '',
                'Quero vivê-lo em cada vão momento',
                'E em seu louvor hei de espalhar meu canto',
                'E rir meu riso e derramar meu pranto',
                'Ao seu pesar ou seu contentamento',
                '',
                'E assim, quando mais tarde me procure',
                'Quem sabe a morte, angústia de quem vive',
                'Quem sabe a solidão, fim de quem ama',
                '',
                'Eu possa me dizer do amor (que tive):',
                'Que não seja imortal, posto que é chama',
                'Mas que seja infinito enquanto dure.'
                ]
              }
            ]
          },
          {
            subtitle: 'Trova',
            content: [
              'Formado por uma estrofe com quatro versos heptassílabos (com 7 sílabas poéticas).'
            ],
            examples: [
              {
                content: [
                  'Manhã fria cinzenta',
                  'vento irado soprar',
                  'trouxe chuva violenta',
                  'natureza encharcar. '
                ]
              }
            ]
          },
          {
            subtitle: 'Haicai',
            content: [
              'Formado por 3 versos (terceto), sendo o primeiro verso composto de 5 sílabas poéticas (pentassílabo), o segundo de 7 sílabas poéticas (heptassílabo) e o terceiro de 5 sílabas poéticas (pentassílabo). '
            ],
            examples: [
              {
                title: 'Haicai “Arco-íris”, do livro Paisagem interior (1941), de Helena Kolody. ',
                content: [
                  'Arco-íris no céu.',
                  'Está sorrindo o menino',
                  'Que há pouco chorou.'
                ]
              }
            ]
          }
        ]
      }
    ],
  },
  generosliterarios: {
    title: 'Gêneros literários',
    quote: {
      text: '“A literatura, como toda a arte, é uma confissão de que a vida não basta.”',
      author: 'Fernando Pessoa',
    },
    image: '/img/generos-literarios.jpg',
    sections: [
      {
        title: 'Os três gêneros literários',
        content: [
          'Os textos literários são divididos em algumas categorias com base em suas características, essas categorias são chamadas de gêneros literários. No total, existem 3 gêneros literários, lírico (expressa subjetivamente ideias e emoções) narrativo (conta histórias), e dramático (instrui encenações teatrais).',
        ]
      },
      {
        title: 'O gênero lírico',
        content: [
          'Se refere aos textos literários que expressam, ideias, emoções e desejos de forma conotativa, como as poesias, que podem ser escritas em verso ou prosa. Temos como exemplo: '
        ],
        examples: [
          {
            title: 'CRUZ E SOUSA. Lenda dos campos. In: PÉREZ, José (Org.). Cruz e Sousa: prosa. 2. ed. São Paulo: Cultura, 1945. ',
            content: 
              'Por uma doirada tarde azul, em que os rios, após as chuvas torrenciais, sonorizam cristalinamente os bosques, os camponeses de uma vila risonha, numa unção bíblica, conduziam ao tranquilo cemitério florido o loiro cadáver branco de uma virgem noiva, morta de amor, tão bela e tão nova, umedecida no féretro, como se tivesse acabado de nascer da rosada luz da manhã. \n Infantil ainda, viera outrora da Alemanha através de castelos feudais, de montanhas alpestres, de árvores velhas e enevoadas...'
            
          }
        ]
      },
      {
        title: 'O gênero narrativo e seus subgêneros',
        content: [
          'São narrativos os textos literários que contam uma história. Para que seja considerado narrativo, ele precisa ter enredo, narrador, personagens, tempo e espaço. Existem ainda os textos épicos, que além de possuírem todas as características do texto narrativo, apresentam um herói. O gênero possui subgêneros, sendo eles: '
        ],
        subsections: [
          {
            subtitle: 'Epopeias',
            content: [
              'Narrativas abordando grandes conquistas ou herois de um povo, escritas em verso, como Os Lusíadas, de Camões: '
            ],
            examples: [
              {
                title: 'CAMÕES, Luís de. Os Lusíadas. São Paulo: Martin Claret, 2000."' ,
                content: [
                  '"Mas o Mouro, instruído nos enganos',
                    'Que o malévolo Baco lhe ensinara,',
                    'De morte ou cativeiro novos danos,',
                    'Antes que à Índia chegue, lhe prepara',
                    'Dando razão dos portos Indianos,',
                    'Também tudo o que pede lhe declara,',
                    'Que, havendo por verdade o que dizia,',
                    'De nada a forte gente se temia."[...]',
                ]
              }
            ],
            image: '/img/generos-literarios-2.jpg',
            caption: 'Pintura sobre a obra Os Lusíadas'
          },
          {
            subtitle: 'Romance',
            content: [
              'Pintura sobre a obra Os LusíadasExtensas narrativas escritas em prosa, que mostram as ações de personagens no decorrer de uma história. Temos como exemplo, Dom Casmurro, de Machado de Assis. '
            ]
          },
          {
            subtitle: 'Conto e novela',
            content: [
              'Os contos são pequenas narrativas, e a novela fica entre o conto e a novela, com um tamanho intermediário. Como exemplo de conto podemos citar O segredo de Brokeback Mountain, de Annie Proulx, e como exemplo de novela, O alienista, de Machado de Asiss. '
            ]
          },
          {
            subtitle: 'Fábulas',
            content: [
              'As fábulas são contos que utilizam animais como personagens, e sempre apresentam uma lição de moral. Afinal, quem nunca quando criança escutou fábulas como A lebre e a tartaruga, e A raposa e as uvas, de Jean de la Fontaine? '
            ]
          }
        ]
      },
      {
        title: 'O gênero dramático e seus subgêneros:',
        content: [
          'Os textos dramáticos são aqueles produzidos com o objetivo de serem interpretados por atores em uma peça. Eles têm elementos como: atos, rubricas, falas e cenas. Esse gênero também possui alguns subgêneros, sendo eles:'
        ],
        subsections: [
          {
            subtitle: 'Tragédia',
            content: [
              'É um texto teatral trágico, que apresenta muita tensão e um final triste.'
            ]
          },
          {
            subtitle: 'Comédia',
            coentent: [
              'É um texto teatral que satiriza aspectos cotidianos ou da sociedade, escrito com a finalidade de ser cômico. '
            ]
          },
          {
            subtitle: 'Auto',
            content: [
              'Faz referência a textos com caráter dramático e que trás uma abordagem moral, religiosa ou mística, como Auto da barca do inferno, de Gil Vicente.'
            ]
          },
          {
            subtitle: 'Farsa',
            content: [
              'A farsa é uma peça cômica e que tem apenas um ato, sendo curta. Temos como exemplo: '
            ],
            examples: [
              {
                title: ' VICENTE, Gil. Farsa de Inês Pereira. São Paulo: Biblioteca Virtual do Estudante Brasileiro, 1998."',
                content: [
                  ' "MÃE Tomai aquela cadeira.',
                    '',
                    'PÊRO E que val aqui uma destas?',
                    '',
                    'INÊS (Ó Jesu! que João das bestas!',
                    'Olhai aquela canseira!)',
                    '',
                    'Assentou-se com as costas pera elas, e diz:',
                    'PÊRO Eu cuido que não estou bem...',
                    '',
                    'MÃE Como vos chamais, amigo?',
                    '',
                    'PÊRO Eu Pêro Marques me digo,',
                    'Como meu pai que Deos tem.',
                    'Faleceu, perdoe-lhe Deos,',
                    'Que fora bem escusado,',
                    'E ficamos dous eréos.',
                    'Porém meu é o mor gado.',
                    '',
                    'MÃE De morgado é vosso estado?',
                    'Isso viria dos céus.',
                    '[...]'
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  trovadorismo: {
    title: 'Trovadorismo',
    quote: {
      text: '"A literatura é o único meio de salvar a realidade da banalidade."',
      author: 'Albert Camus',
    },
    image: "/img/trovadorismo.jpeg",
    sections: [
      {
        title: 'Contexto histórico',
        content: [
          ' O Trovadorismo foi a primeira manifestação literária da língua portuguesa, surgida na Idade Média, entre os séculos XII e XIV. Período esse em que a Igreja Católica tinha controle sob a Europa e o teocentrismo dominava, isto é, Deus está no centro do mundo, e o homem está a mercê dos valores cristão. Este movimento é conhecido pelas composições poéticas acompanhadas de música, denominadas "cantigas". Uma das cantigas que deslanchou o movimento em território português foi a Cantiga da Ribeirinha(1189) de Paio Soares de Taveirós, escrita em galego-português, o que dificulta um pouco a leitura, como nesse trecho: '
        ],
        examples: [
          {
            content: [
              ' “No mundo non me sei parelha,',
                "mentre me for' como me vai,",
                'ca ja moiro por vós - e ai!',
                'mia senhor branca e vermelha,',
                'Queredes que vos retraia',
                'quando vos eu vi em saia!',
                'Mao dia me levantei, que vos',
                'enton non vi fea!” '
            ]
          }
        ]
      },
      {
        highlight: 'Traduzindo para o nosso português:',
        examples: [
          {
            content: [
              '“No mundo ninguém se assemelha a mim,',
              'enquanto a minha vida continuar como está,',
              'porque morro por ti e ai',
              'minha senhora de pele alva e faces rosadas',
              'quereis que eu vos descreva (retrate)',
              'quanto eu vos vi sem manto! (roupa íntima)',
              'Maldito dia! me levantei,',
              'que não vos vi feia! (ou seja, viu a mais bela).” '
            ]
          }
        ],
        image: '/img/trovadorismo-2.webp',
        caption: 'Tristão e Isolda (1902)'
      },
      {
        title: 'Características do Trovadorismo',
        content: [
          'A característica mais marcante desse movimento é sem sombra de dúvidas a união da poesia com a música (criando as cantigas), onde as poesias eram escritas com o intuito de serem cantadas, acompanhadas por instrumentos musicais como viola e flauta. Trovador era quem escrevia as poesias, jogral era quem as declamava e o menestrel, recitava e tocava instrumentos, estando acima do jogral em uma espécie de ‘hierarquia’. As cantigas são divididas em cantigas de amor, de amigo, e de escárnio, seguindo tais características: '
        ],
        subsections: [
          {
            subtitle: 'Cantigas de amor',
            content: [
              'Expressam o amor cortês, onde o eu-lírico geralmente sofre pelo amor inalcançável de uma dama. Temos como exemplo, a cantiga mostrada acima no contexto.'
            ]
          },
          {
            subtitle: 'Cantigas de amigo',
            content: [
              'Caracterizadas pela simplicidade e pelo eu-lírico feminino, onde a mulher lamenta a ausência do amado. Como por exemplo, nesse trecho: '
            ],
            examples: [
              {
                title: '"Ai Deus, se sab’or meu amigo" de Martin Codax',
                content: [
                    "“Ai Deus, se sab'ora meu amigo",
                    "com'eu senheira estou em Vigo!",
                    'E vou namorada...',
                    "Ai Deus, se sab'ora meu amado",
                    "com'eu em Vigo senheira manho!",
                    'E vou namorada...',
                    "Com'eu senheira estou em Vigo",
                    'e nulhas gardas nom hei comigo!',
                    'E vou namorada…” '
                ]
              }
            ]
          },
          {
            subtitle: 'Cantigas de escárnio e maldizer',
            content: [
              'Composições satíricas que criticam de forma velada ou indireta (escárnio) ou de forma direta (maldizer) personagens e situações da época. Podemos citar como exemplo de cantiga de escárnio, um trecho de "A Dom Foam quer’eu gram mal" de João Garcia de Guilhade: '
            ],
            examples: [
              {
                title: '"A Dom Foam quer’eu gram mal" de João Garcia de Guilhade',
                content: [
                  "“A Dom Foam quer'eu gram mal",
                  "e quer'a sa molher gram bem;",
                  "gram sazom há que m'est'avém",
                  'e nunca i já farei al;',
                  "ca, desquand'eu sa molher vi,",
                  'se púdi, sempre a servi',
                  "e sempr'a ele busquei mal.",
                  "Quero-me já maenfestar,",
                  "e pesará muit'[a] alguém,",
                  'mais, sequer que moira por en,',
                  "dizer quer'eu do mao mal",
                  'e bem da que mui bõa for,',
                  'qual nom há no mundo melhor,',
                  'quero-[o] já maenfestar.”[...] '
                ]
              }
            ]
          },
          {
            content: [
              'Na cantiga de escárnio acima, o eu lírico elogia uma mulher e ataca seu marido, o que nos leva a interpretar que seria a vivência de um amor cortês, isso é, onde se eleva o nível de sua amada ao quase divino. '
            ]
          },
          {
            content: [
              'Já como uma de maldizer, ou seja, que critica ofensivamente de forma direta, podemos citar um trecho de "A mim dam preç, e nom é desguisado" de Afonso Anes do Cotom: '
            ],
            examples: [
              {
                title: '"A mim dam preç, e nom é desguisado" de Afonso Anes do Cotom',
                content: [
                  "A mim dam preç', e nom é desguisado,",
                  'dos maltalhados, e nom erram i;',
                  "Joam Fernandes, o mour', outrossi,",
                  'nos maltalhados o vejo contado;',
                  'e pero maltalhados semos [n]ós,',
                  "s'homem visse Pero da Ponte em cós,",
                  "semelhar-lh'-ia moi peor talhado."
                ]
              }
            ]
          },
          {
            content: [
              'Na cantiga breve de maldizer acima, o eu lírico compara o aspecto físico de três homens maljeitosos, sendo eles Cotom, João Fernandes e Pero da Ponte. '
            ]
          },
          {
            subtitle: 'Novelas de cavalaria',
            content: [
              'As novelas de cavalaria são outro gênero literário que foi produzido durante o Trovadorismo. São derivações dos poemas épicos, são longas e escritas em prosa, relatam fantásticas aventuras de heróis destemidos, cavaleiros medievais que lutavam com bravura diversas batalhas, enfrentando mostros a caminho da glória. Conta com algumas características como grande extensão e divisão em capítulos, aborda temas mitológicos, possuem caráter místicos, apresentam visão teocêntrica e têm como personagens cavaleiros e donzelas. Um exemplo de novela de cavalaria é a história de Rei Arthur, o rei dos Bretões; '
            ],
            image: '/img/trovadorismo-3.webp',
            caption: 'Rei Arthur empunhando Excalibur'
          }
        ]
      }
    ]

  },
  humanismo: {
    title: "Humanismo",
    quote: {
      text: '“O homem é a medida de todas as coisas."',
      author: 'Protágoras',
    },
    image: "/img/humanismo.webp",
    sections: [
      {
        title: 'Contexto histórico',
        content: [
          ' O Humanismo é um movimento de transição entre a Idade Média e o Renascimento (ou se preferir, entre o Trovadorismo e o Classicismo), ocorrido no século XV. Por ser um movimento literário de transição, não possui características únicas dele, e nem é consdierado um movimento literário por alguns estudiosos. As obras produzidas durante esse período levam características do Trovadorismo, ao mesmo tempo em que também possui características adquiridas do movimento moderno Renascentista. Nesse período, houve a transição do sistema feudal para o sistema mercantilista, onde os ideais burgueses começam a ter influência no âmbito social. '
        ]
      },
      {
        title: 'Características do Humanismo',
        content: [
          ' Com a queda da hegemonia da igreja, uma característica forte do movimento é o Antropocentrismo, onde o homem é o centro do mundo, valorizando o ser humano e suas características. Outras características marcantes são o Cientificismo, que se resume na ância de encontrar respostas científicas para o acontecimento de fenômenos naturais, o Racionalismo, crença de que a razão humana prevalece sobre tudo, a retratação da figura humana baseada no ideal clássico greco-romano e a desmonopolização do conhecimento, com o enfraquecimento da igreja e a invenção da imprensa. Quanto às produções literárias, nesse periodo foram produzidas as poesias palacianas, as prosas e os teatros. '
        ],
        highlight: 'De forma resumida, podemos citar as características do Humanismo como: ',
        list: [
          'Antropocentrismo (o homem como centro do universo)',
          'Cientificismo (busca por respostas científicas e não divinas)',
          'Racionalismo (a razão humana prevalece acima de tudo)',
          'Enfraquecimento da influência da Igreja Católica',
          'Valorização do corpo e pensamento humano',
          'Busca da beleza e perfeição',
          'Descentralização do conhecimento',
          'Invenção da imprensa '
        ],
        image: '/img/humanismo-2.webp',
        caption: 'Escultura de Moisés, por Michelangelo'
      },
      {
        title: 'Poesia palaciana',
        content: [
          ' Sucessoras das cantigas produzidas no Trovadorismo, só que agora com uma estrutura textual bem elaborada, utilizando de métrica, ritmo, figuras de linguagem, ambiguiodades, idealismo e mais. Diferentemente das cantigas, ela não é escrita para ser cantada com música, e sim para ser recitada nos palácios da nobreza. Segue um exemplo de poesia palaciana: '
        ],
        examples: [
          {
            content: [
              '"Antre tremor e desejo,',
              'Vã esperança e vã dor,',
              'Antre amor e desamor,',
              'Meu triste coração vejo.',
              '',
              'Nestes extremos cativo',
              'Ando sem fazer mudança,',
              "E já vivi d'esperança",
              'E agora vivo de choro vivo.',
              'Contra mi mesmo pelejo,',
              "Vem d'ua dor outra dor",
              "E d'um desejo maior",
              'Nasce outro mor desejo."'
            ]
          }
        ]
      },
      {
        title: 'Prosa',
        content: [
          'A prosa é uma forma de escrever onde o texto é escrito em linhas contínuas, estruturado em parágrafos. Neste período, a prosa é dividida entre crônicas historiográficas e em crônicas ficcionais. '
        ],
        subsections: [
          {
            subtitle: 'Crônicas historiográficas',
            content: [
              ' Uma crônica historiográfica é basicamente um relato de um acontecimento relacionado à história de Portugual, onde são contados os feitos heróicos de homens do reino. O principal autor desse tipo de obra foi Fernão Lopes, sendo considerado o pai da historiografia portuguesa. '
            ]
          },
          {
            subtitle: 'Crônicas ficcionais',
            content: [
              ' As crônicas ficcionais são uma adaptação das chamadas novelas de cavalaria, produzidas no Trovadorismo. Apenas foram adequadas para seguirem a corrente de pensamento e a situação social da época. '
            ]
          }
        ]
      },
      {
        title: 'Autores e obras',
        subsections: [
          {
            subtitle: 'Fernão Lopes',
            content: [
              ' Fernão Lopes nasceu em Lisboa, tendo origem humilde, se tornando escrivão e cronista para a coroa portuguesa. Foi peça chave durante esse período literário, pois foi ele quem levou o movimento humanista para Portugual. Como dito anteriormente, é considerado o pai da historiografia portuguesa, responsável por separar o real da fantasia, e escrever imparcialmente os fatos ocorridos durante a história dos reinos portugueses. Ele produziu obras como Crônica de El-Rei D. Pedro I e Crônica de El-Rei D. Fernando. '
            ],
            image: '/img/humanismo-3.jpg',
            caption: 'Retrato de Fernão Lopes'
          },
          {
            subtitle: 'Auto da barca do inferno',
            content: [
              ' Auto da Barca do Inferno é uma peça de teatro produzida durante o Humanismo e escrita por Gil Vicente, considerado o pai do teatro português. A peça foi encenada em 1531 e é uma da Trilogia das Barcas, junto de Auto da Barca do Purgatório e Auto da Barca da Glória. Na história da obra existem 2 barqueiros que recebem as almas dos que já se foram, e são um Anjo e um Diabo. No desenrolar da trama, cada personagem é julgado e entra na barca que vai para o céu ou na barca que vai ao inferno, de acordo com o modo em que viveu sua vida. Segue um trecho da obra: '
            ],
            exampĺes: [
              {
                content: [
                  '“ANJO Ó cavaleiros de Deus,',
                  'a vós estou esperando,',
                  'que morrestes pelejando',
                  'por Cristo, Senhor dos Céus!',
                  'Sois livres de todo mal,',
                  'mártires da Santa Igreja,',
                  'que quem morre em tal peleja',
                  'merece paz eternal.”'
                ]
              }
            ],
            image: '/img/humanismo-4.jpg',
            caption: 'Desenho sobre a obra Auto da Barca do Inferno'
          }
        ]
      }
    ]

  },
  classicismo: {
    title: "Classicismo",
    quote: {
      text: ' "A literatura é a forma mais sublime de arte." ',
      author: "Virginia Woolf",
    },
    image: "/img/classicismo.jpg",
    sections: [
      {
        title: 'Contexto histórico do Classicismo',
        content: [
          ' O Classicismo ou Renascimento ocorre e marca o fim da idade média e início da idade moderna, um período de intensas transformações na filosofia, arte, cultura e política. Neste período, acontecem diversos eventos históricos importantes, como as grandes navegações, a reforma protestante, o fim do feudalismo com a entrada do capitalismo e a invenção da imprensa. Detalhe que no Brasil, esse movimento ficou conhecido como Quinhentismo, o que nos remete a obra Os Lusíadas, de Luís de Camões. '
        ]
      },
      {
        title: 'Características do Classicismo',
        content: [
          ' Nesse período se destaca a razão, de forma com que os autores e artistas dessa época vão tentar explicar sentimentos humanos de forma racional. São retomados conceitos da antiguidade, de modo a manter a simetria, equilíbrio e a harmonia de formas. O movimento também tem o culto a deuses pagãos e tem como pilar o antropocentrismo, onde tomam a figura do ser humano como parâmetro para perfeição, e não alguma divindade ou algo maior, podemos perceber isso nas esculturas de Michelangelo: '
        ],
        highlight: 'De forma resumida, podemos citar as características do Classicismo como: ',
        list: [
          'Antropocentrismo',
          'Equilíbrio',
          'Harmonia',
          'Racionalismo',
          'Cientificismo',
          'Paganismo',
          'Mitologia greco-romana',
          'Antiguidade clássica',
          'Idealização de beleza' 
        ],
        image: '/img/classicismo-2.jpg',
        caption: 'Escultura de Davi (1504)'
      },
      {
        title: 'Autores e obras',
        subsections: [
          {
            subtitle: 'Luís de Camões',
            content: [
              ' Luís de Camões nasceu em Lisboa, onde cresceu e começou a se interessar pela literatura, mas ao sofrer uma desilusão amorosa, se torna um soldado do Exército Coroa Portuguesa e embarca para a África, onde perde um dos olhos. Logo após retorna à Lisboa, posteriormente embarcando em diversas expedições militares. Descrito como problemático, foi preso tanto em Portugal quanto no Oriente, e foi na prisão onde escreveu sua maior obra, "Os Lusíadas", a qual publicou quando retornou ao seu país natal, mas que só teve seu devido reconhecimento após sua morte, que foi causada pela peste negra. '
            ],
            image: '/img/classicismo-3.jpg',
            caption: 'Retrato de Luís de Camões'
          },
          {
            subtitle: 'O poema épico "Os Lusíadas"',
            content: [
              ' O poema é dividido em dez cantos, sendo composto de 8816 versos decassílabos e 1102 estrofes de oito versos. Acima dos dez cantos, a obra se divide em: '
            ]
          },
          {
            list: [
              'Proposição (introdução da obra, apresentando o tema e os personagens, Canto 1)',
              'Invocação (nessa parte são invocadas as ninfas do Tejo como forma de inspiração do poeta, Canto 1)',
              'Dedicatória (parte que dedica a obra ao rei Dom Sebastião, Canto 1)',
              'Narração (narração da viagem de Vasco da Gama e as ações dos personagens, Canto 1 ao 10)',
              'Epílogo (conclusão do poema, Canto 10)' 
            ]
          },
          {
            highlight: 
              'Segue um trecho do Canto 4:'
            ,
            examples: [
              {
                content: [
                  '[...]"Despois de procelosa tempestade,',
                  'Nocturna sombra e sibilante vento,',
                  'Traz a manhã serena claridade,',
                  'Esperança de porto e salvamento;',
                  'Aparta o Sol a negra escuridade,',
                  'Removendo o temor ao pensamento:',
                  'Assi no Reino forte aconteceu',
                  'Despois que o Rei Fernando faleceu."[...]'
                ]
              }
            ]
          },
          {
            subtitle: 'Dante Alighieri',
            content: [
              ' Dante Alighieri nasceu em Florença em boa família, onde teve uma boa educação, estudando teologia, artes, letras e ciências. Após a morte dos seus pais, foi abandonado por seus parentes e posteriormente exilado da sua terra natal por gastar dinheiro público. Casou com uma mulher com a qual teve vários filhos, mas o amor de sua vida foi Beatrice Portinari, que faleceu precocemente com apenas 25 anos, e é ela quem inspira diversas de suas obras. '
            ],
            image: '/img/classicismo-4.jpg',
            caption: 'Retrato de Dante Alighieri'
          },
          {
            subtitle: 'A Divina Comédia',
            content: [
              ' O poema foi originalmente intitulado como "Comédia", posteriormente intitulado como "A Divina Comédia" por Giovanni Boccaccio. A obra é narrada em primeira pessoa, onde Dante é o personagem principal e o próprio narrador. Assim como em "Os Lusíadas", o poema também é dividido em cantos, além de também ter um maior agrupamento, divididos em Inferno, Purgatório e Paraíso. Durante a história, antes de Dante ir para o paraíso, tem de passar pelo Inferno, onde descreve como é dividido e informa as punições para cada tipo de pecado, dividindo os condenados em círculos, onde quanto mais ao centro, maior o pecado e consequentemente, o sofrimento. Logo após entra na porta para o purgatório, onde paga por seus pecados e depois vai ao paraíso. O autor inclui na obra vários personagens, conflitos e governos reais da época em que viveu em Florença, e os pune ou vangloria como quer, encontrando-os no inferno, no purgatório ou paraíso. Segue um trecho do livro Inferno: '
            ],
            examples: [
              {
                content: 
                  '"O Portal do Inferno não tem portas ou cadeados, somente um arco com um aviso que adverte: uma vez dentro, deve-se abandonar toda a esperança de rever o céu, pois de lá não se pode voltar". '
              }
            ],
            image: '/img/classicismo-5.jpg',
            caption: 'A Barca de Dante (Eugène Delacroix, 1822)'
          }
        ]
      }
    ]

  },
  quinhentismo: {
    title: "Quinhentismo",
    quote: {
      text: ' "A literatura é a música da alma." ',
      author: "Emily Dickinson",
    },
    image: "/img/quinhentismo.webp",
    sections: [
      {
        title: 'Contexto histórico',
        content: [
          ' O Quinhentismo foi um período histórico e também o primeiro período literário do Brasil, que abrange as manifestações escritas no primeiro século da colonização do país. O nome se refere ao período em que aconteceu, ou seja, em 1500. As produções consistem em basicamente relatos de viagem produzidos pelos portugueses, os quais descrevem as descobertas em território brasileiro, descrevendo a flora, a fauna e o povo que aqui habitava. Aconteceu paralelo ao Classicismo europeu. '
        ]
      },
      {
        title: 'Características do Quinhentismo',
        content: [
          ' Os principais autores do período são viajantes e jesuítas, que visavam informar o que viam para as pessoas do outro lado do oceano, com seus textos tendo fortes traços de suas impressões e interpretações do que avistaram aqui, dividindo as obras em literatura de informação e literatura de formação. A obra que mais se destaca do movimento literário é a carta de Pero Vaz de Caminha para o Rei de Portugal (literatura de informação). Segue um trecho da carta: '
        ],
        examples: [
          {
            content: 
            '"Ali veríeis galantes, pintados de preto e vermelho, e quartejados, assim pelos corpos como pelas pernas, que, certo, assim pareciam bem. Também andavam entre eles quatro ou cinco mulheres, novas, que assim nuas, não pareciam mal. Entre elas andava uma, com uma coxa, do joelho até o quadril e a nádega, toda tingida daquela tintura preta; e todo o resto da sua cor natural. Outra trazia ambos os joelhos com as curvas assim tintas, e também os colos dos pés; e suas vergonhas tão nuas, e com tanta inocência assim descobertas, que não havia nisso desvergonha nenhuma."'
          }
        ]
      },
      {
        title: 'Autores e obras da literatura de informação',
        subsections: [
          {
            subtitle: 'Pero Vaz de Caminha',
            content: [
              ' Pero Vaz de Caminha era uma pessoa importante em Portugal, onde chegou a ser escrivão e tesoureiro da Casa da Moeda e vereador da cidade do Porto em meados de 1497. No mês de março em 1500, juntou-se à frota de exploração de Pedro Álvares Cabral ocupando o cargo de escrivão-mor. Ao chegar no Brasil, escreveu uma carta ao até então rei de Portugal Rei Dom Manuel I, descrevendo o que haviam encontrado e suas impressões sobre a fauna, a flora e os habitantes, carta essa que é conhecida como "A Carta de Pero Vaz de Caminha", a qual tem um trecho escrito acima. '
            ],
            image: '/img/quinhentismo-2.jpg',
            caption: 'Retrato de Pero Vaz de Caminha'
          }
        ]
      },
      {
        title: 'Literatura de formação ou de catequese',
        content: [
          ' Durante os primeiros anos de ocupação, os portugueses demonizaram os deuses e cultos indígenas, o que culminou na imposição do catolicismo na região. Paralela à literatura de informação, era produzida a literatura de formação ou de catequese, cujo objetivo primário era catequisar e converter indígenas para o catolicismo. As obras eram escritas pelos jesuítas, religiosos que vinham de Portugal para cumprir a missão de catequisação dos nativos, e escreviam poemas, crônicas, cartas e até tratados. '
        ]
      },
      {
        title: 'Autores e obras da literatura de formação',
        subsections: [
          {
            subtitle: 'Padre José de Anchieta',
            content: [
              ' O Padre José de Anchieta teve papel fundamental durante o período de colonização, inclusive participando da criação das cidades de Rio de Janeiro e São Paulo, foi um grande poeta e escritor de crônicas, utlizando ambas as línguas portuguesa e tupi. '
            ],
            image: '/img/quinhentismo-3.png',
            caption: 'Retrato do Padre José de Anchieta'
              },
          {
            highlight: ' Segue como exemplo o poema Ao santíssimo sacramento, escrito pelo padre: ',
            examples: [
              {
                title: 'Ao santíssimo sacramento ',
                content: [
                  '"Oh que pão, oh que comida,',
                    'Oh que divino manjar',
                    'Se nos dá no santo altar',
                    'Cada dia.',
                    '',
                    'Filho da Virgem Maria',
                    'Que Deus Padre cá mandou',
                    'E por nós na cruz passou',
                    'Crua morte.',
                    '',
                    'E para que nos conforte',
                    'Se deixou no Sacramento',
                    'Para dar-nos com aumento',
                    'Sua graça.',
                    '',
                    '[...]',
                    '',
                    'Quando na minha alma entrais',
                    'E dela fazeis sacrário,',
                    'De vós mesmo é relicário',
                    'Que vos guarda.',
                    '',
                    'Enquanto a presença tarda',
                    'De vosso divino rosto,',
                    'O saboroso e doce gosto',
                    'Deste pão',
                    '',
                    'Seja minha refeição',
                    'E todo o meu apetite,',
                    'Seja gracioso convite',
                    'De minha alma.',
                    '',
                    '[...]',
                    '',
                    'Pois não vivo sem comer,',
                    'Como a vós, em vós vivendo,',
                    'Vivo em vós, a vós comendo,',
                    'Doce amor.',
                    '',
                    '[...]"'
                ]
          }
            ]
          },
          {
            subtitle: 'Padre Manuel da Nóbrega',
            content: [
              ' O Padre Manuel da Nóbrega foi um sacerdote jesuíta e também chefe da primeira missão jesuíta nas Américas. Assim como o Padre José de Anchieta, teve papel fundamental na criação das cidades de São Paulo e Rio de Janeiro, além de Salvador. '
            ],
            image: '/img/quinhentismo-4.jpg',
            caption: 'Retrato do Padre Manuel da Nóbrega'
          }
        ]
      }
    ]

  },
  barroco: {
    title: "Barroco",
    quote: {
      text: '"Ler é sonhar com os olhos abertos."',
      author: "Fernando Sabino",
    },
    image: "/img/barroco.webp",
    sections: [
      {
        title: 'A origem da literatura brasileira',
        content: [
          ' A literatura brasileira teve sua origem com a chegada dos colonizadores portugueses e desenvolveu-se ao longo dos séculos. Dois dos primeiros estilos literários marcantes foram o Barroco e o Classicismo. '
        ]
      },
      {
        title: 'Contexto histórico do Barroco',
        content: [
          ' Esse movimento artístico se deu durante um momento conturbado, onde acontecia a reforma protestante de Martinho Lutero. Logo após foi realizado o Concílio de Trento, em resposta à reforma, trazendo grandes mudanças ao Catolicismo e retomando a autoridade da Igreja Romana, mesmo depois de perder muitos fiéis. O Barroco surgiu como uma forma de propagar a fé católica e atrair mais fiéis à igreja, se baseando em uma arte eclesiástica, onde se construíram inúmeras igrejas, templos e estátuas para veneração de santos. '
        ]
      },
      {
        title: 'O Barroco na Europa',
        content: [
          ' O Barroco se iniciou na Itália, e posteriormente se espalhou para os outros diversos países europeus. Em seu país de origem, podemos citar um artista famoso chamado Caravaggio (1571-1610), que pintava temas religiosos sempre utilizando do contraste entre luz e escuridão. Em suas pinturas, as personagens eram reunidas na cena principal sob um foco de luz, com um fundo muito mais escuro. Isso destaca as figuras, adicionando a cada uma delas um efeito de escultura. Essa técnica ficou conhecida como tenebrismo. '
        ],
        image: '/img/barroco-1.jpg',
        caption: 'Judite e Holoferne, de Caravaggio (1599)'
      },
      {
        title: 'O Barroco no Brasil',
        content: [
          ' O Barroco no Brasil chegou por meio dos jesuítas, no fim do século XVI, o que ajudaria na missão de catequizar os índigenas. O período artístico teve grande importância e criou grandes obras nos ramos da arquitetura, na pintura e estatuaria. Por esse objetivo dos jesuítas, a maioria da arte produzida no Barroco aqui no Brasil consiste em arte sacra e na construção de igrejas. '
        ],
        image: '/img/barroco-2.jpg',
        caption: 'Basílica Nossa Senhora do Carmo'
      },
      {
        title: 'Características do Barroco',
        content: ['Esse movimento literário é marcado por algumas características como o dualismo e contradição, onde em diversas obras veremos ser retratados sentimentos e pensamentos contrários, abordando por exemplo, fé contra razão, luz contra sombra, racional contra irracional. Acompanha também o uso de antíteses, que é basicamente o dualismo reduzido à palavras, onde o autor, na mesma frase, utilizará palavras totalmente opostas como amor e ódio, vida e morte ou frio e quente. Outras características se mostram igualmente relevantes nos textos barrocos, como o pessimismo de que a vida na terra não pode ser feliz, juntamente com a morbidez e o sentimento de culpa.'],
        list: [
          'Arte rebuscada e exagerada;',

          'Valorização do detalhe;',

          'Dualismo e contradições;',

          'Obscuridade;',

          'Complexidade;',

          'Calorização das sensações;',

          'Cultismo e conceptismo;',

          'Antítese e paradoxo;',
          
          'Pessimismo;',

          'Rebuscamento;',

          'Hipérbole;',

          'Conceptismo ou quevedismo;',

          'Morbidez;',

          'Sentimento de culpa;',

          'Carpe diem;',
        ]
      },
      {
        title: 'Autores e obras',
        subsections: [
          {
            subtitle: 'Gregório de Matos',
            content: [
              ' Gregório de Matos, conhecido também como Boca do Inferno, é o representante máximo da poesia barroca brasileira. Ele era filho de um nobre português e se formou em direito em Portugal, mas a literatura foi o que mais o atraiu. Suas obras criticavam as ações do governo, a sociedade, e até mesmo a Igreja Católica, o que o fez ser perseguido pela Inquisição, sendo condenado no ano de 1694 na Angola, onde contrariu uma febre e morreu posteriormente. '
            ],
            image: '/img/barroco-3.jpg',
            caption: 'Retrato de Gregório de Matos',
          },
          {
            content: [
              ' Seus poemas podem ser divididos entre satíricos (o que lhe rendeu o apelido de Boca do Inferno), líricos, eróticos e religiosos, não tendo publicado nenhum em vida. Seguimos com exemplos de um poema satírico, um lírico e outro religioso: '
            ]
          },
          {
            highlight: 'Poema lírico',
          },
          {
            content: [
              ' Neste poema denominado "A uma saudade", podemos perceber características do movimento Barroco, como o pessimismo, a obscuridade, a morbidez e a hipérbole: '
            ],
            examples: [
              {
                title: ' A uma saudade ',
                content: [
                '"Em o horror desta muda soledade,',
                'Onde voando os ares a porfia,',
                'Apenas solta a luz a aurora fria,',
                'Quando a prende da noite a escuridade.',
                '',
                'Ah cruel apreensão de uma saudade!',
                'De uma falsa esperança fantasia,',
                'Que faz que de um momento passe a um dia,',
                'E que de um dia passe à eternidade!',
                '',
                'São da dor os espaços sem medida,',
                'E a medida das horas tão pequena,',
                'Que não sei como a dor é tão crescida.',
                'Mas é troca cruel, que o fado ordena,',
                'Porque a pena me cresça para a vida,',
                'Quando a vida me falta para a pena."' 
                ]
              }
            ]
          },
          {
            highlight: 'Poema satírico',
          },
          {
            content: [
              '  Aqui vemos o poema "À Cidade da Bahia", o mais famoso poema satírico escrito por Gregório de Matos, no qual critica aspectos da sociedade da época:  '
            ],
            examples: [
              {
                title: 'À Cidade da Bahia',
                content: [
                '"A cada canto um grande conselheiro,',
                'Que nos quer governar cabana e vinha;',
                'Não sabem governar sua cozinha',
                'E podem governar o mundo inteiro.',
                '',
                'Em cada porta um bem frequente olheiro,',
                'Que a vida do vizinho e da vizinha',
                'Pesquisa, escuta, espreita esquadrinha,',
                'Para o levar à praça e ao terreiro.',
                '',
                'Muitos mulatos desavergonhados,',
                'Trazidos sob os pés os homens nobres,',
                'Posta nas palmas toda a picardia,',
                '',
                'Estupendas usuras nos mercados,',
                'Todos os que não furtam muito pobres,',
                'E eis aqui a cidade da Bahia."' 
                ]
              }
            ]
          },
          {
            highlight: 'Trecho do poema satírico "Que falta nesta cidade?"'
          },
          {
            examples: [
              {
                title: ' Que falta nesta cidade? ',
                content: [
                  '"Que falta nesta cidade? … Verdade.',
                  'Que mais por sua desonra? … Honra.',
                  'Falta mais que se lhe ponha? … Vergonha.',
                  'O demo a viver se exponha,',
                  'por mais que a fama a exalta,',
                  'numa cidade onde falta',
                  'Verdade, Honra, Vergonha." [...] '
                ]
              }
            ]
          },
          {
            highlight: 'Poema religioso',
          },
          {
            content: [
              ' Em seu conhecido poema religioso chamado "Definição do Todo e da Parte", o poeta pode à primeira vista deixar o leitor um pouco confuso, mas logo percebemos a implicação filosófica e religiosa do autor relacionada à ideia de totalidade e fragmentação, especialmente em um contexto sacramental e teológico: '
            ],
            examples: [
              {
                title: 'Definição do Todo e da Parte ',
                content: [
                '"O todo sem a parte não é todo,',
                'A parte sem o todo não é parte,',
                'Mas a parte o faz todo, sendo parte,',
                'Não se diga, que é parte, sendo todo.',
                '',
                'Em todo o Sacramento está Deus todo,',
                'E todo assiste inteiro em qualquer parte,',
                'Em qualquer parte sempre fica o todo.',
                '',
                'O braço de Jesus não seja parte,',
                'Pois que feito Jesus em partes todo,',
                'Assiste cada parte em sua parte.',
                '',
                'Não se sabendo parte deste todo,',
                'Um braço, que lhe acharam, sendo parte,',
                'Nos diz as partes todas deste todo."'
                ]
              }
            ]
          },
          {
            subtitle: 'Padre Antônio Vieira',
            content: [
              ' Padre Antônio Vieira foi um escritor e orador enviado como missionário jesuíta para o Brasil para catequizar os índigenas durante a colonização portuguesa. Lutou ao lado do Padre Manuel da Nóbrega para defender indígenas, judeus e os que foram escravizados, fazendo com que fosse perseguido pela inquisição posteriormente. O Padre possui diversas obras literárias, dentre elas cartas, poemas, sermões e até romances. '
            ],
            image: '/img/barroco-4.jpg',
            caption: 'Retrato do Padre Antônio Vieira'
          },
          {
            highlight: 'Sermão',
            examples: [
              {
                title:  ' Trecho do Sermão de Santo Antônio aos Peixes (1654): ',
                content: '"Vós, peixes, não fostes criados para os vossos estômagos, mas para os nossos. A vós fez-vos Deus, não para que vos mantivésseis de vós, senão para que nos mantivésseis a nós. Não cuideis que o vosso trabalho há de ser mais para vós que para outros: alheia é a comida que comeis, alheia é a vida que viveis, alheio é o fim para que viveis, e alheio há de ser o proveito do vosso morrer." '
              }
            ]
          }

        ]
      }
    ]

  },
  arcadismo: {
    title: "Arcadismo",
    quote: {
      text: "“Quem faz um poema abre uma janela. Respira, tu que estás numa cela abafada, esse ar que entra por ela.”",
      author: "Mário Quintana",
    },
    image: "/img/poema.jpg",

  },
};

export default contentData;
