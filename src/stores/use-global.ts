import { IsEmpty } from "@/utils/is-empty";
import { defineStore } from "pinia";

interface Locale {
  code: string;
  name: string;
}

interface State {
  theme: string;
  themeList: string[];
  locale: Locale;
  localeList: Locale[];
}

export const useGlobalStore = () => {
  const storage = window.storage;
  const axios = window.axios;
  const i18n = window.i18n.global;

  const defaultTheme = storage.getItem("theme") || "dark";
  return defineStore({
    id: "global",
    state: (): State => ({
      theme: defaultTheme,
      themeList: ["dark", "light"],
      locale: null,
      localeList: [
        {
          code: "en",
          name: "English",
        },
        {
          code: "id",
          name: "Bahasa Indonesia",
        },
      ],
    }),
    actions: {
      loadTheme(theme?: string) {
        this.theme = theme ? theme : defaultTheme;
        storage.setItem("theme", this.theme);
        document.querySelector("html").setAttribute("data-theme", this.theme);
      },

      async loadLocale(localeCode?: string) {
        if (!localeCode) localeCode = i18n.locale as string;

        this.locale = this.localeList.find((x) => x.code === localeCode);
        if (!this.locale) {
          return Promise.reject("Invalid locale code. Please choose another language");
        }

        if (!IsEmpty(i18n.messages[localeCode])) {
          if (i18n.locale !== localeCode) {
            this.setI18nHtmlAttribute(localeCode);
          }
          return Promise.resolve();
        }

        return axios.get(`/locale/${localeCode}.json`).then(({ data }) => {
          this.setI18nHtmlAttribute(localeCode);
          i18n.setLocaleMessage(localeCode, data);
        });
      },

      setI18nHtmlAttribute(localeCode: string) {
        const storage = window.storage;
        const axios = window.axios;
        const i18n = window.i18n;

        i18n.global.locale = localeCode;
        storage.setItem("locale", localeCode);

        axios.defaults.headers.common["Accept-Language"] = localeCode;
        document.querySelector("html").setAttribute("lang", localeCode);
        return localeCode;
      },
    },
  })();
};
