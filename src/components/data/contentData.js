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
            ],
          },
          {
            content: [""],
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
              "Os versos de um poema podem ser discernidos de acordo com a sua medida: ",
            ],
          },
          {
            content: [
              "Versos regulares: são aqueles que possuem a mesma medida e apresentam esquema de rima. Como por exemplo, com métrica e rima:",
            ],
            examples: [
              {
                content: [
                  "O sol se põe no campo, a brisa acalma (10 sílabas)",
                  "A luz dourada envolve o horizonte (10 sílabas)",
                  "A noite traz silêncio e a alma (10 sílabas)",
                  "Encontra paz onde o sonho responde (10 sílabas)",
                ],
              },
            ],
          },
          {
            content: [
              "Versos livres: são aqueles que possuem medidas diferentes, ou seja, são irregulares e podem ou não ter rima, geralmente utilizado pra expressar sentimentos de forma mais livre. Como no exemplo, sem métrica e rima:",
            ],
            examples: [
              {
                content: [
                  "A cidade acorda com o som das ruas",
                  "O vento entra pelas janelas abertas,",
                  "mas ninguém percebe a mudança do dia.",
                  "Há uma sensação estranha no ar,",
                  "como se o tempo tivesse parado.",
                ],
              },
            ],
          },
          {
            content: [
              "Versos brancos: são aqueles que não apresentam esquemas de rima, no entanto, podem apresentar métrica (medida). ",
            ],
            examples: [
              {
                content: [
                  "A lua brilha, mas não faz som, (8 sílabas)",
                  "O vento corre leve pela rua, (8 sílabas)",
                  "Cada estrela observa, imóvel, (8 sílabas)",
                  "O mistério da noite se espalha, (8 sílabas)",
                  "E o mundo parece em paz. (7 sílabas) ",
                ],
              },
            ],
          },
          {
            subtitle: "Estrofe",
            content: [
              "As estrofes nada mais são do que um agrupamento de versos, as quais podem ser classificadas de acordo com a forma do grupamento: ",
            ],
          },
          {
            list: [
              "monóstico: estrofe com um verso",
              "dístico: estrofe com dois versos",
              "terceto: estrofe com três versos",
              "quadra ou quarteto: estrofe com quatro versos",
              "quintilha: estrofe com cinco versos",
              "sextilha: estrofe com seis versos",
              "setilha: estrofe com sete versos",
              "oitava: estrofe com oito versos",
              "nona: estrofe com nove versos",
              "décima: estrofe com dez versos",
            ],
          },
          {
            subtitle: "Rima",
            content: [
              "É a sonoridade semelhante que pode haver no final de cada verso, diretamente ligada ao ritmo. Os versos que não contêm rima são denominados de versos brancos, seguem exemplos de trechos de poemas com rima e sem rima, respectivamente: ",
            ],
            examples: [
              {
                title:
                  "Sem rima (Amor é fogo que arde sem se ver, de Luiz Vaz de Camões)",
                content: [
                  "Amor é fogo que arde sem se ver,",
                  "é ferida que dói, e não se sente;",
                  "é um contentamento descontente,",
                  "é dor que desatina sem doer. (...) ",
                ],
              },
              {
                title: "Com rima (O sonho, de Clarice Lispector)",
                content: [
                  "Sonhe com aquilo que você quer ser,",
                  "porque você possui apenas uma vida",
                  "e nela só se tem uma chance",
                  "de fazer aquilo que quer.",
                  "Tenha felicidade bastante para fazê-la doce.",
                  "Dificuldades para fazê-la forte.",
                  "Tristeza para fazê-la humana.",
                  "E esperança suficiente para fazê-la feliz.",
                ],
              },
            ],
          },
          {
            subtitle: "Ritmo",
            content: [
              "O ritmo é a melodia presente no poema, produzido de maneira intencional, o que o torna harmonioso de ler, ainda mais em voz alta, como nesse exemplo: ",
            ],
            examples: [
              {
                title: "Trecho do poema I-Juca-Pirama, de Gonçalves Dias",
                content: [
                  "Meu canto de morte,",
                  "Guerreiros, ouvi:",
                  "Sou filho das selvas,",
                  "Nas selvas cresci;",
                  "Guerreiros, descendo",
                  "Da tribo tupi.",
                  "Da tribo pujante,",
                  "Que agora anda errante",
                  "Por fado inconstante,",
                  "Guerreiros, nasci:",
                  "Sou bravo, sou forte,",
                  "Sou filho do Norte;",
                  "Meu canto de morte,",
                  "Guerreiros, ouvi. (...)",
                ],
              },
            ],
            image: "/img/poema-2.webp",
            caption: "Os poemas são compostos por diversos fatores",
          },
        ],
      },
      {
        title: "Classificação dos poemas",
        content: [
          "Os poemas podem também ser classificados em tipos, sendo eles:",
        ],
        subsections: [
          {
            subtitle: "Poemas líricos",
            content: [
              "São poemas os quais contém a presença de herois, como por exemplo, as fábulas: ",
            ],
            examples: [
              {
                title: "Trecho de Os Lusíadas, de Luíz Vaz de Camões",
                content: [
                  "As armas e os Barões assinalados",
                  "Que da Ocidental praia Lusitana",
                  "Por mares nunca de antes navegados",
                  "Passaram ainda além da Taprobana,",
                  "Em perigos e guerras esforçados",
                  "Mais do que prometia a força humana",
                  "E entre gente remota edificaram",
                  "Novo Reino, que tanto sublimaram. (...)",
                ],
              },
            ],
          },
          {
            subtitle: "Poemas narrativos",
            content: [
              "São poemas criados com o objetivo principal de serem encenados, como por exemplo: ",
            ],
            examples: [
              {
                title: "Trecho do Auto da Compadecida, de Ariano Suassuna",
                content: [
                  "Fique atento nesta narração",
                  "É a história de um cabra-macho",
                  "Mas preste bastante atenção",
                  "Não tinha sossego no facho",
                  "De ninguém era capacho",
                  "Só arrumava confusão",
                  "O nome dele era João",
                  "Grilo era só um apelido",
                  "Tinha um grande coração",
                  "Chicó era seu melhor amigo",
                  "Viviam sempre em perigo",
                  "Nessa história de armação",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Poemas de forma fixa",
        content: [
          "Existem ainda, poemas de forma fixa, são poemas que seguem uma métrica específica, e podem ser nomeados em: ",
        ],
        subsections: [
          {
            subtitle: "Soneto",
            content: [
              "Formado por 14 versos, sendo que dois deles são quartetos (conjunto de quatro versos) e dois são tercetos (conjunto de três versos). Segue como exemplo um famoso soneto: ",
            ],
            examples: [
              {
                title: "Soneto de Fidelidade, de Vinícius de Moraes",
                content: [
                  "De tudo ao meu amor serei atento",
                  "Antes, e com tal zelo, e sempre, e tanto",
                  "Que mesmo em face do maior encanto",
                  "Dele se encante mais meu pensamento.",
                  "",
                  "Quero vivê-lo em cada vão momento",
                  "E em seu louvor hei de espalhar meu canto",
                  "E rir meu riso e derramar meu pranto",
                  "Ao seu pesar ou seu contentamento",
                  "",
                  "E assim, quando mais tarde me procure",
                  "Quem sabe a morte, angústia de quem vive",
                  "Quem sabe a solidão, fim de quem ama",
                  "",
                  "Eu possa me dizer do amor (que tive):",
                  "Que não seja imortal, posto que é chama",
                  "Mas que seja infinito enquanto dure.",
                ],
              },
            ],
          },
          {
            subtitle: "Trova",
            content: [
              "Formado por uma estrofe com quatro versos heptassílabos (com 7 sílabas poéticas).",
            ],
            examples: [
              {
                content: [
                  "Manhã fria cinzenta",
                  "vento irado soprar",
                  "trouxe chuva violenta",
                  "natureza encharcar. ",
                ],
              },
            ],
          },
          {
            subtitle: "Haicai",
            content: [
              "Formado por 3 versos (terceto), sendo o primeiro verso composto de 5 sílabas poéticas (pentassílabo), o segundo de 7 sílabas poéticas (heptassílabo) e o terceiro de 5 sílabas poéticas (pentassílabo). ",
            ],
            examples: [
              {
                title:
                  "Haicai “Arco-íris”, do livro Paisagem interior (1941), de Helena Kolody. ",
                content: [
                  "Arco-íris no céu.",
                  "Está sorrindo o menino",
                  "Que há pouco chorou.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  generosliterarios: {
    title: "Gêneros literários",
    quote: {
      text: "“A literatura, como toda a arte, é uma confissão de que a vida não basta.”",
      author: "Fernando Pessoa",
    },
    image: "/img/generos-literarios.jpg",
    sections: [
      {
        title: "Os três gêneros literários",
        content: [
          "Os textos literários são divididos em algumas categorias com base em suas características, essas categorias são chamadas de gêneros literários. No total, existem 3 gêneros literários, lírico (expressa subjetivamente ideias e emoções) narrativo (conta histórias), e dramático (instrui encenações teatrais).",
        ],
      },
      {
        title: "O gênero lírico",
        content: [
          "Se refere aos textos literários que expressam, ideias, emoções e desejos de forma conotativa, como as poesias, que podem ser escritas em verso ou prosa. Temos como exemplo: ",
        ],
        examples: [
          {
            title:
              "CRUZ E SOUSA. Lenda dos campos. In: PÉREZ, José (Org.). Cruz e Sousa: prosa. 2. ed. São Paulo: Cultura, 1945. ",
            content:
              "Por uma doirada tarde azul, em que os rios, após as chuvas torrenciais, sonorizam cristalinamente os bosques, os camponeses de uma vila risonha, numa unção bíblica, conduziam ao tranquilo cemitério florido o loiro cadáver branco de uma virgem noiva, morta de amor, tão bela e tão nova, umedecida no féretro, como se tivesse acabado de nascer da rosada luz da manhã. \n Infantil ainda, viera outrora da Alemanha através de castelos feudais, de montanhas alpestres, de árvores velhas e enevoadas...",
          },
        ],
      },
      {
        title: "O gênero narrativo e seus subgêneros",
        content: [
          "São narrativos os textos literários que contam uma história. Para que seja considerado narrativo, ele precisa ter enredo, narrador, personagens, tempo e espaço. Existem ainda os textos épicos, que além de possuírem todas as características do texto narrativo, apresentam um herói. O gênero possui subgêneros, sendo eles: ",
        ],
        subsections: [
          {
            subtitle: "Epopeias",
            content: [
              "Narrativas abordando grandes conquistas ou herois de um povo, escritas em verso, como Os Lusíadas, de Camões: ",
            ],
            examples: [
              {
                title:
                  'CAMÕES, Luís de. Os Lusíadas. São Paulo: Martin Claret, 2000."',
                content: [
                  '"Mas o Mouro, instruído nos enganos',
                  "Que o malévolo Baco lhe ensinara,",
                  "De morte ou cativeiro novos danos,",
                  "Antes que à Índia chegue, lhe prepara",
                  "Dando razão dos portos Indianos,",
                  "Também tudo o que pede lhe declara,",
                  "Que, havendo por verdade o que dizia,",
                  'De nada a forte gente se temia."[...]',
                ],
              },
            ],
            image: "/img/generos-literarios-2.jpg",
            caption: "Pintura sobre a obra Os Lusíadas",
          },
          {
            subtitle: "Romance",
            content: [
              "Extensas narrativas escritas em prosa, que mostram as ações de personagens no decorrer de uma história. Temos como exemplo, Dom Casmurro, de Machado de Assis. ",
            ],
          },
          {
            subtitle: "Conto e novela",
            content: [
              "Os contos são pequenas narrativas, e a novela fica entre o conto e a novela, com um tamanho intermediário. Como exemplo de conto podemos citar O segredo de Brokeback Mountain, de Annie Proulx, e como exemplo de novela, O alienista, de Machado de Asiss. ",
            ],
          },
          {
            subtitle: "Fábulas",
            content: [
              "As fábulas são contos que utilizam animais como personagens, e sempre apresentam uma lição de moral. Afinal, quem nunca quando criança escutou fábulas como A lebre e a tartaruga, e A raposa e as uvas, de Jean de la Fontaine? ",
            ],
          },
        ],
      },
      {
        title: "O gênero dramático e seus subgêneros:",
        content: [
          "Os textos dramáticos são aqueles produzidos com o objetivo de serem interpretados por atores em uma peça. Eles têm elementos como: atos, rubricas, falas e cenas. Esse gênero também possui alguns subgêneros, sendo eles:",
        ],
        subsections: [
          {
            subtitle: "Tragédia",
            content: [
              "É um texto teatral trágico, que apresenta muita tensão e um final triste.",
            ],
          },
          {
            subtitle: "Comédia",
            content: [
              "É um texto teatral que satiriza aspectos cotidianos ou da sociedade, escrito com a finalidade de ser cômico. ",
            ],
          },
          {
            subtitle: "Auto",
            content: [
              "Faz referência a textos com caráter dramático e que trás uma abordagem moral, religiosa ou mística, como Auto da barca do inferno, de Gil Vicente.",
            ],
          },
          {
            subtitle: "Farsa",
            content: [
              "A farsa é uma peça cômica e que tem apenas um ato, sendo curta. Temos como exemplo: ",
            ],
            examples: [
              {
                title:
                  ' VICENTE, Gil. Farsa de Inês Pereira. São Paulo: Biblioteca Virtual do Estudante Brasileiro, 1998."',
                content: [
                  ' "MÃE Tomai aquela cadeira.',
                  "",
                  "PÊRO E que val aqui uma destas?",
                  "",
                  "INÊS (Ó Jesu! que João das bestas!",
                  "Olhai aquela canseira!)",
                  "",
                  "Assentou-se com as costas pera elas, e diz:",
                  "PÊRO Eu cuido que não estou bem...",
                  "",
                  "MÃE Como vos chamais, amigo?",
                  "",
                  "PÊRO Eu Pêro Marques me digo,",
                  "Como meu pai que Deos tem.",
                  "Faleceu, perdoe-lhe Deos,",
                  "Que fora bem escusado,",
                  "E ficamos dous eréos.",
                  "Porém meu é o mor gado.",
                  "",
                  "MÃE De morgado é vosso estado?",
                  "Isso viria dos céus.",
                  "[...]",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  trovadorismo: {
    title: "Trovadorismo",
    quote: {
      text: '"A literatura é o único meio de salvar a realidade da banalidade."',
      author: "Albert Camus",
    },
    image: "/img/trovadorismo.jpeg",
    sections: [
      {
        title: "Contexto histórico",
        content: [
          ' O Trovadorismo foi a primeira manifestação literária da língua portuguesa, surgida na Idade Média, entre os séculos XII e XIV. Período esse em que a Igreja Católica tinha controle sob a Europa e o teocentrismo dominava, isto é, Deus está no centro do mundo, e o homem está a mercê dos valores cristão. Este movimento é conhecido pelas composições poéticas acompanhadas de música, denominadas "cantigas". Uma das cantigas que deslanchou o movimento em território português foi a Cantiga da Ribeirinha(1189) de Paio Soares de Taveirós, escrita em galego-português, o que dificulta um pouco a leitura, como nesse trecho: ',
        ],
        examples: [
          {
            content: [
              " “No mundo non me sei parelha,",
              "mentre me for' como me vai,",
              "ca ja moiro por vós - e ai!",
              "mia senhor branca e vermelha,",
              "Queredes que vos retraia",
              "quando vos eu vi em saia!",
              "Mao dia me levantei, que vos",
              "enton non vi fea!” ",
            ],
          },
        ],
      },
      {
        highlight: "Traduzindo para o nosso português:",
        examples: [
          {
            content: [
              "“No mundo ninguém se assemelha a mim,",
              "enquanto a minha vida continuar como está,",
              "porque morro por ti e ai",
              "minha senhora de pele alva e faces rosadas",
              "quereis que eu vos descreva (retrate)",
              "quanto eu vos vi sem manto! (roupa íntima)",
              "Maldito dia! me levantei,",
              "que não vos vi feia! (ou seja, viu a mais bela).” ",
            ],
          },
        ],
        image: "/img/trovadorismo-2.webp",
        caption: "Tristão e Isolda (1902)",
      },
      {
        title: "Características do Trovadorismo",
        content: [
          "A característica mais marcante desse movimento é sem sombra de dúvidas a união da poesia com a música (criando as cantigas), onde as poesias eram escritas com o intuito de serem cantadas, acompanhadas por instrumentos musicais como viola e flauta. Trovador era quem escrevia as poesias, jogral era quem as declamava e o menestrel, recitava e tocava instrumentos, estando acima do jogral em uma espécie de ‘hierarquia’. As cantigas são divididas em cantigas de amor, de amigo, e de escárnio, seguindo tais características: ",
        ],
        subsections: [
          {
            subtitle: "Cantigas de amor",
            content: [
              "Expressam o amor cortês, onde o eu-lírico geralmente sofre pelo amor inalcançável de uma dama. Temos como exemplo, a cantiga mostrada acima no contexto.",
            ],
          },
          {
            subtitle: "Cantigas de amigo",
            content: [
              "Caracterizadas pela simplicidade e pelo eu-lírico feminino, onde a mulher lamenta a ausência do amado. Como por exemplo, nesse trecho: ",
            ],
            examples: [
              {
                title: '"Ai Deus, se sab’or meu amigo" de Martin Codax',
                content: [
                  "“Ai Deus, se sab'ora meu amigo",
                  "com'eu senheira estou em Vigo!",
                  "E vou namorada...",
                  "Ai Deus, se sab'ora meu amado",
                  "com'eu em Vigo senheira manho!",
                  "E vou namorada...",
                  "Com'eu senheira estou em Vigo",
                  "e nulhas gardas nom hei comigo!",
                  "E vou namorada…” ",
                ],
              },
            ],
          },
          {
            subtitle: "Cantigas de escárnio e maldizer",
            content: [
              'Composições satíricas que criticam de forma velada ou indireta (escárnio) ou de forma direta (maldizer) personagens e situações da época. Podemos citar como exemplo de cantiga de escárnio, um trecho de "A Dom Foam quer’eu gram mal" de João Garcia de Guilhade: ',
            ],
            examples: [
              {
                title:
                  '"A Dom Foam quer’eu gram mal" de João Garcia de Guilhade',
                content: [
                  "“A Dom Foam quer'eu gram mal",
                  "e quer'a sa molher gram bem;",
                  "gram sazom há que m'est'avém",
                  "e nunca i já farei al;",
                  "ca, desquand'eu sa molher vi,",
                  "se púdi, sempre a servi",
                  "e sempr'a ele busquei mal.",
                  "Quero-me já maenfestar,",
                  "e pesará muit'[a] alguém,",
                  "mais, sequer que moira por en,",
                  "dizer quer'eu do mao mal",
                  "e bem da que mui bõa for,",
                  "qual nom há no mundo melhor,",
                  "quero-[o] já maenfestar.”[...] ",
                ],
              },
            ],
          },
          {
            content: [
              "Na cantiga de escárnio acima, o eu lírico elogia uma mulher e ataca seu marido, o que nos leva a interpretar que seria a vivência de um amor cortês, isso é, onde se eleva o nível de sua amada ao quase divino. ",
            ],
          },
          {
            content: [
              'Já como uma de maldizer, ou seja, que critica ofensivamente de forma direta, podemos citar um trecho de "A mim dam preç, e nom é desguisado" de Afonso Anes do Cotom: ',
            ],
            examples: [
              {
                title:
                  '"A mim dam preç, e nom é desguisado" de Afonso Anes do Cotom',
                content: [
                  "A mim dam preç', e nom é desguisado,",
                  "dos maltalhados, e nom erram i;",
                  "Joam Fernandes, o mour', outrossi,",
                  "nos maltalhados o vejo contado;",
                  "e pero maltalhados semos [n]ós,",
                  "s'homem visse Pero da Ponte em cós,",
                  "semelhar-lh'-ia moi peor talhado.",
                ],
              },
            ],
          },
          {
            content: [
              "Na cantiga breve de maldizer acima, o eu lírico compara o aspecto físico de três homens maljeitosos, sendo eles Cotom, João Fernandes e Pero da Ponte. ",
            ],
          },
          {
            subtitle: "Novelas de cavalaria",
            content: [
              "As novelas de cavalaria são outro gênero literário que foi produzido durante o Trovadorismo. São derivações dos poemas épicos, são longas e escritas em prosa, relatam fantásticas aventuras de heróis destemidos, cavaleiros medievais que lutavam com bravura diversas batalhas, enfrentando mostros a caminho da glória. Conta com algumas características como grande extensão e divisão em capítulos, aborda temas mitológicos, possuem caráter místicos, apresentam visão teocêntrica e têm como personagens cavaleiros e donzelas. Um exemplo de novela de cavalaria é a história de Rei Arthur, o rei dos Bretões; ",
            ],
            image: "/img/trovadorismo-3.webp",
            caption: "Rei Arthur empunhando Excalibur",
          },
        ],
      },
    ],
  },
  humanismo: {
    title: "Humanismo",
    quote: {
      text: '“O homem é a medida de todas as coisas."',
      author: "Protágoras",
    },
    image: "/img/humanismo.webp",
    sections: [
      {
        title: "Contexto histórico",
        content: [
          " O Humanismo é um movimento de transição entre a Idade Média e o Renascimento (ou se preferir, entre o Trovadorismo e o Classicismo), ocorrido no século XV. Por ser um movimento literário de transição, não possui características únicas dele, e nem é consdierado um movimento literário por alguns estudiosos. As obras produzidas durante esse período levam características do Trovadorismo, ao mesmo tempo em que também possui características adquiridas do movimento moderno Renascentista. Nesse período, houve a transição do sistema feudal para o sistema mercantilista, onde os ideais burgueses começam a ter influência no âmbito social. ",
        ],
      },
      {
        title: "Características do Humanismo",
        content: [
          " Com a queda da hegemonia da igreja, uma característica forte do movimento é o Antropocentrismo, onde o homem é o centro do mundo, valorizando o ser humano e suas características. Outras características marcantes são o Cientificismo, que se resume na ância de encontrar respostas científicas para o acontecimento de fenômenos naturais, o Racionalismo, crença de que a razão humana prevalece sobre tudo, a retratação da figura humana baseada no ideal clássico greco-romano e a desmonopolização do conhecimento, com o enfraquecimento da igreja e a invenção da imprensa. Quanto às produções literárias, nesse periodo foram produzidas as poesias palacianas, as prosas e os teatros. ",
        ],
        highlight:
          "De forma resumida, podemos citar as características do Humanismo como: ",
        list: [
          "Antropocentrismo (o homem como centro do universo)",
          "Cientificismo (busca por respostas científicas e não divinas)",
          "Racionalismo (a razão humana prevalece acima de tudo)",
          "Enfraquecimento da influência da Igreja Católica",
          "Valorização do corpo e pensamento humano",
          "Busca da beleza e perfeição",
          "Descentralização do conhecimento",
          "Invenção da imprensa ",
        ],
        image: "/img/humanismo-2.webp",
        caption: "Escultura de Moisés, por Michelangelo",
      },
      {
        title: "Poesia palaciana",
        content: [
          " Sucessoras das cantigas produzidas no Trovadorismo, só que agora com uma estrutura textual bem elaborada, utilizando de métrica, ritmo, figuras de linguagem, ambiguiodades, idealismo e mais. Diferentemente das cantigas, ela não é escrita para ser cantada com música, e sim para ser recitada nos palácios da nobreza. Segue um exemplo de poesia palaciana: ",
        ],
        examples: [
          {
            content: [
              '"Antre tremor e desejo,',
              "Vã esperança e vã dor,",
              "Antre amor e desamor,",
              "Meu triste coração vejo.",
              "",
              "Nestes extremos cativo",
              "Ando sem fazer mudança,",
              "E já vivi d'esperança",
              "E agora vivo de choro vivo.",
              "Contra mi mesmo pelejo,",
              "Vem d'ua dor outra dor",
              "E d'um desejo maior",
              'Nasce outro mor desejo."',
            ],
          },
        ],
      },
      {
        title: "Prosa",
        content: [
          "A prosa é uma forma de escrever onde o texto é escrito em linhas contínuas, estruturado em parágrafos. Neste período, a prosa é dividida entre crônicas historiográficas e em crônicas ficcionais. ",
        ],
        subsections: [
          {
            subtitle: "Crônicas historiográficas",
            content: [
              " Uma crônica historiográfica é basicamente um relato de um acontecimento relacionado à história de Portugual, onde são contados os feitos heróicos de homens do reino. O principal autor desse tipo de obra foi Fernão Lopes, sendo considerado o pai da historiografia portuguesa. ",
            ],
          },
          {
            subtitle: "Crônicas ficcionais",
            content: [
              " As crônicas ficcionais são uma adaptação das chamadas novelas de cavalaria, produzidas no Trovadorismo. Apenas foram adequadas para seguirem a corrente de pensamento e a situação social da época. ",
            ],
          },
        ],
      },
      {
        title: "Autores e obras",
        subsections: [
          {
            subtitle: "Fernão Lopes",
            content: [
              " Fernão Lopes nasceu em Lisboa, tendo origem humilde, se tornando escrivão e cronista para a coroa portuguesa. Foi peça chave durante esse período literário, pois foi ele quem levou o movimento humanista para Portugual. Como dito anteriormente, é considerado o pai da historiografia portuguesa, responsável por separar o real da fantasia, e escrever imparcialmente os fatos ocorridos durante a história dos reinos portugueses. Ele produziu obras como Crônica de El-Rei D. Pedro I e Crônica de El-Rei D. Fernando. ",
            ],
            image: "/img/humanismo-3.jpg",
            caption: "Retrato de Fernão Lopes",
          },
          {
            subtitle: "Auto da barca do inferno",
            content: [
              " Auto da Barca do Inferno é uma peça de teatro produzida durante o Humanismo e escrita por Gil Vicente, considerado o pai do teatro português. A peça foi encenada em 1531 e é uma da Trilogia das Barcas, junto de Auto da Barca do Purgatório e Auto da Barca da Glória. Na história da obra existem 2 barqueiros que recebem as almas dos que já se foram, e são um Anjo e um Diabo. No desenrolar da trama, cada personagem é julgado e entra na barca que vai para o céu ou na barca que vai ao inferno, de acordo com o modo em que viveu sua vida. Segue um trecho da obra: ",
            ],
            exampĺes: [
              {
                content: [
                  "“ANJO Ó cavaleiros de Deus,",
                  "a vós estou esperando,",
                  "que morrestes pelejando",
                  "por Cristo, Senhor dos Céus!",
                  "Sois livres de todo mal,",
                  "mártires da Santa Igreja,",
                  "que quem morre em tal peleja",
                  "merece paz eternal.”",
                ],
              },
            ],
            image: "/img/humanismo-4.jpg",
            caption: "Desenho sobre a obra Auto da Barca do Inferno",
          },
        ],
      },
    ],
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
        title: "Contexto histórico do Classicismo",
        content: [
          " O Classicismo ou Renascimento ocorre e marca o fim da idade média e início da idade moderna, um período de intensas transformações na filosofia, arte, cultura e política. Neste período, acontecem diversos eventos históricos importantes, como as grandes navegações, a reforma protestante, o fim do feudalismo com a entrada do capitalismo e a invenção da imprensa. Detalhe que no Brasil, esse movimento ficou conhecido como Quinhentismo, o que nos remete a obra Os Lusíadas, de Luís de Camões. ",
        ],
      },
      {
        title: "Características do Classicismo",
        content: [
          " Nesse período se destaca a razão, de forma com que os autores e artistas dessa época vão tentar explicar sentimentos humanos de forma racional. São retomados conceitos da antiguidade, de modo a manter a simetria, equilíbrio e a harmonia de formas. O movimento também tem o culto a deuses pagãos e tem como pilar o antropocentrismo, onde tomam a figura do ser humano como parâmetro para perfeição, e não alguma divindade ou algo maior, podemos perceber isso nas esculturas de Michelangelo: ",
        ],
        highlight:
          "De forma resumida, podemos citar as características do Classicismo como: ",
        list: [
          "Antropocentrismo",
          "Equilíbrio",
          "Harmonia",
          "Racionalismo",
          "Cientificismo",
          "Paganismo",
          "Mitologia greco-romana",
          "Antiguidade clássica",
          "Idealização de beleza",
        ],
        image: "/img/classicismo-2.jpg",
        caption: "Escultura de Davi (1504)",
      },
      {
        title: "Autores e obras",
        subsections: [
          {
            subtitle: "Luís de Camões",
            content: [
              ' Luís de Camões nasceu em Lisboa, onde cresceu e começou a se interessar pela literatura, mas ao sofrer uma desilusão amorosa, se torna um soldado do Exército Coroa Portuguesa e embarca para a África, onde perde um dos olhos. Logo após retorna à Lisboa, posteriormente embarcando em diversas expedições militares. Descrito como problemático, foi preso tanto em Portugal quanto no Oriente, e foi na prisão onde escreveu sua maior obra, "Os Lusíadas", a qual publicou quando retornou ao seu país natal, mas que só teve seu devido reconhecimento após sua morte, que foi causada pela peste negra. ',
            ],
            image: "/img/classicismo-3.jpg",
            caption: "Retrato de Luís de Camões",
          },
          {
            subtitle: 'O poema épico "Os Lusíadas"',
            content: [
              " O poema é dividido em dez cantos, sendo composto de 8816 versos decassílabos e 1102 estrofes de oito versos. Acima dos dez cantos, a obra se divide em: ",
            ],
          },
          {
            list: [
              "Proposição (introdução da obra, apresentando o tema e os personagens, Canto 1)",
              "Invocação (nessa parte são invocadas as ninfas do Tejo como forma de inspiração do poeta, Canto 1)",
              "Dedicatória (parte que dedica a obra ao rei Dom Sebastião, Canto 1)",
              "Narração (narração da viagem de Vasco da Gama e as ações dos personagens, Canto 1 ao 10)",
              "Epílogo (conclusão do poema, Canto 10)",
            ],
          },
          {
            highlight: "Segue um trecho do Canto 4:",
            examples: [
              {
                content: [
                  '[...]"Despois de procelosa tempestade,',
                  "Nocturna sombra e sibilante vento,",
                  "Traz a manhã serena claridade,",
                  "Esperança de porto e salvamento;",
                  "Aparta o Sol a negra escuridade,",
                  "Removendo o temor ao pensamento:",
                  "Assi no Reino forte aconteceu",
                  'Despois que o Rei Fernando faleceu."[...]',
                ],
              },
            ],
          },
          {
            subtitle: "Dante Alighieri",
            content: [
              " Dante Alighieri nasceu em Florença em boa família, onde teve uma boa educação, estudando teologia, artes, letras e ciências. Após a morte dos seus pais, foi abandonado por seus parentes e posteriormente exilado da sua terra natal por gastar dinheiro público. Casou com uma mulher com a qual teve vários filhos, mas o amor de sua vida foi Beatrice Portinari, que faleceu precocemente com apenas 25 anos, e é ela quem inspira diversas de suas obras. ",
            ],
            image: "/img/classicismo-4.jpg",
            caption: "Retrato de Dante Alighieri",
          },
          {
            subtitle: "A Divina Comédia",
            content: [
              ' O poema foi originalmente intitulado como "Comédia", posteriormente intitulado como "A Divina Comédia" por Giovanni Boccaccio. A obra é narrada em primeira pessoa, onde Dante é o personagem principal e o próprio narrador. Assim como em "Os Lusíadas", o poema também é dividido em cantos, além de também ter um maior agrupamento, divididos em Inferno, Purgatório e Paraíso. Durante a história, antes de Dante ir para o paraíso, tem de passar pelo Inferno, onde descreve como é dividido e informa as punições para cada tipo de pecado, dividindo os condenados em círculos, onde quanto mais ao centro, maior o pecado e consequentemente, o sofrimento. Logo após entra na porta para o purgatório, onde paga por seus pecados e depois vai ao paraíso. O autor inclui na obra vários personagens, conflitos e governos reais da época em que viveu em Florença, e os pune ou vangloria como quer, encontrando-os no inferno, no purgatório ou paraíso. Segue um trecho do livro Inferno: ',
            ],
            examples: [
              {
                content:
                  '"O Portal do Inferno não tem portas ou cadeados, somente um arco com um aviso que adverte: uma vez dentro, deve-se abandonar toda a esperança de rever o céu, pois de lá não se pode voltar". ',
              },
            ],
            image: "/img/classicismo-5.jpg",
            caption: "A Barca de Dante (Eugène Delacroix, 1822)",
          },
        ],
      },
    ],
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
        title: "Contexto histórico",
        content: [
          " O Quinhentismo foi um período histórico e também o primeiro período literário do Brasil, que abrange as manifestações escritas no primeiro século da colonização do país. O nome se refere ao período em que aconteceu, ou seja, em 1500. As produções consistem em basicamente relatos de viagem produzidos pelos portugueses, os quais descrevem as descobertas em território brasileiro, descrevendo a flora, a fauna e o povo que aqui habitava. Aconteceu paralelo ao Classicismo europeu. ",
        ],
      },
      {
        title: "Características do Quinhentismo",
        content: [
          " Os principais autores do período são viajantes e jesuítas, que visavam informar o que viam para as pessoas do outro lado do oceano, com seus textos tendo fortes traços de suas impressões e interpretações do que avistaram aqui, dividindo as obras em literatura de informação e literatura de formação. A obra que mais se destaca do movimento literário é a carta de Pero Vaz de Caminha para o Rei de Portugal (literatura de informação). Segue um trecho da carta: ",
        ],
        examples: [
          {
            content:
              '"Ali veríeis galantes, pintados de preto e vermelho, e quartejados, assim pelos corpos como pelas pernas, que, certo, assim pareciam bem. Também andavam entre eles quatro ou cinco mulheres, novas, que assim nuas, não pareciam mal. Entre elas andava uma, com uma coxa, do joelho até o quadril e a nádega, toda tingida daquela tintura preta; e todo o resto da sua cor natural. Outra trazia ambos os joelhos com as curvas assim tintas, e também os colos dos pés; e suas vergonhas tão nuas, e com tanta inocência assim descobertas, que não havia nisso desvergonha nenhuma."',
          },
        ],
      },
      {
        title: "Autores e obras da literatura de informação",
        subsections: [
          {
            subtitle: "Pero Vaz de Caminha",
            content: [
              ' Pero Vaz de Caminha era uma pessoa importante em Portugal, onde chegou a ser escrivão e tesoureiro da Casa da Moeda e vereador da cidade do Porto em meados de 1497. No mês de março em 1500, juntou-se à frota de exploração de Pedro Álvares Cabral ocupando o cargo de escrivão-mor. Ao chegar no Brasil, escreveu uma carta ao até então rei de Portugal Rei Dom Manuel I, descrevendo o que haviam encontrado e suas impressões sobre a fauna, a flora e os habitantes, carta essa que é conhecida como "A Carta de Pero Vaz de Caminha", a qual tem um trecho escrito acima. ',
            ],
            image: "/img/quinhentismo-2.jpg",
            caption: "Retrato de Pero Vaz de Caminha",
          },
        ],
      },
      {
        title: "Literatura de formação ou de catequese",
        content: [
          " Durante os primeiros anos de ocupação, os portugueses demonizaram os deuses e cultos indígenas, o que culminou na imposição do catolicismo na região. Paralela à literatura de informação, era produzida a literatura de formação ou de catequese, cujo objetivo primário era catequisar e converter indígenas para o catolicismo. As obras eram escritas pelos jesuítas, religiosos que vinham de Portugal para cumprir a missão de catequisação dos nativos, e escreviam poemas, crônicas, cartas e até tratados. ",
        ],
      },
      {
        title: "Autores e obras da literatura de formação",
        subsections: [
          {
            subtitle: "Padre José de Anchieta",
            content: [
              " O Padre José de Anchieta teve papel fundamental durante o período de colonização, inclusive participando da criação das cidades de Rio de Janeiro e São Paulo, foi um grande poeta e escritor de crônicas, utlizando ambas as línguas portuguesa e tupi. ",
            ],
            image: "/img/quinhentismo-3.png",
            caption: "Retrato do Padre José de Anchieta",
          },
          {
            highlight:
              " Segue como exemplo o poema Ao santíssimo sacramento, escrito pelo padre: ",
            examples: [
              {
                title: "Ao santíssimo sacramento ",
                content: [
                  '"Oh que pão, oh que comida,',
                  "Oh que divino manjar",
                  "Se nos dá no santo altar",
                  "Cada dia.",
                  "",
                  "Filho da Virgem Maria",
                  "Que Deus Padre cá mandou",
                  "E por nós na cruz passou",
                  "Crua morte.",
                  "",
                  "E para que nos conforte",
                  "Se deixou no Sacramento",
                  "Para dar-nos com aumento",
                  "Sua graça.",
                  "",
                  "[...]",
                  "",
                  "Quando na minha alma entrais",
                  "E dela fazeis sacrário,",
                  "De vós mesmo é relicário",
                  "Que vos guarda.",
                  "",
                  "Enquanto a presença tarda",
                  "De vosso divino rosto,",
                  "O saboroso e doce gosto",
                  "Deste pão",
                  "",
                  "Seja minha refeição",
                  "E todo o meu apetite,",
                  "Seja gracioso convite",
                  "De minha alma.",
                  "",
                  "[...]",
                  "",
                  "Pois não vivo sem comer,",
                  "Como a vós, em vós vivendo,",
                  "Vivo em vós, a vós comendo,",
                  "Doce amor.",
                  "",
                  '[...]"',
                ],
              },
            ],
          },
          {
            subtitle: "Padre Manuel da Nóbrega",
            content: [
              " O Padre Manuel da Nóbrega foi um sacerdote jesuíta e também chefe da primeira missão jesuíta nas Américas. Assim como o Padre José de Anchieta, teve papel fundamental na criação das cidades de São Paulo e Rio de Janeiro, além de Salvador. ",
            ],
            image: "/img/quinhentismo-4.jpg",
            caption: "Retrato do Padre Manuel da Nóbrega",
          },
        ],
      },
    ],
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
        title: "A origem da literatura brasileira",
        content: [
          " A literatura brasileira teve sua origem com a chegada dos colonizadores portugueses e desenvolveu-se ao longo dos séculos. Dois dos primeiros estilos literários marcantes foram o Barroco e o Classicismo. ",
        ],
      },
      {
        title: "Contexto histórico do Barroco",
        content: [
          " Esse movimento artístico se deu durante um momento conturbado, onde acontecia a reforma protestante de Martinho Lutero. Logo após foi realizado o Concílio de Trento, em resposta à reforma, trazendo grandes mudanças ao Catolicismo e retomando a autoridade da Igreja Romana, mesmo depois de perder muitos fiéis. O Barroco surgiu como uma forma de propagar a fé católica e atrair mais fiéis à igreja, se baseando em uma arte eclesiástica, onde se construíram inúmeras igrejas, templos e estátuas para veneração de santos. ",
        ],
      },
      {
        title: "O Barroco na Europa",
        content: [
          " O Barroco se iniciou na Itália, e posteriormente se espalhou para os outros diversos países europeus. Em seu país de origem, podemos citar um artista famoso chamado Caravaggio (1571-1610), que pintava temas religiosos sempre utilizando do contraste entre luz e escuridão. Em suas pinturas, as personagens eram reunidas na cena principal sob um foco de luz, com um fundo muito mais escuro. Isso destaca as figuras, adicionando a cada uma delas um efeito de escultura. Essa técnica ficou conhecida como tenebrismo. ",
        ],
        image: "/img/barroco-1.jpg",
        caption: "Judite e Holoferne, de Caravaggio (1599)",
      },
      {
        title: "O Barroco no Brasil",
        content: [
          " O Barroco no Brasil chegou por meio dos jesuítas, no fim do século XVI, o que ajudaria na missão de catequizar os índigenas. O período artístico teve grande importância e criou grandes obras nos ramos da arquitetura, na pintura e estatuaria. Por esse objetivo dos jesuítas, a maioria da arte produzida no Barroco aqui no Brasil consiste em arte sacra e na construção de igrejas. ",
        ],
        image: "/img/barroco-2.jpg",
        caption: "Basílica Nossa Senhora do Carmo",
      },
      {
        title: "Características do Barroco",
        content: [
          "Esse movimento literário é marcado por algumas características como o dualismo e contradição, onde em diversas obras veremos ser retratados sentimentos e pensamentos contrários, abordando por exemplo, fé contra razão, luz contra sombra, racional contra irracional. Acompanha também o uso de antíteses, que é basicamente o dualismo reduzido à palavras, onde o autor, na mesma frase, utilizará palavras totalmente opostas como amor e ódio, vida e morte ou frio e quente. Outras características se mostram igualmente relevantes nos textos barrocos, como o pessimismo de que a vida na terra não pode ser feliz, juntamente com a morbidez e o sentimento de culpa.",
        ],
        list: [
          "Arte rebuscada e exagerada;",

          "Valorização do detalhe;",

          "Dualismo e contradições;",

          "Obscuridade;",

          "Complexidade;",

          "Calorização das sensações;",

          "Cultismo e conceptismo;",

          "Antítese e paradoxo;",

          "Pessimismo;",

          "Rebuscamento;",

          "Hipérbole;",

          "Conceptismo ou quevedismo;",

          "Morbidez;",

          "Sentimento de culpa;",

          "Carpe diem;",
        ],
      },
      {
        title: "Autores e obras",
        subsections: [
          {
            subtitle: "Gregório de Matos",
            content: [
              " Gregório de Matos, conhecido também como Boca do Inferno, é o representante máximo da poesia barroca brasileira. Ele era filho de um nobre português e se formou em direito em Portugal, mas a literatura foi o que mais o atraiu. Suas obras criticavam as ações do governo, a sociedade, e até mesmo a Igreja Católica, o que o fez ser perseguido pela Inquisição, sendo condenado no ano de 1694 na Angola, onde contrariu uma febre e morreu posteriormente. ",
            ],
            image: "/img/barroco-3.jpg",
            caption: "Retrato de Gregório de Matos",
          },
          {
            content: [
              " Seus poemas podem ser divididos entre satíricos (o que lhe rendeu o apelido de Boca do Inferno), líricos, eróticos e religiosos, não tendo publicado nenhum em vida. Seguimos com exemplos de um poema satírico, um lírico e outro religioso: ",
            ],
          },
          {
            highlight: "Poema lírico",
          },
          {
            content: [
              ' Neste poema denominado "A uma saudade", podemos perceber características do movimento Barroco, como o pessimismo, a obscuridade, a morbidez e a hipérbole: ',
            ],
            examples: [
              {
                title: " A uma saudade ",
                content: [
                  '"Em o horror desta muda soledade,',
                  "Onde voando os ares a porfia,",
                  "Apenas solta a luz a aurora fria,",
                  "Quando a prende da noite a escuridade.",
                  "",
                  "Ah cruel apreensão de uma saudade!",
                  "De uma falsa esperança fantasia,",
                  "Que faz que de um momento passe a um dia,",
                  "E que de um dia passe à eternidade!",
                  "",
                  "São da dor os espaços sem medida,",
                  "E a medida das horas tão pequena,",
                  "Que não sei como a dor é tão crescida.",
                  "Mas é troca cruel, que o fado ordena,",
                  "Porque a pena me cresça para a vida,",
                  'Quando a vida me falta para a pena."',
                ],
              },
            ],
          },
          {
            highlight: "Poema satírico",
          },
          {
            content: [
              '  Aqui vemos o poema "À Cidade da Bahia", o mais famoso poema satírico escrito por Gregório de Matos, no qual critica aspectos da sociedade da época:  ',
            ],
            examples: [
              {
                title: "À Cidade da Bahia",
                content: [
                  '"A cada canto um grande conselheiro,',
                  "Que nos quer governar cabana e vinha;",
                  "Não sabem governar sua cozinha",
                  "E podem governar o mundo inteiro.",
                  "",
                  "Em cada porta um bem frequente olheiro,",
                  "Que a vida do vizinho e da vizinha",
                  "Pesquisa, escuta, espreita esquadrinha,",
                  "Para o levar à praça e ao terreiro.",
                  "",
                  "Muitos mulatos desavergonhados,",
                  "Trazidos sob os pés os homens nobres,",
                  "Posta nas palmas toda a picardia,",
                  "",
                  "Estupendas usuras nos mercados,",
                  "Todos os que não furtam muito pobres,",
                  'E eis aqui a cidade da Bahia."',
                ],
              },
            ],
          },
          {
            highlight: 'Trecho do poema satírico "Que falta nesta cidade?"',
          },
          {
            examples: [
              {
                title: " Que falta nesta cidade? ",
                content: [
                  '"Que falta nesta cidade? … Verdade.',
                  "Que mais por sua desonra? … Honra.",
                  "Falta mais que se lhe ponha? … Vergonha.",
                  "O demo a viver se exponha,",
                  "por mais que a fama a exalta,",
                  "numa cidade onde falta",
                  'Verdade, Honra, Vergonha." [...] ',
                ],
              },
            ],
          },
          {
            highlight: "Poema religioso",
          },
          {
            content: [
              ' Em seu conhecido poema religioso chamado "Definição do Todo e da Parte", o poeta pode à primeira vista deixar o leitor um pouco confuso, mas logo percebemos a implicação filosófica e religiosa do autor relacionada à ideia de totalidade e fragmentação, especialmente em um contexto sacramental e teológico: ',
            ],
            examples: [
              {
                title: "Definição do Todo e da Parte ",
                content: [
                  '"O todo sem a parte não é todo,',
                  "A parte sem o todo não é parte,",
                  "Mas a parte o faz todo, sendo parte,",
                  "Não se diga, que é parte, sendo todo.",
                  "",
                  "Em todo o Sacramento está Deus todo,",
                  "E todo assiste inteiro em qualquer parte,",
                  "Em qualquer parte sempre fica o todo.",
                  "",
                  "O braço de Jesus não seja parte,",
                  "Pois que feito Jesus em partes todo,",
                  "Assiste cada parte em sua parte.",
                  "",
                  "Não se sabendo parte deste todo,",
                  "Um braço, que lhe acharam, sendo parte,",
                  'Nos diz as partes todas deste todo."',
                ],
              },
            ],
          },
          {
            subtitle: "Padre Antônio Vieira",
            content: [
              " Padre Antônio Vieira foi um escritor e orador enviado como missionário jesuíta para o Brasil para catequizar os índigenas durante a colonização portuguesa. Lutou ao lado do Padre Manuel da Nóbrega para defender indígenas, judeus e os que foram escravizados, fazendo com que fosse perseguido pela inquisição posteriormente. O Padre possui diversas obras literárias, dentre elas cartas, poemas, sermões e até romances. ",
            ],
            image: "/img/barroco-4.jpg",
            caption: "Retrato do Padre Antônio Vieira",
          },
          {
            highlight: "Sermão",
            examples: [
              {
                title: " Trecho do Sermão de Santo Antônio aos Peixes (1654): ",
                content:
                  '"Vós, peixes, não fostes criados para os vossos estômagos, mas para os nossos. A vós fez-vos Deus, não para que vos mantivésseis de vós, senão para que nos mantivésseis a nós. Não cuideis que o vosso trabalho há de ser mais para vós que para outros: alheia é a comida que comeis, alheia é a vida que viveis, alheio é o fim para que viveis, e alheio há de ser o proveito do vosso morrer." ',
              },
            ],
          },
        ],
      },
    ],
  },
  arcadismo: {
    title: "Arcadismo",
    quote: {
      text: "“A literatura é um campo de batalha, onde se luta contra o tempo e a morte.”",
      author: "Gabriel García Márquez",
    },
    image: "/img/arcadismo-1.jpg",
    sections: [
      {
        title: "Contexto histórico",
        content: [
          "O Arcadismo, também conhecido como Neoclassicismo, surgiu no século XVIII como uma reação ao Barroco. Este movimento buscou inspiração na simplicidade e na beleza da vida pastoril, além dos ideais clássicos de equilíbrio e harmonia. O movimento literário possui ideal Iluminista, um movimento intelectual caracterizado por priorizar o racionalismo em detrimento da religiosidade. Acompanham nesse período, acontecimento históricos importantes para o movimento, como a queda das monarquias absolutistas junto da ascensão da burguesia, a Revolução Francesa impulsionada pelo Ilimunismo, e o grande desenvolvimento tecnológico acompanhado de um êxodo rural em larga escala. Em Portugal, o Arcadismo acontece entre 1756 e 1825, e no Brasil, no período entre 1768 e 1808.  ",
        ],
      },
      {
        title: "Características do Arcadismo",
        content: [
          "O Arcadismo surgue como um movimento totalmente contrário ao Barroco, e portanto, ao contrário do exagero e rebuscamento barroco, o Arcadismo preza por uma linguagem simples, com vocabulário simples de entender, e sem o uso constante de figuras de linguagem ou outros meios para complicar a leitura, tornando os textos produzidos durante esse período mais compreensíveis e acessíveis. O movimento, assim como o Classicismo, retorna aos ideais gregos clássicos, utilizando do latim e dando preferência à sonetos e citando mitologia nas obras. Como foi um movimento muito influenciado pelo Iluminismo, é importante destacar que nos textos, os autores seguirão a ideia de que a razão deve prevalecer sobre a fé. Os autores dessa época frequentemente utilizavam de pseudônimos, ou seja, utilizavam nomes falsos ao assinar seus poemas. Por último, o bucolismo tem grande importância nas produções arcadistas, ele basicamente defende a vida calma fora das cidades e enaltece a grandeza da natureza, valorizando uma vida pastoril, na tranquilidade dos campos. Resumindo, as características do Arcadismo são: ",
        ],
        list: [
          "Linguagem simples;",

          "Oposição ao Barroco;",

          "Retorno à tradição clássica;",

          "Uso de pseudônimos (uso de nomes falsos);",

          "Bucolismo;",

          "Uso de expressões em latim;",
        ],
        image: "/img/arcadismo-2.jpg",
        caption: "Pintura arcadista",
      },
      {
        title: "Expressões em latim",
        subsections: [
          {
            subtitle: "Carpe diem",
            content: [
              "Carpe diem é um dos mais famosos preceitos latinos que significa aproveite o dia, viva o presente, influenciando o Arcadismo. ",
            ],
          },
          {
            subtitle: "Locus amoenus",
            content: [
              "Locus amoenus significa lugar ameno, e segundo os poetas, o lugar ideal para se viver seriam os campos, exaltando os ambientes rurais. ",
            ],
          },
          {
            subtitle: "Fugere urbem",
            content: [
              "Fugere urbem significa fugir da cidade, acompanhando o ideal árcade, para se ter paz e viver bem, seria preciso fugir dos centros urbanos.",
            ],
          },
          {
            subtitle: "Inutilia truncat",
            content: [
              "Inutilia truncat significa cortar o inútil, o que o Arcadismo adota em contrapartida ao Barroco, cortando a linguagem complexa e rebuscada, utilizando de uma linguagem simples, direta e clara.",
            ],
          },
        ],
      },
      {
        title: "Autores e obras",
        subsections: [
          {
            subtitle: "Cláudio Manuel da Costa",
            content: [
              "Nasceu e morreu em Minas Gerais, foi um minerador, advogado e poeta, tendo parte na Inconfidência Mineira. Sob o pseudônimo de Glauceste Satúrnio, Cláudio trouxe o Arcadismo ao Brasil quando publicou, em 1768, Obras Poéticas. Posteriormente também fundou a Arcádia Ultramarina, uma academia literária. ",
            ],
            image: "/img/arcadismo-3.jpg",
            caption: "Retrato de Cláudio Manuel da Costa",
          },
          {
            subtitle: "Obras poéticas",
            content: [
              "Obras Poéticas, de Cláudio Manuel da Costa consiste numa coletânea de poemas do escritor brasileiro, poemas esses que seguiam os moldes arcadistas, buscavam linguagem simples, racional e proximidade à natureza, contrário ao Barroco. Ao mesmo, tempo seus poemas se aprofundam em algumas questões filosóficas e sociais da época. Segue um pequeno trecho da obra, onde se destacam algumas características árcades: ",
            ],
            examples: [
              {
                content:
                  '[...]"A doce companhia dos meus gados; Ali me ouvem os troncos namorados, Em que se transformou a antiga gente[...]" ',
              },
            ],
          },
        ],
      },
    ],
  },
  romantismo: {
    title: "Romantismo",
    quote: {
      text: '"A literatura antecipa sempre a vida. Não a copia, molda-a aos seus desígnios."',
      author: "Oscar Wilde",
    },
    image: "/img/romantismo-1.jpg",
    sections: [
      {
        title: "O que é o Romantismo?",
        content: [
          "O Romantismo foi um movimento cultural e artístico que surgiu na Europa no final do século XVIII durante a época da revolução industrial, começando no Brasil a partir do século XIX, após a declaração de independência. Movimento esse que serviu como forma de expressão da burguesia, a qual recentemente havia ascendido e dominado o cenário político mundial, consequência da Revolução Francesa e ideais iluministas.",
        ],
      },
      {
        title: "Contexto histórico europeu",
        content: [
          "O movimento iluminista tomava força na Europa, e portanto, a burguesia também. Foi a partir de eventos históricos como a Revolução Francesa, que a burguesia, com os valores iluministas e ideologia liberal totalmente contrária ao absolutismo, tomou o lugar das monarquias absolutistas por todo o continente Europeu. Tornando-se agora a classe social dominante, o Romantismo surge como forma de arte dos mesmos, expressando novos valores sociais, éticos e morais. ",
          " Conforme o exército de Napoleão aterrorizava e invadia países, foi despertado o sentimento de nacionalismo, posteriormente considerado uma característica forte do Romantismo, levando a produção da primeira obra literária romântica, nomeada Os sofrimentos do jovem Werther e escrita pelo alemão Johann Wolfgang von Goethe. ",
          "Essa nova forma de arte espalhou-se rapidamente por todo o continente, influenciando vários campos artísticos, como a literatura, pintura, escultura, arquitetura e música. ",
        ],
        image: "/img/romantismo-2.webp",
        caption: "Retrato de Johann Wolfgang von Goethe",
      },
      {
        title: "Contexto histórico brasileiro",
        content: [
          " Agora com foco no Brasil, o principal acontecimento que semeou o Romantismo no país foi a chegada da Família Real portuguesa, fugida da ameaça de invasão pelas tropas de Napoleão. Nesse período, movimentos revolucionários como a Inconfidência Mineira só adicionavam lenha na fogueira, que iria culminar na revogação oficial da colonização exploratória do país, e na transformação do mesmo em sede do Reino Unido de Portugal, Brasil e Algarves. ",
          " Nesse contexto, a nacionalização se tornou característica muito forte no país e consequentemente no movimento cultural local, desencadeando na busca por um herói nacional. Foi eleito como heroi o índigena, visto que o branco era um colonizador europeu, e os negros, escravos, considerando o índio como legítimo representante americano, representando braveza e honra. ",
          " O marco inicial em relação às obras foi a publicação de Suspiros Poéticos e Saudades, escrito por Gonçalves de Magalhães, em 1836. Logo após, vários autores se tornaram notáveis e escreveram obras marcantes para a literatura brasileira, sendo alguns deles: Álvares de Azevedo, que escreveu Lira dos Vinte Anos, Casimiro de Abreu que escreveu Primaveras, Castro Alves que escreveu Os Escravos, e José de Alencar, que escreveu O guarani. ",
        ],
        image: "/img/romantismo-3.jpg",
        caption: "Batalha de Guararapes, de Victor Meirelles",
      },
      {
        title: "Características do Romantismo",
        content: [
          " O movimento é marcado por sentimentalismo e a expressão de emoções de forma exacerbada, valorizando a liberdade de escrever sobre, com seus autores muitas das vezes também expressando sentimentos nacionalistas, enaltecendo a pátria e a natureza. ",
          "  Como existe o zelo por valores burgueses, o teocentrismo volta a predominar, enaltecendo a fé e a coragem. Há também a idealização do amor e da mulher, além da fuga da realidade. A corrente artística e cultural faz forte oposição ao Classicismo, ao transformar a arte que antes era algo nobre em algo que enaltece o nacionalismo e que agora é mais acessível. ",
          " Os textos românticos eram escritos em prosa, abandonando padrões estéticos rígidos, tornando-se uma literatura acessível, ainda mais por meio dos folhetins, no Brasil. De forma geral, podemos citar as características do Romantismo, resumidamente, como: ",
        ],
        list: [
          "Nacionalismo",

          "Busca por um heroi nacional",

          "Exaltação da natureza",

          "Teocentrismo",

          "Idealização do amor e da mulher",

          "Fuga da realidade",

          "Valores burgueses",

          "Oposição ao Classicismo",

          "Texto em prosa e sem métrica",

          "Supervalorização de emoções",

          "Exaltação do sentimento de liberdade",
        ],
      },
      {
        title: "Romantismo brasileiro",
        content: [
          'O Romantismo brasileiro destacou-se pela valorização das emoções, do individualismo e do nacionalismo. Os escritores românticos exploravam os conflitos do amor, a exuberância da natureza brasileira e os ideais de liberdade pessoal. Autores como José de Alencar, com suas obras "Iracema" e "O Guarani", e Álvares de Azevedo, com "Noite na Taverna", foram figuras proeminentes deste movimento. Gonçalves Dias, através de sua "Canção do Exílio", também contribuiu significativamente para o Romantismo brasileiro.',
          "O movimento surgiu em um momento de transformação política e social após a Independência do Brasil. A busca por uma identidade nacional unificada era uma preocupação central, refletida nas obras dos artistas românticos. Foi influenciado por movimentos literários europeus, como o romantismo inglês e a literatura germânica. Além disso, incorporou elementos da cultura indígena e africana, enriquecendo sua expressão artística. Ademais, deixou um legado duradouro na cultura brasileira, influenciando não apenas a literatura, mas também a música, as artes visuais e o pensamento social. Suas ideias continuam a inspirar artistas e intelectuais, fornecendo uma base rica para a identidade nacional brasileira. ",
        ],
        subsections: [
          {
            subtitle: "Primeira geração romântica (1822 - 1850)",
            content: [
              " Quando falamos da primeira geração romântica, temos de ter algumas coisas em mente: o indianismo, o nacionalismo ufanista e a exaltação da natureza. O indianismo representa a busca por identidade nacional, o que culmina também na busca por um heroi nacional, o qual é representado pelo indígena. Uma vez que o português é um invasor e o negro é um escravo, o que é mais nacionalista do que o povo que aqui habitava há sabe se lá quantos séculos. Podemos ver um exemplo do Indianismo no trecho a seguir, do poema O Canto do Guerreiro, de Gonçalves Dias: ",
            ],
            examples: [
              {
                title: " O Canto do Guerreiro ",
                content: [
                  '[...] "Na caça ou na lide,',
                  "Quem há que me afronte?!",
                  "A onça raivosa",
                  "Meus passos conhece,",
                  "O imigo estremece,",
                  "E a ave medrosa",
                  "Se esconde no céu.",
                  "–Quem há mais valente,",
                  'Mais destro do que eu?" [...] ',
                ],
              },
            ],
          },
          {
            content: [
              "O nacionalismo ufanista (orgulho exagerado) fala por si só, é um grande pilar do Romantismo brasileiro e essencial na construção da identidade nacional após a declaração da independência em 1822. Juntamente do nacionalismo e do indianismo, é também apresentado em inúmeras obras românticas a valorização da natureza, com menções e elogios à fauna e flora brasileira, como no poema denominado Canção de Exílio, também de Gonçalves Dias. Segue um trecho: ",
            ],
            examples: [
              {
                title: " Canção de Exílio ",
                content: [
                  '[...] "Minha terra tem palmeiras,',
                  "Onde canta o Sabiá;",
                  "As aves, que aqui gorjeiam,",
                  "Não gorjeiam como lá.",
                  "",
                  "Nosso céu tem mais estrelas,",
                  "Nossas várzeas têm mais flores,",
                  "Nossos bosques têm mais vida,",
                  "Nossa vida mais amores.",
                  "",
                  "Em cismar, sozinho, à noite,",
                  "Mais prazer eu encontro lá;",
                  "Minha terra tem palmeiras,",
                  'Onde canta o Sabiá." [...]',
                ],
              },
            ],
          },
          {
            content: [
              " Alguns dos principais representantes dessa fase incluem Gonçalves de Magalhães, Gonçalves Dias, José de Alencar e Álvares de Azevedo. Suas obras contribuíram para a construção de uma literatura genuinamente brasileira, marcada pela linguagem poética, pela busca pela originalidade e pela valorização das emoções. ",
            ],
          },
          {
            subtitle: "Segunda geração (1853 - 1869)",
            content: [
              " A segunda geração romântica teve seu surgimento no Brasil entre 1853 e 1869 e ficou conhecida como a geração ultrarromântica, ou “O mal do século”, e abordava temas como: pessimismo, tédio, amor não correspondido, morte e insatisfação. Isso se deve à bruta interrupção do idealismo nacional pelos jovens, agravado por problemas sociais da época, mergulham em um interior sombrio e reflexivo, retratando pensamentos quase sem esperança de um futuro melhor e sem mais fé no lema da Revolução Francesa.",
            ],
          },
          {
            content: [
              " Os principais autores dessa geração foram Pedro Luziense de Bittencourt Calasans ,um poeta e jornalista que publicou alguns livros como Adeus! (1853), Páginas Soltas (1855), Últimas Páginas (1858) dentre outros. Manuel Antônio Álvares de Azevedo também foi outro autor marcante escritor e poeta e dentre suas obras que mais se destacaram foram e Noite na Taverna (1855), Três Liras (1853).",
            ],
          },
          {
            content: [
              " As principais características da segunda geração romântica são: saudosismo, escapismo, fuga da realidade, egocentrismo e individualismo, pessimismo e melancolia, sentimentalismo exacerbado e profundo subjetivismo. Um dos poemas mais conhecidos da segunda geração romântica foi o Álvares de Azevedo chamado de A Lagartixa, o mesmo apresenta características marcantes da segunda geração romântica, como: sentimentalismo exacerbado, melancolia e fuga da realidade.",
            ],
            examples: [
              {
                title: " A Lagartixa",
                content: [
                  '"A lagartixa ao sol ardente vive',
                  "E fazendo verão o corpo espicha:",
                  "O clarão de teus olhos me dá vida,",
                  "Tu és o sol e eu sou a lagartixa.",
                  "",
                  "Amo-te como o vinho e como o sono,",
                  "Tu és meu copo e amoroso leito...",
                  "Mas teu néctar de amor jamais se esgota,",
                  "Travesseiro não há como teu peito.",
                  "",
                  "Posso agora viver: para coroas",
                  "Não preciso no prado colher flores;",
                  "Engrinaldo melhor a minha fronte",
                  "Nas rosas mais gentis de teus amores",
                  "Vale todo um harém a minha bela,",
                  "Em fazer-me ditoso ela capricha...",
                  "Vivo ao sol de seus olhos namorados,",
                  'Como ao sol do verão a lagartixa."',
                ],
              },
            ],
          },
          {
            subtitle: "Terceira geração (1870 - 1880)",
            content: [
              "A terceira geração romântica ocorreu entre 1870 a 1880. Também ficou conhecida como “Geração Condoreira” após ser marcada com sua liberdade, ganhou esse nome por conta da ave que se habita na Cordilheira dos Andes, o Condor. Ao abordar a terceira geração romântica, temos que pensar em abolicionismo, liberdade e uma abordagem diferente do amor, agora com foco pouco mais erótico. As obras produzidas durante esse período vão usar e abusar da liberdade, e vão criticar abertamente atentados contra a mesma, como no caso da época, a escravidão dos negros.  ",
            ],
          },
          {
            content: [
              "A fuga da realidade é deixada um pouco de lado, e as vivências reais tomam conta dos textos e poemas. Utilizam da liberdade de amar também para retratar a mulher de forma diferente das outras duas gerações, agora valorizando a si mesmos e retratando-as como algo real e não algo angelical ou impossível de ser conquistado, expressando os sentimentos de forma mais concreta. Temos como exemplo de poema abolicionista, um trecho de Navio Negreiro, de Castro Alves:",
            ],
            examples: [
              {
                title: " Navio Negreiro ",
                content: [
                  '[...]"Senhor Deus dos desgraçados!',
                  "Dizei-me vós, Senhor Deus!",
                  "Se é loucura... se é verdade",
                  "Tanto horror perante os céus?!",
                  "Ó mar, por que não apagas",
                  "Co'a esponja de tuas vagas,",
                  "De teu manto este borrão?...",
                  "Astros! noites! tempestades!",
                  "Rolai das imensidades!",
                  "Varrei os mares, tufão!",
                  "",
                  "Quem são estes desgraçados",
                  "Que não encontram em vós",
                  "Mais que o rir calmo da turba",
                  "Que excita a fúria do algoz?",
                  "Quem são? Se a estrela se cala,",
                  "Se a vaga à pressa resvala",
                  "Como um cúmplice fugaz,",
                  "Perante a noite confusa...",
                  "Dize-o tu, severa Musa,",
                  "Musa libérrima, audaz!...",
                  "",
                  "São os filhos do deserto,",
                  "Onde a terra esposa a luz.",
                  "Onde vive em campo aberto",
                  "A tribo dos homens nus...",
                  "São os guerreiros ousados",
                  "Que com os tigres mosqueados",
                  "Combatem na solidão.",
                  "Ontem simples, fortes, bravos.",
                  "Hoje míseros escravos,",
                  "Sem luz, sem ar, sem razão. . .",
                  "",
                  "São mulheres desgraçadas,",
                  "Como Agar o foi também.",
                  "Que sedentas, alquebradas,",
                  "De longe... bem longe vêm...",
                  "Trazendo com tíbios passos,",
                  "Filhos e algemas nos braços,",
                  "N'alma — lágrimas e fel...",
                  "Como Agar sofrendo tanto,",
                  "Que nem o leite de pranto",
                  'Têm que dar para Ismael."[...]',
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Autores e obras",
        subsections: [
          {
            subtitle: "Gonçalves Dias",
            content: [
              " Gonçalves Dias nasceu em Caxias, no Maranhão, formou-se em direito, posteriormente trabalhando como advogado, professor, etnólogo, advogado e jornalista. Foi um dos grandes autores da primeira geração romântica, produzindo famosos poemas indianistas e nacionalistas. ",
            ],
            image: "/img/romantismo-4.webp",
            caption: "Retrato de Gonçalves Dias",
          },
          {
            subtitle: "Álvares de Azevedo",
            content: [
              " Álvares de Azevedo nasceu em São Paulo, em uma família de boas condições, se mudou para o Rio de Janeiro, depois retornando ao seu estado de origem, formou-se em direito. Morreu cedo com apenas 20 anos, mas foi um dos grandes destaques ao produzir poemas da segunda geração romântica.",
            ],
            image: "/img/romantismo-5.webp",
            caption: "Retrato de Álvares de Azevedo",
          },
          {
            highlight:
              "Poema simbólico do autor, escrito apenas um mês antes de sua morte, época em que já tinha tuberculose pulmonar, doença que ceifou sua vida. ",
            examples: [
              {
                title: "Se eu morrese amanhã",
                content: [
                  '"Se eu morresse amanhã, viria ao menos',
                  "Fechar meus olhos minha triste irmã;",
                  "Minha mãe de saudades morreria",
                  "Se eu morresse amanhã!",
                  "",
                  "Quanta glória pressinto em meu futuro!",
                  "Que aurora de porvir e que manhã!",
                  "Eu perdera chorando essas coroas",
                  "Se eu morresse amanhã!",
                  "",
                  "Que sol! que céu azul! que doce n'alva",
                  "Acorda a natureza mais louçã!",
                  "Não me batera tanto amor no peito",
                  "Se eu morresse amanhã!",
                  "",
                  "Mas essa dor da vida que devora",
                  "A ânsia de glória, o dolorido afã...",
                  "A dor no peito emudecera ao menos",
                  'Se eu morresse amanhã!"',
                ],
              },
            ],
          },
          {
            subtitle: "Castro Alves",
            content: [
              " Castro Alves nasceu em Muritiba, mudando-se posteriormente para Salvador, onde morou em uma chácara e teve seu primeiro contato traumatizante com uma senzala, o que influenciou seus pensamentos abolicionistas desde cedo. Começou a estudar direito e fundou uma “sociedade abolicionista” com alguns colegas. Escreveu poemas que integrariam o livro “Os Escravos” posteriormente, e com a ajuda de Machado de Assis, ingressou no mundo literário. ",
            ],
            image: "/img/romantismo-6.jpg",
            caption: "Retrato de Castro Alves",
          },
        ],
      },
    ],
  },
  realismo: {
    title: "Realismo",
    quote: {
      text: '" “A leitura é, provavelmente, uma outra maneira de estar em um lugar”. ',
      author: "José Saramago",
    },
    image: "/img/realismo-1.webp",
    sections: [
      {
        title: "O que é o Realismo?",
        content: [
          " O Realismo surge na Europa em meados do século XIX, mais especificamente na França, o movimento surge como uma contraposição ao Romantismo, e como o próprio nome sugere, propõe visão realista, e é contrário à fuga da realidade romântica. O movimento influenciou principalmente a literatura, sendo a primeira obra Madame Bovary, de Gustave Flaubert, em 1857. ",
        ],
      },
      {
        title: "Contexto histórico europeu",
        content: [
          " O contexto histórico do Realismo se dá em uma época considerada conturbada com vários acontecimentos marcantes. O modelo capitalista impulsionado pela Primeira Revolução Industrial prolongou-se de forma amarga para os trabalhadores e a todos que não fossem parte da burguesia. Ele trouxe algumas inovações tecnológicas que melhoraram a qualidade de vida da população urbana, mas quem disse que um mero trabalhador poderia comprar tais. Isso junto da exploração e jornadas de trabalho que se assemelhavam à escravidão despertou um sentimento de revolta na população humilde. ",
          " É nesse cenário que ocorre a Segunda Revolução Industrial, que trás mais avanços como o carro a gasolina e a invenção da lâmpada elétrica, porém que acompanham gigantesca poluição e acentuada urbanização. Surgem ainda avanços científicos como a teoria do evolucionismo, proposta por Charles Darwin. Tudo isso influenciou escritores e artistas que vivam o momento, de forma que a situação se transmitisse por meio da arte, com linguagem clara e uma crítica à burguesia, contrariando padrões do Romantismo, como por exemplo o individualismo. ",
        ],
        image: "/img/realismo-2.jpg",
        caption: "Edward Hopper – “Noite azul” (1914)",
      },
      {
        title: "O Realismo na literatura",
        content: [
          " O Realismo começa na literatura com o lançamento de Madame Bovary, por Gustave Flaubert, em 1857. Não haveria melhor narrativa para estrear o Realismo do que uma história de um casamento infeliz que aborda assuntos não muito falados como o suicídio e o adultério. Junto do clássico francês, surgem outros autores importantes para o período, como Eça de Queiroz em Portugal, publicando obras como O Primo Basílio, e Fiodor Dostoievski publicando Crime e Castigo. ",
        ],
      },
      {
        title: "Contexto histórico brasileiro",
        content: [
          " O movimento acontece no brasil durante a vigência de Dom Pedro II, logo após a proclamação da república, e possui as mesmas características que adquiriu na Europa, criticando a burguesia e as desigualdades provenientes da mesma. É nesse cenário, influenciado pelo Positivismo, pelo Socialismo e pelo Marxismo, que se desenvolvem ao longo dos anos 1800, que o Realismo surge no Brasil. ",
          " Tudo isso durante avanços tecnológicos, a abolição da escravidão e outros eventos sociais. Assim como Madame Bovary foi pioneiro na França, Memórias Póstumas de Brás Cubas foi pioneiro em solo brasileiro, sendo considerada a primeira obra realista do país, escrita por Machado de Assis. ",
        ],
      },
      {
        title: "Características do Realismo",
        content: [
          " A característica é a objetividade, apresentando o que realmente acontece de forma direta e sem rodeios e sem idealizações. As obras criticavam situações da época, instituições sociais como a igreja e principalmente, criticavam a burguesia. Os personagens das obras são pessoas comuns, porém são construídos muito profundamente, desde seu subconsciente até suas ações, e vivem situações cotidianas, como casamentos arranjados, e outras situações de temas urbanos e sociais. ",
          " Os textos são influenciados por um viés científico, como o muito utilizado Determinismo, que propõe que o indivíduo é fruto do meio em que vive, podemos observar isso na principal obra realista brasileira, Memórias Póstumas de Brás Cubas. No geral, podemos definir as características do Realismo como: ",
        ],
        list: [
          "Objetividade",

          "Linguagem direta",

          "Críticas sociais",

          "Temas cotidianos",

          "Personagens comuns e aprofundados",

          "Determinismo social: o ser é fruto do ambiente em que vive",

          "Oposição ao Romantismo",
        ],
      },
      {
        title: "Autores e obras",
        subsections: [
          {
            subtitle: "Machado de Assis",
            content: [
              " Joaquim Maria Machado de Assis, nasceu no morro do Livramento, no estado do Rio de Janeiro, em família humilde. Perdeu a mãe muito cedo e se interessou pela literatura, se tornando autodidata e começando a escrever sonetos, posteriormente se tornando um dos maiores escritores brasileiros, principalmente com sua prestigiada obra Memórias Póstumas de Brás Cubas. ",
            ],
            image: "/img/realismo-3.jpg",
            caption: "Retrato de Machado de Assis",
          },
          {
            subtitle: "Memórias Póstumas de Brás Cubas",
            content: [
              " A obra trouxe o Realismo ao Brasil, sendo dividida em 160 capítulos. Brás Cubas é um defunto-autor, que conta sua história, começando pela sua morte, viajando entre datas e vivências que viveu durante a narrativa. O livro analisa profundamente o psicológico das personagens e principalmente do protagonista, mostrando seus pensamentos, preconceitos e ações e consequências, mostrando conquistas, desgraças e perdições que fazem sua vida uma história boa de se ler. Segue um trecho da obra: ",
            ],
            examples: [
              {
                title: "Trecho de Memórias Póstumas de Brás Cubas",
                content:
                  ' "Este ar sombrio, estas gotas do céu, aquelas nuvens escuras que cobrem o azul como um crepe funéreo, tudo isso é a dor crua e má que lhe rói à Natureza as mais íntimas entranhas". ',
              },
            ],
          },
          {
            subtitle: "Raul Pompeia",
            content: [
              " Raul d'Ávila Pompeia nasceu em Angra dos Reis, no estado do Rio de Janeiro, em boa família. Escritor desde cedo, Raul sempre escreveu com suas críticas e por conta disso foi afastado algumas vezes de seus cargos, alcançando posições como cronista, romancista, orador, jornalista e contitsta ao longo de sua vida, a qual daria um fim trágico aos 32 anos cometendo suicídio com um tiro no coração. O autor ganhou destaque no Realismo ao escrever e publicar O ateneu. ",
            ],
            image: "/img/realismo-4.jpg",
            caption: "Retrato de Raul Pompeia",
          },
          {
            subtitle: "O ateneu",
            content: [
              " O romance é dividido em 12 capítulos e assim como as obras realistas, apresenta profunda descrição e reflexão do ambiente em que a história se passa e das personagens que a vivem. O personagem principal é o narrador principal e conta sua experiência, depois de adulto, que teve quando mais jovem no colégio Anteneu.Segue um trecho da obra: ",
            ],
            examples: [
              {
                title: "Trecho de O ateneu",
                content:
                  ' "Ninguém sabia dos sonhos e atribuía à excentricidade e o meu amor à solidão e ao sossego". ',
              },
            ],
          },
        ],
      },
    ],
  },
  naturalismo: {
    title: "Naturalismo",
    quote: {
      text: "“A leitura engrandece a alma”. ",
      author: "Voltaire",
    },
    image: "/img/naturalismo-1.webp",
    sections: [
      {
        title: "Contexto histórico",
        content: [
          " O Naturalismo é considerado uma evolução do Realismo, com o movimento surgindo na Europa, em meados do século XIX. Compartilha do mesmo contexto do Realismo, da industrialização proveniente da segunda revolução industrial, junto do crescimento da desigualdade social, o que deu combustível para sociólogos como Marx para desenvolverem modelos econômicos socialistas, influenciando diretamente o naturalismo. A mesma linha de pensamento influenciou Auguste Comte a pensar no positivismo, que é basicamente uma doutrina que divide a humanidade em três partes, com o científico sendo o mais evoluído deles. Comte alegava que a única forma de descobrir a verdade era através da investigação científica. ",
          " No mesmo período, Charles Darwin levava a público sua teoria de evolução das espécies, ressignificando o homem como resultado da natureza, e Hippolyte Taine propunha o determinismo, que dizia que o meio, a raça e o momento determinam as ações do indivíduo. Enquanto isso, no Brasil, o segundo reinado estava sob pressão por conta da Guerra do Paraguai e os protestos contra a escravatura. Podemos dizer que os naturalistas aqui em nosso país eram os abolicionistas e apoiadores do movimento republicano. ",
        ],
        image: "/img/naturalismo-2.jpg",
        caption: "Os Bêbados (1908), de José Malhoa",
      },
      {
        title: "Características do Naturalismo",
        content: [
          " Como dito anteriormente, o Naturalismo é uma extensão do Realismo, e a característica importante que os diferencia é que enquanto o Realismo aborda as personagens com viés psicológico, o Naturalismo aborda as personagens com carácter patológico, possuindo um aspecto anatômico, dando importância à doença e ao quanto o ser humano é como qualquer animal. ",
          " Dito isso, o Naturalismo também carrega outras características do Realismo, como o emprego do determinismo, que diz que o homem é o produto do meio em que vive, o cientificismo, agora empregado de forma a entender que o homem é resultado da natureza e leis naturais, a objetividade e predominância da descritividade e a retratação de situações cotidianas, de pessoas das classes inferiores. E assim como o Realismo, também critica as desigualdades sofridas e a miséria. ",
          " Como características únicas, o Naturalismo tem por exemplo, o destaque para o lado mais animalesco do ser humano, retratando o instinto, a fome, e os comparando a animais por meio da zoomorfização. Além da frequente abordagem de patologias sociais, como os vícios, doenças e adultérios. Por fim, podemos definir as características do Naturalismo resumidamente como: ",
        ],
        list: [
          "Representação do lado animal do homem",

          "Cientificismo",

          "Determinismo",

          "Críticas à desigualdade e miséria",

          "Objetividade e descritividade",

          "Abordagem de patologias sociais",

          "Narrativas sobre temas cotidianos",
        ],
      },
      {
        title: "Autores e obras",
        subsections: [
          {
            subtitle: "Aluísio de Azevedo",
            content: [
              " Aluísio de Azevedo nasceu em São Luís do Maranhão, e desde cedo se interessou pela arte, fazendo com que se mudasse para o Rio de Janeiro, com o objetivo de estudar na Imperial Academia de Belas Artes. Desenhava caricaturas para os jornais e posteriormente iniciou sua carreira como escritor, lançando obras naturalistas que o tornaram referência no gênero, como O mulato e O cortiço, que abordavam o preconceito racial e diversos temas sociais. ",
            ],
            image: "/img/naturalismo-3.png",
            caption: "Retrato de Aluísio de Azevedo",
          },
          {
            subtitle: "O cortiço",
            content: [
              " O Cortiço foi um romance publicado em 1890 por Aluísio de Azevedo, obra que retrata o dia a dia das pessoas comuns em um cortiço no Rio de Janeiro. O romance aborda desigualdade social e retrata as personagens na ambição por ascensão social, destrinchando o comportamento de tais em aspectos animalescos. Segue um trecho da obra: ",
            ],
            examples: [
              {
                title: "Trecho de O cortiço",
                content:
                  " “E naquela terra encharcada e fumegante, naquela umidade quente e lodosa, começou a minhocar, a esfervilhar, a crescer, um mundo, uma coisa viva, uma geração, que parecia brotar espontânea, ali mesmo, daquele lameiro, e multiplicar-se como larvas no esterco.” ",
              },
            ],
          },
          {
            subtitle: "Émile Zola",
            content: [
              " Émile Zola nasceu em Paris, na França, e com 13 anos já escrevia seus primeiros textos, e com 20, foi reprovado para ingressar na faculdade de Direito, fazendo com que procurasse emprego em uma editora e posteriormente escrevendo suas obras naturalistas, como A Taberna e A besta humana. ",
            ],
            image: "/img/naturalismo-4.jpg",
            caption: "Retrato de Émile Zola",
          },
        ],
      },
    ],
  },
  parnasianismo: {
    title: "Parnasianismo",

    quote: {
      text: " “Não há problema que a leitura não possa solucionar”.  ",

      author: "Charles Bukowski",
    },

    image: "/img/parnasianismo-1.jpg",

    sections: [
      {
        title: "Contexto histórico",
        content: [
          " O movimento literário surgiu na mesma época do Realismo e do Naturalismo, no final do século XIX, com sua origem sendo na França. O Parnasianismo é supositório ao Realismo e o Naturalismo, valorizando o positivismo e a ciência acima de qualquer coisa, fatos históricos objetos e paisagens, com forte descrição visual. No Brasil, o movimento começou a partir de 1880 e teve maior destaque do que teve na Europa, e só aqui teve características como a subjetividade e o nacionalismo. ",
        ],
        image: "/img/parnasianismo-2.webp",
        caption: "Apolo e as musas no monte Parnaso, de Claude Gellée",
      },
      {
        title: "Características do Parnasianismo",
        content: [
          " O Parnasianismo foi um movimento contemporâneo, assim como o Realismo e o Naturalismo, porém, agora com foco na poesia. São valorizados o vocabulário culto, os sonetos, métrica, a racionalidade e a perfeição na escrita. A descrição das coisas é uma característica chave do Parnasianismo, assim como a objetividade, a impessoalidade, o uso de algumas figuras de linguagem e o preciosismo. Podemos ver as características citadas como a descritividade e o vocabulário culto nesse exemplo: ",
        ],
        examples: [
          {
            title: "Vaso chinês, de Alberto de Oliveira",
            content: [
              '"Estranho mimo aquele vaso! Vi-o,',
              "Casualmente, uma vez, de um perfumado",
              "Contador sobre o mármor luzidio,",
              "Entre um leque e o começo de um bordado.",
              "",
              "Fino artista chinês, enamorado,",
              "Nele pusera o coração doentio",
              "Em rubras flores de um sutil lavrado,",
              "Na tinta ardente, de um calor sombrio.",
              "",
              "Mas, talvez por contraste à desventura,",
              "Quem o sabe?... de um velho mandarim",
              "Também lá estava a singular figura.",
              "",
              "Que arte em pintá-la! A gente acaso vendo-a,",
              "Sentia um não sei quê com aquele chim",
              'De olhos cortados à feição de amêndoa."',
            ],
          },
        ],
      },
      {
        highlight: "Podemos definir as características resumidamente como:",
        list: [
          "Descritividade",

          "Racionalidade",

          "Linguagem culta",

          "Preferência por sonetos",

          "Preocupação com métrica",

          "Impessoalidade",

          "Preciosismo",
        ],
      },
      {
        title: "Autores e obras",
        subsections: [
          {
            subtitle: "Alberto de Oliveira",
            content: [
              " Alberto de Oliveira nasceu em Saquarema, no estado do Rio de Janeiro, começou sua vida acadêmica na medicina, a qual logo abandonou e começou a trabalhar de farmacêutico, posteriormente nomeado oficial de gabinete, professor e diretor geral da Instrução Pública. Escreveu poemas que o fizeram ser um dos principais nomes no Parnasianismo, como o usado no exemplo acima, chamado Vaso chinês. ",
            ],
            image: "/img/parnasianismo-3.webp",
            caption: "Retrato de Alberto de Oliveira",
          },
          {
            subtitle: "Olavo Bilac",
            content: [
              " Olavo Braz Martins dos Guimarães Bilac nasceu no estado do Rio de Janeiro, cursou direito e medicina, sem concluir nenhuma. Posteriormente trabalhou como inspetor de escola e jornalista, sua primeira obra a ser publicada foi Poesias, em 1888, seguindo os moldes parnasianos. ",
            ],
            image: "/img/parnasianismo-4.jpg",
            caption: "Retrato de Olavo Bilac",
          },
          {
            highlight: " Segue uma de suas obras, Via Láctea: ",
            examples: [
              {
                title: "Via Láctea",
                content: [
                  '"Ora, direis, ouvir estrelas, certo',
                  "Perdeste o senso, e eu vos direi, no entanto",
                  "Que, para ouvi-las, muita vez desperto",
                  "E abro as janelas, pálido de espanto",
                  "",
                  "E conversamos toda a noite, enquanto",
                  "A via-láctea, como um pálio aberto",
                  "Cintila; e, ao vir do Sol, saudoso e em pranto",
                  "Inda as procuro pelo céu deserto",
                  "",
                  "Direis agora: Tresloucado amigo",
                  "Que conversas com elas? Que sentido",
                  "Tem o que dizem, quando estão contigo?",
                  "",
                  "E eu vos direi: Amai para entendê-las!",
                  "Pois só quem ama pode ter ouvido",
                  'Capaz de ouvir e de entender estrelas"',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  simbolismo: {
    title: "Simbolismo",

    quote: {
      text: "“Um livro é um sonho que você segura na mão”.  ",

      author: "Neil Gaiman",
    },

    image: "/img/simbolismo-1.webp",

    sections: [
      {
        title: "Contexto histórico",
        content: [
          " O Simbolismo surge no final do século XIX na França, no mesmo período do Parnasianismo. No mesmo período, a segunda revolução industrial só se expandia juntamente do capitalismo e da burguesia, processo esse beneficiado pela unificação da Alemanha em meados de 1870, e logo depois da Itália em 1871. As inovações científicas não pararam, como o uso da energia elétrica e o uso do petróleo para produção de combustíveis. ",
          " Nesse contexto começam as disputas entre países pela diversificação dos mercados, por fim culminando na Primeira Guerra Mundial, no período de 1914 a 1918. Diante disso surge o Simbolismo, movimento literário que se opõe ao materialismo, cientificismo e o lado racional que tinham destaque até então, negando a realidade. ",
        ],
        image: "/img/simbolismo-2.webp",
        caption: "A Ilha dos Mortos, de Arnold Böcklin (1880)",
      },
      {
        title: "Características do Simbolismo",
        content: [
          " O movimento se opõe ao realismo e o racionalismo, e conta com características como o uso de pausas para representar uma forma de silêncio metafísico, abordagem de temáticas relacionadas à interioridade e ao estado de espírito, o uso de sinestesia, isto é, versos que vão descrever aroma, cor e som, englobando os cinco sentidos. ",
          " Podemos citar também a presença de antíteses e oposições, visando tornar vivo o divino, e tornar consciente o que é terreno, estabelecendo relação entre o mundo material e o espiritual, a presença da religiosidade, a construção de imagens sombrias e decadentes, com a presença de luz e sombra ao mesmo tempo. Por fim, o Simbolismo não se preocupa com a métrica tanto quanto o Parnasianismo, permitindo a construção de versos livres e usos de métricas irregulares. ",
          " Em suma, podemos citar as características do movimento, resumidamente como: ",
        ],
        list: [
          "Temas voltados à espiritualidade",

          "Sinestesia",

          "Presença de antítese e contradições (divino e terreno)",

          "Religiosidade",

          "Preferência por sonetos",

          "Presença de versos livres e brancos",

          "Oposição ao cientificismo",
        ],
      },
      {
        title: "Autores e obras",
        subsections: [
          {
            subtitle: "Afonso Henrique da Costa Guimarães",
            content: [
              " Nascido em Ouro Preto, Afonso se formou em direito e trabalhou nos cargos de promotor e juiz, redigindo também um jornal. O autor é referência no simbolismo com suas obras com temática solitária e de morte. ",
            ],
            image: "/img/simbolismo-3.webp",
            caption: "Retrato de Afonso Henrique da Costa Guimarães",
          },
          {
            highlight: " Segue um de seus poemas: ",
            examples: [
              {
                title: "Cisnes brancos",
                content: [
                  '"Cisnes brancos, cisnes brancos,',
                  "Porque viestes, se era tão tarde?",
                  "O sol não beija mais os flancos",
                  "Da montanha onde morre a tarde.",
                  "",
                  "Ó cisnes brancos, dolorida",
                  "Minh’alma sente dores novas.",
                  "Cheguei à terra prometida:’",
                  "É um deserto cheio de covas.",
                  "",
                  "Voai para outras risonhas plagas,",
                  "Cisnes brancos! Sede felizes...",
                  "Deixai-me só com as minhas chagas,",
                  "E só com as minhas cicatrizes.",
                  "",
                  "Venham as aves agoireiras,",
                  "De risada que esfria os ossos...",
                  "Minh’alma, cheia de caveiras,",
                  "Está branca de padre-nossos.",
                  "",
                  "Queimando a carne como brasas,",
                  "Venham as tentações daninhas,",
                  "Que eu lhes porei, bem sob as asas,",
                  "A alma cheia de ladainhas.",
                  "",
                  "Ó cisnes brancos, cisnes brancos,",
                  "Doce afago de alva plumagem!",
                  "Minh’alma morre aos solavancos",
                  'Nesta medonha carruagem…"',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  premodernismo: {
    title: "Pré-modernismo",

    quote: {
      text: "“A literatura é a maneira mais agradável de ignorar a vida.”. ",

      author: "Fernando Pessoa",
    },

    image: "/img/premodernismo-1.jpg",

    sections: [
      {
        title: "Contexto histórico",
        content: [
          " A transição do século XIX para o século XX pode ser classificada como período de grandes mudanças. Em território brasileiro, ocorria a mudança do governo monárquico para o republicano, período denominado República Velha, ou República do Café com Leite, resultado da oligarquia latifundiária de Minas Gerais e São Paulo. ",
          " Nesse mesmo período, a revolução industrial tomou conta do país, aumentando drasticamente a urbanização e a influência da burguesia e dos militares, consolidando novas classes sociais como o proletariado. A escravidão havia sido recentemente abolida, e com isso, a imigração tomou força com pretenção de suprir a lacuna de mão de obra antes escrava, agora sendo substituída por imigrantes de todo o mundo.",
          " Com o crescimento da população recém alforriada e desempregados, tornava-se mais evidente ainda a desigualdade social, junto do distanciamento entre povo e gestores da república. Tudo isso culminou para que houvessem revoltas como a revolta da vacina, revolta da chibata e outras mais. ",
        ],
        image: "/img/premodernismo-2.jpg",
        caption: "Fotografia da Revolda da Vacina (1904)",
      },
      {
        title: "Características do pré-modernismo",
        content: [
          " O pré-modernismo não vem a ser uma academia literária, rompendo com as tradições passadas e a linguagem parnasiana. Agora buscando uma linguagem simples, coloquial e acessível, as obras abordavam a realidade do cidadão brasileiro, retratando seu dia a dia e pouco a pouco tomando viés social, expondo desigualdades sociais e quebrando a ilusão que o governo vendia. ",
          " De forma resumida podemos citar as características como sendo:",
        ],
        list: [
          "Renovação na linguagem (agora simples e coloquial)",

          "Nacionalismo crítico",

          "Retratação da realidade brasileira",

          "Regionalismo",

          "Temas sociais",

          "Não existência de academia literária ",
        ],
      },
      {
        title: "Autores e obras",
        subsections: [
          {
            subtitle: "Euclides da Cunha",
            content: [
              " Euclides da Cunha nasceu em Cantagalo, no estado do Rio de Janeiro em janeiro de 1866. Desde os 3 anos vivia entre fazendas com os tios, que o criaram depois de se tornar órfão. Com 19 anos transferiu-se para a Escola Militar da Praia Vermelha, sendo expulso posteriormente por confrontar um ministro. Dedicou boa parte de sua vida à carreira militar, depois abandonando-a, dedicou-se à escrita e foi nomeado Superintendente de Obras Públicas de São Paulo. ",
            ],
            image: "/img/premodernismo-3.jpg",
            caption: "Retrato de Euclides da Cunha",
          },
          {
            subtitle: "Os sertões",
            content: [
              " Uma das obras mais marcantes de Euclides da Cunha, de cunho regionalista, representa os acontecimentos das encarniçadas batalhas da Guerra de Canudos, que teve palco no interior da Bahia, nos anos de 1896 e 1897.Segue um trecho da obra: ",
            ],
            examples: [
              {
                title: "Trecho de Os sertões",
                content: [
                  "É a arvore sagrada do sertão. Sócia fiel das rápidas horas felizes e longos dias amargos dos vaqueiros. Representa o mais frizante exemplo de adaptação da flora sertaneja. Foi, talvez, de talhe mais alentado e alto — e veiu descahindo, pouco a pouco, numa intercadencia de estios flammivomos e invernos torrenciaes, modificando-se á feição do meio, desinvoluindo, até se preparar para a resistência e reagindo, por fim, desafiando as seccas duradouras, sustentando-se nas quadras miseráveis mercê da energia vital que economisa nas estações benéficas, das reservas guardadas em grande copia nas raizes.",
                  "",
                  " E reparte-as com o homem. Se não existisse o umbuseiro aquelle tracto de sertão, tão estéril que nelle escasseiam os carnahubaes tão providencialmente espalhados nos que o convizinham até ao Ceará, estaria despovoado. O umbu é para o desventurado matuto que alli vive o mesmo que a mauritia, para os garaunos dos llanos.",
                  "",
                  " Alimenta-o e mitiga-lhe a sede. Abre-lhe o seio acariciador e amigo, onde os ramos recurvos e entrelaçados parecem de propósito feitos para a armação das redes bamboantes.",
                ],
              },
            ],
            image: "/img/premodernismo-4.png",
            caption: "Imagem ilustrativa de Os Sertões",
          },
        ],
      },
    ],
  },
  modernismo: {
    title: "Modernismo",

    quote: {
      text: '"A literatura é uma defesa contra as ofensas da vida.”.  ',

      author: "Cesare Pavese",
    },

    image: "/img/modernismo-1.png",

    sections: [
      {
        title: "Contexto histórico",
        content: [
          " Podemos afirmar com toda certeza que o período em que se deu o modernismo foi muito mais conturbado do que o anterior. Na Europa, inicia-se a Primeira Guerra Mundial, causada por uma corrida armamentista e nacionalismo exacerbado, o que permitiu avanços científicos e destruição inigualável. ",
          " Chegado o fim da guerra no ano de 1918, o cenário pós-guerra deu força a movimentos extremistas e nacionalistas de extrema-direita como o fascismo e nazismo, colocando Hitler no poder. Resultado de todo ressentimento alemão, inicia em 1939 o conflito da Segunda Guerra Mundial que se estende até 1945, onde agora protagoniza um conflito ideológico denominado guerra fria, dividindo o mundo em 2 partes.",
          " Voltando ao Brasil, em 1920, o que conhecemos como República Velha entrou em colapso provocado pelos movimentos tenentistas. Alguns anos depois, Getúlio Vargas toma o poder do país dando início a uma era de ditaduras e perseguições a artistas. Todos os acontecimentos influenciaram diretamente os artistas e no Brasil, dividiu o movimento em três gerações. ",
        ],
        image: "/img/modernismo-2.png",
        caption: "Fotografia da Primeira Guerra Mundial",
      },
      {
        title: "Características do Modernismo",
        content: [
          " O que se conhece como Modernismo se deve à vontade de ruptura com a arte tradicional, trazida pelas vanguardas europeias. Sendo assim, as obras modernistas têm total liberdade e seu único limite é a criatividade, trazendo inovação. Resumindo, podemos citar as características do modernismo como: ",
        ],
        list: [
          "Oposição à arte tradicional e as academias",

          "Liberdade para obras",

          "Busca de inovação artística",

          "Linguagem popular",

          "Temas sociopolíticos",

          "Vontade de experimentar",
        ],
      },
      {
        title: "Gerações modernistas",
        subsections: [
          {
            subtitle: "Primeira geração modernista",
            content: [
              " A primeira geração se iniciou em 1922, tendo como marco inicial a Semana de Arte Moderna. Durante esse período, as obras têm caráter mais radical, uma vez que é a linha de frente na quebra da tradição artística tradicional, trazendo consigo o nacionalismo crítico. Ela perdurou até 1930. ",
            ],
          },
          {
            subtitle: "Segunda geração modernista",
            content: [
              " Começa em 1930 e acontece durante a Era Vargas, perdurando até 1945, fazendo com que a poesia tenha como principal assunto a sociopolítica. A prosa, diferentemente, tinha suas obras com viés regionalista e realista, retratando e criticando os problemas sociais. ",
            ],
          },
          {
            subtitle: "Terceira geração modernista",
            content: [
              " Se inicia em 1945, também conhecida como pós-modernismo, tem a poesia valorizando a formalidade, se preocupando com a estrutura, focando em temas sociais e políticos. ",
            ],
          },
        ],
      },
      {
        title: "Autores e obras",
        subsections: [
          {
            subtitle: "Carlos Drummond de Andrade",
            content: [
              " Carlos Drummond de Andrade nasceu no município de de Itabira, em Minas Gerais, no ano de 1902. Cresceu em uma fazenda e, se interessando pela literatura, entrou no Colégio em Belo Horizonte. Dedicou-se à escrita, formou-se em Farmácia, porém nunca exerceu a profissão. ",
            ],
            image: "/img/modernismo-3.jpg",
            caption: "Retrato de Carlos Drummond de Andrade",
          },
          {
            highlight:
              " O autor escreveu diversos poemas, e dentre eles, um de seus mais famosos, nomeado “No meio do caminho”: ",
            examples: [
              {
                title: "No meio do caminho",
                content: [
                  "“No meio do caminho tinha uma pedra",
                  "Tinha uma pedra no meio do caminho",
                  "Tinha uma pedra",
                  "No meio do caminho tinha uma pedra.",
                  "Nunca me esquecerei desse acontecimento",
                  "Na vida de minhas retinas tão fatigadas.",
                  "Nunca me esquecerei que no meio do caminho",
                  "Tinha uma pedra",
                  "Tinha uma pedra no meio do caminho",
                  "No meio do caminho tinha uma pedra.” ",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  posmodernismo: {
    title: "Pós-modernismo",

    quote: {
      text: "“A tarefa da literatura é ajudar o homem a compreender-se a ele mesmo”. ",

      author: "Máximo Gorky",
    },

    image: "/img/posmodernismo-1.jpeg",

    sections: [
      {
        title: "Contexto histórico",
        content: [
          " O pós-modernismo ou pós-industrial foi consolidado após o período do Modernismo e da Segunda Guerra Mundial, após 1945. Nesse tempo, o mundo inteiro sofria as mudanças boas e ruins que a terceira revolução industrial trouxe aos centros urbanos. ",
          "  As inovações tecnológicas fizeram com que muitos trabalhadores perdessem seus empregos, fazendo-os tomar consciência da luta de classes e de como o sistema de organização mundial funcionava e o desprezava.",
          "  Com a produção em massa, agora o consumismo extremo era característica marcante da sociedade, além da idealização e culto ao corpo exageradamente. Difundiu-se a ideia de que agora vivemos em um mundo “líquido”, onde toda e qualquer relação humana sólida é considerada uma ameaça, e que o apego agora é pelo passageiro, pelo descartável.",
          "  Dito isso, a arte pós-modernista, assim como vários outros movimentos, vem para questionar os novos valores da sociedade e pensar sobre o momento atual. O movimento possui fases difundidas e se expande até os dias atuais. ",
        ],
        image: "/img/posmodernismo-2.jpg",
        caption: "Fotografia da Terceira Revolução Industrial",
      },
      {
        title: "Características do pós-modernismo",
        content: [
          " Pode-se tomar como principais características do movimento, a espontaneidade, pluralidade, individualismo, carência de regras e valores e oposição ao anterior modernismo, além de a arte agora é produzida para ser consumida de forma rápida. ",
          "  Com o avanço dos meios de comunicação, a democratização da internet e da informação, tudo agora é difundido, sendo assim, o pós-modernismo mistura estilos, não tendo mais uma forma padronizada de arte. Podemos citar como exemplo a mentalidade atual de que podemos gostar de vários estilos musicais e de tantas outras coisas ao mesmo tempo.",
          "  Simultaneamente a tudo isso, a filosofia também avança e traz temas como o vazio existencial e reflete sobre as incertezas da vida. Podemos resumir as características como: ",
        ],
        list: [
          "Ausência de regras e valores",

          "Pluralidade e diversidade",

          "Individualismo",

          "Combinações de tendências e estilos",

          "Produção em série de cultura voltada para o consumo rápido",

          "Liberdade de expressão e pensamento",

          "Mistura entre realidade e imaginação",

          "Bombardeios de grande quantidade de informações",

          "Incertezas e vazios existenciais ",
        ],
      },
      {
        title: "Autores e obras",
        subsections: [
          {
            subtitle: "Lygia Fagundes Telles",
            content: [
              " Lygia Fagundes Telles nasceu em abril de 1923, em São Paulo. Publicou seu primeiro livro em 1938, e, formada em Direito, trabalhou como procuradora do Instituto de Previdência do Estado de São Paulo. Posteriormente, como membro da Academia Brasileira de Letras, ganhou prêmios como o Jabuti e Camões. Segue um trecho de uma de suas obras: ",
            ],
            image: "/img/posmodernismo-3.jpeg",
            caption: "Fotografia de Lygia Fagundes Telles",
            examples: [
              {
                title: "Trecho de O Verão no Aquário",
                content:
                  '"Ah! se a gente pudesse se organizar com o equilíbrio das estrelas tão exatas nas suas constelações. Mas parece que a graça está na meia-luz. Na ambigüidade. E até as estrelas, pobrezinhas, equilibradas mas tremendo tanto na solidão... "',
              },
            ],
          },
          {
            subtitle: "O Auto da Compadecida",
            content: [
              " Peça teatral de Ariano Suassuna, uma das obras mais famosas do período pós-modernista, que posteriormente se tornou minissérie e filme. A obra se passa na região nordestina do país e estreia com 2 protagonistas, João Grilo e Chicó. ",
            ],
            image: "/img/posmodernismo-4.jpg",
            caption:
              "Cena do filme que mostra os 2 protagonistas, João Grilo e Chicó",
          },
        ],
      },
    ],
  },
  referencias: {
    title: "Referências bibliográficas",
    sections: [
      {
        content: [
          'SOUZA, Warley. "Literatura"; Brasil Escola. Disponível em: https://encurtador.com.br/OwwF1. Acesso em 24 de setembro de 2024. '
        ]
      }
    ],
  },
};

export default contentData;
