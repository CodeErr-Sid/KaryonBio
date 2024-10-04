// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      title: "",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  plugins: [],
  css: ["~/assets/base.css"],
  http: {},
  build: {
    transpile: [""],
  },
  runtimeConfig: {},
  googleFonts: {
    families: { Nunito: true },
  },
  vite: {
    resolve: {
      alias: {
        gsap: "gsap/dist/gsap.js",
      },
    },
  },
});
