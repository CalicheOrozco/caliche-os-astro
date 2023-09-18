import type { ManifestOptions } from "vite-plugin-pwa";
import { Avatar } from "../images/images";

export const manifest: Partial<ManifestOptions> = {
  name: "Yo nunca, nunca Mexican version",
  short_name: "Yo nunca, nunca",
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
};

export const seoConfig = {
  baseURL: "https://www.calicheorozco.com/", // Change this to your production URL.
  description: "Caliche Orozco Software Frontend Developer portfolio", // Change this to be your website's description.
  type: "website",
  image: {
    url: Avatar, // Change this to your website's thumbnail.
    alt: "Caliche Orozco Frontend Develiper", // Change this to your website's thumbnail description.
    width: 1200,
    height: 630,
  },
  siteName: "Caliche Orozco Portfolio", // Change this to your website's name,
  twitter: {
    card: "summary_large_image",
  },
};
