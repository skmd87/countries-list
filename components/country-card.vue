<template>
  <v-card width="100%" class="fill-height">
    <v-img :src="country.flag" :aspect-ratio="16 / 9"> </v-img>
    <v-card-title>{{ country.name[[$i18n.locale]] }}</v-card-title>
    <v-card-subtitle>{{ country.officialName[$i18n.locale] }}</v-card-subtitle>
    <v-card-text>
      <v-sheet class="text-subtitle-1">{{ $t('common.currencies') }}</v-sheet>
      <div v-for="(currency, key) in country.currencies" :key="key">
        {{ key }}: {{ currency.name }}
        <!-- {{ currency.symbol }} -->
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      required: true,
    },
  },
}
</script>
