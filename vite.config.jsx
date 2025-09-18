import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,    // 👈 Fixed port
    strictPort: true,  // 👈 Don’t auto-switch if busy, throw error instead
  },
})
