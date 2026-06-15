import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
};

export function PlayerExperience({ content }: Props) {
  return (
    <section className="section section--compact split-section">
      <div className="section-heading compact">
        <h2>{content.experience.title}</h2>
        <p>{content.experience.intro}</p>
      </div>
      <div>
        <ol className="loop-list">
          {content.experience.loop.map((item, index) => (
            <li key={item}>
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
