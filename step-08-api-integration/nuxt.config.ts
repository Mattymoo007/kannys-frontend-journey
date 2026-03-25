// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Runtime config — keeps API keys server-side only
  runtimeConfig: {
    owmApiKey: process.env.OWM_API_KEY ?? '',
    openaiApiKey: process.env.OPENAI_API_KEY ?? '',
  },

  app: {
    head: {
      title: 'Weather Dashboard',
      meta: [
        { name: 'description', content: 'A real-time weather dashboard built with Nuxt 3' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
})
