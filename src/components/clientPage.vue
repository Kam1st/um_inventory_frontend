<template>
  <h2 class="text-center" v-html="$t('app.clients')"/>
  <button v-on:click="redirectToClientForm" v-html="$t('clients.new')"/>
<br>
  <br>
  <h3 v-html="$t('clients.search')"/>
  <label for="clientId" v-html="$t('clients.input')"/>
  <input id="clientId" v-model="clientId"/>
  <br />
  <br />
  <button @click="getByClientId" id="getClient" v-html="$t('clients.buttonSearch')"/>
  <br>
  <br/>
  <div v-if="client" class="edit-form">
    <div class="form-group">
      <fieldset>
        <label v-html="$t('clients.client_id_label')"></label>
        <input type="text" v-model="client.clientId" disabled>
      </fieldset>
      <fieldset>
        <label v-html="$t('clients.client_name_label')"></label>
        <input type="text" v-model="client.clientName">
      </fieldset>
      <fieldset>
        <label v-html="$t('clients.employee_name_label')"></label>
        <input type="text" v-model="client.clientEmployeeName">
      </fieldset>
      <fieldset>
        <label v-html="$t('clients.client_address_label')"></label>
        <input type="text" v-model="client.clientAddress">
      </fieldset>
      <fieldset>
        <label v-html="$t('clients.client_phone_label')"></label>
        <input type="text" v-model="client.clientPhone">
      </fieldset>

      <button v-html="$t('clients.update_details_button')" name="update" v-on:click="updateClient"></button>

      <button name="back" v-on:click="deleteById">Delete</button>
    </div>
  </div>

  <div class="center">
    <h3 v-html="$t('clients.ordersClient')"/>
    <label for="client-id-orders" v-html="$t('clients.input')"/>
    <input id="client-id-orders" v-model="clientIdOrders"/>
    <br />
    <br />
    <button @click="getOrdersByClientId" v-html="$t('clients.buttonSearch')"/>
  </div>

  <table v-for="(items, index) in produce" v-bind:key="index">
    <tr>
      <th>
        Order Id: {{items.orderId}}
      </th>
      <th>
        Client Id: {{items.clientId}}
      </th>
    </tr>
    <tr>
      <th>
        Stock Item Id
      </th>
      <th>
        Description
      </th>
      <th>
        Quantity
      </th>
    </tr>

    <tr v-for="(item, index) in items.stockOrderDTOS" v-bind:key="index">
      <td>
        {{item.stockItemId}}
      </td>
      <td>
        {{item.description}}
      </td>
      <td>
        {{item.quantity}}
      </td>
    </tr>
  </table>



</template>

<script>
import axios from "axios"
export default {
  name: "clientDetails",
  data() {
    return {
      clientId: '',
      client: '',
      message: '',
      clientIdOrders: '',
      produce: ''
    }
  },
  methods:{
  async getByClientId() {
    try {
      const response = await axios.get(
          `clients/${this.clientId}`
      );
      console.log(response)
      this.client = response.data;

    } catch (error) {
      console.error(error)
      alert(error+": No client with this Id was found.")
    }
  },
    async getOrdersByClientId() {
      try {
        const response = await axios.get(
            `orders/client/${this.clientIdOrders}`
        );
        this.produce = response.data;
      } catch (error) {
        console.error(error);
        alert(error+": No orders with this client Id was found.");
      }
    },
    async updateClient() {
      if (!this.client.clientName | !this.client.clientEmployeeName | !this.client.clientAddress | !this.client.clientPhone) {
        alert('Please ensure all fields are filled out.')
      } else {
      try {
        axios.put(`clients/${this.clientId}`, {
          clientName: this.client.clientName,
          clientEmployeeName: this.client.clientEmployeeName,
          clientAddress: this.client.clientAddress,
          clientPhone: this.client.clientPhone
        })
            .then(response => {
              this.produce = response.data
              this.$router.go();
            })
      } catch (error) {
        console.error(error)
      }
    }
    },
  async deleteById() {
    try {
      const response = await axios.delete(
          `clients/${this.clientId}`
      );
      this.produce = response.data;
      this.$router.push(`/`);
    } catch (error) {
      console.error(error);
    }
    },

    redirectToClientForm(){
      this.$router.push(`/clients/new`);
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
  margin: 10px;
}
</style>