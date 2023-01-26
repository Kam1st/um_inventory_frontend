<template>
  <br>
  <h1 class="text-center">UNIVERSAL MARKETING CO., LTD</h1>
  <br>
  <hr>
  <br>
  <h2 class="text-center">Add an Order</h2>
  <div class="center">
    <div class="form-group">
      <fieldset>
        <label>Client Id</label>
        <input type="text" v-model="clientId">
      </fieldset>

      <form>
        <fieldset style="background: #f6f8ff; border: 2px solid #4238ca;">
          <legend>Items</legend>


      <fieldset>
        <label>Stock Item Id</label>
        <input type="text" v-model="stockOrderDTOS.stockItemId">
      </fieldset>
      <fieldset>
        <label>Description</label>
        <input type="text" v-model="stockOrderDTOS.description">
      </fieldset>
      <fieldset>
        <label>Quantity</label>
        <input type="text" v-model="stockOrderDTOS.quantity">
      </fieldset>

      <fieldset>
        <input type="submit" @click="createOrder()" value="Create Order">
        <button name="back" v-on:click="backToList">Back</button>
      </fieldset>



        </fieldset>
        </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "orderForm",
  data() {
    return {
      postBody: ''
    }
  },
  methods: {
    createOrder() {
      axios.post("http://localhost:8080/orders", {
        clientId: this.clientId,
        stockOrderDTOS: this.stockOrderDTOS
      })
          .then(response => {
            this.produce=response.data
            this.$router.push(`/orders`);
          })
    },
    backToList() {
      this.$router.push(`/orders`);
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

