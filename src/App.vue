<template>

  <div style="background-color: #054ED6; text-shadow: 2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000;">
    <img src="@/assets/logo_um.png" alt="logo" />

  <h1 class="text-center" style="color: white">UNIVERSAL MARKETING CO., LTD</h1>

    <LanguageComponent/>
  <hr>
  </div>

  <nav>
    <a style="margin-left: 180px" @click="redirectStockPage" v-html="$t('app.stock')"/>&nbsp;
    <a @click="redirectOrdersPage" v-html="$t('app.orders')"/> &nbsp;
    <a @click="redirectEmployeesPage" v-html="$t('app.employees')"/> &nbsp;
    <a @click="redirectClientsPage" v-html="$t('app.clients')"/> &nbsp;
    <a style="float: right; margin-right: 20px" @click="redirectMainPage" v-html="$t('app.user_profile')"/>
  </nav>

  <div style="background-color: #97C1FF; color: #051995">
  <hr>
  <br>
  <br>
    <MqResponsive target="xs">
<!--      <div>This is an XS Screen</div>-->
    </MqResponsive>
    <MqResponsive target="sm">
<!--      <div>This is an SM Screen</div>-->
    </MqResponsive>
    <MqResponsive target="md">
<!--      <div>This is an MD Screen</div>-->
    </MqResponsive>
    <MqResponsive target="lg">
<!--      <div>This is an LG Screen</div>-->
    </MqResponsive>
    <MqResponsive target="xl">
<!--      <div>This is an XL Screen</div>-->
    </MqResponsive>
    <MqResponsive target="xxl">
<!--      <div>This is an XXL Screen</div>-->
    </MqResponsive>
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
    redirectMainPage(){
      this.$router.push(`/`);
    },
    redirectStockPage(){
      this.$router.push(`/stock`);
    },
    redirectOrdersPage(){
      this.$router.push(`/orders`);
    },
    redirectEmployeesPage(){
      this.$router.push(`/employees`);
    },
    redirectClientsPage(){
      this.$router.push(`/clients`);
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
  padding: 0 10px 0 10px;
  font-size: 22px;
  text-align: center;
}

img {
  float: left;
  width: 110px;
  height: 109px;
}

h1 {
  font-size: 45px;
  margin-top: 0px;
}

table, th, td {
  border-spacing: 10px;
  padding: 6px;
}
table {
  margin-left:auto;
  margin-right:auto;
}

</style>
