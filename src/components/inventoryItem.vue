<template>
  <br>
  <h1 class="text-center">UNIVERSAL MARKETING CO., LTD</h1>
  <br>
  <hr>
  <br>
  <h2 class="text-center">Inventory Items - Click To View Items</h2>
  <div class="center"><button name="inventoryList"> Produce List</button></div>
  <br>
  <br>
  <div v-for="item in produce" v-bind:key="item.inventoryItemId">
    <h2>{{item.inventoryItemId}} - SI-{{item.stockItemDTO.description}} - {{item.quantityInStock}}</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "inventoryItem",
    data() {
    return {
      produce: []
    }
    },
  beforeMount() {
    this.getItems()
  },
  methods: {
    getItems(){
      axios.get("http://localhost:8080/inventory").then(response => {
        this.produce=response.data

      })
    },
  }
}
</script>

<style scoped>

</style>