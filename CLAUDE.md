# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the `astro/` directory:

```bash
npm run dev      # Dev server at localhost:4321
npm run build    # Build static site to ./dist/
npm run preview  # Preview built site
```

Docker commands run from the workspace root (`Web/`):

```bash
docker compose build       # Build the Docker image (multi-stage: node build → nginx serve)
docker compose up -d       # Start container on port 3000
docker compose down         # Stop and remove container
docker compose up --build  # Rebuild and start
```

The container serves the static site via nginx on port **3000** (maps to nginx port 80 internally).

No tests, no linter. Verify changes with `npm run build` or `docker compose build`.

## Architecture

Astro 6 static site for **Orviq** (AI/automation services company). Outputs pure HTML/CSS/JS — no SSR.

- **Astro** — templating and static generation
- **Tailwind v4** via PostCSS — styling with `@theme` custom properties in `src/styles/global.css`
- **n8n webhooks** — all form submissions (contact, newsletter, chatbot) go to `PUBLIC_N8N_*` webhooks
- **Cloudflare Turnstile** — spam protection on forms (`PUBLIC_TURNSTILE_SITE_KEY`)

## i18n System

Three locales: `es` (default, no URL prefix), `en` (`/en/`), `fr` (`/fr/`). Configured in `astro.config.mjs` with `prefixDefaultLocale: false`.

**Single-source-of-truth:** All page logic lives once. ES root pages hardcode `'es'`; `[lang]/` pages receive `lang` from params. Never duplicate logic across language variants.

**Translation files in `src/i18n/`:**
- `ui.ts` — 370+ UI string keys per locale. `useTranslations(lang)` returns `t(key)`. All three locales must have the same keys — add to all three before using.
- `seo.ts` — per-page SEO metadata (`title`, `description`, `keywords`, `serviceArea`) per locale
- `service-details.ts` — service card content (`what`, `includes`, `for`) per locale
- `faq-data.ts` — FAQ Q&A sections (`general`, `servicios`, `proceso`, `datos`) per locale

**ES root pages pattern:**
```typescript
const t = useTranslations('es');
const seo = getSeo('es', 'contact');
```

**`[lang]/` pages pattern:**
```typescript
const { lang } = Astro.params as { lang: Lang };
const t = useTranslations(lang);
const seo = getSeo(lang, 'contact');
```

**Never hardcode user-visible text** in `.astro` files. Use `t('key')` always.

**`getLocalizedPath(lang, path)`** — returns `path` as-is for `es` (no prefix), `/{lang}{path}` for `en`/`fr`. Use this for all internal links.

## Page Structure

```
src/pages/
├── index.astro, blog.astro, services.astro, faq.astro, ...   # ES (no URL prefix)
├── blog/[slug].astro, work/[slug].astro                       # ES dynamic routes
└── [lang]/
    ├── index.astro, blog.astro, services.astro, faq.astro, ... # EN + FR
    └── blog/[slug].astro, work/[slug].astro                    # EN + FR dynamic routes
```

- All `[lang]/` `getStaticPaths()` return only `['en', 'fr']` — never `'es'`
- There are no explicit `en/` or `fr/` directories — only `[lang]/`
- `[lang]/blog/[slug].astro` filters posts with `!post.id.startsWith('es/')`

## Content Collections

Defined in `src/content.config.ts` with Zod schemas.

- Blog posts: `src/content/blog/{es,en,fr}/` as Markdown. Posts are per-language — a post in `es/` does not automatically appear in `en/` or `fr/`. To translate a post, create the same file in the target language folder.
- Projects: `src/content/projects/{es,en,fr}/` — same per-language pattern as blog. Each language has its own `.md` file for each project.

## Key Environment Variables

Stored in `astro/.env` (all `PUBLIC_` prefixed, safe to expose):
- `PUBLIC_N8N_CONTACT_WEBHOOK`
- `PUBLIC_N8N_NEWSLETTER_WEBHOOK`
- `PUBLIC_N8N_CHATBOT_WEBHOOK`
- `PUBLIC_TURNSTILE_SITE_KEY`
- `PUBLIC_GA_ID`

## Layout & SEO

`BaseLayout.astro` wraps every page — handles GA4, canonical URLs, `Navbar`, and `Footer`. Pass the full `seo` object from `getSeo(lang, page)` plus `locale` and `serviceArea`.

`SEO.astro` generates all meta tags including Open Graph and `schema.org` structured data.

## Docker

Multi-stage `Dockerfile` at workspace root: Node 22 builds the Astro site, then copies `dist/` into nginx:alpine. `nginx.conf` handles:

- Gzip compression for text, CSS, JS, JSON, XML, SVG, fonts
- Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- 1-year cache with `immutable` for static assets (js, css, images, fonts)
- i18n redirects (`/en` → `/en/`, `/fr` → `/fr/`)
- Astro static fallback: `$uri → $uri.html → $uri/index.html → /index.html`
- Blocks hidden files

`docker-compose.yml` at workspace root: single `orviq-web` service, port 3000→80, health check, `restart: unless-stopped`.

The `.dockerignore` excludes `node_modules`, `dist`, `.git`, `.env`, and `.vscode`.
