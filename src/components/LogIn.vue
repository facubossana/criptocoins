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
  background-color: #798bda;
  border-radius: 25px;
  height: 200px;
  padding: 30px;
}
.title {
  color: rgb(0, 0, 0);
  font-family: Helvetica, Arial, sans-serif;
}
.input {
  background-color: #303245;
  border-radius: 11px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 17px;
  height: 20%;
  padding: 4px 10px 0;
  width: 90%;
}

.btn {
  background: #0526dd;
  border: 1px solid #995309;
  background-image: linear-gradient(#e957bb, #4056d1);
  border-radius: 15px;
  text-shadow: 1px 1px 1px #9daef5;
  box-shadow: 5px 5px 20px #666666;
  font-family: Arial;
  color: #fafafa;
  font-size: 20px;
  padding: 13px;
  text-decoration: none;
  cursor: pointer;
}
.btn:hover {
  background: #2079b0;
  background-image: linear-gradient(#4056d1, #e957bb);
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
a {
  color: #42b983;
}
</style>
