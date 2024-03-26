import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Portofolio3D/",
  plugins: [react()],
  build: {
    outDir: 'build', // Spécifie le nom du dossier de sortie
  },
})
