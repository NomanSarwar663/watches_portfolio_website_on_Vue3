import { createWebHistory, createRouter } from "vue-router";
import Home from "@/Pages/Home.vue";
import Products from "@/Pages/Products.vue";
import ProductDetail from "@/Pages/ProductDetail.vue";
import ContactUs from "@/Pages/ContactUs.vue";
import AboutUsVue from "@/Pages/AboutUs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/products/:watchName",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUsVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
