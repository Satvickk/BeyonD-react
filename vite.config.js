// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // specify the output directory for the build
  },
  base: '/BeyonD-react/', // Set the correct base URL
});
