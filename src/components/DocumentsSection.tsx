import { useEffect, useState } from "react";
import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
};

export function DocumentsSection({ content }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    setSelected(null);
  }, [content]);

  useEffect(() => {
    if (!selected) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("modal-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [selected]);

  const selectedTitle =
    content.documents.documents.find((doc) => doc.primaryHref === selected || doc.alternateHref === selected)?.title ??
    content.documents.viewerTitle;

  return (
    <section id="documentos" className="section section-anchor">
      <div className="section-heading section-heading--left container">
        <h2>{content.documents.title}</h2>
        <p>{content.documents.intro}</p>
      </div>
      <aside className="disclaimer">
        <h3>{content.documents.disclaimerTitle}</h3>
        <p>{content.documents.disclaimer}</p>
      </aside>
      <div className="document-grid">
        {content.documents.documents.map((doc) => (
          <article className="document-card" key={doc.primaryHref}>
            <div className="document-cover" aria-hidden="true">
              <img src="/assets/logo/sussurros-logo.png" alt="" />
            </div>
            <div className="document-body">
              <span>{doc.language}</span>
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
              <div className="document-actions">
                <button type="button" onClick={() => setSelected(doc.primaryHref)} aria-haspopup="dialog">
                  {content.common.view}
                </button>
                <a href={doc.primaryHref} target="_blank" rel="noreferrer">
                  {content.common.openNewTab}
                </a>
                <a href={doc.primaryHref} download>
                  {content.common.download}
                </a>
              </div>
              <button className="text-button" type="button" onClick={() => setSelected(doc.alternateHref)} aria-haspopup="dialog">
                {doc.alternateLabel}
              </button>
            </div>
          </article>
        ))}
      </div>
      {selected && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={selectedTitle}
          onClick={() => setSelected(null)}
        >
          <div className="document-modal" onClick={(event) => event.stopPropagation()}>
            <div className="viewer-header">
              <div>
                <span>{content.documents.viewerTitle}</span>
                <h3>{selectedTitle}</h3>
              </div>
              <div className="viewer-actions">
                <a href={selected} target="_blank" rel="noreferrer">
                  {content.common.openNewTab}
                </a>
                <button type="button" onClick={() => setSelected(null)}>
                  {content.documents.closeViewer}
                </button>
              </div>
            </div>
            <iframe src={selected} title={selectedTitle} loading="lazy" />
          </div>
        </div>
      )}
    </section>
  );
}
