export const state = () => ({

});

export const mutations = {

};

export const actions = {

    async nuxtServerInit(
        { commit, dispatch, state, getters },
        { req, $axios, app, $cookies, redirect, error, $config, $vuetify }
    ) {
        /* eslint-disable-next-line */
        await dispatch('countries/loadCountries').catch(error => {
            // send error to sentry
            console.error(error);
        });


    },
};
