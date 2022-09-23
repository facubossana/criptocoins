<template>
  <div class="edit" v-if="error == ''">
    <h1>EDITAR TRANSACCIÓN</h1>
    <p><b>Criptomoneda: </b> {{ transaction.crypto_code }}</p>
    <p>
      <b>Cantidad: </b>
      <input
        type="number"
        step=".00001"
        v-model="amount"
        @input="validation()"
      />
    </p>
    <p>
      <b> Valor en pesos:</b>
      {{ transaction.crypto_amount * transaction.purchaseValue }}
    </p>
    <p>
      <b>Evento:</b> {{ transaction.action == "purchase" ? "Compra" : "Venta" }}
    </p>
    <p><b>Fecha:</b> {{ transaction.datetime }}</p>
    <button class="btn btnReturn" @click="backToHome()">Volver</button>
    <button class="btn btnEdit" @click="edit()">Confirmar</button>
  </div>
  <div v-else>
    <h1>{{ error }}</h1>
    <button class="btn btnReturn" @click="backToHome()">Volver</button>
  </div>
</template>

<script>
import labApi from "../services/labApi";
import { mapGetters } from "vuex";

export default {
  name: "TransactionEdit",
  data() {
    return {
      transactionId: "",
      error: "",
      amount: 0,
    };
  },
  computed: {
    ...mapGetters(["getTransactionById", "getWallet"]),
    transaction() {
      return this.getTransactionById(this.$route.params.id);
    },
    wallet() {
      return this.getWallet;
    },
  },
  methods: {
    backToHome() {
      this.$router.push({ name: "home" });
    },
    edit() {
      if (this.transaction.action == "sale") {
        const item = this.wallet.find(
          (item) => item.name == this.transaction.crypto_code
        );
        if (!item) {
          this.error = "No hay suficiente moneda para realizar esta operación.";
          return;
        }
        if (item.quantity + this.transaction.crypto_amount - this.amount < 0) {
          this.error = "No hay suficiente moneda para realizar esta operación.";
          return;
        }
        this.transaction.crypto_amount = this.amount;
        labApi
          .editTransaction(this.transaction)
          .then(this.$router.push({ name: "home" }))
          .catch((err) => console.log(err));
        return;
      } else {
        const item = this.wallet.find(
          (item) => item.name == this.transaction.crypto_code
        );
        if (item.quantity - this.transaction.crypto_amount + this.amount < 0) {
          this.error = "No hay suficiente moneda para realizar esta operación.";
          return;
        }
        this.transaction.crypto_amount = this.amount;
        labApi
          .editTransaction(this.transaction)
          .then(this.$router.push({ name: "home" }))
          .catch((err) => console.log(err));
        return;
      }
    },
    validation() {
      if (this.transaction.crypto_amount <= 0) {
        this.transaction.crypto_amount = 0.00001;
      }
    },
  },
  created: function () {
    this.amount = this.transaction.crypto_amount;
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
