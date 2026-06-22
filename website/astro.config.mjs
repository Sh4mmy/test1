import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.dig1tal.io',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en-GB',
        locales: {
          'en-GB': 'en-GB',
        },
      },
    }),
    tailwind(),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
        },
      },
    },
  },
});
