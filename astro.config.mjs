import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import icon from "astro-icon";
import { remarkReadingTime } from "./src/scripts/remark-reading-time.mjs";
import undiciRetry from "./src/scripts/undici-retry.ts";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "https://dhc-editorial.netlify.app",

  image: {
    // Allow remote Pexels images
    domains: ["images.pexels.com"],
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },

  integrations: [
    icon(),
    sitemap(),
    mdx(),
    undiciRetry(),
    react(),
  ],

  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "rose-pine-dawn",
      defaultColor: false,
      themes: {
        light: "rose-pine-dawn",
        dark: "tokyo-night",
      },
      langs: [],
      wrap: true,
    },
    gfm: false,
    remarkPlugins: [remarkGfm, remarkMath, remarkReadingTime],
    rehypePlugins: [rehypeKatex],
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Fraunces",
      cssVariable: "--font-fraunces",
      display: "swap",
      fallbacks: ["serif"],
      weights: [300, 400, 500, 600, 700],
      styles: ["normal", "italic"],
      optimizedFallbacks: true,
    },
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      display: "swap",
      fallbacks: ["sans-serif"],
      weights: [300, 400, 500, 600, 700],
      optimizedFallbacks: true,
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      display: "swap",
      fallbacks: ["monospace"],
      weights: [400, 500],
      optimizedFallbacks: true,
    },
  ],

  experimental: {
    clientPrerender: true,
  },

  build: {
    concurrency: 4,
  },

  security: {
    checkOrigin: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
