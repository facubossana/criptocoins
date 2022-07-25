<template>
  <div>
    <div id="nav">
      <div v-if="this.$store.state.user">
        <router-link to="/" v-on:click="logOut">Inicio de sesión</router-link>
        | <router-link to="/home">Historial de movimientos</router-link> |
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
  background: #cee6eb;
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
  background-color: #bdc0d1;
  border-radius: 5px;
  position: fixed;
  top: 0;
  width: 100%;
  border-color: #2c3e50;
  border-bottom-style: solid;
}

#nav a {
  font-weight: bold;
  color: #1b2b3b;
}

#nav label {
  font-weight: bold;
  color: #1b2b3b;
}

#nav button {
  font-weight: bold;
  color: #2c3e50;
  background-color: transparent;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
}

nav a.router-link-exact-active {
  color: #43459b;
}

.main {
  margin-top: 50px;
}
</style>
