<template>
  <LanguageComponent/>

  <h1 class="text-center">UNIVERSAL MARKETING CO., LTD</h1>
  <hr>

  <nav>
    <a @click="redirectStockPage">Stock</a>&nbsp;
    <a @click="redirectOrdersPage">Orders</a> &nbsp;
    <a @click="redirectEmployeesPage">Employees</a> &nbsp;
    <a @click="redirectProfilePage">View Profile</a> &nbsp;
  </nav>


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
  margin-top: 60px;
}
</style>
