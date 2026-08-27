import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 1. Match any request starting with /api
      '/api': {
        // 2. Target destination (your backend API server)
        target: 'http://localhost:3000', 
        // 3. Changes the origin of the host header to the target URL
        // changeOrigin: true,
        // 4. Optional: Remove the '/api' prefix before sending it to the backend
        rewrite: (path) => path.replace(/^\/api/, '') 
      },
    },
  },
})
