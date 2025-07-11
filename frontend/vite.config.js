import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  base: "/potemkim/",
  css: {
    postcss: {
      plugins: [
        tailwindcss({ config: './tailwind.config.js' }),
        autoprefixer(),
      ],
    },
  },
})

