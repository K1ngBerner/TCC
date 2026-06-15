import { useEffect, useRef, useState } from "react";
import type { LocaleContent } from "../locales/types";
import { WindWhirl } from "./WindWhirl";

type Props = {
  content: LocaleContent;
};

const whirlwindSrc = "/assets/audio/Redemoinho.mp3";

export function AudioSection({ content }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.28;

    const stopWhirlwind = () => {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    };

    const handleEnded = () => setIsPlaying(false);
    const handlePitchStart = () => stopWhirlwind();
    const handleVisibility = () => {
      if (document.hidden) {
        stopWhirlwind();
      }
    };

    audio.addEventListener("ended", handleEnded);
    window.addEventListener("sussurros:pause-audio", handlePitchStart);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      window.removeEventListener("sussurros:pause-audio", handlePitchStart);
      document.removeEventListener("visibilitychange", handleVisibility);
      stopWhirlwind();
    };
  }, []);

  const handleToggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      return;
    }

    window.dispatchEvent(new CustomEvent("sussurros:stop-whirlwind"));
    audio.currentTime = 0;
    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="audio"
      className={isPlaying ? "section section--compact split-section audio-section is-playing" : "section section--compact split-section audio-section"}
    >
      <audio ref={audioRef} className="audio-source" src={whirlwindSrc} preload="auto" />
      <div className="section-heading compact">
        <h2>{content.audio.title}</h2>
        <p>{content.audio.intro}</p>
      </div>
      <div className="audio-panel">
        <div className="audio-whirl">
          <WindWhirl active={isPlaying} />
        </div>
        <div className="sound-grid">
          {content.audio.sounds.map((sound) => (
            <span key={sound}>{sound}</span>
          ))}
        </div>
        <button className="button audio-button" type="button" onClick={handleToggle} aria-pressed={isPlaying}>
          {isPlaying ? content.audio.stopWhirlwind : content.audio.listenWhirlwind}
        </button>
      </div>
    </section>
  );
}
