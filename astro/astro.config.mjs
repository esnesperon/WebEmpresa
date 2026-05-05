// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://orviq.net',
  output: 'static',
    i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: false, // /servicios (not /es/servicios)
    },
  },
  trailingSlash: 'never',
  image: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'lh3.googleusercontent.com'],
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'es',
      locales: {
        es: 'es-ES',
        en: 'en-US',
        fr: 'fr-FR',
      },
    },
    changefreq: 'weekly',
    priority: 0.7,
    serialize(item) {
      const url = item.url;
      if (url === 'https://orviq.net' || url === 'https://orviq.net/' || url.endsWith('/en') || url.endsWith('/fr')) {
        item.priority = 1.0;
      } else if (url.includes('/blog')) {
        item.priority = 0.5;
      } else if (url.includes('/aviso-legal') || url.includes('/privacidad') || url.includes('/cookies')) {
        item.priority = 0.3;
      } else {
        item.priority = 0.7;
      }
      return item;
    },
  })],
});
