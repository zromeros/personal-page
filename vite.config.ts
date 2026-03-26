import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages (proyecto): /nombre-del-repo/ — el workflow define VITE_BASE_PATH.
// Sitio usuario (usuario.github.io): deja VITE_BASE_PATH vacío o usa base: '/'.
const base = process.env.VITE_BASE_PATH ?? '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
