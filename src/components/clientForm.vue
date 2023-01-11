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
        <label>Client</label>
        <input type="text" v-model="clientName">
      </fieldset>
      <fieldset>
        <label>Employee</label>
        <input type="text" v-model="clientEmployeeName">
      </fieldset>
      <fieldset>
        <label>Address</label>
        <input type="text" v-model="clientAddress">
      </fieldset>
      <fieldset>
        <label>Phone Number</label>
        <input type="text" v-model="clientPhone">
      </fieldset>
      <fieldset>
        <input type="submit" v-on:click="createClient" value="Create New Client">
        <button name="back" v-on:click="backToLogin">Back to login</button>
      </fieldset>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "clientForm",
  data() {
    return {
      postBody: ''
    }
  },
  methods: {
    createClient() {
      axios.post("http://localhost:8080/clients", {
        clientName: this.clientName,
        clientEmployeeName: this.clientEmployeeName,
        clientAddress: this.clientAddress,
        clientPhone: this.clientPhone,
      })
          .then(response => {
            this.produce=response.data
            this.$router.push(`/`);
          })
    },
    backToLogin() {
      this.$router.push(`/`);
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
