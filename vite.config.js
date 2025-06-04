import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

export default defineConfig({
  plugins: [
    TanStackRouterVite(), // adds TanStack Router support
    react({
      jsxImportSource: 'react', // ensures jsx transformation work correctly
      include: ['/*.jsx', '/*.js'], // include .jsx and .js files
    }),
  ],
});
