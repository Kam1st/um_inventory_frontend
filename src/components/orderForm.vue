<template>
  <h2 class="text-center">Add Order</h2>
  <div class="center">
    <h4>Enter Client Id</h4>
        <input type="text" v-model="clientId">
    <br>
    <br>
    <br>
    <h4>Select Stock Items</h4>
    <select v-model="selectedStock">
      <option v-for="item in stockItems" :key="item.stockItemId" :value="item.value">
        {{ item.stockItemId }}
        {{ item.description }}
      </option>
    </select>
    <br>
    <input type="submit" @click="createStockItem()" value="Add Item To Order">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
      <input type="submit" @click="createStockItem()" value="Add Order">
<!--      <button name="back" v-on:click="backToList">Back</button>-->
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: "orderForm",
  data() {
    return {
      selectedStock: '',
      stockItems: [],
    };
  },
  mounted() {
    this.getStockItems();
  },
  methods: {
    async getStockItems() {
      try {
        const response = await axios.get('http://localhost:8080/stocks');
        this.stockItems = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    async addItem() {

    }
  },
};
</script>