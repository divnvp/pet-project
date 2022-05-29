// Dependencies
import { createRouter, createWebHistory } from "vue-router";

// Components
import HomePage from "../pages/HomePage.vue";
import EarthPage from "../pages/EarthPage.vue";

const routes = [
  { path: "/", component: HomePage, },
  { path: "/earth", component: EarthPage, },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});