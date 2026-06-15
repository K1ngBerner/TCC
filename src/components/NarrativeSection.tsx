import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
};

export function NarrativeSection({ content }: Props) {
  return (
    <section className="section">
      <div className="section-heading">
        <h2>{content.narrative.title}</h2>
        <p>{content.narrative.intro}</p>
      </div>
      <div className="narrative-layout">
        <ol className="reasoning-flow" aria-label={content.narrative.title}>
          {content.narrative.flow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="tag-panel">
          <h3>{content.narrative.examplesTitle}</h3>
          <div className="tag-list">
            {content.narrative.examples.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="concept-strip" aria-label={content.narrative.title}>
        {content.narrative.concepts.map((concept) => (
          <span key={concept}>{concept}</span>
        ))}
      </div>
    </section>
  );
}
