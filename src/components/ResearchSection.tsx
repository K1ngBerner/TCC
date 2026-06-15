import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
};

export function ResearchSection({ content }: Props) {
  return (
    <section id="pesquisa" className="section section-anchor band">
      <div className="section-heading">
        <h2>{content.research.title}</h2>
        <p>{content.research.intro}</p>
      </div>
      <div className="research-grid">
        {content.research.cards.map((card) => (
          <article className="feature-card" key={card.label}>
            <h3>{card.label}</h3>
            <p>{card.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
