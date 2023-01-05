<template>
  <br>
  <h1 class="text-center">UNIVERSAL MARKETING CO., LTD</h1>
  <br>
  <hr>
  <br>
  <h2 class="text-center">Stock Items - Click To View Items</h2>
  <div class="center"><button name="stockList"> Produce List</button></div>
  <br>
  <br>
  <div v-for="item in produce" v-bind:key="item.stockItemId">
    <h2>{{item.stockItemId}} - {{item.sdescription}} - {{item.supplierId}} - {{item.salesQuantity}} -
      {{item.price}} <button name="deleteStock" v-on:click="deleteItemById" > Delete Item</button>
    </h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "stockItem",
  data() {
    return {
      produce: []
    }
  },
  beforeMount() {
    this.getItems()
  },
  methods: {
    getItems() {
      axios.get("http://localhost:8080/stocks").then(response => {
        this.produce=response.data
      })
    },

    deleteItemById() {
      axios.delete("http://localhost:8080/stocks/{stockItemId}").then(response => {
        this.produce=response.data
      })
    }
  }
}
</script>

<style scoped>

</style>