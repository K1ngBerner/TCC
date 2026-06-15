import type { LocaleContent } from "./types";

export const pt: LocaleContent = {
  lang: "pt-BR",
  meta: {
    title: "Sussurros do Folclore | Game Design, Narrativa Ambiental e Folclore Brasileiro",
    description:
      "Portfólio interativo do projeto acadêmico Sussurros do Folclore, um jogo point and click sobre narrativa ambiental, semiótica visual e folclore brasileiro.",
  },
  nav: {
    items: [
      { label: "Projeto", href: "#conceito" },
      { label: "Pitch", href: "#pitch" },
      { label: "Processo", href: "#desenvolvimento" },
      { label: "Documentos", href: "#documentos" },
      { label: "Jogar", href: "#jogar" },
    ],
    playLabel: "Jogar",
    menuLabel: "Abrir menu",
    closeLabel: "Fechar menu",
    ariaLabel: "Navegação principal",
  },
  common: {
    watchPitch: "Assistir ao pitch",
    playOrDownload: "Jogar ou baixar",
    openItch: "Abrir página no itch.io",
    openNewTab: "Abrir em nova aba",
    download: "Baixar",
    view: "Visualizar",
    close: "Fechar",
    languageLabel: "Selecionar idioma",
    skipLink: "Pular para o conteúdo principal",
  },
  sound: {
    enableLabel: "Ativar atmosfera sonora",
    disableLabel: "Desativar atmosfera sonora",
    enabledLabel: "Som ambiente ativado",
    disabledLabel: "Som ambiente desativado",
  },
  hero: {
    kicker: "Projeto acadêmico de Design de Games",
    title: "Sussurros do Folclore",
    subtitle:
      "Uma experiência Point and Click de exploração e narrativa ambiental, ambientada em uma cozinha rural brasileira da década de 1960.",
    body:
      "O Saci nunca aparece diretamente. Sua presença é descoberta por meio dos rastros, objetos e alterações deixadas no ambiente.",
  },
  pitch: {
    title: "Pitch em vídeo",
    eyebrow: "Apresentação do projeto",
    description:
      "O pitch apresenta a proposta acadêmica, a atmosfera do jogo e os principais argumentos de design por trás da experiência.",
    playLabel: "Reproduzir pitch",
    platformLabel: "Vídeo hospedado no YouTube",
    openYouTubeLabel: "Abrir pitch no YouTube",
  },
  concept: {
    title: "Conceito do projeto",
    intro:
      "O jogo transforma a cozinha rural em um espaço de leitura. Em vez de explicar a narrativa por fala ou texto, o cenário convida o jogador a reconstruir a passagem do Saci pelos vestígios espalhados no ambiente.",
    stats: [
      { label: "Gênero", value: "Point and Click / Narrativa ambiental" },
      { label: "Câmera", value: "Isométrica, diagonal superior direita" },
      { label: "Ambientação", value: "Cozinha rural brasileira da década de 1960" },
      { label: "Personagem", value: "Jovem explorador" },
      { label: "Figura central", value: "Saci" },
      { label: "Duração estimada", value: "15 a 25 minutos por sessão" },
      { label: "Plataforma", value: "PC Windows" },
      { label: "Engine", value: "Unity" },
    ],
  },
  gallery: {
    title: "Galeria de gameplay",
    eyebrow: "Imagens do jogo",
    intro:
      "A galeria está preparada para receber screenshots reais do projeto, destacando a cozinha rural, a câmera isométrica, os props narrativos e os eventos ambientais.",
    openLabel: "Ampliar screenshot",
    captions: [
      "Visão geral da cozinha rural",
      "Exploração com câmera isométrica",
      "Interação com props narrativos",
      "Uso da iluminação no cenário",
      "Manifestação do redemoinho",
      "Elementos utilizados nos puzzles",
    ],
  },
  research: {
    title: "Problema, objetivo e hipótese",
    intro:
      "A pesquisa aproxima game design, semiótica visual e folclore brasileiro para investigar como um espaço interativo pode comunicar cultura sem exposição verbal direta.",
    cards: [
      {
        label: "Problema de pesquisa",
        value:
          "Como jogos digitais podem comunicar elementos culturais do folclore brasileiro sem utilizar texto ou diálogo, recorrendo à narrativa ambiental e à organização de signos visuais?",
      },
      {
        label: "Objetivo",
        value:
          "Investigar como a narrativa ambiental e a semiótica visual podem comunicar aspectos culturais do folclore brasileiro em jogos digitais.",
      },
      {
        label: "Hipótese",
        value:
          "Um cenário organizado por signos indexicais associados ao Saci pode comunicar narrativa e identidade cultural sem exposição verbal, desde que espaço, iluminação, áudio e level design orientem a interpretação do jogador.",
      },
    ],
  },
  narrative: {
    title: "Narrativa ambiental e semiótica",
    intro:
      "O projeto usa rastros, alterações e signos indexicais para sugerir acontecimentos anteriores à chegada do jogador. A leitura nasce da relação entre objeto, vestígio e interpretação.",
    flow: ["Objeto ou alteração", "Rastro visual ou sonoro", "Interpretação do jogador", "Reconstrução da narrativa"],
    examplesTitle: "Vestígios documentados",
    examples: [
      "cachimbo com fumaça",
      "pegadas de uma perna",
      "carapuça vermelha",
      "redemoinho",
      "banco derrubado",
      "peneira",
      "garrafa",
      "nós em tecidos",
      "cinzas recentes",
      "vento",
      "rangidos da casa",
    ],
    concepts: [
      "environmental storytelling",
      "arquitetura narrativa",
      "embedded narrative",
      "signos indexicais",
      "secundidade",
      "rastros e vestígios",
      "leitura do espaço",
    ],
  },
  experience: {
    title: "Experiência do jogador",
    intro:
      "O ritmo é contemplativo e investigativo. A interação serve menos como comando explícito e mais como convite para observar relações entre objetos, sons e mudanças no ambiente.",
    loop: ["Explorar", "Observar", "Interpretar", "Interagir", "Descobrir"],
    absenceTitle: "Durante a exploração, o jogo evita",
    absences: ["diálogos", "narração", "exposição verbal", "HUD tradicional", "explicações diretas da narrativa"],
  },
  development: {
    title: "Processo de desenvolvimento",
    intro:
      "A produção combinou pesquisa acadêmica, prototipação, documentação, criação visual e implementação técnica para validar a proposta em um executável jogável.",
    steps: [
      { label: "Pesquisa e ideação", value: "Definição do problema, folclore, narrativa ambiental e semiótica visual." },
      { label: "Miro", value: "Mapeamento de referências, decisões e fluxo do projeto." },
      { label: "Game Design Document", value: "Produção do GDD e estruturação dos sistemas." },
      { label: "Direção de arte", value: "Definição do visual cartoon estilizado com influência semi-realista." },
      { label: "Modelagem 3D", value: "Criação de props, mobiliário e personagem no Blender." },
      { label: "Texturização", value: "Materiais no Substance Painter e sistemas de nodes no Blender." },
      { label: "Interface", value: "Cursor contextual, inventário visual e menus no Figma." },
      { label: "Programação", value: "Implementação das interações, eventos e fluxo jogável na Unity com C#." },
      { label: "Shaders", value: "Ajustes visuais e Toon Shader para aproximar a cena da direção artística." },
      { label: "Áudio", value: "Integração de vento, redemoinho e sons ambientais como pistas narrativas." },
      { label: "Testes", value: "Validação do fluxo, interações e leitura dos sinais ambientais." },
      { label: "Build final", value: "Geração da build acadêmica jogável." },
    ],
  },
  art: {
    title: "Direção de arte",
    intro:
      "A estética combina rusticidade, mistério e leitura visual clara. Elementos narrativos usam cores mais quentes, enquanto o preenchimento ambiental permanece dessaturado para orientar a atenção.",
    bullets: [
      "cartoon estilizado com influências semi-realistas",
      "cozinha rural brasileira como espaço central",
      "paleta quente para elementos narrativos",
      "paleta dessaturada para preenchimento ambiental",
      "iluminação quente do fogão como orientação",
      "áreas de sombra como recurso de mistério",
      "Toon Shader desenvolvido para aproximar o jogo da estética proposta",
    ],
    paletteTitle: "Paleta documentada",
    palette: [
      { label: "Ferrugem", value: "#8C3B1E", description: "Pontos narrativos e elementos de destaque" },
      { label: "Vermelho queimado", value: "#A3432A", description: "Presença do redemoinho e tensão visual" },
      { label: "Marrom escuro", value: "#4D2E1A", description: "Madeira, mobiliário e base rústica" },
      { label: "Ocre", value: "#C4974A", description: "Calor da lamparina, fogão e detalhes de leitura" },
      { label: "Verde musgo", value: "#556B3C", description: "Materiais envelhecidos e relação com o rural" },
      { label: "Azul petróleo", value: "#2F4F5A", description: "Sombras frias e mistério ambiental" },
      { label: "Cinza fumaça", value: "#6A6A60", description: "Poeira, cinzas e atmosfera suspensa" },
      { label: "Bege envelhecido", value: "#C8B89A", description: "Texto, contraste e superfícies gastas" },
    ],
  },
  audio: {
    title: "Design de áudio",
    intro:
      "O som funciona como índice narrativo. O vento, em especial, sinaliza a presença do Saci e ajuda a orientar o jogador sem recorrer à fala.",
    sounds: ["vento", "vento intenso", "redemoinho", "fogo e lenha", "passos", "rangidos", "som ambiente", "garrafa", "chocalho", "madeira oca"],
    listenWhirlwind: "Ouvir o redemoinho",
    stopWhirlwind: "Parar o redemoinho",
  },
  documents: {
    title: "Documentos acadêmicos",
    intro:
      "Os documentos originais em português permanecem como referência principal. As versões em inglês foram geradas para apresentação profissional de portfólio e acessibilidade internacional.",
    disclaimerTitle: "Aviso sobre as versões em inglês",
    disclaimer:
      "As traduções em inglês foram criadas exclusivamente para portfólio profissional. Em caso de divergência, os documentos originais em português devem ser considerados a versão autoritativa.",
    viewerTitle: "Visualizador",
    choosePrompt: "Escolha um documento para visualizar nesta página.",
    closeViewer: "Fechar visualizador",
    documents: [
      {
        title: "Trabalho de Conclusão de Curso",
        description: "Parte escrita da pesquisa sobre narrativa ambiental, semiótica visual e folclore brasileiro.",
        language: "Português",
        kind: "tcc",
        primaryHref: "/assets/docs/pt/TCC_parte_escrita.pdf",
        alternateHref: "/assets/docs/en/TCC_Written_EN.pdf",
        primaryLabel: "Original em português",
        alternateLabel: "Tradução em inglês",
      },
      {
        title: "Game Design Document",
        description: "Documento de design com conceito, gameplay, arte, áudio, equipe, processo e assets externos.",
        language: "Português",
        kind: "gdd",
        primaryHref: "/assets/docs/pt/GDD_Sussurros.pdf",
        alternateHref: "/assets/docs/en/GDD_Sussurros_EN.pdf",
        primaryLabel: "Original em português",
        alternateLabel: "Tradução em inglês",
      },
    ],
  },
  miro: {
    title: "Miro do projeto",
    description:
      "Board usado para reunir referências, decisões, documentação visual e organização do processo de desenvolvimento.",
    openLabel: "Abrir Miro em nova aba",
    fallback:
      "Não foi possível carregar o board interativo nesta página. Abra o Miro em uma nova aba para visualizar o processo completo.",
  },
  itch: {
    title: "Jogar e baixar",
    description:
      "A integração oficial do itch.io é o principal caminho para acessar a página do projeto e baixar a build.",
    fallbackLabel: "Abrir página no itch.io",
    downloadTitle: "Como baixar e jogar",
    downloadSteps: [
      "Faça o download do arquivo .rar.",
      "Descompacte todo o conteúdo utilizando WinRAR, 7-Zip ou aplicativo compatível.",
      "Abra a pasta extraída.",
      "Execute o arquivo Sussurros do Folclore.",
    ],
    warning: "Não execute o jogo diretamente de dentro do arquivo compactado.",
    controlsTitle: "Controles",
    controls: [
      { label: "Clique esquerdo", value: "movimentar o personagem" },
      { label: "Clique direito", value: "pegar e posicionar itens" },
      { label: "Tecla E", value: "interagir com a lamparina" },
    ],
  },
  team: {
    title: "Equipe",
    intro: "Créditos documentados no GDD do projeto.",
    linkedinLabel: "Abrir perfil no LinkedIn",
    members: [
      {
        name: "Reinhold Gustav Berner",
        roles: ["pré-produção", "documentação", "direção de conteúdo", "pitch", "TCC"],
        linkedin: "https://www.linkedin.com/in/reineberner/",
      },
      { name: "Alexandre Tan Vitor", roles: ["modelagem 3D"], linkedin: "https://www.linkedin.com/in/alexandre-tan-vitor-a979173ab/" },
      {
        name: "Adriano Oliveira Azevedo",
        roles: ["modelagem 3D", "animação", "pintura e texturização"],
        linkedin: "https://www.linkedin.com/in/adriano-oliveira-azevedo-414828a4",
      },
      {
        name: "Victor Miguel Morales Lopes",
        roles: ["programação", "implementação na Unity"],
        linkedin: "https://www.linkedin.com/in/victor-lopes19/",
      },
      { name: "Tamir Borges Lins dos Santos", roles: ["design de interface"], linkedin: "https://www.linkedin.com/in/tamir-lins-57187b231/" },
    ],
  },
  credits: {
    title: "Assets externos e créditos",
    intro: "Créditos de apoio documentados nos materiais do projeto.",
    externalAsset: [
      { label: "Asset", value: "Medieval Props" },
      { label: "Autor", value: "Lukas Bobor" },
      { label: "Origem", value: "Unity Asset Store" },
      { label: "Aplicação", value: "Apoio na composição de props do cenário" },
    ],
    soundCredit:
      "Os efeitos sonoros documentados foram obtidos a partir de conteúdos disponibilizados na Pixabay, com créditos detalhados nos documentos do projeto.",
  },
  creator: {
    title: "Design e desenvolvimento do portfólio por Reinhold Berner",
    subtitle: "Game Design • UX • Frontend • Produção Multimídia",
    logoAlt: "Logo profissional de Reinhold Berner",
  },
  footer: {
    text: "Sussurros do Folclore. Projeto acadêmico desenvolvido para o curso de Design de Games da Universidade Anhembi Morumbi, 2026.",
    academicNotice: "Projeto acadêmico sem backend, pronto para deploy estático.",
    projectTitle: "Projeto acadêmico",
    navigationTitle: "Navegação",
    creatorTitle: "Portfólio",
    creatorCredit: "Portfólio desenvolvido por Reinhold Berner",
    creatorLinkLabel: "Abrir portfólio profissional",
    links: [
      { label: "Pitch", href: "#pitch" },
      { label: "Projeto", href: "#conceito" },
      { label: "Processo", href: "#desenvolvimento" },
      { label: "Documentos", href: "#documentos" },
      { label: "Miro", href: "#miro" },
      { label: "itch.io", href: "https://reine-berner.itch.io/sussuros-do-folclore", external: true },
      { label: "Equipe", href: "#equipe" },
      { label: "Créditos", href: "#creditos" },
    ],
  },
};
