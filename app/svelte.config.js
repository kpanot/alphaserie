// import adapter from "@sveltejs/adapter-auto";
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
// import { sveltekit } from '@sveltejs/kit/vite'
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
  ],

  compilerOptions: {
    customElement: true
  },

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      fallback: "index.html",
      pages: 'build',
      assets: 'build',
      precompress: false,
      strict: true,
    }),
    paths: {
      base: process.env.BASE_PATH || ''
    },
    alias: {
      sdk: "../sdk/betaseries/src",
      store: "./src/lib/store"
    },
  },

  plugins: [
    // sveltekit(),
    SvelteKitPWA()
  ]
};

export default config;
