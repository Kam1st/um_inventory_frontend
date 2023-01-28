<template>

  <div style="background-color: #054ED6;">
    <img src="@/assets/logo_um.png" alt="logo" />
  <LanguageComponent/>
  <h1 class="text-center" style="color: white">UNIVERSAL MARKETING CO., LTD</h1>
  <hr>
  </div>

  
  <nav>
    <a @click="redirectStockPage">Stock</a>&nbsp;
    <a @click="redirectOrdersPage">Orders</a> &nbsp;
    <a @click="redirectEmployeesPage">Employees</a> &nbsp;
    <a @click="redirectProfilePage">View Profile</a> &nbsp;
  </nav>

  <hr>

  <br>
  <br>

  <router-view/>

</template>

<script>
import languageComponent from "@/components/languageComponent";

export default {
  name: 'App',
  components: {
    languageComponent
  },
  methods: {
    redirectStockPage(){
      this.$router.push(`/stock`);
    },
    redirectOrdersPage(){
      this.$router.push(`/orders`);
    },
    redirectEmployeesPage(){
      this.$router.push(`/employees`);
    },
    redirectProfilePage(){
      this.$router.push(`/`);
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

body{ margin: 0px;}

nav {
  color: #054ED6;
  font-weight: bold;
}

nav a {
  padding: 0 20px 0 20px;
  font-size: 22px;
}

img {
  float: left;
  width: 100px;
  height: 100px;
}
</style>
