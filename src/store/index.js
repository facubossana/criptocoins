import { createStore } from "vuex";

export default createStore({
  state: {
    user: "",
    transactions: [],
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getTransactions(state) {
      return state.transactions;
    },
    getTransactionById: (state) => (id) => {
      return state.transactions.find((transaction) => transaction._id == id);
    },
    getWallet(state) {
      const wallet = [];

      state.transactions.forEach((transaction) => {
        const foundTransactionIndex = wallet.findIndex(
          (element) => element.name == transaction.crypto_code
        );

        const quantity = parseFloat(transaction.crypto_amount);
        const price = parseFloat(transaction.money);

        if (foundTransactionIndex != -1) {
          if (transaction.action == "purchase") {
            wallet[foundTransactionIndex].quantity += quantity;
            wallet[foundTransactionIndex].price += price;
          } else {
            wallet[foundTransactionIndex].quantity -= quantity;
            wallet[foundTransactionIndex].price -= price;
          }
        } else {
          if (transaction.action == "purchase") {
            wallet.push({
              name: transaction.crypto_code,
              quantity: quantity,
              price: price,
            });
          } else {
            wallet.push({
              name: transaction.crypto_code,
              quantity: -quantity,
              price: -price,
            });
          }
        }
      });

      return wallet;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setTransactions(state, transactions) {
      transactions = transactions.map((transaction) => {
        transaction.purchaseValue =
          transaction.money / transaction.crypto_amount;
        return transaction;
      });

      state.transactions = transactions;
    },
  },
  modules: {},
});
