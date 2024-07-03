import LayoutAuth from "@/layouts/LayoutAuth.vue";
import LayoutMain from "@/layouts/LayoutMain.vue";
import HomeView from "@/views/HomeView.vue";
import UnautorizedView from "@/views/UnautorizedView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LayoutMain,
      children: [
        { path: "", name: "home", component: HomeView },
        { path: "unautorized", name: "unautorized", component: UnautorizedView },
      ],
    },
    {
      path: "/auth",
      component: LayoutAuth,
      children: [
        { path: "login", name: "login", component: () => import("@/views/LoginView.vue") },
        {
          path: "register",
          name: "register",
          component: () => import("@/views/RegisterView.vue"),
        },
      ],
    },
  ],
});

export default router;
