import type { LocaleContent } from "../locales/types";

const ITCH_URL = "https://reine-berner.itch.io/sussuros-do-folclore";
const ITCH_EMBED =
  "https://itch.io/embed/4667217?linkback=true&bg_color=10262C&fg_color=E8DDC8&link_color=D17A2C&border_color=081418";

type Props = {
  content: LocaleContent;
};

export function ItchEmbed({ content }: Props) {
  return (
    <section id="jogar" className="section section-anchor">
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
          title="Sussuros do Folclore on itch.io"
          loading="lazy"
        >
          <a href={ITCH_URL}>Sussuros do Folclore by Berner.Dev, Ika-Rus, amayorirpg, tanalexandre, Tamir Lins</a>
        </iframe>
      </div>
      <a className="button" href={ITCH_URL} target="_blank" rel="noreferrer">
        {content.itch.fallbackLabel}
      </a>
    </section>
  );
}
