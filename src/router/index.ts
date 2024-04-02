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
      path: "/about",
      component: LayoutMain,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      children: [{ path: "", name: "about", component: () => import("../views/AboutView.vue") }],
    },
  ],
});

export default router;
