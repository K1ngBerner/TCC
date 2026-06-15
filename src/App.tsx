import { useEffect, useMemo, useState } from "react";
import { ArtDirection } from "./components/ArtDirection";
import { AudioSection } from "./components/AudioSection";
import { CreditsSection } from "./components/CreditsSection";
import { CreatorCredit } from "./components/CreatorCredit";
import { DevelopmentTimeline } from "./components/DevelopmentTimeline";
import { DocumentsSection } from "./components/DocumentsSection";
import { Footer } from "./components/Footer";
import { GameGallery } from "./components/GameGallery";
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
import { useAmbientWind } from "./hooks/useAmbientWind";
import { en } from "./locales/en";
import { pt } from "./locales/pt";
import type { Language } from "./locales/types";

const STORAGE_KEY = "sussurros-language";
const SITE_URL = "https://sussurosdofolclore.netlify.app/";
const OG_IMAGE = "/assets/images/og-image.png";

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
  const { enabled: soundEnabled, burstActive, toggleSound, playWindBurst } = useAmbientWind();

  useEffect(() => {
    const upsertMeta = (selector: string, attribute: "content" | "href", value: string, create?: () => HTMLMetaElement | HTMLLinkElement) => {
      const current = document.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
      if (current) {
        current.setAttribute(attribute, value);
        return;
      }
      const next = create?.();
      if (next) {
        next.setAttribute(attribute, value);
        document.head.appendChild(next);
      }
    };

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

    const ogImage = document.querySelector<HTMLMetaElement>('meta[property="og:image"]');
    if (ogImage) {
      ogImage.content = OG_IMAGE;
    }

    upsertMeta('meta[property="og:url"]', "content", SITE_URL, () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:url");
      return meta;
    });
    upsertMeta('meta[name="twitter:card"]', "content", "summary_large_image", () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "twitter:card");
      return meta;
    });
    upsertMeta('meta[name="twitter:title"]', "content", content.meta.title, () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "twitter:title");
      return meta;
    });
    upsertMeta('meta[name="twitter:description"]', "content", content.meta.description, () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "twitter:description");
      return meta;
    });
    upsertMeta('meta[name="twitter:image"]', "content", OG_IMAGE, () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "twitter:image");
      return meta;
    });
    upsertMeta('link[rel="canonical"]', "href", SITE_URL, () => {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      return link;
    });
  }, [content, language]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {content.common.skipLink}
      </a>
      <Header
        content={content}
        language={language}
        onLanguageChange={setLanguage}
        soundEnabled={soundEnabled}
        onSoundToggle={toggleSound}
      />
      <main id="main-content">
        <Hero content={content} windActive={burstActive} soundEnabled={soundEnabled} onWindGesture={playWindBurst} />
        <PitchVideo content={content} />
        <GameGallery content={content} />
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
        <section className="section section--compact creator-section">
          <div className="container">
            <CreatorCredit content={content} compact />
          </div>
        </section>
      </main>
      <Footer content={content} />
    </>
  );
}

export default App;
