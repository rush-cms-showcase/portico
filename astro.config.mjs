// @ts-check
import { defineConfig } from 'astro/config'
import Icons from 'unplugin-icons/vite'
import tailwindcss from '@tailwindcss/vite'

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [
          tailwindcss(),
          Icons({
              compiler: 'astro',
          }),
      ],
  },
  site: 'https://porticoreformas.com.br',
  integrations: [sitemap()],
})