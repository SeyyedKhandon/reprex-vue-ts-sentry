import Vue from "vue";
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";

Sentry.init({
  dsn: "https://8b05f9d07fe149539524193e2cb8341b@sentry.service.io/14",
  integrations: [ new VueIntegration({ Vue, attachProps: true, logErrors: true }) ]
});
