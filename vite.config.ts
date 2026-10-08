import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  // Keep local development and the existing root-hosted site working.
  base: mode === 'github-pages' ? '/LuxNails/' : '/',
  plugins: [react()],
}));
