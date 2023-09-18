import { defineConfig } from "astro/config";
import { VitePWA } from "vite-plugin-pwa";
import tailwind from "@astrojs/tailwind";

// Define tu manifiesto aquí
import { manifest, seoConfig } from "./src/services/pwaConfig";

// https://astro.build/config
export default defineConfig({
  site: seoConfig.baseURL,
  integrations: [tailwind()],
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        manifest, // Asegúrate de que esta variable esté definida
        workbox: {
          globDirectory: "dist",
          globPatterns: [
            "**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
          ],
          navigateFallback: null,
        },
      }),
    ],
  },
});
