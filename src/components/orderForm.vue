<template>
  <h2 class="text-center">Add Order</h2>
  <div class="center">
    <h4>Enter Client Id</h4>
    <input id="client-id" type="text" v-model="clientId">
    <br>
    <br>
    <br>
    <h4>Select Stock Items</h4>
    <select id="item" v-model="selectedStock">
      <option v-for="item in stockItems" :key="item.stockItemId" :value="item.stockItemId">
        {{ item.stockItemId }}
        {{ item.description }}
      </option>
    </select>
    <br>

    <h4>Quantity wanted: {{ value }}</h4>
    <div class="btn-wrapper">
      <button @click="decrement">-</button>
      <button id="plus" @click="increment">+</button>
    </div>

<br>

    <input type="submit" @click="addItem(selectedStock)" value="Add Item To Order">
    <br>
    <br>
    <table>
      <tr>
        <th colspan="3">
          Order List
        </th>
      </tr>
      <tr>
        <th>
          Stock Item Id
        </th>
        <th>
          Description
        </th>
        <th>
          Quantity
        </th>
      </tr>

      <tr v-for="(item, index) in selectedItems" v-bind:key="index">
        <td>
          {{item.stockItemId}}
        </td>
        <td>
          {{item.description}}
        </td>
        <td>
          {{item.quantity}}
        </td>
      </tr>
    </table>
    <br>
    <input id="addOrder" type="submit" @click="createOrder()" value="Add Order">
    <button name="back" v-on:click="backToList">Back</button>
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
      selectedItems: [],
      clientId: '',
      value: 0
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
      } catch(error) {
        console.error(error);
      }
    },

    addItem(id) {
      try {
        const obj = this.stockItems.filter(obj => obj.stockItemId === id)[0]
        obj.quantity = this.value

        this.selectedItems.push(obj)
        this.value=0
      }
      catch(error){
        console.error(error);
      }
    },
    decrement () {
      if (this.value) {
        this.value -= 1;
      }
    },
    increment () {
      this.value += 1;
    },
    createOrder() {
      axios.post("http://localhost:8080/orders", {
        clientId: this.clientId,
        stockOrderDTOS: this.selectedItems,
      })
          .then(response => {
            this.produce=response.data
            this.$router.push(`/orders`);
          })
    },
    backToList() {
      this.$router.push(`/orders`);
    }
  },
};
</script>

<style scoped>

</style>