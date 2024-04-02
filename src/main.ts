import "./assets/main.css";

import axios from "axios";
import { createPinia } from "pinia";
import { createApp } from "vue";

import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
const i18n = createI18n({
  locale: localStorage.getItem("locale") || "en",
});

window.storage = localStorage;
window.axios = axios;
window.i18n = i18n;

app.use(pinia);
app.use(i18n);
app.use(router);
app.mount("body");
