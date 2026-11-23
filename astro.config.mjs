import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://huzurandco.de',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
