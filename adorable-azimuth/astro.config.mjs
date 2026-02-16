// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import preact from '@astrojs/preact';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://victor-alcantara.vercel.app',
  i18n: {
    locales: ['pt-br', 'en'],
    defaultLocale: 'pt-br',
    routing: {
      prefixDefaultLocale: false
    }
  },

  adapter: vercel({
    
  }),

  integrations: [preact()],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: true
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
});
