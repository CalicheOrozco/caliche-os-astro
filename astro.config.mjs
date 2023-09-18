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
        manifest,
        workbox: {
          globDirectory: "dist",
          globPatterns: [
            "**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
          ],
          navigateFallback: null,
          // Configuraciones adicionales de Workbox
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/www\.calicheorozco\.com\//,
              handler: "NetworkFirst",
              options: {
                cacheName: "Caliche-cache",
                expiration: {
                  maxEntries: 200,
                  maxAgeSeconds: 3000,
                },
              },
            },
          ],
          additionalManifestEntries: [
            "index.html",
            "projects/index.html",
            "skills/index.html",
            "experience/index.html",
            "about/index.html",
            "contact/index.html",
            "resume/index.html",
            "nuncanunca/index.html",
            "neverhaveiever/index.html",
            // otros archivos que quieras precargar
          ],
        },
      }),
    ],
  },
});
