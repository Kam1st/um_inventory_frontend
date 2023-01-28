<template>
  <h2 class="text-center">Stock Item Details</h2>
  <br>
  <br>
  <div v-if="currentStockItem" class="edit-form">
    <div class="form-group">
      <fieldset>
        <label>ID</label>
        <input type="text" v-model="currentStockItem.stockItemId" disabled>
      </fieldset>
      <fieldset>
        <label>Description</label>
        <input type="text" v-model="currentStockItem.description">
      </fieldset>
      <fieldset>
        <label>Supplier</label>
        <input type="text" v-model="currentStockItem.supplierName">
      </fieldset>
      <fieldset>
        <label>Quantity Sold</label>
        <input type="text"  id="quantSold" v-model="currentStockItem.quantitySold">
      </fieldset>
      <fieldset>
        <label>Cost Price</label>
        <input type="text" v-model="currentStockItem.costPrice">
      </fieldset>
      <fieldset>
        <label>Selling Price</label>
        <input type="text" v-model="currentStockItem.sellingPrice">
      </fieldset>
      <fieldset>
        <label>Quantity in Stock</label>
        <input type="text" v-model="currentStockItem.quantityInStock">
      </fieldset>

      <button name="update" v-on:click="updateItem">Update Item</button>

      <button name="back" v-on:click="backToList">Back</button>

      <button name="back" v-on:click="deleteById">Delete</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "stockItemDetails",
  data() {
    return{
      currentStockItem: '',
      message: ''
    };
  },
  computed: {
    stockItemId() {
      return localStorage.getItem('var1');
    }
  },
  beforeMount() {
    this.getItem()
  },
  methods: {
    // validateAndSubmit(e) {
    //   e.preventDefault();
    //   this.errors = [];
    //   if(!this.description) {
    //     this.errors.push("Enter valid values");
    //   }else if(this.description.length < 5) {
    //     this.errors.push("Enter at least 5 characters in the description");
    //   }
    // },
    backToList() {
      this.$router.push(`/stock`);
    },
    async getItem() {
      try {
        const response = await axios.get(
            `http://localhost:8080/stocks/${this.stockItemId}`
        );
        console.log(response)
        this.currentStockItem = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    updateItem() {
      axios.put(`http://localhost:8080/stocks/${this.stockItemId}`, {
        description: this.currentStockItem.description,
        supplierName: this.currentStockItem.supplierName,
        quantitySold: this.currentStockItem.quantitySold,
        costPrice: this.currentStockItem.costPrice,
        sellingPrice: this.currentStockItem.sellingPrice,
        quantityInStock: this.currentStockItem.quantityInStock
      })
          .then(response => {
            this.produce = response.data
            this.$router.push(`/stock`);
          })
    },
    async deleteById() {
      try {
        const response = await axios.delete(
            `http://localhost:8080/stocks/${this.stockItemId}`
        );
        this.produce = response.data;
        this.$router.push(`/stock`);
      } catch (error) {
        console.error(error);
      }
  },

  },

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
  margin: 10px;
}
</style>