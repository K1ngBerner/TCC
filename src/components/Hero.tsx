import { type CSSProperties, useEffect, useState } from "react";
import type { LocaleContent } from "../locales/types";
import { SectionOrnament } from "./SectionOrnament";

type Props = {
  content: LocaleContent;
};

export function Hero({ content }: Props) {
  const [hasHeroImage, setHasHeroImage] = useState(false);
  const heroStyle = hasHeroImage
    ? ({ "--hero-image": 'url("/assets/images/gameplay/hero.webp")' } as CSSProperties)
    : undefined;

  useEffect(() => {
    const image = new Image();
    image.onload = () => setHasHeroImage(true);
    image.onerror = () => setHasHeroImage(false);
    image.src = "/assets/images/gameplay/hero.webp";
  }, []);

  return (
    <section id="inicio" className="hero section-anchor">
      <div className={hasHeroImage ? "hero-background has-image" : "hero-background"} style={heroStyle} aria-hidden="true">
        {!hasHeroImage && <SectionOrnament className="hero-watermark" />}
      </div>
      <div className="hero-inner">
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
      <a className="hero-next" href="#pitch" aria-label={content.pitch.title} />
    </section>
  );
}
