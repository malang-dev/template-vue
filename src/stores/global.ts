import { defineStore } from "pinia";

interface State {
  theme: string;
  themeList: string[];
  locale: string;
  localeList: any;
}

export const useGlobalStore = () => {
  const storage = window.storage;
  const axios = window.axios;
  const i18n = window.i18n;

  const defaultTheme = storage.getItem("theme") || "dark";
  return defineStore({
    id: "global",
    state: (): State => ({
      theme: defaultTheme,
      themeList: ["dark", "light"],
      locale: null,
      localeList: [],
    }),
    actions: {
      loadTheme(theme?: string) {
        this.theme = theme ? theme : defaultTheme;
        storage.setItem("theme", this.theme);
        document.querySelector("html").setAttribute("data-theme", this.theme);
      },

      async loadLocale($locale?: string) {
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
  })();
};
