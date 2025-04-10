export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/styles/global.scss'],

  modules: [
    '@nuxtjs/google-fonts'        
  ],

  googleFonts: {
    families: {
      'Open Sans': [400, 700],
      'Montserrat': true
    }
  }
})
