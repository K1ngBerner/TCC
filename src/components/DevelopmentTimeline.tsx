import { type CSSProperties } from "react";
import type { LocaleContent } from "../locales/types";
import { useInView } from "../hooks/useInView";

type Props = {
  content: LocaleContent;
};

export function DevelopmentTimeline({ content }: Props) {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.14 });

  return (
    <section
      id="desenvolvimento"
      ref={ref}
      className={isInView ? "section section-anchor band section--warm-glow development-section is-visible" : "section section-anchor band section--warm-glow development-section"}
    >
      <div className="section-heading section-heading--left container">
        <h2>{content.development.title}</h2>
        <p>{content.development.intro}</p>
      </div>
      <ol className="timeline">
        {content.development.steps.map((step, index) => (
          <li key={step.label} style={{ "--step-delay": `${Math.min(index * 55, 440)}ms` } as CSSProperties}>
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
