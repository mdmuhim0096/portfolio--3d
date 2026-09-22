import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio--3d/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500,
  },
})