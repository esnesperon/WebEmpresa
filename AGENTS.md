# AGENTS.md

## Commands

Dev commands run from the `astro/` directory:

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

Astro 6 static site for **Orviq**. Pure HTML/CSS/JS output, no SSR.

- **Astro** — templating + static generation
- **Tailwind v4** via PostCSS — custom properties in `src/styles/global.css`
- **i18n** — 3 locales via custom system (not astro-i18n)
- **Content collections** — Zod schemas in `src/content.config.ts`, Markdown in `src/content/`
- **n8n webhooks** — form submissions → `PUBLIC_N8N_*` env vars
- **Cloudflare Turnstile** — spam protection (`PUBLIC_TURNSTILE_SITE_KEY`)

Env vars in `astro/.env` (all `PUBLIC_` prefixed, safe to expose).

## i18n Rules

Three locales: `es` (default, **no URL prefix**), `en` (`/en/`), `fr` (`/fr/`). Configured in `astro.config.mjs` with `prefixDefaultLocale: false`.

**Translation files in `src/i18n/`:**
- `ui.ts` — UI strings. `useTranslations(lang)` → `t(key)`. **All three locales must have identical keys** — add to es/en/fr before using any new key.
- `seo.ts` — per-page SEO metadata. `getSeo(lang, page)`. Must have an entry for every page.
- `service-details.ts` — service card content
- `faq-data.ts` — FAQ sections

**Page patterns (single-source-of-truth, no duplication):**
```typescript
// ES root page (e.g. about.astro, work.astro):
const t = useTranslations('es');
const seo = getSeo('es', 'about');

// [lang]/ page (e.g. [lang]/about.astro):
const { lang } = Astro.params as { lang: Lang };
const t = useTranslations(lang);
const seo = getSeo(lang, 'about');
```

**Never hardcode user-visible text** in `.astro` files. Always use `t('key')`.

**`getLocalizedPath(lang, path)`** — returns `path` for es, `/{lang}{path}` for en/fr. Use for all internal links.

## Content Collections

**Blog:** `src/content/blog/{es,en,fr}/` — per-language Markdown. Creating `es/foo.md` does NOT auto-create en/fr. Must create each translation manually.

**Projects:** `src/content/projects/{es,en,fr}/` — same per-language pattern as blog. Each language has its own `.md` file for each project.

- ES root pages filter: `p.id.startsWith('es/')`
- `[lang]/` pages filter: `p.id.startsWith(`${lang}/`)`
- Slug extraction: `project.id.replace(`${lang}/`, '').replace('.md', '')`
- `category` is a free `z.string()` — values are translated per locale (e.g. "SaaS" / "SaaS" / "SaaS", "Automation" / "Automatización" / "Automatisation")
- Project `link` field is optional — when present, detail pages show "Ver proyecto" / "View project" button with `open_in_new` icon

## Page Structure

```
src/pages/
├── index.astro, about.astro, work.astro, ...     # ES root (no prefix)
├── work/[slug].astro, blog/[slug].astro           # ES dynamic routes
└── [lang]/
    ├── index.astro, about.astro, work.astro, ...   # EN + FR
    └── work/[slug].astro, blog/[slug].astro        # EN + FR dynamic routes
```

- `[lang]/` `getStaticPaths()` return only `['en', 'fr']` — never `'es'`
- No explicit `en/` or `fr/` directories — only `[lang]/`
- Dynamic routes extract lang from `project.id.split('/')[0]`

## Layout & SEO

`BaseLayout.astro` wraps every page. Pass full `seo` object from `getSeo()`, plus `locale` and `serviceArea` for non-ES pages. `SEO.astro` generates meta tags, OG, and schema.org structured data.

## Components

`Navbar.astro`, `Footer.astro`, `SEO.astro`, `OptimizedImage.astro`, `Chatbot.astro`, `CookieBanner.astro` — in `src/components/`.

`OptimizedImage.astro` generates srcset for Unsplash URLs automatically. Unsplash image URLs must be valid (verify with HEAD request if unsure).

## About Page Team

Team members in `about.astro` and `[lang]/about.astro` are defined as a `team` array with `linkedin` field (null for members without LinkedIn). LinkedIn icon is an inline SVG. 

Current LinkedIn URLs:
- Alex: `https://www.linkedin.com/in/%C3%A1lex-esper%C3%B3n-abilleira-b8505933b/`
- Javier: `https://www.linkedin.com/in/javier-b-a5b97435b/`
- Sergio: no LinkedIn

## Key Conventions

- Team member card text in about pages uses `t('about.*')` keys — not inline ternaries
- All about page strings are translation keys (hero, stats, pillars, team, testimonials, CTA)
- `about` page has SEO entries in `seo.ts` for all 3 locales

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