# Journal Content Management

This document defines how the journal page, volumes, and article files are managed.

## Page Roles

- `journal.html`: journal landing page, volume selector, article lists, submission guide.
- `papers/`: article detail pages and volume-level article records.
- `assets/images/journal/`: journal cover and shared journal images.
- `assets/css/site.css`: site-wide styling for the journal landing page.

Do not place full article bodies directly inside `journal.html`. Keep `journal.html` as an index and link each listed article to a standalone article page.

## Directory Structure

Use volume directories with sortable numeric names.

```text
papers/
  vol-01/
    README.md
    paper-nonghyup-member-rights.html
    assets/
  vol-02/
    README.md
```

## URL Pattern

Prefer stable URLs based on volume and article slug.

```text
papers/vol-01/paper-nonghyup-member-rights.html
```

If an article title changes before publication, update the visible title but avoid changing the URL after the page is public.

## Article Slug Rules

- Use lowercase ASCII.
- Use hyphens between words.
- Keep the slug short and topic-based.
- Do not include spaces, Korean characters, dates, or temporary suffixes like `_1`.

Examples:

```text
paper-nonghyup-member-rights.html
cooperative-governance-participation.html
cooperative-accounting-information.html
```

## Volume README

Each volume directory must have a `README.md` with:

- volume number
- publication status
- planned publication date
- article list
- article status
- file path
- DOI/Article ID when available

Use this status vocabulary:

```text
planned
draft
in-review
accepted
published
withdrawn
```

## Article Codes

Use a compact KSMO code for article identification.

```text
KSMO-DOI-YYYYVVAAA
```

- `YYYY`: publication year
- `VV`: volume number, two digits
- `AAA`: article sequence in the volume, three digits

Example:

```text
KSMO-DOI-202601001
```

This is the journal's local KSMO code. When a formal DOI is registered, add it as a separate field.

## Article Page Requirements

Each article page should:

- be a standalone HTML file
- use the same palette as `journal.html`
- link back to `journal.html`
- include title, author, abstract, keywords, body, figures/tables, references
- avoid duplicate opposite-language abstract blocks when Korean and English article views are both present
- keep figures, tables, and captions visually aligned with the journal site

## Journal List Updates

When adding a new article:

1. Add or update the volume `README.md`.
2. Add the article HTML under the volume directory.
3. Add a link from `journal.html` to the article page.
4. Update `sitemap.xml` if the article is public.
5. Check the page in desktop and mobile widths.
