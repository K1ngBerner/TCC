import { type CSSProperties, useEffect, useRef, useState } from "react";
import type { LocaleContent } from "../locales/types";
import { SectionOrnament } from "./SectionOrnament";

type Props = {
  content: LocaleContent;
};

export function ResearchSection({ content }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.24 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pesquisa"
      className={isVisible ? "section section-anchor band section--warm-glow research-section is-visible" : "section section-anchor band section--warm-glow research-section"}
      ref={sectionRef}
    >
      <div className="research-heading">
        <h2>{content.research.title}</h2>
        <SectionOrnament />
        <p>{content.research.intro}</p>
      </div>
      <div className="research-grid">
        {content.research.cards.map((card, index) => (
          <article
            className="feature-card research-card"
            key={card.label}
            style={{ "--card-delay": `${index * 80}ms` } as CSSProperties}
          >
            <h3>{card.label}</h3>
            <p>{card.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
