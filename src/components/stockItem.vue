<template>
    <h2 class="text-center" v-html="$t('stock.title')"/>
    <div class="center">
      <button @click="redirectStockLists()" v-html="$t('stock.lists')"/>
      <button @click="redirectNewStockItem()" v-html="$t('stock.add_new')"/>
    </div>

    <br>
      <div>
        <button style="float: right; margin-right: 90px" @click="producePDF" v-html="$t('stock.pdf')"/>
      </div>
    <div>
      <table id="pdfMaker" style="margin-left: 320px">
        <thead>
        <tr><th colspan="8"><h3 v-html="$t('stock.all')"/></th></tr>
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
            <button name="stockDetails" @click="detailsClicked(item.stockItemId)" v-html="$t('stock.details')"/>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import axios from "axios";
import html2pdf from "html2pdf.js";

export default {
  name: "stockItem",
  data() {
    return {
      produce: [],
      prices: [],
      produceBySupplier: [],
      sellingPrice: '',
      supplierName: '',
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
    producePDF(){
      html2pdf(document.getElementById('pdfMaker'), {
        filename: 'Stock_Items.pdf',
        margin: 15
      })
    },
    redirectNewStockItem(){
      this.$router.push(`/stock/new`);
    },
  redirectStockLists(){
    this.$router.push(`/stock/lists`);
  }
  },
};
</script>

<style scoped>

button{
  margin: 5px;
}
</style>