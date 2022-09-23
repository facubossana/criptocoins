<template>
  <div class="home">
    <h2>¡¡ BIENVENIDO {{ user }} !!</h2>
    <div v-if="transactions.length == 0">
      <h1>El usuario {{ user }} no tiene movimientos hasta el momento</h1>
      <h4>Diríjase a TRANSACCIONES para empezar a operar</h4>
    </div>
    <div v-else>
      <table class="table">
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Valor</th>
          <th>Evento</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
        <tr v-for="transaction in transactions" :key="transaction._id">
          <td>{{ transaction.crypto_code }}</td>
          <td>{{ transaction.crypto_amount }}</td>
          <td>{{ transaction.money }}</td>
          <td>{{ transaction.action == "purchase" ? "Compra" : "Venta" }}</td>
          <td>{{ transaction.datetime }}</td>
          <td>
            <button class="btn btnInfo" @click="infoView(transaction._id)">
              Info
            </button>
            <button class="btn btnEdit" @click="editView(transaction._id)">
              Editar
            </button>
            <button class="btn btnDelete" @click="deleteView(transaction._id)">
              Eliminar
            </button>
          </td>
        </tr>
      </table>
    </div>
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
    infoView(transactionId) {
      this.$router.push({ path: `/transactions/${transactionId}` });
    },
    editView(transactionId) {
      this.$router.push({ path: `/transactions/${transactionId}/edit` });
    },
    deleteView(transactionId) {
      this.$router.push({ path: `/transactions/${transactionId}/delete` });
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
  background-color: #ffec64;
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
.btn {
  box-shadow: inset 0px 1px 0px 0px #fff6af;
  background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
  background-color: #ffec64;
  border-radius: 6px;
  border: 1px solid #ffaa22;
  display: inline-block;
  cursor: pointer;
  color: #333333;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffee66;
  margin-right: 4px;
}
</style>
