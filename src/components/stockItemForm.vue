<template>
  <br>
  <h1 class="text-center">UNIVERSAL MARKETING CO., LTD</h1>
  <br>
  <hr>
  <br>
  <h2 class="text-center">Stock Items - Click To View Items</h2>
  <div class="center">
    <div class="form-group">
    <fieldset>
      <label>Description</label>
      <input type="text" v-model="description">
    </fieldset>
    <fieldset>
      <label>Supplier</label>
      <input type="text" v-model="supplierName">
    </fieldset>
    <fieldset>
      <label>Cost Price</label>
      <input type="text" v-model="costPrice">
    </fieldset>
    <fieldset>
      <label>Selling Price</label>
      <input type="text" v-model="sellingPrice">
    </fieldset>
    <fieldset>
      <label>Quantity in Stock</label>
      <input type="text" v-model="quantityInStock">
    </fieldset>
    <fieldset>
    <input type="submit" @click="createStockItem()" value="Create Stock Item">
      <button name="back" v-on:click="backToList">Back</button>
    </fieldset>
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "stockItemForm",
  data() {
    return {
      postBody: ''
      //errors: []
    }
  },
  methods: {
    createStockItem() {
      axios.post("http://localhost:8080/stocks", {
        description: this.description,
        supplierName: this.supplierName,
        quantitySold: 0,
        costPrice: this.costPrice,
        sellingPrice: this.sellingPrice,
        quantityInStock: this.quantityInStock
      })
          .then(response => {
            this.produce=response.data
            this.$router.push(`/stock`);
          })
    },
    backToList() {
      this.$router.push(`/stock`);
    }
  }
}
</script>
<style scoped>
fieldset {
  border: none;
}
input{
  margin-left: 10px;
}
button{
  margin-left: 10px;
}
</style>

