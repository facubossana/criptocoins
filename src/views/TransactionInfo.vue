<template>
  <div>
    <h1>INFORMACIÓN</h1>
    <p><b>Criptomoneda: </b>{{ transaction.crypto_code }}</p>
    <p><b>Cantidad: </b>{{ transaction.crypto_amount }}</p>
    <p><b>Valor en pesos: </b>{{ transaction.money }}</p>
    <p>
      <b>Evento: </b>{{ transaction.action == "purchase" ? "Compra" : "Venta" }}
    </p>
    <p><b>Fecha: </b>{{ transaction.datetime }}</p>
    <button class="btn btnReturn" @click="backToHome()">Volver</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TransactionInfo",
  data() {
    return {
      transactionId: "",
    };
  },
  computed: {
    ...mapGetters(["getTransactionById"]),
    transaction() {
      return this.getTransactionById(this.$route.params.id);
    },
  },
  methods: {
    backToHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
<style scoped>
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
