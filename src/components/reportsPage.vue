<template>
  <div>
    <h1 class="text-center">UNIVERSAL MARKETING CO., LTD</h1>
    <hr>
    <h2 class="text-center">Other</h2>

    <div class="center">
      <h3>Get Orders By Client Id</h3>
      <label for="client-id">Client Id:</label>
      <input id="client-id" v-model="clientId" placeholder="client id" />
      <br />
      <br />
      <button @click="getByClientId">Get Data</button>
    </div>
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
    };
  },
  methods: {
    async getByClientId() {
      try {
        const response = await axios.get(
            `http://localhost:8080/orders/client/${this.clientId}`
        );
        this.produce = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
</style>