import { createRouter, createWebHistory } from "vue-router";
import LayoutMain from "../layouts/LayoutMain.vue";
import ComponentView from "../views/ComponentView.vue";
import GuestbookView from "../views/GuestbookView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LayoutMain,
      children: [{ path: "", name: "home", component: HomeView }],
    },
    {
      path: "/components",
      component: LayoutMain,
      children: [{ path: "", name: "about", component: ComponentView }],
    },
    {
      path: "/guestbook",
      component: LayoutMain,
      children: [{ path: "", name: "guestbook", component: GuestbookView }],
    },
  ],
});

export default router;
