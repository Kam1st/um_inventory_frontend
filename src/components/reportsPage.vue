<template>
  <br>
  <h1 class="text-center">UNIVERSAL MARKETING CO., LTD</h1>
  <br>
  <hr>
  <br>
  <h2 class="text-center">Other</h2>


  <div class="center"><h3> Get Orders By Client Id</h3>
    <form action="">
      <label for="cId">Client Id:</label>
      <input name="cId" v-model="text" placeholder="client id"><br><br>
      <button name="getClientOrders" v-on:click="getByClientId"> Get Data</button>
    </form>
  </div>

</template>

<script>
import axios from "axios";
export default {
  name: "reportsPage",
  data() {
    return {
      produce: []
    }
  },
  beforeMount() {
    this.getItems()
  },
  methods: {
    getByClientId() {
      axios.get("http://localhost:8080/orders/client/{clientId}").then(response => {
        this.produce = response.data
      })
    }
  }
}
</script>

<style scoped>

</style>