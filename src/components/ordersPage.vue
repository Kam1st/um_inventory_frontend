<template>
  <div>
    <h2 class="text-center">Orders</h2>

    <div class="center">
      <h3>Get Orders By Client Id</h3>
      <label for="client-id">Client Id:</label>
      <input id="client-id" v-model="clientId" placeholder="client id" />
      <br />
      <br />
      <button @click="getByClientId">Get Data By Client Id</button>
    </div>

    <table v-for="(items, index) in produce" v-bind:key="index">
      <tr>
        <th>
          Order Id: {{index}}
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

      <tr v-for="(item, index) in items.stockOrderDTOS" v-bind:key="index">
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

    <div class="center">
      <h3>Get Orders By Stock Item Id</h3>
      <label for="stock-id">Stock Item Id:</label>
      <input id="stock-id" v-model="stockItemId" placeholder="stock item id" />
      <br />
      <br />
      <button @click="getByStockItemId">Get Data By Stock Item Id</button>
    </div>

    <table v-for="(items, index) in produce2" v-bind:key="index">
      <tr>
        <th>
          Order Id: {{index}}
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

      <tr v-for="(item, index) in items.stockOrderDTOS" v-bind:key="index">
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

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ordersPage",
  data() {
    return {
      produce: [],
      produce2: [],
      clientId: "",
      stockItemId: ""
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
        alert(error+": No orders with this client Id was found.");
      }
    },
    async getByStockItemId() {
      try {
        const response = await axios.get(
            `http://localhost:8080/orders/stockItem/${this.stockItemId}`
        );
        this.produce2 = response.data;
      } catch (error) {
        console.error(error);
        alert(error+": No orders with this stock item Id was found.");
      }
    }

  }
};
</script>

<style scoped>
</style>