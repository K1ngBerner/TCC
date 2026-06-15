import type { LocaleContent } from "../locales/types";

const ITCH_URL = "https://reine-berner.itch.io/sussuros-do-folclore";
const ITCH_EMBED =
  "https://itch.io/embed/4667217?linkback=true&bg_color=10262C&fg_color=E8DDC8&link_color=D17A2C&border_color=081418";

type Props = {
  content: LocaleContent;
};

export function ItchEmbed({ content }: Props) {
  return (
    <section id="jogar" className="section section-anchor section--warm-glow">
      <div className="section-heading">
        <h2>{content.itch.title}</h2>
        <p>{content.itch.description}</p>
      </div>
      <div className="itch-wrap">
        <iframe
          frameBorder="0"
          src={ITCH_EMBED}
          width="552"
          height="167"
          title="Sussurros do Folclore on itch.io"
          loading="lazy"
        >
          <a href={ITCH_URL}>Sussurros do Folclore by Berner.Dev, Ika-Rus, amayorirpg, tanalexandre, Tamir Lins</a>
        </iframe>
      </div>
      <div className="embed-actions">
        <a className="button" href={ITCH_URL} target="_blank" rel="noreferrer">
          {content.itch.fallbackLabel}
        </a>
      </div>
      <div className="itch-guide">
        <div>
          <h3>{content.itch.downloadTitle}</h3>
          <ol>
            {content.itch.downloadSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p>{content.itch.warning}</p>
        </div>
        <div>
          <h3>{content.itch.controlsTitle}</h3>
          <dl>
            {content.itch.controls.map((control) => (
              <div key={control.label}>
                <dt>{control.label}</dt>
                <dd>{control.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
