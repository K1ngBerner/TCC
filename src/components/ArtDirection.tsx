import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
};

export function ArtDirection({ content }: Props) {
  return (
    <section className="section section--cold-glow">
      <div className="section-heading section-heading--left container">
        <h2>{content.art.title}</h2>
        <p>{content.art.intro}</p>
      </div>
      <div className="art-layout">
        <ul className="check-list">
          {content.art.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="palette-panel">
          <h3>{content.art.paletteTitle}</h3>
          <div className="palette-grid">
            {content.art.palette.map((color) => (
              <div className="swatch-row" key={color.value}>
                <span className="swatch" style={{ backgroundColor: color.value }} />
                <div>
                  <strong>{color.label}</strong>
                  <small>{color.value}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
