import { createVuetify } from 'vuetify';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vuetify:ready', (vuetify) => {
    console.log(vuetify)
  })
});
