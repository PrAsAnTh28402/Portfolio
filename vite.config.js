import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Important for hosting on Vercel
  base: './', // ensures relative paths for JS, CSS, images work
  
  // Optional: define build options
  build: {
    outDir: 'dist', // default folder, Vercel expects this
    emptyOutDir: true,
  },
  
  // Optional: server settings for local dev
  server: {
    port: 5173,
    open: true,
  },
})
