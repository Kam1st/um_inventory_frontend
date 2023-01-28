<template>
    <h2 class="text-center">Stock Items - Click To View Items</h2>
    <div class="center">
      <button name="stockList">Produce List</button>
      <button @click="redirectNewStockItem()">Add new stock item</button>
    </div>
      <div>
        <h3>Get Stock Items by Price</h3>
        <label for="stockPrice">Price:</label>
        <input id="stockPrice" v-model="sellingPrice"/>
        <br />
        <br />
        <button @click="getByPrice" id="getByPrice">Get Data</button>
      </div>

      <table v-if="sellingPrice">
        <thead>
        <tr>
          <th>ID:</th>
          <th>Description</th>
          <th>Supplier</th>
          <th>Quantity Sold</th>
          <th>Cost</th>
          <th>Selling Price</th>
          <th>Quantity in Stock</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in prices" v-bind:key="item.stockItemId">
          <td>{{ item.stockItemId }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.supplierName }}</td>
          <td>{{ item.quantitySold }}</td>
          <td>{{ item.costPrice }}</td>
          <td>{{ item.sellingPrice }}</td>
          <td>{{ item.quantityInStock }}</td>
          <td>
            <button name="stockDetails" @click="detailsClicked(item.stockItemId)">
              Details
            </button>
          </td>
        </tr>
        </tbody>
      </table>

    <br>
    <div>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Supplier</th>
          <th>Quantity Sold</th>
          <th>Cost</th>
          <th>Selling Price</th>
          <th>Quantity in Stock</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in produce" v-bind:key="item.stockItemId">
          <td>{{ item.stockItemId }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.supplierName }}</td>
          <td>{{ item.quantitySold }}</td>
          <td>{{ item.costPrice }}</td>
          <td>{{ item.sellingPrice }}</td>
          <td>{{ item.quantityInStock }}</td>
          <td>
            <button name="stockDetails" @click="detailsClicked(item.stockItemId)">
              Details
            </button>
          </td>
          <td>
<!--            <button name="delete" @click="deleteItemById(item.stockItemId)">-->
<!--              Delete-->
<!--            </button>-->
          </td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "stockItem",
  data() {
    return {
      produce: [],
      prices: [],
      sellingPrice: '',
      stockItemId: ''
    };
  },
  async beforeMount() {
    await this.getItems();
  },
  methods: {
    async getItems() {
      try {
        const response = await axios.get("http://localhost:8080/stocks");
        this.produce = response.data;
      } catch (error) {
        console.error(error);
        alert(error+": No stock item with this Id was found.")
      }
    },
    async detailsClicked(stockItemId) {
      try {
        localStorage.setItem("var1", stockItemId);
        this.$router.push(`/stock/stockItemDetails`);
      } catch (error) {
        console.error(error);
      }
    },
    // async deleteItemById(stockItemId) {
    //   try {
    //     const response = await axios.delete(
    //         `http://localhost:8080/stocks/${stockItemId}`
    //     );
    //     this.produce = response.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    async getByPrice() {
      try {
        const response = await axios.get(
            `http://localhost:8080/stocks/price/${this.sellingPrice}`
        );
        this.prices = response.data;
      } catch (error) {
        console.error(error)
      }
    },
    redirectNewStockItem(){
      this.$router.push(`/stock/new`);
    }
  }
};
</script>

<style scoped>

button{
  margin: 5px;
}
</style>