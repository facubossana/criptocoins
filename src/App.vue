<template>
  <div>
    <div id="nav">
      <div v-if="this.$store.state.user">
        <router-link to="/" v-on:click="logOut">Inicio de sesión</router-link> |
        <router-link to="/home">Historial de movimientos</router-link> |
        <router-link to="/transactions">Transacciones</router-link> |
        <router-link to="/wallet">Billetera</router-link>
      </div>
    </div>
  </div>
  <router-view class="main" />
</template>

<script>
export default {
  name: "AppVue",
  components: {},
  data() {
    return {};
  },
  methods: {
    logOut: function () {
      this.$store.commit("setUser", "");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #f5e993;
  display: center;
  flex-direction: center;
  align-items: initial;
  justify-content: flex-start;
  margin: 5px;
  box-sizing: initial;
}

#nav {
  padding: 30px;
  display: center;
  padding: 7px;
  align-items: center;
  background-color: #ffec64;
  border-radius: 5px;
  position: fixed;
  top: 0;
  width: 100%;
  border-color: #504b2b;
  border-bottom-style: solid;
}

#nav a {
  font-weight: bold;
  background-color: #ffec64;
}

#nav label {
  font-weight: bold;
  color: #ffec64;
}

#nav button {
  font-weight: bold;
  color: #ffec64;
  background-color: transparent;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
}

nav a.router-link-exact-active {
  color: #ffec64;
}

.main {
  margin-top: 50px;
}
</style>
