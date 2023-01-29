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

  <div style="background-color: #97C1FF; color: #051995">
  <hr>
  <br>
  <br>

  <router-view/>
    <br>  <br>
    <br>  <br>
    <br>  <br>
    <br>  <br>
    <br>  <br>
    <br>  <br>
    <br>  <br>
    <br>  <br>
    <br>  <br>
    <br>  <br>
    <br>  <br>
    <br>  <br>
    <br>

  </div>
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

body{
  margin: 0px;
}

nav {
  color: #054ED6;
  font-weight: bold;
}

nav a {
  padding: 0 20px 0 20px;
  font-size: 22px;
  text-align: center;
}

img {
  float: left;
  width: 143px;
  height: 143px;
}

h1 {
  font-size: 50px;
}

table, th, td {
  /*border: 1px solid black;*/
  border-spacing: 10px;
  padding: 6px;
}
table {
  margin-left:auto;
  margin-right:auto;
}

</style>
