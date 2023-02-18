<template>
  <h2 class="text-center" v-html="$t('stock.title')"/>

  <br/>
  <div>
  <button @click="getByQuantity" v-html="$t('stock.stock_quantity')"/>
  </div>
  <br/>
  <div>
  <table id="pdfMaker" v-if="produceByQuant.length > 0">

    <thead>
    <tr><th colspan="3"><h3 v-html="$t('stock.stock_quantity')"/></th></tr>
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
      <td id="quantity">{{ item.quantity }}</td>
    </tr>
    </tbody>
  </table>
    <div>
      <button @click="producePDF" v-html="$t('stock.pdf_quant')"/>
    </div>
  </div>

  <br/>
  <div>
    <h3 v-html="$t('stock.quant_client')"/>
    <label for="clientId" v-html="$t('stock.client_id')"/>
    <input id="clientId" v-model="clientId" @change="getByClient"/>
    <br />
    <br />
    <button @click="getByClient" id="getByClient" v-html="$t('stock.search')"/>
  </div>
  <br/>

  <div>
    <table id="pdfMaker2" v-if="produceByClient.length > 0">

      <thead>
      <tr><th colspan="3"><h3 v-html="$t('stock.quant_client')"/></th></tr>
      <tr>
        <th colspan="3">
        <label v-if="clientId" for="clientIdDisplay" id="clientIdDisplay">Client ID</label>
          {{ this.clientId}}
      </th>
      </tr>
      <tr>
        <th>ID</th>
        <th>Description</th>
        <th>Quantity</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in produceByClient" v-bind:key="index">
        <td>{{ item.stockItemId }}</td>
        <td>{{ item.description }}</td>
        <td id="quantity">{{ item.quantity }}</td>
      </tr>
      </tbody>
    </table>
    <div>
      <button @click="producePDF2" v-html="$t('stock.pdf_quant')"/>
    </div>
  </div>

  <div>
    <h3 v-html="$t('stock.stock_supplier')"/>
    <label for="supplierName" v-html="$t('stock.supplier')"/>
    <input id="supplierName" v-model="supplierName" @change="getBySupplierName"/>
    <br />
    <br />
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
        <button name="stockDetails" @click="detailsClicked(item.stockItemId)" v-html="$t('stock.details')"/>
      </td>
    </tr>
    </tbody>
  </table>

  <br>
</template>

<script>
import axios from "axios";
import html2pdf from "html2pdf.js";

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
      produceByQuant: [],
      clientId: '',
      produceByClient: []

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
    async getByClient() {
      if (!this.clientId) {
          alert('Please enter an ID.')
      } else {
      try {
        const response = await axios.get(`http://localhost:8080/orders/${this.clientId}/quantity`);
        this.produceByClient = response.data;
        if(this.produceByClient < 1){
          alert('No stock items were found for this client.')
        }
      } catch (error) {
        console.error(error);
        alert(error + ": No stock items were found")
      }
    }
    },
      producePDF(){
        html2pdf(document.getElementById('pdfMaker'), {
          filename: 'Stock_Items_Sold_List.pdf',
          margin: 15
        })
    },
    producePDF2(){
      html2pdf(document.getElementById('pdfMaker2'), {
        filename: 'Stock_Item_List_By_Client.pdf',
        margin: 15
      })
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
      if(!this.supplierName){
        alert('Please enter a supplier name.')
      }else {
        try {
          const response = await axios.get(
              `http://localhost:8080/stocks/supplierName/${this.supplierName}`
          );
          this.produceBySupplier = response.data;
          if (this.produceBySupplier.length == 0 && this.supplierName.length > 0) {
            alert("No stock items with that supplier name were found.")
          }
        } catch (error) {
          console.error(error)
          alert("an error occurred: " + error)
        }
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