import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@hooks': '/src/hooks',
      '@store': '/src/store',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
      '@data': '/src/data',
    },
  },
  base:'https://mordok22012.github.io/portafolio',
})
