export default {
    computed: {
        isDev() {
            return process.env.NODE_ENV === "development";
        },
        theme() {
            return this.$vuetify.theme.dark ? "dark" : "light";
        },
        isDark() {
            return this.theme === "dark";
        },
        isMobile() {
            return this.$vuetify.breakpoint.smAndDown;
        },
        isDesktop() {
            return this.$vuetify.breakpoint.mdAndUp;
        },
        isTablet() {
            return this.$vuetify.breakpoint.sm;
        },

    }
}