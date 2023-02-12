<template>
  <h2 class="text-center">Stock Items - Click To View Items</h2>

  <br/>
  <div>
  <button @click="getByQuantity">Get Stock Item By Quantity</button>
  </div>
  <br/>
  <div>
  <table v-if="produceByQuant.length > 0">
    <thead>
    <tr>
      <th>ID</th>
      <th>Description</th>
      <th>Quantity</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, index) in produceByQuant" v-bind:key="index">
      <td>{{ item.stockItemId }}</td>
      <td>{{ item.description }}</td>
      <td>{{ item.quantity }}</td>
<!--&lt;!&ndash;      <td>&ndash;&gt;-->
<!--&lt;!&ndash;        <button name="stockDetails" @click="detailsClicked(item.stockItemId)">&ndash;&gt;-->
<!--&lt;!&ndash;          Details&ndash;&gt;-->
<!--&lt;!&ndash;        </button>&ndash;&gt;-->
<!--&lt;!&ndash;      </td>&ndash;&gt;-->
<!--    </tr>-->
<!--    </tbody>-->
<!--  </table>-->
<!--  <div>-->
<!--  <table>-->
<!--  <thead>-->
<!--    <tr>-->
<!--      <th>-->
<!--        Stock Item Id-->
<!--      </th>-->
<!--      <th>-->
<!--        Description-->
<!--      </th>-->
<!--      <th>-->
<!--        Quantity-->
<!--      </th>-->
<!--    </tr>-->
<!--    </thead>-->
<!--    <tbody>-->
<!--    <tr v-for="(item, index) in items.stockOrderDTOS" v-bind:key="index">-->
<!--      <td>-->
<!--        {{item.stockItemId}}-->
<!--      </td>-->
<!--      <td>-->
<!--        {{item.description}}-->
<!--      </td>-->
<!--      <td>-->
<!--        {{item.quantity}}-->
<!--      </td>-->
    </tr>
    </tbody>
  </table>
  </div>
<!--  <br/>-->
<!--  <div>-->
<!--    <h3>Get Stock Items by Price</h3>-->
<!--    <label for="stockPrice">Price:</label>-->
<!--    <input id="stockPrice" v-model="sellingPrice"/>-->
<!--    <br />-->
<!--    <br />-->
<!--    <button @click="getByPrice" id="getByPrice">Get Data</button>-->
<!--  </div>-->

  <table v-if="sellingPrice">
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
  <div>
    <h3>Get Stock Items by Supplier Name</h3>
    <label for="supplierName">Supplier:</label>
    <input id="supplierName" v-model="supplierName" @change="getBySupplierName"/>
    <br />
    <br />
        <button @click="getBySupplierName" id="getBySupplier">Get Data</button>
  </div>

  <table v-if="produceBySupplier.length > 0">
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
    <tr v-for="item in produceBySupplier" v-bind:key="item.stockItemId">
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
</template>

<script>
import axios from "axios";

export default {
  name: "stockItemLists",
  data() {
    return {
      produce: [],
      prices: [],
      produceBySupplier: [],
      sellingPrice: '',
      supplierName: '',
      stockItemId: '',
      produceByQuant: []

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
        alert(error+": No stock items were found")
      }
    },
    async getByQuantity() {
      try {
        const response = await axios.get("http://localhost:8080/orders/quantity");
        this.produceByQuant = response.data;
      } catch (error) {
        console.error(error);
        alert(error+": No stock items were found")
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
    async getBySupplierName() {
      try {
        const response = await axios.get(
            `http://localhost:8080/stocks/supplierName/${this.supplierName}`
        );
        this.produceBySupplier = response.data;
        if (this.produceBySupplier.length == 0 && this.supplierName.length >0){
          alert("No stock items with that supplier name were found.")
        }
      } catch (error) {
        console.error(error)
        alert("an error occurred: "+error)
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

<script>

</script>

<style scoped>

</style>