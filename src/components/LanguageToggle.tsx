import type { Language } from "../locales/types";

type Props = {
  language: Language;
  label: string;
  onChange: (language: Language) => void;
};

export function LanguageToggle({ language, label, onChange }: Props) {
  return (
    <div className="language-toggle" aria-label={label}>
      <button
        className={language === "pt" ? "is-active" : ""}
        type="button"
        onClick={() => onChange("pt")}
        aria-pressed={language === "pt"}
      >
        PT
      </button>
      <span aria-hidden="true">|</span>
      <button
        className={language === "en" ? "is-active" : ""}
        type="button"
        onClick={() => onChange("en")}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}
