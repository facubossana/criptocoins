<template>
  <div class="wallet">
    <H3>BILLETERA</H3>
    <table class="table">
      <tr>
        <th>Nombre</th>
        <th>Cantidad</th>
        <th>Valor</th>
      </tr>
      <tr v-for="crypto in wallet" :key="crypto.name">
        <td>{{ crypto.name }}</td>
        <td>{{ crypto.quantity }}</td>
        <td>{{ crypto.price.toFixed(2) }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "WalletView",
  computed: {
    ...mapGetters({
      wallet: "getWallet",
    }),
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
