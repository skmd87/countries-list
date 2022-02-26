<template>
  <div>
    <h1 class="mb-4">{{ $t('common.contact-us') }}</h1>
    <p>
      {{ $t('common.lorem-2') }}
    </p>
    <v-row justify="center">
      <v-col cols="12" md="7">
        <div>
          <div class="relative">
            <div class="absolute index-1">
              <v-alert
                v-model="isSentSuccessfully"
                type="success"
                transition="scale-transition"
                dismissible
                elevation="5"
                border="left"
                icon="mdi-check"
              >
                {{ $t('success.contact-us-sent', { timeDate, tz }) }}
              </v-alert>
            </div>
          </div>
          <v-form ref="contactForm" v-model="isFormValid">
            <v-row dense align="baseline">
              <v-col v-bind="labelCol">
                <label>{{ $t('common.first-name') }}</label>
              </v-col>
              <v-col v-bind="fieldCol">
                <v-text-field
                  v-model="form.firstName"
                  type="text"
                  filled
                  dense
                  outlined
                  :rules="[$rules.required($t('common.first-name'))]"
                ></v-text-field>
              </v-col>
              <v-col v-bind="labelCol">
                <label>{{ $t('common.last-name') }}</label>
              </v-col>
              <v-col v-bind="fieldCol">
                <v-text-field
                  v-model="form.lastName"
                  type="text"
                  filled
                  dense
                  outlined
                  :rules="[$rules.required($t('common.last-name'))]"
                ></v-text-field>
              </v-col>
              <v-col v-bind="labelCol">
                <label>{{ $t('common.email') }}</label>
              </v-col>
              <v-col v-bind="fieldCol">
                <v-text-field
                  v-model="form.email"
                  type="email"
                  filled
                  dense
                  outlined
                  :rules="[
                    $rules.required($t('common.email')),
                    $rules.email($t('common.email')),
                  ]"
                ></v-text-field>
              </v-col>
              <v-col v-bind="labelCol">
                <label>{{ $t('common.mobile') }}</label>
              </v-col>
              <v-col v-bind="fieldCol">
                <div class="d-flex">
                  <v-autocomplete
                    v-model="form.mobileCountry"
                    filled
                    dense
                    outlined
                    :items="mobileCountries"
                    style="max-width: 140px"
                    @change="handleMobileCountryChange"
                  >
                    <template #item="{ item, on }">
                      <v-list-item two-line dense v-on="on">
                        <v-list-item-action>
                          <v-img
                            width="24"
                            height="14"
                            :src="item.flag"
                          ></v-img>
                        </v-list-item-action>
                        <v-list-item-content>
                          <v-list-item-title>
                            {{ item.value }}
                          </v-list-item-title>
                          <v-list-item-subtitle>
                            {{ item.text }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </template>
                    <template #selection="{ item }">
                      <div class="d-flex align-center">
                        <v-img
                          width="28"
                          class="rounded"
                          :aspect-ratio="16 / 9"
                          :src="item.flag"
                        ></v-img>
                        <div class="ms-2">{{ item.value }}</div>
                      </div>
                    </template>
                  </v-autocomplete>
                  <v-text-field
                    v-model="form.mobile"
                    type="tel"
                    class="ms-2"
                    filled
                    dense
                    outlined
                    :rules="[
                      $rules.required($t('common.mobile')),
                      $rules.numeric($t('common.mobile')),
                      $rules.minLength($t('common.mobile'), 8),
                      $rules.maxLength($t('common.mobile'), 11),
                    ]"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col v-bind="labelCol">
                <label>{{ $t('common.country') }}</label>
              </v-col>
              <v-col v-bind="fieldCol">
                <v-select
                  v-model="form.country"
                  :items="countries"
                  item-value="cca2"
                  filled
                  dense
                  outlined
                  :rules="[$rules.required($t('common.country'))]"
                >
                  <template #item="{ item, on }">
                    <v-list-item dense v-on="on">
                      <v-list-item-action>
                        <v-img width="24" height="14" :src="item.flag"></v-img>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>
                          {{ item.name[$i18n.locale] }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                  <template #selection="{ item }">
                    <div class="d-flex align-center">
                      <v-img
                        width="28"
                        class="rounded"
                        :aspect-ratio="16 / 9"
                        :src="item.flag"
                      ></v-img>
                      <div class="ms-2">{{ item.name[$i18n.locale] }}</div>
                    </div>
                  </template>
                </v-select>
              </v-col>
              <v-col v-bind="labelCol">
                <label>{{ $t('common.message') }}</label>
              </v-col>
              <v-col v-bind="fieldCol">
                <v-textarea
                  v-model="form.message"
                  type="textarea"
                  filled
                  dense
                  outlined
                  :rules="[$rules.required($t('common.message'))]"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-form>
          <div class="d-flex">
            <v-spacer />
            <v-btn
              :disabled="!isFormValid"
              :loading="isLoading"
              color="accent"
              @click="submitForm"
            >
              {{ $t('common.submit') }}
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="5">
        <v-card>
          <v-card-title>{{ $t('common.reach-us') }}</v-card-title>
          <v-card-text>
            <div>
              {{ $t('common.address') }}:
              <v-btn
                plain
                href="https://www.google.com/maps/place/INGOT+Brokers/@31.9644553,35.8659257,17z/data=!3m1!4b1!4m5!3m4!1s0x151ca104b03c8fbf:0xa737b9ec2ee7aae3!8m2!3d31.9644508!4d35.8681144"
                target="_blank"
                class="px-2 text-capitalize"
                >{{ $t('common.address-1') }}</v-btn
              >
            </div>
            <div>
              {{ $t('common.telephone') }}:
              <v-btn plain href="tel:065885260" class="px-2" dir="ltr"
                >(06) 5885260</v-btn
              >
            </div>
            <div>
              {{ $t('common.website') }}:
              <v-btn
                plain
                class="px-2"
                color="primary"
                href="https://www.ingotbrokers.com.jo/"
                target="_blank"
              >
                ingotbrokers.com.jo</v-btn
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import countriesStore from '~/mixins/countriesStore'
import meta from '~/mixins/meta'

const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)
export default {
  name: 'ContactUs',
  mixins: [countriesStore, meta],
  transition: 'slide-x-transition',
  data() {
    return {
      isFormValid: false,
      isLoading: false,
      form: {
        firstName: null,
        lastName: null,
        email: null,
        mobile: null,
        mobileCountry: null,
        country: null,
        message: null,
      },
      timeDate: null,
      tz: null,
      isSentSuccessfully: false,
      labelCol: {
        cols: '12',
        md: '4',
        lg: '3',
      },
      fieldCol: {
        cols: '12',
        md: '8',
        lg: '9',
      },
      meta: {
        title: this.$t('common.contact-us'),
      },
    }
  },
  computed: {
    mobileCountries() {
      const codes = []
      this.countries.forEach((country) => {
        country.idd?.suffixes?.forEach((suffix) => {
          codes.push({
            text: country.name[this.$i18n.locale],
            value: country.idd.root + suffix,
            flag: country.flag,
            cca2: country.cca2,
          })
        })
      })
      return codes
    },
    d() {
      return this.countries.filter((country) => country.tz.startsWith('UTC'))
    },
  },
  methods: {
    submitForm() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false

        let tz = this.countries
          .find((country) => country.cca2 === this.form.country)
          .tz.replace('UTC', '')

        this.tz = tz

        tz = tz.split(':')
        tz = parseInt(tz[0]) + parseInt(tz[1]) * 60

        this.timeDate = dayjs().utcOffset(tz).format('YYYY-MM-DD HH:mm:ss')
        this.isSentSuccessfully = true
        this.$refs.contactForm.reset()
      }, 1000)
    },
    handleMobileCountryChange(value) {
      if (!this.form.country) {
        this.form.country = this.mobileCountries.find(
          (c) => c.value === value
        ).cca2
      }
    },
  },
}
</script>
