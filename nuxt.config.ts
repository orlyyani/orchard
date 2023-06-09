export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  buildModules: [
    [
      "@nuxtjs/eslint-module",
      {
        fix: true,
      },
    ],
  ],
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
});
