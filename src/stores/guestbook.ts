import { defineStore } from "pinia";

interface Guestbook {
  name: string;
  comment: string;
}

interface State {
  lists: Guestbook[];
}

export const useGuestbookStore = defineStore({
  id: "guesbook",
  state: (): State => ({
    lists: [],
  }),
  getters: {
    getLists: (state): Guestbook[] => {
      const storage = window.storage;
      state.lists = JSON.parse(storage.getItem("guestbook")) || [];
      return state.lists;
    },
  },
  actions: {
    save(name: string, comment: string) {
      const storage = window.storage;
      this.lists.push({ name, comment });
      storage.setItem("guestbook", JSON.stringify(this.lists));
    },
  },
});
