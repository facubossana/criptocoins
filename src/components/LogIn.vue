<template>
  <div id="container" class="login">
    <form class="submit" @submit.prevent="saveUser()">
      <div class="title"><h1>Bienvenido!</h1></div>
      <input
        class="input"
        type="text"
        name=""
        id=""
        v-model="user"
        placeholder="Ingrese su usuario"
        required
      />
      <p>
        <input
          type="submit"
          class="btn"
          value="Ingresar"
          :disabled="userValidation"
        />
      </p>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "LogIn",
  data() {
    return {
      user: "",
    };
  },
  methods: {
    ...mapGetters(["getUser"]),
    ...mapMutations(["setUser"]),
    saveUser() {
      this.setUser(this.user);
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 60vh;
}
.submit {
  background-color: #ebd848;
  border-radius: 25px;
  height: 200px;
  padding: 30px;
  border: 2px solid #533200;
}
.title {
  color: rgb(0, 0, 0);
  font-family: Helvetica, Arial, sans-serif;
}
.input {
  background-color: #fff4a4;
  border-radius: 11px;
  border: 0;
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  font-size: 17px;
  height: 20%;
  padding: 4px 10px 0;
  width: 90%;
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
