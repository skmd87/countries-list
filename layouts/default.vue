<template>
  <v-app dark>
    <v-system-bar window dark class="app-bar" height="42">
      <v-container>
        <div class="d-flex align-center flex-wrap">
          <v-btn
            v-for="item in topBarItems"
            :key="item.label"
            text
            small
            :to="item.to"
            nuxt
          >
            {{ item.label }}
          </v-btn>

          <v-spacer />
          <v-btn
            exact
            exact-path
            exact-active-class="nnn"
            text
            class="mx-4"
            :to="switchLocalePath(otherLocale.code)"
            >{{ otherLocale.name }}</v-btn
          >
          <v-switch
            v-model="$vuetify.theme.dark"
            color="white"
            append-icon="mdi-theme-light-dark"
            hide-details
            x-small
            dense
            ripple
            class="mt-0 ml-4"
          ></v-switch>
        </div>
      </v-container>
    </v-system-bar>
    <v-app-bar
      flat
      shrink-on-scroll
      elevate-on-scroll
      fixed
      class="main-toolbar align-center"
      color="transparent"
      tile
      short
      app
      :style="{
        top: '32px',
      }"
    >
      <div class="fill-width">
        <v-container class="d-flex align-center">
          <nuxt-link
            :to="localePath({ name: 'index' })"
            class="pa-2 d-flex align-center fill-height"
          >
            <img
              class="main-logo fluid my-auto d-inline"
              :src="logo[theme][$i18n.locale]"
              style="min-width: 150px"
            />
          </nuxt-link>
          <div class="main-menu flex-nowrap d-flex">
            <v-btn
              v-for="(item, index) in mainMenuItems"
              :key="index"
              text
              :to="item.to"
              class="mx-1"
              nuxt
              exact
            >
              {{ item.label }}
            </v-btn>
          </div>
          <v-spacer />

          <div v-if="isDev" class="text-uppercase grey--text">
            {{ $vuetify.breakpoint.name }}
          </div>
        </v-container>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app dark>
      <div class="d-flex justify-space-between align-center fill-width">
        <div>INGOT Brokers &copy; {{ new Date().getFullYear() }}</div>
        <div>
          <span class="mx-4">Follow Us @</span>
          <v-btn
            v-for="(item, key) in socialLinks"
            :key="'socialLinks-' + key"
            icon
            target="_blank"
            :href="item.link"
            ><v-icon>{{ item.icon }}</v-icon></v-btn
          >
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import responsive from '~/mixins/responsive'
export default {
  name: 'DefaultLayout',
  mixins: [responsive],
  data() {
    return {
      logo: {
        dark: {
          ar: require('~/assets/img/logo-dark-ar.png'),
          en: require('~/assets/img/logo-dark-en.png'),
        },
        light: {
          ar: require('~/assets/img/logo-light-ar.png'),
          en: require('~/assets/img/logo-light-en.png'),
        },
      },
    }
  },
  computed: {
    mainMenuItems() {
      return [
        {
          label: this.$t('common.home'),
          to: this.localePath({ name: 'index' }),
        },
        {
          label: this.$t('common.contact-us'),
          to: this.localePath({ name: 'contact-us' }),
        },
        {
          label: this.$t('common.about-us'),
          to: this.localePath({ name: 'about-us' }),
        },
      ]
    },
    topBarItems() {
      return [
        {
          label: this.$t('common.about-us'),
          to: this.localePath({ name: 'under-construction' }),
        },
        {
          label: this.$t('common.contact-us'),
          to: this.localePath({ name: 'contact-us' }),
        },
        {
          label: this.$t('common.sign-up'),
          to: this.localePath({ name: 'under-construction' }),
        },
        {
          label: this.$t('common.login'),
          to: this.localePath({ name: 'under-construction' }),
        },
      ]
    },
    socialLinks() {
      return [
        {
          icon: 'mdi-facebook',
          href: 'https://www.facebook.com/',
        },
        {
          icon: 'mdi-instagram',
          href: 'https://www.instagram.com/',
        },
        {
          icon: 'mdi-twitter',
          href: 'https://www.twitter.com/',
        },
      ]
    },
    otherLocale() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      )[0]
    },
  },
  created() {
    this.setLocaleSettings(null, this.$i18n.locale)
  },
  mounted() {
    this.$i18n.onLanguageSwitched = (oldLocale, newLocale) => {
      this.setLocaleSettings(oldLocale, newLocale)
    }
  },
  methods: {
    setLocaleSettings(oldLocale, newLocale) {
      this.$vuetify.rtl = newLocale === 'ar'
      this.$vuetify.lang.current = newLocale
    },
  },
}
</script>
