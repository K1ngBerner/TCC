import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
};

export function Hero({ content }: Props) {
  return (
    <section id="inicio" className="hero section-anchor">
      <div className="hero-background" aria-hidden="true" />
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
