<template>
  <div>
    <h1 class="mb-4">{{ $t('common.latest-countries') }}</h1>
    <v-row>
      <v-col
        v-for="(country, i) in LazyLoadedCountries"
        :key="i"
        cols="6"
        md="4"
        lg="3"
      >
        <country-card :country="country" />
      </v-col>
    </v-row>
    <div
      v-intersect.quiet="{
        handler: increaseLimit,
        options: { rootMargin: '200px 0px 0px 0px' },
      }"
    ></div>
  </div>
</template>

<script>
import countriesStore from '~/mixins/countriesStore'
import meta from '~/mixins/meta'
export default {
  name: 'IndexPage',
  mixins: [countriesStore, meta],
  transition: 'slide-x-transition',
  data() {
    return {
      limit: 12,
      meta: {
        title: this.$t('common.home'),
      },
    }
  },
  computed: {
    LazyLoadedCountries() {
      return this.countries.slice(0, this.limit)
    },
  },
  created() {
    this.$vuetify.rtl = this.$i18n.locale === 'ar'
  },
  methods: {
    increaseLimit() {
      if (this.limit < this.countries.length) {
        this.limit += 12
      }
    },
  },
}
</script>
