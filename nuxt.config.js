import colors from 'vuetify/es5/util/colors'
import ar from "vuetify/es5/locale/ar";
import en from "vuetify/es5/locale/en";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Ingot Brokers',
    title: 'Ingot Brokers',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/general.scss",],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/rules.js",],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "@nuxtjs/i18n",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    options: {
      customProperties: true,
      variations: false,
    },
    defaultAssets: {
      // icons: false, // if you are using ur own icons
      font: false, // if you are using ur own font
    },
    lang: {
      locales: { ar, en },
      current: "en",
    },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  i18n: {

    locales: [
      {
        code: "ar",
        iso: "ar-JO",
        file: "ar.json",
        name: "??????????????",
      },

      { code: "en", iso: "en-US", file: "en.json", name: "English", isCatchallLocale: true, },
    ],
    lazy: {
      skipNuxtState: false,
    },
    defaultLocale: "en",
    strategy: "prefix",
    langDir: "i18n/",
    vueI18n: {
      fallbackLocale: "en",
    },
    seo: true,
    detectBrowserLanguage: false,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
