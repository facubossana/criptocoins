<template>
  <div class="home">
    <h3>¡¡ BIENVENIDO {{ user }}!!</h3>
    <table class="table">
      <tr>
        <th>Nombre</th>
        <th>Cantidad</th>
        <th>Valor</th>
        <th>Acción</th>
        <th>Fecha</th>
      </tr>
      <tr v-for="transaction in transactions" :key="transaction.id">
        <td>{{ transaction.crypto_code }}</td>
        <td>{{ transaction.crypto_amount }}</td>
        <td>{{ transaction.money }}</td>
        <td>{{ transaction.action }}</td>
        <td>{{ transaction.datetime }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import labApi from "../services/labApi";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapGetters({
      user: "getUser",
      transactions: "getTransactions",
    }),
  },
  methods: {
    ...mapMutations(["setTransactions"]),
    setTransactionsInStore() {
      labApi
        .getTransactionsByUser(this.user)
        .then((res) => this.setTransactions(res.data))
        .catch((err) => console.log(err));
    },
  },
  created: function () {
    this.setTransactionsInStore();
  },
};
</script>
<style scoped>
.table {
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: #b6bad3;
  margin-bottom: 15px;
}
.table td,
.table th {
  text-align: center;
  padding: 8px;
}
.table td,
.table th {
  border-right: 2px solid #000000;
  font-size: 12px;
}
</style>
