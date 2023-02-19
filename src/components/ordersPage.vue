<template>
  <div>
    <h2 class="text-center" v-html="$t('orders.title')"/>

    <div class="center">
      <button @click="redirectNewOrder()" v-html="$t('orders.new')"/>
      <button @click="redirectEditOrder()" v-html="$t('orders.edit')"/>
    </div>

    <br>
    <br>

    <div class="center">
      <h3 v-html="$t('orders.orders_stock_id')"/>
      <label for="stock-id" v-html="$t('orders.label_orders_stock_id')"/>
      <input id="stock-id" v-model="stockItemId"/>
      <br />
      <br />
      <button @click="getByStockItemId" v-html="$t('orders.search')"/>
    </div>

    <table v-for="(items, index) in produce2" v-bind:key="index">
      <tr>
        <th>
          Order Id: {{items.orderId}}
        </th>
        <th>
          Client Id: {{items.clientId}}
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

    <br>
    <br>
    <hr>


    <div class="center">
      <table v-for="(items, index) in produce3" v-bind:key="index">
        <tr>
          <th>
            Order Id: {{items.orderId}}
          </th>
          <th>
            Client Id: {{items.clientId}}
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
      produce3: [],
      clientId: "",
      stockItemId: ""
    };
  },
  async beforeMount() {
    await this.getItems();
  },
  methods: {
    async getItems() {
      try {
        const response = await axios.get("http://localhost:8080/orders");
        this.produce3 = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getByStockItemId() {
      if (!this.stockItemId) {
        alert('Please enter a stock item ID.')
      } else {
        try {
          const response = await axios.get(
              `http://localhost:8080/orders/stockItem/${this.stockItemId}`
          );
          this.produce2 = response.data;
        } catch (error) {
          console.error(error);
          alert(error + ": No orders with this stock item Id was found.");
        }
      }
    },
    redirectNewOrder(){
      this.$router.push(`/orders/new`);
    },
    redirectEditOrder(){
      this.$router.push(`/orders/edit`);
    },
  }
};
</script>

<style scoped>
</style>