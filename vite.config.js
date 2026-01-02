import tailwindcss from '@tailwindcss/vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => ({
    base: mode === 'production' ? '/assets/dist' : '/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/pages/index.html'),
                about: resolve(__dirname, 'src/pages/about.html'),
            },
        },
    },
    plugins: [
        tailwindcss(),
    ],
}))
