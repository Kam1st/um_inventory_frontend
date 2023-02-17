<template>
  <h2 class="text-center" v-html="$t('clients.new')"/>
  <div class="center">
    <div class="form-group">
      <fieldset>
        <label v-html="$t('clients.client_name_label')"/>
        <input type="text" v-model="clientName">
      </fieldset>
      <fieldset>
        <label v-html="$t('clients.employee_name_label')"/>
        <input type="text" v-model="clientEmployeeName">
      </fieldset>
      <fieldset>
        <label v-html="$t('clients.client_address_label')"/>
        <input type="text" v-model="clientAddress">
      </fieldset>
      <fieldset>
        <label v-html="$t('clients.client_phone_label')"/>
        <input type="text" v-model="clientPhone">
      </fieldset>
      <fieldset>
        <button type="submit" v-on:click="createClient" v-html="$t('clients.create')"/>
        <button name="back" v-on:click="back" v-html="$t('clients.back')"/>
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
    back() {
      this.$router.push(`/clients`);
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
