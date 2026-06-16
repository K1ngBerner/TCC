import type { LocaleContent } from "../locales/types";
import { SectionOrnament } from "./SectionOrnament";

type Props = {
  content: LocaleContent;
};

export function CreditsSection({ content }: Props) {
  const assetTitle = content.credits.externalAsset[0]?.value ?? "Medieval Props";
  const soundTitle = content.lang.startsWith("pt") ? "Cr\u00e9ditos sonoros" : "Sound credits";

  return (
    <section id="creditos" className="section section-anchor section--compact credits-section">
      <div className="external-assets-heading">
        <h2>{content.credits.title}</h2>
        <SectionOrnament className="external-assets-ornament" />
        <p>{content.credits.intro}</p>
      </div>

      <div className="external-assets-grid">
        <article className="external-assets-card">
          <h3>{assetTitle}</h3>
          <dl className="external-assets-list">
            {content.credits.externalAsset.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <a
            href="https://assetstore.unity.com/packages/3d/props/medieval-props-41540"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unity Asset Store
          </a>
        </article>

        <article className="external-assets-card">
          <h3>{soundTitle}</h3>
          <p>{content.credits.soundCredit}</p>
        </article>
      </div>
    </section>
  );
}
