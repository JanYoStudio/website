import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("@/views/Product.vue"),
  },
  {
    path: "/license",
    name: "License",
    component: () => import("@/views/License.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
