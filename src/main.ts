import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";

Sentry.init({
  dsn:
    "https://f8b7da290fa94a02a4c5c1c6ee3407dc@o438599.ingest.sentry.io/5403615",
  integrations: [
    new VueIntegration({ Vue, attachProps: true, logErrors: true })
  ]
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
