import "./assets/tailwind.css";

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

axios.defaults.baseURL = import.meta.env.BASE_URL;
window.storage = localStorage;
window.axios = axios;
window.i18n = i18n;

app.use(pinia);
app.use(i18n);
app.use(router);
app.mount("body");
