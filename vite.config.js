import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './', // Wichtig für Netlify Drop
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        kurse: resolve(__dirname, 'kurse.html'),
      },
    },
  },
});