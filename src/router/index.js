import { createRouter, createWebHistory } from "vue-router";
import LogInView from "../views/LogInView.vue";
import HomeView from "../views/HomeView.vue";
import TransactionsView from "../views/TransactionsView.vue";
import WalletView from "../views/WalletView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LogInView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/transactions",
    name: "transactions",
    component: TransactionsView,
  },
  {
    path: "/wallet",
    name: "wallet",
    component: WalletView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
