import axios from "axios";

const APIclient = axios.create({
  baseURL: "https://laboratorio3-f36a.restdb.io/rest/",
  headers: { "x-apikey": "60eb09146661365596af552f" },
});

export default {
  getTransactions() {
    return APIclient.get(`/transactions`);
  },

  getTransactionsByUser(userId) {
    return APIclient.get(`/transactions?q={"user_id": "${userId}"}`);
  },

  setTransaction(userId, type, action, price, quantity) {
    const data = {
      user_id: userId,
      action,
      crypto_code: type,
      crypto_amount: quantity,
      money: (price * quantity).toFixed(2),
      datetime: new Date(),
    };
    console.log(data);
    return APIclient.post(`/transactions`, data);
  },
};
