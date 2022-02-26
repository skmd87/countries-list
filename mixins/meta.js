export default {
    data() {
        return {
            meta: {
                title: "",
                description: "",
            }
        }
    },
    head() {
        return {
            title: this.meta.title,
            meta: [
                { name: "description", hid: 'description', content: this.meta.description },

            ],
            link: [
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                },
                {
                    href: "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&display=swap&subset=arabic",
                    rel: "stylesheet",
                },
            ],
        };
    }
}