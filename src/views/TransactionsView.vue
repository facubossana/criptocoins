<template>
  <div class="transactions">
    <h2>TRANSACCIONES</h2>
    <div v-if="mainView">
      <button
        class="btn btnCrypto"
        v-for="coin in criptos"
        @click="goToSecondView(coin.type, coin.name)"
        :key="coin.type"
      >
        comprar / vender {{ coin.name }}</button
      ><br />
      <button class="btn btnReturn" @click="backToHome()">Volver</button>
    </div>
    <div v-if="!mainView && !waitingView">
      <button class="btn btnReturn" @click="returnMainView()">Volver</button>
      <div v-for="agency in Object.keys(agencies)" :key="agency">
        <h3>Nombre: {{ agency }}</h3>
        <p>Precio Compra: {{ agencies[agency].totalAsk }}</p>
        <p>Precio Venta: {{ agencies[agency].totalBid }}</p>
        <input id="inpNumber" type="number" v-model="quantity" min="0.000001" />
        <p v-if="errorMessage != ''">{{ errorMessage }}</p>
        <button
          class="btn btnSell"
          @click="buySellCripto('purchase', agencies[agency].totalAsk)"
        >
          Comprar {{ name }}
        </button>
        <button
          class="btn btnBuy"
          @click="buySellCripto('sale', agencies[agency].totalBid)"
        >
          Vender {{ name }}
        </button>
      </div>
      <button class="btn btnReturn" @click="returnMainView()">Volver</button>
    </div>
    <div v-if="waitingView">
      <h1>Espere un momento, por favor</h1>
    </div>
  </div>
</template>

<script>
import labApi from "../services/labApi";
import criptoYa from "../services/CriptoYa";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TransactionsView",
  data() {
    return {
      mainView: true,
      waitingView: false,
      type: "",
      name: "",
      agencies: [],
      quantity: 0,
      errorMessage: "",
      criptos: [
        {
          type: "btc",
          name: "Bitcoin",
        },
        {
          type: "eth",
          name: "Ethereum",
        },
        {
          type: "dai",
          name: "DAI",
        },
        {
          type: "usdc",
          name: "USDC",
        },
        {
          type: "usdt",
          name: "USDT",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      transaction: "getTransactions",
      wallet: "getWallet",
    }),
  },
  methods: {
    backToHome() {
      this.$router.push({ name: "home" });
    },
    ...mapMutations([]),
    goToSecondView(type, name) {
      this.type = type;
      this.name = name;
      this.mainView = false;
      this.obtainValues(type);
    },
    returnMainView() {
      this.type = "";
      this.name = "";
      this.mainView = true;
    },
    buySellCripto(action, price) {
      if (this.quantity <= 0) {
        this.errorMessage = "Cantidad debe ser mayor que 0";
        return;
      }
      if (!this.user) {
        this.errorMessage = "No hay un usuario logeado";
        return;
      }
      if (action == "sale") {
        const foundCripto = this.wallet.find(
          (element) => element.name == this.type
        );

        if (
          !foundCripto ||
          (foundCripto && foundCripto.quantity < this.quantity)
        ) {
          this.errorMessage =
            "Usted no posee suficientes criptos para efectuar ésta venta";
          return;
        }
      }
      this.waitingView = true;
      labApi
        .setTransaction(this.user, this.type, action, price, this.quantity)
        .then(() => this.$router.push({ name: "home" }))
        .catch((err) => console.log(err));
    },
    obtainValues(type) {
      criptoYa
        .getValues(type)
        .then((res) => {
          this.agencies = res.data;
        })
        .catch((err) => console.log(err));
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
.btnReturn {
  margin-top: 15px;
}
.btnSell {
  margin-left: 4px;
}
#inpNumber {
  border-radius: 5px;
}
</style>
