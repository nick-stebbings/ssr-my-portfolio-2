export default { 
  env: {
    WEBFORM: process.env.WEBFORM
  },
  publicRuntimeConfig: {
    webform: process.env.WEBFORM
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    css: ['./assets/styles/main.css'],
    title: 'Nick Stebbings (Design Portfolio)',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300&family=Montserrat:wght@300;400;500;600&family=Rubik:wght@300;400;500;600&family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&display=swap'
    },
  ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/bootstrap-vue', '~/plugins/device'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/device', 'nuxt-lazy-load','bootstrap-vue/nuxt'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.resolve.alias['node-fetch-native'] = require.resolve('node-fetch')
    },
    standalone: true,
  },
}
