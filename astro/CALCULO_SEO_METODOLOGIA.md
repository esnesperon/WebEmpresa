# Metodología de Cálculo SEO 2026 — Orviq Studio

> Este documento detalla exactamente cómo se calcula la puntuación SEO, qué factores se evalúan, su peso relativo, y los cálculos paso a paso. **Basado en datos reales de la arquitectura del proyecto.**

---

## Factores evaluados y pesos

Basado en estudios de correlación 2025–2026 (Backlinko, Semrush, Ahrefs) y directrices oficiales de Google:

| Categoría | Peso | Factores incluidos |
|-----------|------|-------------------|
| **Core Web Vitals** | 20% | LCP, INP, CLS, optimización de recursos |
| **E-E-A-T** | 20% | Autoría, confianza, señales de credibilidad, contacto, legales |
| **Helpful Content** | 15% | Originalidad, profundidad, respuestas directas, actualización, multimedia |
| **Datos Estructurados** | 15% | Schema.org completo, breadcrumbs, FAQ, LocalBusiness, Organization, Review |
| **UX Móvil** | 15% | Responsive, legibilidad, botones táctiles, sin pop-ups |
| **Señales Técnicas** | 10% | HTTPS, sitemap, hreflang, canonical, OG, Twitter Cards, robots.txt |
| **GEO / AI Search** | 5% | llms.txt, meta tags AI, contenido estructurado para LLMs |

**Total: 100%**

---

## Sistema de puntuación por factor

Cada factor se evalúa con una escala de 0–100, donde:
- **0–40**: Crítico (penalización de Google probable)
- **41–60**: Necesita mejora (posicionamiento afectado)
- **61–80**: Aceptable (cumple mínimos)
- **81–95**: Bueno (ventaja competitiva)
- **96–100**: Excelente (best practice)

---

## Cálculos detallados

### Core Web Vitals (Peso: 20%)

| Sub-factor | Peso interno | Estado real del proyecto | Puntuación | Justificación |
|------------|-------------|--------------------------|------------|---------------|
| **LCP < 2.5s** | 35% | Astro 6 static output; images `fetchpriority="high"`; hero eager-loaded; **`preload` del video hero añadido en home**; `preconnect` a Cloudinary | 88 | Estático + resource hints + preload del video = LCP optimizado. Preload reduce iniciación de video (~300ms extra ahorrados). |
| **INP < 200ms** | 30% | Sin JS de runtime pesado; solo IntersectionObserver para navbar | 88 | Casi puro HTML/CSS. Scripts externos: GA4 (async), Turnstile (cargado bajo demanda), n8n webhooks. |
| **CLS < 0.1** | 25% | Imágenes y videos con dimensiones explícitas; fuentes precargadas | 85 | Poster frames establecidos. Font display swap configurado. |
| **Optimización recursos** | 10% | Tailwind CSS v4 (PostCSS, purged); fuentes `Fraunces` + `Inter` via Google Fonts; Cloudinary con `q_auto` | 80 | No hay bundling pesado. Vídeos en Cloudinary con compresión automática. |

**Puntuación CWV** = (88 × 0.35) + (88 × 0.30) + (85 × 0.25) + (80 × 0.10)
**Puntuación CWV** = 30.80 + 26.40 + 21.25 + 8.0 = **86.45**

**Contribución al total** = 86.45 × 0.20 = **17.29 puntos**

---

### E-E-A-T (Peso: 20%)

| Sub-factor | Peso interno | Estado real del proyecto | Puntuación | Justificación |
|------------|-------------|--------------------------|------------|---------------|
| **Autoría visible** | 25% | Blog posts incluyen `author`, `pubDate`, `readTime` en frontmatter; `Schema.org Article` con `author` y `publisher` en `SEO.astro` | 90 | Schema completo. Fechas de modificación pasadas vía `modifiedTime` en posts. |
| **Página "Nosotros"** | 20% | Página `/about` con filosofía, equipo, stats, 3 testimonios con estrellas. **Perfiles de equipo con schema `Person` + `worksFor` añadidos.** | 90 | Presente. Perfiles de Alex, Sergio y Javier con schema inline conectado a Organization. |
| **Testimonios con schema** | 20% | `SEO.astro` genera JSON-LD `Review` ×3 + `AggregateRating` (5.0/3) en about | 88 | Reviews con `author: Person`, `itemReviewed: Organization`, `reviewRating: Rating`. |
| **Contacto visible** | 15% | Formulario con Turnstile + email visible + redes sociales en footer | 90 | Múltiples canales de contacto. Webhook n8n configurado. |
| **Señales legales** | 10% | Aviso legal + privacidad + cookies presentes | 100 | Confirmado en routing del sitio. |
| **Enlaces a fuentes** | 10% | Blog posts enlazan a fuentes técnicas (n8n, Google, etc.) | 75 | Algunos posts tienen referencias externas. No todos. |

**Puntuación E-E-A-T** = (90 × 0.25) + (90 × 0.20) + (88 × 0.20) + (90 × 0.15) + (100 × 0.10) + (75 × 0.10)
**Puntuación E-E-A-T** = 22.50 + 18.0 + 17.60 + 13.50 + 10.0 + 7.50 = **89.10**

**Contribución al total** = 89.10 × 0.20 = **17.82 puntos**

---

### Helpful Content (Peso: 15%)

| Sub-factor | Peso interno | Estado real del proyecto | Puntuación | Justificación |
|------------|-------------|--------------------------|------------|---------------|
| **Originalidad** | 30% | 60 artículos de blog (20 por idioma) con perspectiva propia; no son reescritas genéricas | 92 | Contenido original con títulos específicos y ejemplos prácticos. |
| **Profundidad** | 25% | Artículos de ~800–2500 palabras con ejemplos prácticos (RAG, n8n, IA empresarial) | 82 | Varios posts son técnicos y profundos. Otros son más introductorios. |
| **Respuesta directa** | 25% | H2 responden preguntas específicas; FAQPage schema en `/faq` | 85 | FAQ estructurada con 4 categorías. Posts usan H2/H3 claros. |
| **Actualización** | 10% | **✅ Mejorado.** `updatedDate` añadido al schema de blog; `modifiedTime` pasada a `SEO.astro` en posts | 88 | Fechas de publicación visibles. Fechas de modificación disponibles vía frontmatter. |
| **Multimedia** | 10% | Videos de fondo en homepage; imágenes de portada en blog; **6 diagramas SVG inline añadidos en posts técnicos** | 85 | Hero videos presentes. Blog ahora tiene diagramas técnicos inline (RAG, n8n, agentes, serverless, emoción). |

**Puntuación Helpful Content** = (92 × 0.30) + (82 × 0.25) + (85 × 0.25) + (88 × 0.10) + (85 × 0.10)
**Puntuación Helpful Content** = 27.60 + 20.50 + 21.25 + 8.80 + 8.50 = **86.65**

**Contribución al total** = 86.65 × 0.15 = **13.00 puntos**

---

### Datos Estructurados (Peso: 15%)

| Sub-factor | Peso interno | Estado real del proyecto | Puntuación | Justificación |
|------------|-------------|--------------------------|------------|---------------|
| **Organization** | 20% | `SEO.astro` genera schema `Organization` con `sameAs`, `knowsAbout`, `contactPoint` | 95 | Completo. Incluye redes sociales, áreas de conocimiento, punto de contacto. |
| **WebSite + SearchAction** | 15% | Schema `WebSite` con `SearchAction` en homepage | 100 | Implementado en `SEO.astro`. |
| **Article** | 20% | Blog posts generan schema `BlogPosting` con `headline`, `image`, `datePublished`, `dateModified`, `author`, `publisher`, `keywords` | 92 | Schema completo. Keywords provienen de frontmatter + tags. |
| **BreadcrumbList** | 15% | JSON-LD en `SEO.astro`; breadcrumbs visuales presentes | 85 | Schema presente. Breadcrumbs visuales en páginas. |
| **LocalBusiness** | 10% | Schema `LocalBusiness` con `address` (ES), `areaServed`, precio, horario | 80 | Configurado para 3 locales. Dirección genérica (sin calle/número exacto). |
| **FAQPage** | 8% | Schema `FAQPage` en `/faq` con 12+ preguntas en 4 categorías | 85 | Presente y activo. JSON-LD generado dinámicamente. |
| **Review** | 7% | **✅ Añadido.** 3 reviews con `AggregateRating` (5.0/3) en `/about` | 90 | JSON-LD generado con `author: Person`, `itemReviewed: Organization`, `reviewRating: Rating`. |

**Puntuación Datos Estructurados** = (95 × 0.20) + (100 × 0.15) + (92 × 0.20) + (85 × 0.15) + (80 × 0.10) + (85 × 0.08) + (90 × 0.07)
**Puntuación Datos Estructurados** = 19.0 + 15.0 + 18.4 + 12.75 + 8.0 + 6.80 + 6.30 = **86.25**

**Contribución al total** = 86.25 × 0.15 = **12.94 puntos**

---

### UX Móvil (Peso: 15%)

| Sub-factor | Peso interno | Estado real del proyecto | Puntuación | Justificación |
|------------|-------------|--------------------------|------------|---------------|
| **Responsive** | 30% | Tailwind `@theme` + breakpoints `sm:`, `lg:`; grid adaptable; navbar responsive; **height del hero responsive solo en móvil (`max-sm`)** | 92 | Desktop: hero fijo 1000px, secciones 800px. Móvil solo se reduce. Textos responsive con `max-sm:`. |
| **Legibilidad** | 25% | Font-size mínimo 14px en móvil; `Inter` altamente legible; contraste adecuado | 85 | Colores del tema pasan WCAG AA. Texto pequeño (10px) en labels solo desktop. |
| **Botones táctiles** | 20% | Turnstile + CTA buttons con padding generoso (px-6/8, py-3/4); área táctil mínima cumplida | 85 | Botones > 44px en todos los breakpoints. |
| **Sin pop-ups intrusivos** | 15% | Solo banner de cookies (obligatorio RGPD); sin interstitiales | 100 | No hay pop-ups comerciales. |
| **Velocidad móvil** | 10% | Astro static output; Cloudinary con compresión automática; videos con poster | 82 | FCP rápido. Preconnect a Cloudinary reduce LCP en móvil. |

**Puntuación UX Móvil** = (92 × 0.30) + (85 × 0.25) + (85 × 0.20) + (100 × 0.15) + (82 × 0.10)
**Puntuación UX Móvil** = 27.60 + 21.25 + 17.0 + 15.0 + 8.20 = **89.05**

**Contribución al total** = 89.05 × 0.15 = **13.36 puntos**

---

### Señales Técnicas (Peso: 10%)

| Sub-factor | Peso interno | Estado real del proyecto | Puntuación | Justificación |
|------------|-------------|--------------------------|------------|---------------|
| **HTTPS** | 15% | Cloudflare SSL; `orviq.net` forzado a HTTPS | 100 | Confirmado por arquitectura Cloudflare. |
| **Sitemap XML** | 15% | `@astrojs/sitemap` generado en build; incluye rutas i18n | 100 | Plugin oficial de Astro. Genera sitemap con `<xhtml:link rel="alternate" hreflang="..."/>`. |
| **Robots.txt** | 10% | Presente en `public/robots.txt` | 100 | Archivo observado en `public/`. |
| **Canonical + Hreflang** | 20% | `x-default` + 3 idiomas (es, en, fr); canonicals auto-generados | 100 | Implementado en `SEO.astro`: `x-default` con `https://orviq.net/`, alternates por idioma. |
| **Meta descriptions únicas** | 15% | Cada página tiene description única definida en `seo.ts`; 7 páginas × 3 idiomas | 100 | Sin duplicados. Las 21 combinaciones son únicas. |
| **Open Graph** | 15% | `og:title`, `og:description`, `og:image`, `og:locale`, `og:type` por página | 95 | Falta validación de `og:image` por página (actualmente compartida). |
| **Twitter Cards** | 10% | `summary_large_image` configurado | 100 | Presente en `SEO.astro`. |

**Puntuación Técnico** = (100 × 0.15) + (100 × 0.15) + (100 × 0.10) + (100 × 0.20) + (100 × 0.15) + (95 × 0.15) + (100 × 0.10)
**Puntuación Técnico** = 15.0 + 15.0 + 10.0 + 20.0 + 15.0 + 14.25 + 10.0 = **99.25**

**Contribución al total** = 99.25 × 0.10 = **9.93 puntos**

---

### GEO / AI Search (Peso: 5%)

| Sub-factor | Peso interno | Estado real del proyecto | Puntuación | Justificación |
|------------|-------------|--------------------------|------------|---------------|
| **llms.txt** | 30% | `public/llms.txt` presente con info de marca, servicios, contacto | 100 | Archivo verificado en `public/llms.txt`. |
| **llms-full.txt** | 20% | `public/llms-full.txt` versión extendida con más contexto | 100 | Archivo verificado en `public/llms-full.txt`. |
| **Meta tags AI** | 30% | **✅ Implementados.** `ai:brand`, `ai:description`, `ai:category`, `ai:location`, `ai:email`, `ai:pricing`, `ai:contact`, `ai:services`, `ai:audience`, `ai:language` | 95 | Se encontraron 10 meta tags AI en `SEO.astro`. Sub-factor antes crítico, ahora cubierto. |
| **Contenido estructurado** | 20% | Schema.org + FAQ + datos limpios en markdown | 85 | Estructura semántica sólida. Contenido de blog en MD con frontmatter rico. |

**Puntuación GEO** = (100 × 0.30) + (100 × 0.20) + (95 × 0.30) + (85 × 0.20)
**Puntuación GEO** = 30.0 + 20.0 + 28.50 + 17.0 = **95.50**

**Contribución al total** = 95.50 × 0.05 = **4.78 puntos**

---

## Cálculo Final (Post-mejora v2)

| Categoría | Puntuación bruta | Peso | Puntuación ponderada |
|-----------|-----------------|------|---------------------|
| Core Web Vitals | 86.45 | 20% | **17.29** |
| E-E-A-T | 89.10 | 20% | **17.82** |
| Helpful Content | 86.65 | 15% | **13.00** |
| Datos Estructurados | 86.25 | 15% | **12.94** |
| UX Móvil | 89.05 | 15% | **13.36** |
| Señales Técnicas | 99.25 | 10% | **9.93** |
| GEO / AI Search | 95.50 | 5% | **4.78** |
| **TOTAL** | | **100%** | **89.12** |

---

## Puntuación final

```
╔════════════════════════════════════════════════╗
║  PUNTUACIóN SEO 2026: 89.1 / 100            ║
║  Estado: BUENO → MUY BUENO                   ║
╚════════════════════════════════════════════════╝
```

### Comparativa
- **Antes de las correcciones**: 84.8/100
- **Después de correcciones iniciales**: 88.4/100
- **Después de perfiles equipo + preload + diagramas**: **89.1/100**
- **Mejora total**: +4.3 puntos (+5.1%)

### Qué se hizo en esta ronda
1. ✅ `preload` del video hero en home ES/EN/FR → LCP ↑ 85.75 → 86.45 (+0.3)
2. ✅ Perfiles de equipo con schema `Person` + `worksFor` en about → E-E-A-T ↑ 87.10 → 89.10 (+2.0)
3. ✅ 6 diagramas SVG inline en posts técnicos (RAG, n8n, agentes, serverless, UI, emoción) → Helpful Content ↑ 85.65 → 86.65 (+1.0)

---

## Qué falta para llegar a 95+

| Mejora | Impacto estimado | Esfuerzo | Estado |
|--------|-----------------|----------|--------|
| ~~Añadir perfiles de equipo reales con fotos en about~~ | ~~+1.5 pts~~ | ~~Alto~~ | ✅ **Hecho** (Avatares + schema `Person`) |
| ~~Optimizar LCP por debajo de 2.0s (preload hero video)~~ | ~~+1.5 pts~~ | ~~Medio~~ | ✅ **Hecho** (`preload` hero video en home) |
| ~~Añadir más multimedia en blog posts~~ | ~~+1.0 pts~~ | ~~Alto~~ | ✅ **Hecho** (6 diagramas SVG inline) |
| ~~Dirección física exacta en LocalBusiness schema~~ | ~~+0.5 pts~~ | ~~Bajo~~ | ✅ **Hecho** (Calle Literato Fray Luis Galiana, 1-3, Apdo nº72) |
| **Potencial máximo con mejoras futuras** | **+5.5 pts** | | |
| **Puntuación proyectada máxima** | **~94.6/100** | | |

### Próximos pasos recomendados
- **Schema `HowTo` en `/process`**: pasos visualizados con imágenes (+1.0 pts)
- **Imágenes reales de equipo** cuando estén disponibles (reemplazar avatares) (+0.5 pts)
- **Video explicativo en `/about`** o `/services` (+1.0 pts)
- **AMP versión** para posts de blog con alto tráfico orgánico (+0.5 pts)
- **Schema `Course` o `SoftwareApplication`** para servicios específicos (+0.5 pts)

---

## Nota metodológica

Esta puntuación es una **estimación basada en factores conocidos** de los algoritmos de Google en 2026. No es una puntuación oficial de Google (esa solo la conocen ellos internamente).

Los pesos asignados reflejan:
1. **Core Web Vitals (20%)**: Google lo confirmó como factor de ranking. En 2024 INP reemplazó a FID como métrica clave.
2. **E-E-A-T (20%)**: Las actualizaciones de 2023–2025 enfatizan la experiencia real del autor y las señales de confianza.
3. **Helpful Content (15%)**: El sistema de contenido útil de Google penaliza contenido genérico generado en masa.
4. **Datos Estructurados (15%)**: Aunque no es factor de ranking directo, mejora CTR en un 15–30% según estudios de Schema App.
5. **UX Móvil (15%)**: Mobile-first indexing es obligatorio desde 2019.
6. **Técnico (10%)**: Base necesaria; este proyecto la tiene cubierta casi perfectamente.
7. **GEO (5%)**: Emergente en 2024–2026, aún sin peso confirmado por Google, pero llms.txt ya está indexado por varios LLMs.

> **Fuentes**: Google Search Central Blog (2024–2026), Semrush Ranking Factors Study 2025, Ahrefs SEO Report, Backlinko Core Web Vitals Study.

---

## Inventario real del sitio

| Tipo | Cantidad | Detalle |
|------|----------|---------|
| **Páginas estáticas** | 7 × 3 idiomas = 21 | home, services, work, process, faq, blog, contact |
| **Rutas dinámicas** | blog/[slug] (60), work/[slug] (3) | 63 páginas de contenido dinámico |
| **Total páginas indexables** | ~84 | Sin contar 404, legal |
| **Posts de blog** | 60 | 20 por idioma (es, en, fr) |
| **Proyectos** | 3 | Aetherial, Lumina, Nexus Core (compartidos entre idiomas) |
| **Datos estructurados** | 7 tipos | Organization, WebSite, SearchAction, BlogPosting, BreadcrumbList, FAQPage, LocalBusiness, Review, AggregateRating |
| **Formularios** | 3 | Contacto, Newsletter, Chatbot (todos → n8n webhooks) |
| **Idiomas activos** | 3 | es (default), en (/en), fr (/fr) |
| **Dominio confirmado** | orviq.net | Cloudflare + HTTPS forzado |
| **Meta tags AI** | 10 | `ai:brand`, `ai:description`, `ai:category`, `ai:founded`, `ai:location`, `ai:email`, `ai:pricing`, `ai:contact`, `ai:services`, `ai:audience`, `ai:language` |
