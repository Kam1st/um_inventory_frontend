<template>
  <h2 class="text-center" v-html="$t('stock.title')"/>
  <div class="center">
    <div class="form-group">
      <fieldset>
        <label v-html="$t('stock.stock_id')"/>
        <input type="text" v-model="stockItemId">
      </fieldset>
    <fieldset>
      <label v-html="$t('stock.description')"/>
      <input type="text" v-model="description">
    </fieldset>
    <fieldset>
      <label v-html="$t('stock.supplier')"/>
      <input type="text" v-model="supplierName">
    </fieldset>
    <fieldset>
      <label v-html="$t('stock.cost')"/>
      <input type="text" v-model="costPrice">
    </fieldset>
    <fieldset>
      <label v-html="$t('stock.selling')"/>
      <input type="text" v-model="sellingPrice">
    </fieldset>
    <fieldset>
      <label v-html="$t('stock.quantity')"/>
      <input type="text" v-model="quantityInStock">
    </fieldset>
    <fieldset>
    <button type="submit" @click="createStockItem()" v-html="$t('stock.create')"/>
      <button name="back" v-on:click="backToList" v-html="$t('stock.back')"/>
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
      if( typeof this.description !== 'string' | typeof this.supplierName !== 'string' | isNaN(this.stockItemId) |
          isNaN(this.costPrice)| isNaN(this.sellingPrice) | isNaN(this.quantityInStock)) {
        alert('Please enter the right data type.')
      } else {
        axios.post("stocks", {
          stockItemId: this.stockItemId,
          description: this.description,
          supplierName: this.supplierName,
          quantitySold: 0,
          costPrice: this.costPrice,
          sellingPrice: this.sellingPrice,
          quantityInStock: this.quantityInStock
        })
            .then(response => {
              this.produce = response.data
              this.$router.push(`/stock`);
            })
      }
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

