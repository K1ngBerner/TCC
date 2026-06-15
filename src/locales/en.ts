import type { LocaleContent } from "./types";

export const en: LocaleContent = {
  lang: "en",
  meta: {
    title: "Sussurros do Folclore | Game Design, Environmental Storytelling and Brazilian Folklore",
    description:
      "Interactive portfolio for Sussurros do Folclore, an academic point and click game about environmental storytelling, visual semiotics and Brazilian folklore.",
  },
  nav: {
    items: [
      { label: "Project", href: "#conceito" },
      { label: "Pitch", href: "#pitch" },
      { label: "Process", href: "#desenvolvimento" },
      { label: "Documents", href: "#documentos" },
      { label: "Play", href: "#jogar" },
    ],
    playLabel: "Play",
    menuLabel: "Open menu",
    closeLabel: "Close menu",
    ariaLabel: "Primary navigation",
  },
  common: {
    watchPitch: "Watch the pitch",
    playOrDownload: "Play or download",
    openItch: "Open project on itch.io",
    openNewTab: "Open in new tab",
    download: "Download",
    view: "View",
    close: "Close",
    languageLabel: "Select language",
    skipLink: "Skip to main content",
  },
  sound: {
    enableLabel: "Enable ambient sound",
    disableLabel: "Disable ambient sound",
    enabledLabel: "Ambient sound enabled",
    disabledLabel: "Ambient sound disabled",
  },
  hero: {
    kicker: "Academic Game Design project",
    title: "Sussurros do Folclore",
    subtitle:
      "A Point and Click exploration and environmental storytelling experience set in a Brazilian rural kitchen in the 1960s.",
    body:
      "The Saci never appears directly. His presence is discovered through traces, objects and changes left throughout the environment.",
  },
  pitch: {
    title: "Video pitch",
    eyebrow: "Project presentation",
    description:
      "The pitch introduces the academic proposal, the atmosphere of the game and the main design arguments behind the experience.",
    playLabel: "Play pitch",
    platformLabel: "Video hosted on YouTube",
    openYouTubeLabel: "Open pitch on YouTube",
  },
  concept: {
    title: "Project concept",
    intro:
      "The game turns the rural kitchen into a readable space. Instead of explaining the story through dialogue or text, the scene invites players to reconstruct the Saci's passage through environmental traces.",
    stats: [
      { label: "Genre", value: "Point and Click / Environmental storytelling" },
      { label: "Camera", value: "Isometric, upper-right diagonal" },
      { label: "Setting", value: "Brazilian rural kitchen in the 1960s" },
      { label: "Character", value: "Young explorer" },
      { label: "Central figure", value: "Saci" },
      { label: "Duration", value: "15 to 25 minutes per session" },
      { label: "Platform", value: "PC Windows" },
      { label: "Engine", value: "Unity" },
    ],
  },
  gallery: {
    title: "Gameplay gallery",
    eyebrow: "Game images",
    intro:
      "The gallery is ready to receive real project screenshots, highlighting the rural kitchen, isometric camera, narrative props and environmental events.",
    openLabel: "Open screenshot",
    captions: [
      "Overview of the rural kitchen",
      "Exploration with an isometric camera",
      "Interaction with narrative props",
      "Use of lighting in the environment",
      "Whirlwind manifestation",
      "Elements used in the puzzles",
    ],
  },
  research: {
    title: "Problem, objective and hypothesis",
    intro:
      "The research connects game design, visual semiotics and Brazilian folklore to investigate how an interactive space can communicate culture without direct verbal exposition.",
    cards: [
      {
        label: "Research problem",
        value:
          "How can digital games communicate cultural elements of Brazilian folklore without using text or dialogue, relying on environmental storytelling and the organization of visual signs?",
      },
      {
        label: "Objective",
        value:
          "To investigate how environmental storytelling and visual semiotics can communicate cultural aspects of Brazilian folklore in digital games.",
      },
      {
        label: "Hypothesis",
        value:
          "A setting organized through indexical signs associated with the Saci can communicate narrative and cultural identity without verbal exposition, as long as space, lighting, audio and level design guide player interpretation.",
      },
    ],
  },
  narrative: {
    title: "Environmental storytelling and semiotics",
    intro:
      "The project uses traces, changes and indexical signs to suggest events that happened before the player arrived. Meaning emerges from the relationship between object, evidence and interpretation.",
    flow: ["Object or change", "Visual or sonic trace", "Player interpretation", "Narrative reconstruction"],
    examplesTitle: "Documented traces",
    examples: [
      "smoking pipe",
      "one-legged footprints",
      "red cap",
      "whirlwind",
      "fallen stool",
      "sieve",
      "bottle",
      "knots in fabric",
      "recent ashes",
      "wind",
      "house creaks",
    ],
    concepts: [
      "environmental storytelling",
      "narrative architecture",
      "embedded narrative",
      "indexical signs",
      "secondness",
      "traces and evidence",
      "spatial reading",
    ],
  },
  experience: {
    title: "Player experience",
    intro:
      "The pace is contemplative and investigative. Interaction works less as an explicit command and more as an invitation to observe relationships between objects, sounds and environmental changes.",
    loop: ["Explore", "Observe", "Interpret", "Interact", "Discover"],
    absenceTitle: "During exploration, the game avoids",
    absences: ["dialogue", "narration", "verbal exposition", "traditional HUD", "direct narrative explanations"],
  },
  development: {
    title: "Development process",
    intro:
      "Production combined academic research, prototyping, documentation, visual creation and technical implementation to validate the proposal in a playable build.",
    steps: [
      { label: "Research and ideation", value: "Definition of the problem, folklore, environmental storytelling and visual semiotics." },
      { label: "Miro", value: "Mapping references, decisions and the project flow." },
      { label: "Game Design Document", value: "Production of the GDD and system structure." },
      { label: "Art direction", value: "Definition of a stylized cartoon look with semi-realistic influence." },
      { label: "3D modeling", value: "Creation of props, furniture and character assets in Blender." },
      { label: "Texturing", value: "Materials in Substance Painter and node systems in Blender." },
      { label: "Interface", value: "Contextual cursor, visual inventory and menus in Figma." },
      { label: "Programming", value: "Implementation of interactions, events and playable flow in Unity with C#." },
      { label: "Shaders", value: "Visual adjustments and Toon Shader to bring the scene closer to the art direction." },
      { label: "Audio", value: "Integration of wind, whirlwind and environmental sounds as narrative cues." },
      { label: "Testing", value: "Validation of flow, interactions and readability of environmental signs." },
      { label: "Final build", value: "Generation of the playable academic build." },
    ],
  },
  art: {
    title: "Art direction",
    intro:
      "The visual direction combines rusticity, mystery and clear visual reading. Narrative elements use warmer colors, while environmental fill remains desaturated to guide attention.",
    bullets: [
      "stylized cartoon look with semi-realistic influences",
      "Brazilian rural kitchen as the central space",
      "warm palette for narrative elements",
      "desaturated palette for environmental fill",
      "warm stove light as visual guidance",
      "shadow areas as a mystery device",
      "Toon Shader developed to bring the game closer to the proposed aesthetic",
    ],
    paletteTitle: "Documented palette",
    palette: [
      { label: "Rust", value: "#8C3B1E", description: "Narrative points and highlighted elements" },
      { label: "Burnt red", value: "#A3432A", description: "Whirlwind presence and visual tension" },
      { label: "Dark brown", value: "#4D2E1A", description: "Wood, furniture and rustic foundation" },
      { label: "Ochre", value: "#C4974A", description: "Lamp warmth, stove light and readable details" },
      { label: "Moss green", value: "#556B3C", description: "Aged materials and rural references" },
      { label: "Petroleum blue", value: "#2F4F5A", description: "Cool shadows and environmental mystery" },
      { label: "Smoke gray", value: "#6A6A60", description: "Dust, ashes and suspended atmosphere" },
      { label: "Aged beige", value: "#C8B89A", description: "Text, contrast and worn surfaces" },
    ],
  },
  audio: {
    title: "Audio design",
    intro:
      "Sound acts as a narrative index. Wind, especially, signals the Saci's presence and helps guide the player without speech.",
    sounds: ["wind", "intense wind", "whirlwind", "fire and wood", "footsteps", "creaks", "ambient sound", "bottle", "rattle", "hollow wood"],
    listenWhirlwind: "Listen to the whirlwind",
    stopWhirlwind: "Stop the whirlwind",
  },
  documents: {
    title: "Academic documents",
    intro:
      "The original Portuguese documents remain the primary reference. English versions were generated for professional portfolio presentation and international accessibility.",
    disclaimerTitle: "English-version disclaimer",
    disclaimer:
      "Professional Portfolio Translation. This English version was created exclusively for professional portfolio presentation and international accessibility. The project, research, design process, development, and original academic documentation were conceived and produced in Portuguese. In case of any discrepancy, the original Portuguese version should be considered the authoritative document.",
    viewerTitle: "Viewer",
    choosePrompt: "Choose a document to view on this page.",
    closeViewer: "Close viewer",
    documents: [
      {
        title: "Written Final Paper",
        description: "Written research on environmental storytelling, visual semiotics and Brazilian folklore.",
        language: "English portfolio translation",
        kind: "tcc",
        primaryHref: "/assets/docs/en/TCC_Written_EN.pdf",
        alternateHref: "/assets/docs/pt/TCC_parte_escrita.pdf",
        primaryLabel: "English portfolio translation",
        alternateLabel: "Original in Portuguese",
      },
      {
        title: "Game Design Document",
        description: "Design document with concept, gameplay, art, audio, team, process and external assets.",
        language: "English portfolio translation",
        kind: "gdd",
        primaryHref: "/assets/docs/en/GDD_Sussurros_EN.pdf",
        alternateHref: "/assets/docs/pt/GDD_Sussurros.pdf",
        primaryLabel: "English portfolio translation",
        alternateLabel: "Original in Portuguese",
      },
    ],
  },
  miro: {
    title: "Project Miro Board",
    description:
      "Board used to gather references, decisions, visual documentation and development process organization.",
    openLabel: "Open Miro board in a new tab",
    fallback:
      "The interactive board could not be loaded on this page. Open the Miro board in a new tab to view the complete process.",
  },
  itch: {
    title: "Play and download",
    description:
      "The official itch.io embed is the primary path to access the project page and download the build.",
    fallbackLabel: "Open project on itch.io",
    downloadTitle: "How to download and play",
    downloadSteps: [
      "Download the .rar file.",
      "Extract all contents using WinRAR, 7-Zip or a compatible app.",
      "Open the extracted folder.",
      "Run the Sussurros do Folclore executable.",
    ],
    warning: "Do not run the game directly from inside the compressed file.",
    controlsTitle: "Controls",
    controls: [
      { label: "Left click", value: "move the character" },
      { label: "Right click", value: "pick up and place items" },
      { label: "E key", value: "interact with the lamp" },
    ],
  },
  team: {
    title: "Team",
    intro: "Credits documented in the project's GDD.",
    linkedinLabel: "Open LinkedIn profile",
    members: [
      {
        name: "Reinhold Gustav Berner",
        roles: ["pre-production", "documentation", "content direction", "pitch", "final paper"],
        linkedin: "https://www.linkedin.com/in/reineberner/",
      },
      { name: "Alexandre Tan Vitor", roles: ["3D modeling"], linkedin: "https://www.linkedin.com/in/alexandre-tan-vitor-a979173ab/" },
      {
        name: "Adriano Oliveira Azevedo",
        roles: ["3D modeling", "animation", "painting and texturing"],
        linkedin: "https://www.linkedin.com/in/adriano-oliveira-azevedo-414828a4",
      },
      {
        name: "Victor Miguel Morales Lopes",
        roles: ["programming", "Unity implementation"],
        linkedin: "https://www.linkedin.com/in/victor-lopes19/",
      },
      { name: "Tamir Borges Lins dos Santos", roles: ["interface design"], linkedin: "https://www.linkedin.com/in/tamir-lins-57187b231/" },
    ],
  },
  credits: {
    title: "External assets and credits",
    intro: "Support credits documented in the project materials.",
    externalAsset: [
      { label: "Asset", value: "Medieval Props" },
      { label: "Author", value: "Lukas Bobor" },
      { label: "Source", value: "Unity Asset Store" },
      { label: "Use", value: "Support for composing scenario props" },
    ],
    soundCredit:
      "The documented sound effects were obtained from content available on Pixabay, with detailed credits in the project documents.",
  },
  creator: {
    title: "Portfolio design and development by Reinhold Berner",
    subtitle: "Game Design • UX • Frontend • Multimedia Production",
    logoAlt: "Reinhold Berner professional logo",
  },
  footer: {
    text: "Sussurros do Folclore. Academic project developed for the Game Design program at Universidade Anhembi Morumbi, 2026.",
    academicNotice: "Static academic project with no backend, ready for deployment.",
    projectTitle: "Academic project",
    navigationTitle: "Navigation",
    creatorTitle: "Portfolio",
    creatorCredit: "Portfolio developed by Reinhold Berner",
    creatorLinkLabel: "Open professional portfolio",
    links: [
      { label: "Pitch", href: "#pitch" },
      { label: "Project", href: "#conceito" },
      { label: "Process", href: "#desenvolvimento" },
      { label: "Documents", href: "#documentos" },
      { label: "Miro", href: "#miro" },
      { label: "itch.io", href: "https://reine-berner.itch.io/sussuros-do-folclore", external: true },
      { label: "Team", href: "#equipe" },
      { label: "Credits", href: "#creditos" },
    ],
  },
};
