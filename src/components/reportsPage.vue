<template>
  <br>
  <h1 class="text-center">UNIVERSAL MARKETING CO., LTD</h1>
  <br>
  <hr>
  <br>
  <h2 class="text-center">Other</h2>


  <div class="center"><h3> Get Orders By Client Id</h3>
      <label>Client Id:</label>
      <input v-model="clientId" placeholder="client id"><br><br>
      <button v-on:click="getByClientId"> Get Data</button>
  </div>

</template>

<script>
import axios from "axios";
export default {
  name: "reportsPage",
  data() {
    return {
      produce: [],
      clientId: ""
    }
  },
  methods: {
    getByClientId() {
      console.log(this.clientId)
      axios.get("http://localhost:8080/orders/client/" +this.clientId).then(response => {
        this.produce = response.data
      })
    }
  }
}
</script>

<style scoped>

</style>