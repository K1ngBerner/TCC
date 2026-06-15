import { useEffect, useState } from "react";
import type { LocaleContent } from "../locales/types";
import { SectionOrnament } from "./SectionOrnament";

type Props = {
  content: LocaleContent;
  windActive?: boolean;
  soundEnabled?: boolean;
  onWindGesture?: () => void;
};

export function Hero({ content, windActive = false, soundEnabled = false, onWindGesture }: Props) {
  const [hasHeroImage, setHasHeroImage] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setHasHeroImage(true);
    image.onerror = () => setHasHeroImage(false);
    image.src = "/assets/images/gameplay/hero.webp";
  }, []);

  return (
    <section id="inicio" className={windActive ? "hero section-anchor is-wind-active" : "hero section-anchor"}>
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-layout">
        <div className="hero-content">
          <p className="eyebrow">{content.hero.kicker}</p>
          <img className="hero-logo" src="/assets/logo/sussurros-logo.png" alt={content.hero.title} />
          <h1>{content.hero.title}</h1>
          <p className="hero-subtitle">{content.hero.subtitle}</p>
          <p className="hero-copy">{content.hero.body}</p>
          <div className="button-row">
            <a className="button" href="#pitch">
              {content.common.watchPitch}
            </a>
            <a className="button button-secondary" href="#jogar">
              {content.common.playOrDownload}
            </a>
          </div>
        </div>

        <div className={hasHeroImage ? "hero-visual has-image" : "hero-visual"} aria-hidden="true">
          <div className="hero-visual-frame">
            {hasHeroImage ? (
              <img
                className="hero-visual-image"
                src="/assets/images/gameplay/hero.webp"
                alt=""
                loading="eager"
                decoding="async"
              />
            ) : (
              <div className="hero-visual-fallback">
                <SectionOrnament className="hero-visual-ornament" />
                <span className="hero-wind-line hero-wind-line--one" />
                <span className="hero-wind-line hero-wind-line--two" />
                <span className="hero-wind-line hero-wind-line--three" />
              </div>
            )}
          </div>
          <SectionOrnament className="hero-wind-trace" />
        </div>
      </div>
      <a
        className="hero-next"
        href="#pitch"
        aria-label={content.pitch.title}
        onClick={() => {
          if (soundEnabled) {
            onWindGesture?.();
          }
        }}
      />
    </section>
  );
}
