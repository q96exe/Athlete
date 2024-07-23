// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-primevue'],
  css: [
    'bulma/css/bulma.css',
    'assets/css/main.css',
    'assets/css/landing_page.css'
  ]
})