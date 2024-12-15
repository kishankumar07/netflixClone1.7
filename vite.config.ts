import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8989, 
  },
  build: {
    outDir: 'dist', // Output directory for the build
    assetsDir: 'assets', // Directory for assets inside the output directory
    rollupOptions: {
      input: {
        main: './index.html', // Entry point 
      },
    },
  },
  resolve: {
    alias: {
      '@assets': '/src/assets', // Alias for easier imports of assets
    },
  },
})

