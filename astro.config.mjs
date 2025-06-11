import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://david-dasilva.github.io',
  base: '/',
  trailingSlash: "always",
  integrations: [tailwind()],
});
