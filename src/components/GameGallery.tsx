import { useEffect, useState } from "react";
import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
};

type GalleryItem = {
  src: string;
  caption: string;
};

const GAMEPLAY_SOURCES = [
  "/assets/images/gameplay/gameplay-01.webp",
  "/assets/images/gameplay/gameplay-02.webp",
  "/assets/images/gameplay/gameplay-03.webp",
  "/assets/images/gameplay/gameplay-04.webp",
  "/assets/images/gameplay/gameplay-05.webp",
  "/assets/images/gameplay/gameplay-06.webp",
];

export function GameGallery({ content }: Props) {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadImages = async () => {
      const loaded = await Promise.all(
        GAMEPLAY_SOURCES.map(
          (src, index) =>
            new Promise<GalleryItem | null>((resolve) => {
              const image = new Image();
              image.onload = () => resolve({ src, caption: content.gallery.captions[index] ?? content.gallery.title });
              image.onerror = () => resolve(null);
              image.src = src;
            }),
        ),
      );

      if (!cancelled) {
        setItems(loaded.filter(Boolean) as GalleryItem[]);
      }
    };

    void loadImages();

    return () => {
      cancelled = true;
    };
  }, [content.gallery.captions, content.gallery.title]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current === null ? current : (current + 1) % items.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current === null ? current : (current - 1 + items.length) % items.length));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("modal-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [activeIndex, items.length]);

  if (items.length === 0) {
    return null;
  }

  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <section id="galeria" className="section section-anchor gallery-section section--cold-glow">
      <div className="container">
        <div className="section-heading section-heading--left">
          <p className="eyebrow">{content.gallery.eyebrow}</p>
          <h2>{content.gallery.title}</h2>
          <p className="prose">{content.gallery.intro}</p>
        </div>
        <div className="game-gallery">
          {items.map((item, index) => (
            <button
              className="gallery-item"
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${content.gallery.openLabel}: ${item.caption}`}
            >
              <img src={item.src} alt={item.caption} loading="lazy" />
              <span>{item.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {activeItem && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.caption}
          onClick={() => setActiveIndex(null)}
        >
          <div className="gallery-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setActiveIndex(null)}>
              {content.common.close}
            </button>
            <img src={activeItem.src} alt={activeItem.caption} />
            <p>{activeItem.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
