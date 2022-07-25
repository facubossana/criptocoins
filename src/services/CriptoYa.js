import axios from "axios";

const APIclient = axios.create({
  baseURL: "https://criptoya.com/api/",
});

export default {
  getValues(crypto_code) {
    return APIclient.get(`/${crypto_code}/ars/1`);
  },
};
