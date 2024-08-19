import { createRouter, createWebHistory } from "vue-router";
import HomePge from "../views/HomePge.vue";
import ServicePage from "../views/servicePage.vue";
import FeaturedCars from "../views/FeaturedCars.vue";
import NewestCars from "../views/NnwCars.vue";
import BrandPage from "../views/BrandPage.vue";
import ConcatPage from "../views/ConcatPage.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePge,
  },
  {
    path: "/service",
    name: "service",
    component: ServicePage,
  },
  {
    path: "/FeaturedCars",
    name: "featuredcars",
    component: FeaturedCars,
  },
  {
    path: "/NewestCars",
    name: "newestcars",
    component: NewestCars,
  },
  {
    path: "/BrandPage",
    name: "brandpage",
    component: BrandPage,
  },
  {
    path: "/ConcatPage",
    name: "concatpage",
    component: ConcatPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
