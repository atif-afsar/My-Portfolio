import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui': ['framer-motion', 'react-icons'],
          'particles': ['react-tsparticles', 'tsparticles', 'tsparticles-slim'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'react-icons',
      'react-tsparticles',
      'tsparticles',
      'tsparticles-slim'
    ],
  },
})
