import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Product from "../views/Product.vue";
import License from "../views/License.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/license",
    name: "License",
    component: License,
  },
  {
    path: "/:path(.*).html",
    redirect: (to) => {
      return { path: to.params.path };
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
