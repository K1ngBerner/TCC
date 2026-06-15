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
      { label: "Home", href: "#inicio" },
      { label: "Pitch", href: "#pitch" },
      { label: "Concept", href: "#conceito" },
      { label: "Research", href: "#pesquisa" },
      { label: "Development", href: "#desenvolvimento" },
      { label: "Documents", href: "#documentos" },
      { label: "Miro", href: "#miro" },
      { label: "Play", href: "#jogar" },
      { label: "Team", href: "#equipe" },
    ],
    playLabel: "Play",
    menuLabel: "Open menu",
    closeLabel: "Close menu",
  },
  common: {
    watchPitch: "Watch the pitch",
    playOrDownload: "Play or download",
    openItch: "Open project on itch.io",
    openNewTab: "Open in new tab",
    download: "Download",
    view: "View",
    languageLabel: "Select language",
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
    platformLabel: "YouTube",
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
      { label: "Miro organization", value: "Mapping references, decisions and the project flow." },
      { label: "GDD", value: "Production of the Game Design Document and system structure." },
      { label: "Art direction", value: "Definition of a stylized cartoon look with semi-realistic influence." },
      { label: "3D modeling", value: "Creation of props, furniture and character assets in Blender." },
      { label: "Texturing", value: "Materials in Substance Painter and node systems in Blender." },
      { label: "Interface", value: "Contextual cursor, visual inventory and menus in Figma." },
      { label: "Unity and C#", value: "Isometric scene, interactions, whirlwind, shaders and audio." },
      { label: "Testing and build", value: "Validation of the flow and generation of the academic build." },
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
      { label: "Rust", value: "#8C3B1E" },
      { label: "Burnt red", value: "#A3432A" },
      { label: "Dark brown", value: "#4D2E1A" },
      { label: "Ochre", value: "#C4974A" },
      { label: "Moss green", value: "#556B3C" },
      { label: "Petroleum blue", value: "#2F4F5A" },
      { label: "Smoke gray", value: "#6A6A60" },
      { label: "Aged beige", value: "#C8B89A" },
    ],
  },
  audio: {
    title: "Audio",
    intro:
      "Sound acts as a narrative index. Wind, especially, signals the Saci's presence and helps guide the player without speech.",
    sounds: ["wind", "intense wind", "whirlwind", "fire and wood", "footsteps", "creaks", "ambient sound", "bottle", "rattle", "hollow wood"],
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
  },
  team: {
    title: "Team",
    intro: "Credits documented in the project's GDD.",
    members: [
      { name: "Reinhold Gustav Berner", roles: ["pre-production", "documentation", "content direction", "pitch", "final paper"] },
      { name: "Alexandre Tan Vitor", roles: ["3D modeling"] },
      { name: "Adriano Oliveira Azevedo", roles: ["3D modeling", "animation", "painting and texturing"] },
      { name: "Victor Miguel Morales Lopes", roles: ["programming", "Unity implementation"] },
      { name: "Tamir Borges Lins dos Santos", roles: ["interface design"] },
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
  footer: {
    text: "Sussurros do Folclore. Academic project developed for the Game Design program at Universidade Anhembi Morumbi, 2026.",
    academicNotice: "Static academic project with no backend, ready for deployment.",
  },
};
