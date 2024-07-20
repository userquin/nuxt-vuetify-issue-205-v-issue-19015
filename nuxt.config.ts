export default defineNuxtConfig({
  compatibilityDate: '2024-07-20',
  modules: [
    '@unocss/nuxt',
    'vuetify-nuxt-module'
  ],
  unocss: {
    icons: {
        scale: 1.2
    }
  },
  vuetify: {
    moduleOptions: {
      ssrClientHints: {
        viewportSize: true,
      }
    },
    vuetifyOptions: {
      icons: {
        defaultSet: 'unocss-mdi'
      }
    }
  }
});
