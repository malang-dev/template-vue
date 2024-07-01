import { defineStore } from "pinia";

export const useSidebarToggle = () => {
  return defineStore({
    id: "sidebar-toggle",
    state: () => ({
      isOpen: true,
    }),
    actions: {
      setIsOpen() {
        this.isOpen = !this.isOpen;
      },
    },
  })();
};
