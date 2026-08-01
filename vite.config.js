import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative pathing works on GitHub Pages subpaths
  assetsInclude: ['**/*.PNG', '**/*.png', '**/*.jpg', '**/*.jpeg'],
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
