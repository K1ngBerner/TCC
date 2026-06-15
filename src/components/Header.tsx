import { useState } from "react";
import type { Language, LocaleContent } from "../locales/types";
import { LanguageToggle } from "./LanguageToggle";

type Props = {
  content: LocaleContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
  soundEnabled: boolean;
  onSoundToggle: () => void;
};

export function Header({ content, language, onLanguageChange, soundEnabled, onSoundToggle }: Props) {
  const [open, setOpen] = useState(false);
  const menuLabel = open ? content.nav.closeLabel : content.nav.menuLabel;
  const soundLabel = soundEnabled ? content.sound.disableLabel : content.sound.enableLabel;
  const soundStatus = soundEnabled ? content.sound.enabledLabel : content.sound.disabledLabel;

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" onClick={() => setOpen(false)}>
        <img src="/assets/logo/sussurros-logo.png" alt="Sussurros do Folclore" />
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={menuLabel}
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="main-navigation" className={open ? "nav-links is-open" : "nav-links"} aria-label={content.nav.ariaLabel}>
        {content.nav.items.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className={soundEnabled ? "sound-toggle is-active" : "sound-toggle"}
          type="button"
          aria-label={soundLabel}
          aria-pressed={soundEnabled}
          title={soundStatus}
          onClick={onSoundToggle}
        >
          <span className="sound-toggle-icon" aria-hidden="true" />
          <span className="sr-only">{soundStatus}</span>
        </button>
        <LanguageToggle language={language} label={content.common.languageLabel} onChange={onLanguageChange} />
        <a className="button button-small" href="#jogar">
          {content.nav.playLabel}
        </a>
      </div>
    </header>
  );
}
