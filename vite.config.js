import { VitePWA } from "vite-plugin-pwa";

export default {
  plugins: [
    VitePWA({
      manifest: {
        name: "Yo nunca, nunca Mexican version",
        short_name: "PWA",
        description:
          "Un Yo nunca, nunca para jugar con tus amigos desarollado por Caliche Orozco",
        theme_color: "#0f172a",
        background_color: "#0f172a",
        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg}"],
        globIgnores: ["**/*.map"],
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/domain\.to\.cache/,
            handler: "NetworkFirst",
            options: {
              cacheName: "my-cache",
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
};
