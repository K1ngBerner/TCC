import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
};

export function DevelopmentTimeline({ content }: Props) {
  return (
    <section id="desenvolvimento" className="section section-anchor band">
      <div className="section-heading">
        <h2>{content.development.title}</h2>
        <p>{content.development.intro}</p>
      </div>
      <ol className="timeline">
        {content.development.steps.map((step, index) => (
          <li key={step.label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{step.label}</h3>
              <p>{step.value}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
