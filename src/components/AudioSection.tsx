import type { LocaleContent } from "../locales/types";
import { useAmbientAudio } from "../context/AudioContext";
import { WindWhirl } from "./WindWhirl";

type Props = {
  content: LocaleContent;
};

export function AudioSection({ content }: Props) {
  const { isWhirlwindPlaying, toggleWhirlwind } = useAmbientAudio();

  return (
    <section
      id="audio"
      className={
        isWhirlwindPlaying
          ? "section section--compact split-section audio-section is-playing"
          : "section section--compact split-section audio-section"
      }
    >
      <div className="section-heading compact">
        <h2>{content.audio.title}</h2>
        <p>{content.audio.intro}</p>
      </div>
      <div className="audio-panel">
        <div className="audio-whirl">
          <WindWhirl active={isWhirlwindPlaying} />
        </div>
        <div className="sound-grid">
          {content.audio.sounds.map((sound) => (
            <span key={sound}>{sound}</span>
          ))}
        </div>
        <button className="button audio-button" type="button" onClick={toggleWhirlwind} aria-pressed={isWhirlwindPlaying}>
          {isWhirlwindPlaying ? content.audio.stopWhirlwind : content.audio.listenWhirlwind}
        </button>
      </div>
    </section>
  );
}
