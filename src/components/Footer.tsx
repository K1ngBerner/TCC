import type { Language, LocaleContent } from "../locales/types";
import { CreatorCredit } from "./CreatorCredit";
import { LanguageToggle } from "./LanguageToggle";

type Props = {
  content: LocaleContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function Footer({ content, language, onLanguageChange }: Props) {
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
          <CreatorCredit content={content} />
          <LanguageToggle language={language} label={content.common.languageLabel} onChange={onLanguageChange} />
        </div>
      </div>
    </footer>
  );
}
