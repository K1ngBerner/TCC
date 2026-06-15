import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
  compact?: boolean;
};

const CREATOR_URL = "https://k1ngberner.github.io/produ-o-portfolio/";

export function CreatorCredit({ content, compact = false }: Props) {
  return (
    <a
      className={compact ? "creator-credit creator-credit--compact" : "creator-credit"}
      href={CREATOR_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/assets/branding/reinhold-berner-logo.png" alt={content.creator.logoAlt} loading="lazy" />
      <span>
        <strong>{content.creator.title}</strong>
        <small>{content.creator.subtitle}</small>
      </span>
    </a>
  );
}
