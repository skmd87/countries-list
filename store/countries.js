export const state = () => ({
    countries: [],
    isCountriesLoaded: false,
});
export const getters = {
    countries: state => state.countries,
};

export const mutations = {
    setCountries(state, countries) {
        state.countries = countries
    },
    setCountriesLoaded(state, isCountriesLoaded) {
        state.isCountriesLoaded = isCountriesLoaded
    }
};

export const actions = {
    loadCountries({ commit, dispatch, state, getters }) {
        if (state.isCountriesLoaded) {
            return Promise.resolve()
        }
        return this.$axios.$get("https://restcountries.com/v3.1/all").then(response => {
            // console.log(response)
            const data = response.map(country => {
                return {
                    name: { en: country.name.common, ar: country.translations.ara.common },
                    officialName: { en: country.name.official, ar: country.translations.ara.official },
                    currencies: country.currencies,
                    flag: country.flags.svg,
                    idd: country.idd,
                    cca2: country.cca2,
                    tz: country.timezones[0],
                }
            });
            commit('setCountries', data);
            commit('setCountriesLoaded', true);
        });
    },
}
