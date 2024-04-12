import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    noExternal: [
      '@ama-sdk/core'
    ]
  },
  plugins: [sveltekit()]
});
