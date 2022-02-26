import { mapActions, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('countries', [
            'countries',
            // 'isCountriesLoaded',
        ]),
    },
    methods: {
        ...mapActions('countries', [
            'loadCountries',
        ]),
    }
}