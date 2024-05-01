import { createRouter, createWebHistory } from "vue-router";
import LayoutMain from "../layouts/LayoutMain.vue";
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
      children: [
        { path: "", name: "about", component: () => import("../views/ComponentView.vue") },
      ],
    },
    {
      path: "/guestbook",
      component: LayoutMain,
      children: [
        { path: "", name: "guestbook", component: () => import("../views/GuestbookView.vue") },
      ],
    },
  ],
});

export default router;
