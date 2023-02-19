<template>
  <h2 class="text-center">Edit Order</h2>
  <div class="center">
    <h4>Enter Order Id</h4>
    <input id="orderId" type="text" v-model="orderId">
    <button @click="getByOrderId">Get Data</button>
  </div>
  <br/>
  <div v-if="orderId" class="edit-form">
    <div class="form-group">
      <fieldset>
        <label>Order ID</label>
        <input id="orderId" type="text" v-model="orderId" disabled/>
      </fieldset>
      <fieldset>
        <label>Client ID</label>
        <input id="clientId" type="text" v-model="clientId" disabled/>
      </fieldset>
    </div>
  </div>
  <div class="center" v-if="orderId">
    <table >
<!--      <tr>-->
<!--        <th>-->
<!--          Order Id: {{items.orderId}}-->
<!--        </th>-->
<!--        <th>-->
<!--          Client Id: {{items.clientId}}-->
<!--        </th>-->
<!--      </tr>-->
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
      <tr v-for="(item, index) in produce" v-bind:key="index">
        <td>
          {{item.stockItemId}}
        </td>
        <td>
          {{item.description}}
        </td>
        <td>
          {{item.quantity}}
        </td>
        <td>
          <button @click="deleteItem(item.stockItemId)">Remove Stock</button>
        </td>
      </tr>
    </table>
  </div>

  <br>
  <div>
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
  <br>
  <input id="updateOrder" type="submit" @click="updateOrder()" value="Update Order">
  <button name="back" v-on:click="backToList">Back</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "editOrder",
  data() {
    return {
      orderId: '',
      produce: [],
      produce2: [],
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
    async getByOrderId() {
      if (!this.orderId) {
        alert('Please enter an order ID.')
      } else {
        try {
          const response = await axios.get(
              `http://localhost:8080/orders/${this.orderId}`
          );
          this.produce = response.data.stockOrderDTOS;
          this.clientId = response.data.clientId;
          console.log(this.produce)
        } catch (error) {
          console.error(error);
          alert(error + ": No orders with this Id was found.");
        }
      }
    },
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
        if(this.produce.find(obj => obj.stockItemId === id)){
          this.produce.find(obj => obj.stockItemId === id).quantity=
              parseInt(this.produce.find(obj => obj.stockItemId === id).quantity)+ parseInt(this.value)
        } else{
        obj.quantity = this.value
        this.produce.push(obj)
        }
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
    updateOrder() {
      axios.put(`http://localhost:8080/orders/${this.orderId}`, {
        clientId: this.clientId,
        stockOrderDTOS: this.produce,
      })
          .then(response => {
            console.log(this.orderId)
            this.produce2=response.data
            this.$router.push(`/orders`);
            alert('Order updated.')
          })
    },
    deleteItem(id) {
      if (this.produce.findIndex(obj => obj.stockItemId === id) !== -1){
        this.produce.splice(this.produce.findIndex(obj => obj.stockItemId === id), 1)
      }
    },
    backToList() {
      this.$router.push(`/orders`);
    }
  },
}
</script>

<style scoped>
fieldset {
  border: none;
}
</style>