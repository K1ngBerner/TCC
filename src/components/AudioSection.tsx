import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
};

export function AudioSection({ content }: Props) {
  return (
    <section className="section split-section audio-section">
      <div className="section-heading compact">
        <h2>{content.audio.title}</h2>
        <p>{content.audio.intro}</p>
      </div>
      <div className="sound-grid">
        {content.audio.sounds.map((sound) => (
          <span key={sound}>{sound}</span>
        ))}
      </div>
    </section>
  );
}
