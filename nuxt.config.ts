// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      autoSubfolderIndex: false
    }
  }
})
