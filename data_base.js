let names = [
    "A jornada começa", "Bela Ginga", "Encantado",
    "Nova Amizade", "Engenhosidade Enânica", "Lar Doce Lar",
    "Matador de Dragões", "Ginga Mestre", "Elegante",
    "Consequências Preocupantes", "Olá, Velhas Amigas",
    "Promessa Cumprida", "Pomar de Iounn", "Segundo Round",
    "Fantasmas do Passado", "Sob a Superfície", "Pavio Curto",
    "Cheio de Morte", "Trílingue", "Digno", "Colecionador",
    "Questões Pendentes", "Morte a Todos", "Cegando o Pai de Todos",
    "Perigo nos Céus", "Como Água e Óelo", "Caminho do Zelote",
    "Primordial", "Fogo e Enxofre", "Não Resista", 
    "Sinal do Crepúsculo", "Último desejo", "Escuridão e Névoa",
    "Seletora dos Mortos", "A Verdade",
    "Caça ao Tesouro", "Pai e Filho"
]

let listaDeTrofeus = [
    {
      titulo: "A jornada começa",
      img: "Material/trofeus/a_jornada_comeca.png",
      maps: "Material/God_of_War_Midgard_Map.webp",
      descricao: "O troféu <b>A Jornada Começa</b> é conquistado logo no início da aventura, durante a defesa da sua casa contra o Estranho. É um marco simbólico que marca o ponto de partida da jornada de Kratos e Atreus, estabelecendo o tom épico e pessoal da narrativa.",
      dicas: "Consiga o objetivos de parrys logo na primeira batalha",
      linkYoutube: "https://www.youtube.com/embed/sZ_fyTbYPn0?si=dWvuzkYXCDla5sJU",
      criador: "By VictorKratos",
      finish: false
    },
    {
      titulo: "Bela Ginga",
      img: "Material/trofeus/bela_ginga.png",
      maps: "",
      descricao: "O troféu <b>Bela Ginga</b> é conquistado ao obter uma Joia de Ataque Rúnica. Essas joias são itens que podem ser equipados nas armas de Kratos e oferecem diversos benefícios, como aumentar o dano, adicionar efeitos elementais ou até mesmo novas mecânicas de combate.",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/qpHjwFzaZMw?si=k_bBQu97C0qX5ppu",
      criador: "By Duarteira Play",
      finish: false
    },
    {
      titulo: "Encantado",
      img: "Material/trofeus/encantado.png",
      maps: "",
      descricao: "O troféu <b>Encantado</b> é conquistado quando você equipa um encantamento em sua armadura. Encantamentos são itens que podem ser adicionados às peças de armadura de Kratos e Atreus, concedendo bônus e efeitos especiais.",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/UYynIKlIXfk?si=ohVEMkhQLpbHzOhM",
      criador: "By Duarteira Play",
      finish: false
    },
    {
      titulo: "Nova Amizade",
      img: "Material/trofeus/nova_amizade.png",
      maps: "",
      descricao: "O troféu <b>Nova Amizade</b> é conquistado após sairmos do Bosque da Bruxa",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/Ec7rfArQ4P4?si=1Qb8AaxoWkKBTDE-",
      criador: "By Duarteira Play",
      finish: false
    },
    {
      titulo: "Engenhosidade Enânica",
      img: "Material/trofeus/enjenhosidade_enanica.png",
      maps: "",
      descricao: "O troféu <b>Engenhosidade Enânica</b> é conquistado ao utilizar as ferramentas e equipamentos criados pelos anões de forma variada e criativa.",
      dicas: "",
      linkYoutube: "",
      criador: "",
      finish: false
    },
    {
      titulo: "Lar Doce Lar",
      img: "Material/trofeus/lar_doce_lar.png",
      maps: "",
      descricao: "Para conquistar o troféu <b>Lar Doce Lar</b> você precisará completar a história principal de God of War (2018). Ao final da narrativa, Volte para casa e você testemunhará o resultado de todas as suas ações e a construção de um novo lar para Kratos e Atreus.",
      dicas: "",
      linkYoutube: "",
      criador: "",
      finish: false
    },
    {
      titulo: "Matador de Dragões",
      img: "Material/trofeus/matador_de_dragoes.png",
      maps: "",
      descricao: "Para conquistar o troféu <b>Matador de Dragões</b>, você precisará derrotar o dragão da montanha em uma batalha épica. Este confronto acontece durante a história principal e é um ponto de virada na jornada de Kratos e Atreus.",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/cCXeU5x4la8?si=rHMMMnxaZaYZKbwz",
      criador: "By EPSGAMES OFICIAL",
      finish: false
    },
    {
      titulo: "Ginga Mestre",
      img: "Material/trofeus/ginga_mestre.png",
      maps: "",
      descricao: "Para conquistar o troféu <b>Ginga Mestre</b>, você deve aprimorar totalmente um ataque Rúnico",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/Uv2SK96JFGE?si=v7i8ORlveh-S9-i8",
      criador: "By Duarteira Play",
      finish: false
    },
    {
      titulo: "Elegante",
      img: "Material/trofeus/Elegante.png",
      maps: "",
      descricao: "Para conquistar o troféu <b>Elegante</b>, você deve confeccionar um traje para o Atreus",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/X5L6N4pJrqw?si=qRiyFFYd8oj1knCs",
      criador: "By Duarteira Play",
      finish: false
    },
    {
      titulo: "Consequências Preocupantes",
      img: "Material/trofeus/consequencias_preocupantes.png",
      maps: "",
      descricao: "O troféu <b>Consequências Preocupantes</b> é uma recompensa por sua progressão na história e por superar um dos maiores desafios do jogo. Ao derrotar Magni e Modi, você estará mais próximo de desvendar os mistérios de God of War (2018).",
      dicas: "",
      linkYoutube: "",
      criador: "",
      finish: false
    },
    {
      titulo: "Olá, Velhas Amigas",
      img: "Material/trofeus/ola_velha_amigas.png",
      maps: "",
      descricao: "O troféu <b>Olá, Velhas Amigas</b> é uma recompensa para os fãs da franquia que aguardavam ansiosamente o retorno das Lâminas do Caos. Ao conquistar esse troféu, você estará revivendo um dos momentos mais marcantes da história de Kratos.",
      dicas: "",
      linkYoutube: "",
      criador: "",
      finish: false
    },
    {
      titulo: "Promessa Cumprida",
      img: "Material/trofeus/promessa_cumprida.png",
      maps: "",
      descricao: "Para conseguir o troféu <b>Promessa Cumprida</b>, você deve curar o Atreus buscando o coração do guardião da ponte de hellhein",
      dicas: "",
      linkYoutube: "",
      criador: "",
      finish: false
    },
    {
      titulo: "Pomar de Idunn",
      img: "Material/trofeus/pomar_de_iounn.png",
      maps: "",
      descricao: "Para conseguir o troféu <b>Pomar de Idunn</b>, você deve consumir todas as maçãs de Idunn. ",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/cbMuRF70j70?si=xuljFqwz7lQyrh-_",
      criador: "By XimenesPlay",
      finish: false
    },

    {
      titulo: "Fantasmas do Passado",
      img: "Material/trofeus/fantasmas_do_passado.png",
      maps: "",
      descricao: "O troféu <b>Fantasmas do Passado</b>, é conquistado após fugirmos de hellhein",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/arn68day9EE?si=FASKTcQ8A0to3GQ9",
      criador: "By EW.PLAYER.N1",
      finish: false
    },
    {
      titulo: "Sob a Superfície",
      img: "Material/trofeus/sob_a_superficie.png",
      maps: "",
      descricao: "Para conquistar o troféu <b>Sob a Superfície</b>, é preciso explorar toda a região do lago dos nove.",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/YJGyRdesArc?si=G6VR8UQWAeL6BT4R",
      criador: "By cafe81",
      finish: false
    },
    {
      titulo: "Pavio Curto",
      img: "Material/trofeus/sob_a_superficie.png",
      maps: "",
      descricao: "Para conquistar o troféu <b>Sob a Superfície</b>, é preciso explorar toda a região do lago dos nove.",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/YJGyRdesArc?si=G6VR8UQWAeL6BT4R",
      criador: "By cafe81",
      finish: false
    },

    {
      titulo: "Cheiro de Morte",
      img: "Material/trofeus/cheiro_de_morte.png",
      maps: "",
      descricao: "Para conquistar o troféu <b>Cheiro de Morte</b>, é preciso explorar 100% toda a região de Veithurgard.",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/LcBZ6nZILn0?si=CoYO90PPHm2_6go3?start=2644",
      criador: "By VictorKratos",
      finish: false
    },

    {
      titulo: "Trilíngue",
      img: "Material/trofeus/trilingue.png",
      maps: "Material/bau_de_cifra.jpg",
      descricao: "Para conquistar o troféu <b>Trilíngue</b>, é preciso abrir todos os Baús de Cifra.",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/i4kyeVTJ-Ks?si=H9LxbkEzTPMJm1en",
      criador: "By Platinador",
      finish: false
    },

    {
      titulo: "Digno",
      img: "Material/trofeus/digno.png",
      maps: "",
      descricao: "Para conquistar o troféu <b>Digno</b>, é preciso evoluir o Marchado Leviatan para o nível Máximo",
      dicas: "Você precisará das <b>NÉVOAS TENEBROSAS DE NIFLHEIM</B> abrindo um baú na oficina de ivaldi em niflheim, para comprar a <b>chama congelada</b> com o sindri.",
      linkYoutube: "https://www.youtube.com/embed/qemGyxP_4Uw?si=fjY112X-X8LP1K_V",
      criador: "By XimenesPlay",
      finish: false
    },

    {
      titulo: "Colecionador",
      img: "Material/trofeus/colecionador.png",
      maps: "",
      descricao: "Para conquistar o troféu <b>Colecionador</b>, é preciso coletar todos os artefatos disponíveis no jogo",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/OCTEQEkSnpw?si=iT_m2lfF4VXWsqFb",
      criador: "By TrophyMania",
      finish: false
    },

    {
      titulo: "Morte a Todos",
      img: "Material/trofeus/morte_a_todos.png",
      maps: "",
      descricao: "Para conquistar o troféu <b>Morte a Todos</b>, é preciso abater 1.000 inimigos",
      dicas: "<b>Dica:</b> Os desafios de Muspelheim e o Labirinto de Niflheim vão facilitar esse troféu.",
      linkYoutube: "https://www.youtube.com/embed/ZFViUFTodus?si=EbKp28zipnMBamfQ",
      criador: "By VictorKratos",
      finish: false
    },

    {
      titulo: "Cegando o Pai de Todos",
      img: "Material/trofeus/cegando_o_pai_de_todos.png",
      maps: "",
      descricao: "Para conquistar o troféu <b>Cegando o Pai de Todos</b>, é preciso abater Todos os corvos de Odin espalhados pelo mapa.",
      dicas: "<b>Vídeo com as localizações</b>",
      linkYoutube: "https://www.youtube.com/embed/lprOSEi23SM?si=Vm2OEc8LYkMmqkZS",
      criador: "By XimenesPlay",
      finish: false
    },

    {
      titulo: "Perigo nos Céus",
      img: "Material/trofeus/perigo_nos_ceus.png",
      maps: "",
      descricao: "Para conquistar o troféu <b>Perigo nos Céus</b>, você deve libertar 3 dragões, um em Veithurgard, outro na ultima missão dos anões, e o último em uma missão do Fáfnir",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/2pL3CNjzMpM?si=LIE3N_9tTzU_ALeC",
      criador: "By Andy Gamer",
      finish: false
    },

    {
      titulo: "Como Água e Óleo",
      img: "Material/trofeus/com_agua_e_oleo.png",
      maps: "",
      descricao: "Para conquistar o troféu <b>Como Água e Óleo</b>, basta completar todas as missões dos anões.",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/jZFG64MFtbk?si=e0KXjXoD0tdf_Qk9",
      criador: "By DX Geek",
      finish: false
    },

    {
      titulo: "Caminho do Zelote",
      img: "Material/trofeus/caminho_do_zelote.png",
      maps: "",
      descricao: "Para conquistar o troféu <b>Caminho do Zelote</b>, é preciso matar todos os viajantes e fabricar sua armadura com Brok ou Sindri.",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/m3mB74AnOPs?si=qOl_0tnXSASyr7Fs",
      criador: "By MenHuck",
      finish: false
    },

    {
      titulo: "Primordial",
      img: "Material/trofeus/primordial.png",
      maps: "",
      descricao: "Para conquistar o troféu <b>Primordial</b>, é preciso matar todos os Ancestrais e fabricar sua armadura com Brok ou Sindri.",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/Bpnoq6Z92VQ?si=7nxgTKIpIyizAvBC",
      criador: "By MenHuck",
      finish: false
    },

    {
      titulo: "Fogo e Enxofre",
      img: "Material/trofeus/fogo_e_enxofre.png",
      maps: "",
      descricao: "Para conquistar o troféu <b>Fogo e Enxofre</b>, é preciso completar todos os desafios de Muspelheim",
      dicas: "",
      linkYoutube: "https://www.youtube.com/embed/ZFViUFTodus?si=XGUvhSTrrs6nNWzM",
      criador: "By VictorKratos",
      finish: false
    },

  ];