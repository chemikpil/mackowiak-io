// @ts-check
import node from '@astrojs/node';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [react()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
      config: {}
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});