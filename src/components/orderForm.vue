<template>
  <h2 class="text-center" v-html="$t('orders.add_order')"/>
  <div class="center">
    <h4 v-html="$t('orders.client_id')"/>
    <input id="client-id" type="text" v-model="clientId">
    <br>
    <br>
    <br>
    <h4 v-html="$t('orders.items')"/>
    <select id="item" v-model="selectedStock">
      <option v-for="item in stockItems" :key="item.stockItemId" :value="item.stockItemId">
        {{ item.stockItemId }}
        {{ item.description }}
      </option>
    </select>
    <br>

    <h4 v-html="$t('orders.quant')"/> {{ value }}
    <div class="btn-wrapper">
      <button @click="decrement">-</button>
      <button id="plus" @click="increment">+</button>
    </div>

<br>

    <button @click="addItem(selectedStock)" v-html="$t('orders.add_item')"/>
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
    <button @click="createOrder()" v-html="$t('orders.add')"/>
    <button name="back" v-on:click="backToList" v-html="$t('orders.back')"/>
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
        const response = await axios.get('stocks');
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
      if(isNaN(this.clientId)){
        alert('Please enter a number for Client Id.')
      }else {
        axios.post("orders", {
          clientId: this.clientId,
          stockOrderDTOS: this.selectedItems,
        })
            .then(response => {
              this.produce = response.data
              this.$router.push(`/orders`);
            })
      }
    },
    backToList() {
      this.$router.push(`/orders`);
    }
  },
};
</script>

<style scoped>

</style>