import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
};

const CREATOR_URL = "https://k1ngberner.github.io/produ-o-portfolio/";

export function Footer({ content }: Props) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-project">
          <img src="/assets/logo/sussurros-logo.png" alt="Sussurros do Folclore" />
          <h2>{content.footer.projectTitle}</h2>
          <p>{content.footer.text}</p>
          <p>{content.footer.academicNotice}</p>
        </div>

        <nav className="footer-nav" aria-label={content.footer.navigationTitle}>
          <h2>{content.footer.navigationTitle}</h2>
          {content.footer.links.map((link) => (
            <a
              key={`${link.href}-${link.label}`}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-creator">
          <h2>{content.footer.creatorTitle}</h2>
          <a className="footer-creator-link" href={CREATOR_URL} target="_blank" rel="noopener noreferrer">
            <img src="/assets/branding/reinhold-berner-logo.png" alt={content.creator.logoAlt} loading="lazy" />
            <span>
              <strong>Reinhold Berner</strong>
              <small>{content.footer.creatorCredit}</small>
            </span>
          </a>
          <a href={CREATOR_URL} target="_blank" rel="noopener noreferrer">
            {content.footer.creatorLinkLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
