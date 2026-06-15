import { type CSSProperties } from "react";
import type { LocaleContent } from "../locales/types";
import { useInView } from "../hooks/useInView";

type Props = {
  content: LocaleContent;
};

export function PlayerExperience({ content }: Props) {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.28 });

  return (
    <section ref={ref} className={isInView ? "section section--compact split-section experience-section is-visible" : "section section--compact split-section experience-section"}>
      <div className="section-heading compact">
        <h2>{content.experience.title}</h2>
        <p>{content.experience.intro}</p>
      </div>
      <div>
        <ol className="loop-list">
          {content.experience.loop.map((item, index) => (
            <li key={item} style={{ "--flow-delay": `${index * 80}ms` } as CSSProperties}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ol>
        <div className="absence-box">
          <h3>{content.experience.absenceTitle}</h3>
          <ul>
            {content.experience.absences.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
