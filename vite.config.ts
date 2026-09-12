import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  // Served from https://khalil-pal.github.io/my-website/ — change to '/' for a custom domain.
  base: '/my-website/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(import.meta.dirname, 'src/assets'),
    },
  },
  server: { port: 5173, host: true },
  build: { outDir: 'dist', emptyOutDir: true },
});
