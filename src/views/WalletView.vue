<template>
  <div class="wallet">
    <h2>BILLETERA</h2>
    <div v-if="wallet.length == 0">
      <h1>El usuario {{ user }} no tiene movimientos hasta el momento</h1>
      <h4>Diríjase a TRANSACCIONES para empezar a operar</h4>
    </div>
    <div v-else>
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
      <button class="btn btnReturn" @click="backToHome()">Volver</button>
    </div>
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
  methods: {
    backToHome() {
      this.$router.push({ name: "home" });
    },
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
