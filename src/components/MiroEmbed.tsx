import type { LocaleContent } from "../locales/types";

const MIRO_URL = "https://miro.com/app/board/uXjVG1FYrG8=/";
const MIRO_EMBED_URL = "https://miro.com/app/live-embed/uXjVG1FYrG8=/?embedMode=view_only_without_ui";

type Props = {
  content: LocaleContent;
};

export function MiroEmbed({ content }: Props) {
  return (
    <section id="miro" className="section section-anchor band">
      <div className="section-heading">
        <h2>{content.miro.title}</h2>
        <p>{content.miro.description}</p>
      </div>
      <div className="embed-frame tall">
        <iframe src={MIRO_EMBED_URL} title={content.miro.title} loading="lazy" allowFullScreen />
      </div>
      <p className="embed-fallback">{content.miro.fallback}</p>
      <a className="button button-secondary" href={MIRO_URL} target="_blank" rel="noreferrer">
        {content.miro.openLabel}
      </a>
    </section>
  );
}
