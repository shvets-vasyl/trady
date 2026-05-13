// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // -------------------------------------------------
  // ⚙️ Core
  // -------------------------------------------------
  compatibilityDate: "2025-07-15",

  typescript: {
    shim: false,
  },

  devtools: {
    enabled: false,
  },

  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  // -------------------------------------------------
  // 📦 Modules
  // -------------------------------------------------
  modules: ["@nuxt/eslint"],

  // -------------------------------------------------
  // 🎨 Global CSS
  // -------------------------------------------------
  css: ["@/assets/styles/main.scss"],

  // -------------------------------------------------
  // ⚡ Vite
  // -------------------------------------------------
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/utils/mixins.scss" as *;\n',
        },
      },
    },
  },

  // -------------------------------------------------
  // 🏛️ App Meta / Head
  // -------------------------------------------------
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      title: "Ape first. Trade smarter.",

      htmlAttrs: {
        lang: "en",
      },

      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#0e0e0e" },

        // SEO / Social
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image:width", content: "600" },
        { property: "og:image:height", content: "314" },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:site_name", content: "Project Title" },
        { property: "og:type", content: "website" },

        // Default title/description
        { name: "title", content: "Ape first. Trade smarter." },
        {
          name: "description",
          content: "the memecoin trading terminal that keeps you ahead.",
        },
      ],

      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
  },

  devServer: {
    port: 6969,
  },
})
