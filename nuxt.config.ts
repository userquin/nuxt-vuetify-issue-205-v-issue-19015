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
      // comment this line to check drawer behavior
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
