import { defineStore } from "pinia";

interface State {
  locale: string;
  localeList: any;
}

export const useGlobalStore = defineStore({
  id: "global",
  state: (): State => ({
    locale: null,
    localeList: [],
  }),
  actions: {
    async loadLocale($locale?: string) {
      const axios = window.axios;
      const i18n = window.i18n;

      if (!$locale) $locale = i18n.global.locale as string;
      this.locale = $locale;

      if (this.localeList.includes($locale)) {
        if (i18n.global.locale !== $locale) {
          this.setI18nHtmlAttribut($locale);
        }
        return Promise.resolve();
      }
      return axios.get(`/locale/${$locale}.json`).then(({ data }) => {
        this.localeList.push($locale);
        this.setI18nHtmlAttribut($locale);

        i18n.global.setLocaleMessage($locale, data);
      });
    },

    setI18nHtmlAttribut($locale: string) {
      const storage = window.storage;
      const axios = window.axios;
      const i18n = window.i18n;

      i18n.global.locale = $locale;
      storage.setItem("locale", $locale);

      axios.defaults.headers.common["Accept-Language"] = $locale;
      document.querySelector("html").setAttribute("lang", $locale);
      return $locale;
    },
  },
});
