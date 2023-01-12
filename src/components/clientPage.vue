<template>
  <br>
  <h1 class="text-center">UNIVERSAL MARKETING CO., LTD</h1>
  <br>
  <hr>
  <br>
  <div class="text-center">
    <h2 v-html="$t('clients.title')"/>
  </div>

  <br>
  <h3 v-html="$t('clients.search')"/>
  <label for="clientId" v-html="$t('clients.input')"/>
  <input id="clientId" v-model="clientId"/>
  <br />
  <br />
  <button @click="getByClientId" v-html="$t('clients.button')"/>
  <br>
  <div>
    {{ message }}
  </div>
  <br/>
  <div v-if="client" class="edit-form">
    <div class="form-group">
      <fieldset>
        <label>ID</label>
        <input type="text" v-model="client.clientId" disabled>
      </fieldset>
      <fieldset>
        <label>Employee Name</label>
        <input type="text" v-model="client.clientName">
      </fieldset>
      <fieldset>
        <label>Employee Contact</label>
        <input type="text" v-model="client.supplierName">
      </fieldset>
      <fieldset>
        <label>Address</label>
        <input type="text" v-model="client.clientAddress">
      </fieldset>
      <fieldset>
        <label>Phone Number</label>
        <input type="text" v-model="client.clientPhone">
      </fieldset>

      <button name="update" v-on:click="updateClient">Update Details</button>

      <button name="back" v-on:click="backToList">Back</button>

<!--      <button name="back" v-on:click="deleteById">Delete</button>-->
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "clientDetails",
  data() {
    return {
      clientId: '',
      client: '',
      message: ''
    }
  },
  methods:{
  async getByClientId() {
    try {
      const response = await axios.get(
          `http://localhost:8080/clients/${this.clientId}`
      );
      console.log(response)
      this.client = response.data;
      if (!this.client){
        this.message = 'No client by this Id is found.';
      }
    } catch (error) {
      console.error(error)
    }
  },
  // async deleteById() {
  //   try {
  //     const response = await axios.delete(
  //         `http://localhost:8080/clients/${this.clientId}`
  //     );
  //     this.produce = response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   },
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
  margin: 10px;
}
</style>