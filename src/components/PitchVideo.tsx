import { useEffect, useRef, useState } from "react";
import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
};

function formatDuration(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "";
  }
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.round(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${remaining}`;
}

export function PitchVideo({ content }: Props) {
  const [active, setActive] = useState(false);
  const [duration, setDuration] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  const startPlayback = async () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.muted = true;
    await video.play().catch(() => undefined);
  };

  useEffect(() => {
    if (!active) {
      return;
    }

    window.requestAnimationFrame(() => {
      void startPlayback();
    });
  }, [active]);

  const handlePlay = async () => {
    setActive(true);
    await startPlayback();
  };

  return (
    <section id="pitch" className="section section-anchor">
      <div className="section-heading">
        <p className="eyebrow">{content.pitch.eyebrow}</p>
        <h2>{content.pitch.title}</h2>
        <p>{content.pitch.description}</p>
      </div>

      <div className={active ? "video-shell is-active" : "video-shell"}>
        <video
          ref={videoRef}
          src="/assets/video/pitch.mp4"
          poster="/assets/logo/sussurros-logo.png"
          controls={active}
          autoPlay={active}
          preload="metadata"
          playsInline
          onLoadedMetadata={(event) => setDuration(formatDuration(event.currentTarget.duration))}
        />
        {!active && (
          <button className="video-overlay" type="button" onClick={handlePlay} aria-label={content.pitch.playLabel}>
            <span className="play-symbol" aria-hidden="true" />
            <span>{content.pitch.playLabel}</span>
            <small>
              {content.pitch.durationPrefix}: {duration || content.pitch.durationUnknown}
            </small>
          </button>
        )}
      </div>
    </section>
  );
}
