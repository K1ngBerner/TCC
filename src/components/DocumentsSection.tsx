import { useEffect, useMemo, useState } from "react";
import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
};

export function DocumentsSection({ content }: Props) {
  const initial = useMemo(() => content.documents.documents[0]?.primaryHref ?? "", [content]);
  const [selected, setSelected] = useState(initial);

  useEffect(() => {
    setSelected(initial);
  }, [initial]);

  const selectedTitle =
    content.documents.documents.find((doc) => doc.primaryHref === selected || doc.alternateHref === selected)?.title ??
    content.documents.viewerTitle;

  return (
    <section id="documentos" className="section section-anchor">
      <div className="section-heading">
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
                <button type="button" onClick={() => setSelected(doc.primaryHref)}>
                  {content.common.view}
                </button>
                <a href={doc.primaryHref} target="_blank" rel="noreferrer">
                  {content.common.openNewTab}
                </a>
                <a href={doc.primaryHref} download>
                  {content.common.download}
                </a>
              </div>
              <button className="text-button" type="button" onClick={() => setSelected(doc.alternateHref)}>
                {doc.alternateLabel}
              </button>
            </div>
          </article>
        ))}
      </div>
      <div className="document-viewer">
        <div className="viewer-header">
          <h3>{content.documents.viewerTitle}</h3>
          {selected ? (
            <a href={selected} target="_blank" rel="noreferrer">
              {selectedTitle}
            </a>
          ) : (
            <span>{content.documents.choosePrompt}</span>
          )}
        </div>
        {selected && <iframe src={selected} title={selectedTitle} loading="lazy" />}
      </div>
    </section>
  );
}
