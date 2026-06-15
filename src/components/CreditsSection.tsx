import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
};

export function CreditsSection({ content }: Props) {
  return (
    <section id="creditos" className="section section-anchor section--compact credits-section">
      <div className="section-heading compact">
        <h2>{content.credits.title}</h2>
        <p>{content.credits.intro}</p>
      </div>
      <div className="credit-layout">
        <div className="credit-list">
          {content.credits.externalAsset.map((item) => (
            <p key={item.label}>
              <strong>{item.label}:</strong> {item.value}
            </p>
          ))}
          <a href="https://assetstore.unity.com/packages/3d/props/medieval-props-41540" target="_blank" rel="noreferrer">
            Unity Asset Store
          </a>
        </div>
        <p>{content.credits.soundCredit}</p>
      </div>
    </section>
  );
}
