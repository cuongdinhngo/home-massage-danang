// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: '~/tailwind.config.js'
  },
  experimental: {
    payloadExtraction: false
  },
  vite: {
    logLevel: 'error'
  },
  app: {
    baseURL: process.env.production ? '/home-massage-danang/' : '/',
    head: {
      title: 'Nuxt 3 Tailwind CSS Example',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A simple Nuxt 3 project with Tailwind CSS' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Playfair+Display:wght@400;700&display=swap',
          crossorigin: ''
        }
      ]
    }
  },
})