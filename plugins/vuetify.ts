export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vuetify:before-create', ({ vuetifyOptions}) => {
    console.log(vuetifyOptions.ssr)
  })
});
