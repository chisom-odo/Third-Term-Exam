import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "Home",  // used for the title tag
        description: "Home page", // used for the meta description tag
      },

      component: HomeView,
    },
    {
      path: "/repo/:id",
      name: "repo-id",
      meta: {
        title: "Repo",  // used for the title tag
        description: "Repo page", // used for the meta description tag
      },

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Repo.vue"),
    },
    {
      path: "/repolist",
      name: "repolist",
      meta: {
        title: "Repo List",  // used for the title tag
        description: "Repo List page", // used for the meta description tag
      },
      component: () => import("../views/RepoList.vue"),
    },
    {
      path: "/about",
      name: "about",
      meta: {
        title: "About",  // used for the title tag
        description: "About page", // used for the meta description tag
      },
      component: () => import("../views/AboutView.vue"),
    },

    {
      path:"/:catchAll(.*)",
      name: "Error Page",
      meta: {
        title: "Error Page",  // used for the title tag
        description: "Error Page", // used for the meta description tag
      },
      component: () => import("../views/Error.vue"),
    }
  ],
  linkExactActiveClass: "active",
  linkActiveClass: "active",
});

export default router;
