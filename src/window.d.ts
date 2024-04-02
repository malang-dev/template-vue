import type { AxiosStatic } from "axios";
import type { I18n } from "vue-i18n";
import "vue-router";

// To ensure it is treated as a module, add at least one `export` statement
export {};

declare global {
  interface Window {
    i18n: I18n;
    axios: AxiosStatic;
    storage: Storage;
  }
}
