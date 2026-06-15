import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
};

export function ProjectConcept({ content }: Props) {
  return (
    <section id="conceito" className="section section-anchor section--compact">
      <div className="section-heading">
        <h2>{content.concept.title}</h2>
        <p>{content.concept.intro}</p>
      </div>
      <div className="info-grid container">
        {content.concept.stats.map((item) => (
          <article className="info-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
