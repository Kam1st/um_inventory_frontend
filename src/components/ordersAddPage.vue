<template>
  <h2 class="text-center">Add Order</h2>
  <div class="center">
    <select v-model="selectedStock">
      <option v-for="item in stockItems" :key="item.stockItemId" :value="item.value">
        {{ item.stockItemId }}
        {{ item.description }}
      </option>
    </select>
  </div>
</template>

<script>

import axios from 'axios';

export default {
name: "ordersAddPage.vue",
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
},
};
</script>

<style scoped>

</style>