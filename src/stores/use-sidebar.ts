import { SidebarMenuGroup } from "@/components/ui/sidebar";
import axios from "axios";
import { defineStore } from "pinia";

interface State {
  menuList: SidebarMenuGroup[];
  isOpen: boolean;
}

export const useSidebarStore = () => {
  return defineStore({
    id: "sidebar",
    state: (): State => ({
      menuList: [],
      isOpen: true,
    }),
    getters: {
      getMenuList: (state) => state.menuList,
    },
    actions: {
      async loadMenu() {
        return axios.get(`/data/sidebar.json`).then(({ data }) => {
          this.menuList = data;
        });
      },
      setIsOpen() {
        this.isOpen = !this.isOpen;
      },
    },
  })();
};
