import rules from "~/library/rules";
export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject("rules", rules(app));
};
