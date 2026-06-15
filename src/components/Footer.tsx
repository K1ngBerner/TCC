import type { Language, LocaleContent } from "../locales/types";
import { LanguageToggle } from "./LanguageToggle";

type Props = {
  content: LocaleContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function Footer({ content, language, onLanguageChange }: Props) {
  return (
    <footer className="site-footer">
      <img src="/assets/logo/sussurros-logo.png" alt="Sussurros do Folclore" />
      <p>{content.footer.text}</p>
      <p>{content.footer.academicNotice}</p>
      <div className="footer-links">
        <a href="https://reine-berner.itch.io/sussuros-do-folclore" target="_blank" rel="noreferrer">
          itch.io
        </a>
        <a href="https://miro.com/app/board/uXjVG1FYrG8=/" target="_blank" rel="noreferrer">
          Miro
        </a>
      </div>
      <LanguageToggle language={language} label={content.common.languageLabel} onChange={onLanguageChange} />
    </footer>
  );
}
