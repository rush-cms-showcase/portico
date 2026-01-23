// @ts-check
import { defineConfig } from 'astro/config'
import Icons from 'unplugin-icons/vite'
import tailwindcss from '@tailwindcss/vite'

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
})
