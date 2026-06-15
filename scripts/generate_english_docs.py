from __future__ import annotations

import hashlib
import json
import re
import sys
import time
from pathlib import Path
from typing import Iterable
from xml.sax.saxutils import escape

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / ".codex-work" / "pydeps"))

from deep_translator import GoogleTranslator
from PIL import Image as PILImage
from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import Image, PageBreak, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
CACHE_PATH = ROOT / ".codex-work" / "translation_cache.json"
IMAGE_ROOT = ROOT / ".codex-work" / "extracted_pdf_images"
DISCLAIMER_TITLE = "Professional Portfolio Translation"
DISCLAIMER_TEXT = (
    "This English version was created exclusively for professional portfolio presentation "
    "and international accessibility. The project, research, design process, development, "
    "and original academic documentation were conceived and produced in Portuguese. In case "
    "of any discrepancy, the original Portuguese version should be considered the "
    "authoritative document."
)

PROTECTED_TERMS = [
    "Sussurros do Folclore",
    "SUSSURROS DO FOLCLORE",
    "Saci-Pererê",
    "Saci Pererê",
    "Saci",
    "Reinhold Gustav Berner",
    "Adriano Oliveira Azevedo",
    "Alexandre Tan Vitor",
    "Tamir Borges Lins dos Santos",
    "Victor Miguel Morales Lopes",
    "Luiz Felipe Cesar Martins de Brito",
    "Universidade Anhembi Morumbi",
    "Anhembi Morumbi",
    "Unity",
    "Unity Asset Store",
    "Blender",
    "Substance Painter",
    "Figma",
    "Miro",
    "itch.io",
    "GitHub",
    "Pixabay",
    "Medieval Props",
    "Lukas Bobor",
    "Point and Click",
    "Toon Shader",
    "URP",
    "C#",
    "IM Fell English",
    "Cormorant Garamond",
    "Lato",
    "Inter",
    "Journey",
    "Dark Souls",
    "Grim Fandango",
    "What Remains of Edith Finch",
    "Gone Home",
    "Monteiro Lobato",
    "Câmara Cascudo",
    "Renato Queiroz",
    "Andriolli Costa",
    "Henry Jenkins",
]


def load_cache() -> dict[str, str]:
    if CACHE_PATH.exists():
        return json.loads(CACHE_PATH.read_text(encoding="utf-8"))
    return {}


def save_cache(cache: dict[str, str]) -> None:
    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
    CACHE_PATH.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")


def clean_text(text: str) -> str:
    text = text.replace("\u00a0", " ")
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"\s+([,.;:!?])", r"\1", text)
    return text


def split_for_translation(text: str, limit: int = 4300) -> list[str]:
    if len(text) <= limit:
        return [text]

    parts: list[str] = []
    current = ""
    sentences = re.split(r"(?<=[.!?])\s+", text)
    for sentence in sentences:
        if len(sentence) > limit:
            for i in range(0, len(sentence), limit):
                if current:
                    parts.append(current.strip())
                    current = ""
                parts.append(sentence[i : i + limit].strip())
            continue
        if len(current) + len(sentence) + 1 > limit:
            parts.append(current.strip())
            current = sentence
        else:
            current = f"{current} {sentence}".strip()
    if current:
        parts.append(current.strip())
    return parts


def protect_terms(text: str) -> tuple[str, dict[str, str]]:
    replacements: dict[str, str] = {}
    protected = text
    for idx, term in enumerate(sorted(PROTECTED_TERMS, key=len, reverse=True)):
        token = f"ZXQPROTECTED{idx}QXZ"
        if term in protected:
            protected = protected.replace(term, token)
            replacements[token] = term
    return protected, replacements


def restore_terms(text: str, replacements: dict[str, str]) -> str:
    restored = text
    for token, term in replacements.items():
        restored = restored.replace(token, term)
        restored = restored.replace(token.lower(), term)
        restored = restored.replace(token.capitalize(), term)
    return restored


def translate_chunk(text: str, translator: GoogleTranslator, cache: dict[str, str]) -> str:
    text = text.strip()
    if not text:
        return text
    key = hashlib.sha256(text.encode("utf-8")).hexdigest()
    if key in cache:
        return cache[key]

    protected, replacements = protect_terms(text)
    for attempt in range(4):
        try:
            translated = translator.translate(protected)
            translated = restore_terms(translated, replacements)
            translated = translated.replace("Sussurros do Folclore?", "Sussurros do Folclore is")
            cache[key] = translated
            if len(cache) % 10 == 0:
                save_cache(cache)
            return translated
        except Exception:
            if attempt == 3:
                raise
            time.sleep(2 + attempt * 2)
    return text


def translate_text(text: str, translator: GoogleTranslator, cache: dict[str, str]) -> str:
    pieces = split_for_translation(text)
    return " ".join(translate_chunk(piece, translator, cache) for piece in pieces)


def extract_page_images(reader: PdfReader, slug: str) -> dict[int, list[Path]]:
    out_dir = IMAGE_ROOT / slug
    out_dir.mkdir(parents=True, exist_ok=True)
    page_images: dict[int, list[Path]] = {}
    for page_index, page in enumerate(reader.pages, start=1):
        paths: list[Path] = []
        for image_index, image in enumerate(page.images, start=1):
            ext = Path(image.name).suffix or ".png"
            out_path = out_dir / f"page_{page_index:02d}_{image_index:02d}{ext}"
            if not out_path.exists():
                out_path.write_bytes(image.data)
            try:
                with PILImage.open(out_path) as im:
                    im.verify()
                paths.append(out_path)
            except Exception:
                continue
        page_images[page_index] = paths
    return page_images


def image_flowable(path: Path, max_width: float, max_height: float) -> Image | None:
    try:
        with PILImage.open(path) as im:
            width, height = im.size
    except Exception:
        return None
    ratio = min(max_width / width, max_height / height, 1)
    return Image(str(path), width=width * ratio, height=height * ratio)


def make_styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    return {
        "cover_title": ParagraphStyle(
            "CoverTitle",
            parent=base["Title"],
            fontName="Times-Bold",
            fontSize=23,
            leading=28,
            alignment=TA_CENTER,
            textColor=colors.HexColor("#8C3B1E"),
            spaceAfter=20,
        ),
        "cover_meta": ParagraphStyle(
            "CoverMeta",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=12,
            leading=17,
            alignment=TA_CENTER,
            textColor=colors.HexColor("#2F2A22"),
            spaceAfter=8,
        ),
        "h1": ParagraphStyle(
            "DocHeading1",
            parent=base["Heading1"],
            fontName="Times-Bold",
            fontSize=16,
            leading=20,
            textColor=colors.HexColor("#8C3B1E"),
            spaceBefore=14,
            spaceAfter=8,
        ),
        "h2": ParagraphStyle(
            "DocHeading2",
            parent=base["Heading2"],
            fontName="Times-Bold",
            fontSize=13,
            leading=16,
            textColor=colors.HexColor("#4D2E1A"),
            spaceBefore=10,
            spaceAfter=6,
        ),
        "body": ParagraphStyle(
            "DocBody",
            parent=base["BodyText"],
            fontName="Times-Roman",
            fontSize=10.5,
            leading=14,
            alignment=TA_LEFT,
            spaceAfter=7,
        ),
        "note": ParagraphStyle(
            "PortfolioNote",
            parent=base["BodyText"],
            fontName="Times-Roman",
            fontSize=11,
            leading=15,
            leftIndent=12,
            rightIndent=12,
            borderColor=colors.HexColor("#C4974A"),
            borderWidth=0.75,
            borderPadding=10,
            backColor=colors.HexColor("#FFF4DF"),
            spaceAfter=14,
        ),
        "caption": ParagraphStyle(
            "ImageCaption",
            parent=base["BodyText"],
            fontName="Times-Italic",
            fontSize=8.5,
            leading=11,
            textColor=colors.HexColor("#5F5646"),
            alignment=TA_CENTER,
            spaceAfter=8,
        ),
        "page_marker": ParagraphStyle(
            "OriginalPageMarker",
            parent=base["BodyText"],
            fontName="Times-Bold",
            fontSize=9,
            leading=11,
            textColor=colors.HexColor("#6A6A60"),
            spaceBefore=12,
            spaceAfter=6,
        ),
    }


def add_cover(story: list, styles: dict[str, ParagraphStyle], title: str, subtitle: str) -> None:
    logo = ROOT / "public" / "assets" / "logo" / "sussurros-logo.png"
    if logo.exists():
        flow = image_flowable(logo, 10 * cm, 6 * cm)
        if flow:
            flow.hAlign = "CENTER"
            story.append(flow)
            story.append(Spacer(1, 0.8 * cm))
    story.append(Paragraph(escape(title), styles["cover_title"]))
    story.append(Paragraph(escape(subtitle), styles["cover_meta"]))
    story.append(Spacer(1, 0.5 * cm))
    story.append(
        Paragraph(
            "Reinhold Gustav Berner | Adriano Oliveira Azevedo | Alexandre Tan Vitor<br/>"
            "Tamir Borges Lins dos Santos | Victor Miguel Morales Lopes",
            styles["cover_meta"],
        )
    )
    story.append(Paragraph("Universidade Anhembi Morumbi<br/>São Paulo, 2026", styles["cover_meta"]))
    story.append(PageBreak())
    story.append(Paragraph(DISCLAIMER_TITLE, styles["h1"]))
    story.append(Paragraph(escape(DISCLAIMER_TEXT), styles["note"]))
    story.append(
        Paragraph(
            "This generated PDF preserves the original document's reading order and image assets "
            "where they could be extracted from the source PDF. The Portuguese source remains the "
            "authoritative academic document.",
            styles["body"],
        )
    )
    story.append(PageBreak())


def paragraph_style_for(text: str, styles: dict[str, ParagraphStyle]) -> ParagraphStyle:
    stripped = text.strip()
    if re.match(r"^(\d+\.|[A-D]\.)\s+[A-Z]", stripped) or stripped.isupper() and len(stripped) < 120:
        return styles["h1"]
    if re.match(r"^\d+\.\d+", stripped) or re.match(r"^[A-D]\.\d+", stripped):
        return styles["h2"]
    return styles["body"]


def add_text_as_paragraphs(story: list, text: str, styles: dict[str, ParagraphStyle]) -> None:
    # Keep generated text readable without trying to replicate the exact PDF line grid.
    candidates = re.split(r"(?=(?:\d+\.\d+|\d+\.|[A-D]\.\d+|REFERENCES)\s+)", text)
    for candidate in candidates:
        candidate = candidate.strip()
        if not candidate:
            continue
        style = paragraph_style_for(candidate, styles)
        story.append(Paragraph(escape(candidate), style))


def build_translated_pdf(source: Path, output: Path, slug: str, title: str, subtitle: str) -> None:
    reader = PdfReader(str(source))
    page_images = extract_page_images(reader, slug)
    translator = GoogleTranslator(source="pt", target="en")
    cache = load_cache()
    styles = make_styles()
    story: list = []
    add_cover(story, styles, title, subtitle)

    references_started = False
    for page_number, page in enumerate(reader.pages, start=1):
        if page_number == 1:
            continue
        raw_text = clean_text(page.extract_text() or "")
        if not raw_text and not page_images.get(page_number):
            continue

        story.append(Paragraph(f"Original document page {page_number}", styles["page_marker"]))
        if raw_text:
            upper_text = raw_text.upper()
            starts_with_references = re.match(r"^\s*REFER[ÊE]NCIAS", upper_text) is not None
            near_document_end = page_number >= max(1, len(reader.pages) - 2)
            if starts_with_references or (near_document_end and ("REFERÊNCIAS" in upper_text or "REFERENCIAS" in upper_text)):
                references_started = True
            if references_started:
                translated = raw_text.replace("REFERÊNCIAS BIBLIOGRÁFICAS", "BIBLIOGRAPHIC REFERENCES")
                translated = translated.replace("REFERÊNCIAS", "REFERENCES")
            else:
                translated = translate_text(raw_text, translator, cache)
            add_text_as_paragraphs(story, translated, styles)

        for img_path in page_images.get(page_number, []):
            flow = image_flowable(img_path, 15.5 * cm, 8 * cm)
            if flow:
                flow.hAlign = "CENTER"
                story.append(Spacer(1, 0.2 * cm))
                story.append(flow)
                story.append(Paragraph(f"Extracted visual asset from original page {page_number}.", styles["caption"]))

    save_cache(cache)
    output.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(output),
        pagesize=A4,
        rightMargin=2 * cm,
        leftMargin=2 * cm,
        topMargin=1.8 * cm,
        bottomMargin=1.8 * cm,
        title=title,
        author="Sussurros do Folclore team",
        subject="Professional portfolio translation",
    )
    doc.build(story)


def main() -> None:
    jobs = [
        (
            ROOT / "public" / "assets" / "docs" / "pt" / "TCC_parte_escrita.pdf",
            ROOT / "public" / "assets" / "docs" / "en" / "TCC_Written_EN.pdf",
            "tcc",
            "ENVIRONMENTAL STORYTELLING AND VISUAL SEMIOTICS IN DIGITAL GAMES",
            "The Representation of Brazilian Folklore Through Interactive Space Design",
        ),
        (
            ROOT / "public" / "assets" / "docs" / "pt" / "GDD_Sussurros.pdf",
            ROOT / "public" / "assets" / "docs" / "en" / "GDD_Sussurros_EN.pdf",
            "gdd",
            "SUSSURROS DO FOLCLORE",
            "Game Design Document",
        ),
    ]
    for source, output, slug, title, subtitle in jobs:
        print(f"Generating {output.name}...")
        build_translated_pdf(source, output, slug, title, subtitle)
        print(f"Wrote {output}")


if __name__ == "__main__":
    main()
