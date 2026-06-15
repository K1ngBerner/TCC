import { useState } from "react";
import type { LocaleContent } from "../locales/types";
import { SectionOrnament } from "./SectionOrnament";

type Props = {
  content: LocaleContent;
};

const YOUTUBE_ID = "EGgUVjrqLt4";
const YOUTUBE_URL = `https://www.youtube.com/watch?v=${YOUTUBE_ID}`;
const YOUTUBE_EMBED_URL = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`;
const YOUTUBE_POSTER = `https://i.ytimg.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`;
const YOUTUBE_POSTER_FALLBACK = `https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`;

export function PitchVideo({ content }: Props) {
  const [active, setActive] = useState(false);
  const [posterSrc, setPosterSrc] = useState(YOUTUBE_POSTER);
  const handlePlay = () => {
    window.dispatchEvent(new CustomEvent("sussurros:pause-audio"));
    document.querySelectorAll("audio").forEach((audio) => audio.pause());
    setActive(true);
  };

  return (
    <section id="pitch" className="section section-anchor">
      <div className="section-heading">
        <p className="eyebrow">{content.pitch.eyebrow}</p>
        <h2>{content.pitch.title}</h2>
        <SectionOrnament />
        <p>{content.pitch.description}</p>
      </div>

      <div className={active ? "video-shell is-active" : "video-shell"}>
        {active ? (
          <iframe
            src={YOUTUBE_EMBED_URL}
            title={content.pitch.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <>
            <img
              className="youtube-poster"
              src={posterSrc}
              alt=""
              loading="lazy"
              onError={() => setPosterSrc(YOUTUBE_POSTER_FALLBACK)}
            />
            <button
              className="video-overlay"
              type="button"
              onClick={handlePlay}
              aria-label={content.pitch.playLabel}
            >
              <span className="video-overlay-content">
                <span className="play-symbol" aria-hidden="true" />
                <span className="video-play-label">{content.pitch.playLabel}</span>
                <small>{content.pitch.platformLabel}</small>
              </span>
            </button>
          </>
        )}
      </div>
      <p className="video-fallback">
        <a href={YOUTUBE_URL} target="_blank" rel="noreferrer">
          {content.pitch.openYouTubeLabel}
        </a>
      </p>
    </section>
  );
}
