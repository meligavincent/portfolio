import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/portfolio/",
  plugins: [react()],
  build: {
    outDir: 'build', // Spécifie le nom du dossier de sortie
  },
})
