export type Language = "pt" | "en";

export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type DocumentInfo = {
  title: string;
  description: string;
  language: string;
  kind: "tcc" | "gdd";
  primaryHref: string;
  alternateHref: string;
  primaryLabel: string;
  alternateLabel: string;
};

export type TeamMember = {
  name: string;
  roles: string[];
};

export type LocaleContent = {
  lang: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    items: NavItem[];
    playLabel: string;
    menuLabel: string;
    closeLabel: string;
  };
  common: {
    watchPitch: string;
    playOrDownload: string;
    openItch: string;
    openNewTab: string;
    download: string;
    view: string;
    languageLabel: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    body: string;
  };
  pitch: {
    title: string;
    eyebrow: string;
    description: string;
    playLabel: string;
    durationPrefix: string;
    durationUnknown: string;
  };
  concept: {
    title: string;
    intro: string;
    stats: StatItem[];
  };
  research: {
    title: string;
    intro: string;
    cards: StatItem[];
  };
  narrative: {
    title: string;
    intro: string;
    flow: string[];
    examplesTitle: string;
    examples: string[];
    concepts: string[];
  };
  experience: {
    title: string;
    intro: string;
    loop: string[];
    absenceTitle: string;
    absences: string[];
  };
  development: {
    title: string;
    intro: string;
    steps: StatItem[];
  };
  art: {
    title: string;
    intro: string;
    bullets: string[];
    paletteTitle: string;
    palette: StatItem[];
  };
  audio: {
    title: string;
    intro: string;
    sounds: string[];
  };
  documents: {
    title: string;
    intro: string;
    disclaimerTitle: string;
    disclaimer: string;
    viewerTitle: string;
    choosePrompt: string;
    documents: DocumentInfo[];
  };
  miro: {
    title: string;
    description: string;
    openLabel: string;
    fallback: string;
  };
  itch: {
    title: string;
    description: string;
    fallbackLabel: string;
  };
  team: {
    title: string;
    intro: string;
    members: TeamMember[];
  };
  credits: {
    title: string;
    intro: string;
    externalAsset: StatItem[];
    soundCredit: string;
  };
  footer: {
    text: string;
    academicNotice: string;
  };
};
