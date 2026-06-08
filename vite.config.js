import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Front Vite + React. Les fonctions serverless vivent dans /api (Vercel).
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 }
})
