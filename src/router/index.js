import { createRouter, createWebHistory } from "vue-router";
import LogInView from "../views/LogInView.vue";
import HomeView from "../views/HomeView.vue";
import TransactionsView from "../views/TransactionsView.vue";
import TransactionInfo from "../views/TransactionInfo.vue";
import TransactionEdit from "../views/TransactionEdit.vue";
import TransactionDelete from "../views/TransactionDelete.vue";
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
    path: "/transactions/:id",
    name: "transactionInfo",
    component: TransactionInfo,
  },
  {
    path: "/transactions/:id/edit",
    name: "transactionEdit",
    component: TransactionEdit,
  },
  {
    path: "/transactions/:id/delete",
    name: "transactionDelete",
    component: TransactionDelete,
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
