import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
  windActive?: boolean;
  soundEnabled?: boolean;
  onWindGesture?: () => void;
};

export function Hero({ content, windActive = false, soundEnabled = false, onWindGesture }: Props) {
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

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-frame hero-visual-panel">
            <div className="hero-visual-fallback">
              <img
                className={windActive ? "hero-whirlwind is-audio-activating" : "hero-whirlwind"}
                src="/assets/logo/saci-whirlwind.png?v=2"
                alt=""
                loading="eager"
                decoding="async"
                draggable={false}
              />
              <span className="hero-wind-line hero-wind-line--one" />
              <span className="hero-wind-line hero-wind-line--two" />
              <span className="hero-wind-line hero-wind-line--three" />
            </div>
          </div>
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
