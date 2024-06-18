// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "vue3-carousel-nuxt",
    "nuxt-svgo",
    "@nuxt/content",
    "@nuxtjs/seo",
  ],
  svgo: {
    autoImportPath: "./assets/icons/",
    svgoConfig: {
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              convertColors: false,
            },
          },
        },
      ],
    },
  },
  css: ["vue-final-modal/style.css", "~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    typeCheck: true,
  },
  content: {},
});
