import { useEffect, useMemo, useState } from "react";
import { ArtDirection } from "./components/ArtDirection";
import { AudioSection } from "./components/AudioSection";
import { CreditsSection } from "./components/CreditsSection";
import { DevelopmentTimeline } from "./components/DevelopmentTimeline";
import { DocumentsSection } from "./components/DocumentsSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ItchEmbed } from "./components/ItchEmbed";
import { MiroEmbed } from "./components/MiroEmbed";
import { NarrativeSection } from "./components/NarrativeSection";
import { PitchVideo } from "./components/PitchVideo";
import { PlayerExperience } from "./components/PlayerExperience";
import { ProjectConcept } from "./components/ProjectConcept";
import { ResearchSection } from "./components/ResearchSection";
import { TeamSection } from "./components/TeamSection";
import { en } from "./locales/en";
import { pt } from "./locales/pt";
import type { Language } from "./locales/types";

const STORAGE_KEY = "sussurros-language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "pt";
  }
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" ? "en" : "pt";
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const content = useMemo(() => (language === "en" ? en : pt), [language]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = content.lang;
    document.title = content.meta.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = content.meta.description;
    }

    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.content = content.meta.title;
    }

    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.content = content.meta.description;
    }
  }, [content, language]);

  return (
    <>
      <a className="skip-link" href="#inicio">
        Sussurros do Folclore
      </a>
      <Header content={content} language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero content={content} />
        <PitchVideo content={content} />
        <ProjectConcept content={content} />
        <ResearchSection content={content} />
        <NarrativeSection content={content} />
        <PlayerExperience content={content} />
        <DevelopmentTimeline content={content} />
        <ArtDirection content={content} />
        <AudioSection content={content} />
        <DocumentsSection content={content} />
        <MiroEmbed content={content} />
        <ItchEmbed content={content} />
        <TeamSection content={content} />
        <CreditsSection content={content} />
      </main>
      <Footer content={content} language={language} onLanguageChange={setLanguage} />
    </>
  );
}

export default App;
