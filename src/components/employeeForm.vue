<template>
  <h2 class="text-center" v-html="$t('employees.add')"/>
  <div class="center">
    <div class="form-group">
      <fieldset>
        <label v-html="$t('employees.name')"/>
        <input id="name" type="text" v-model="employeeName">
      </fieldset>
      <fieldset>
        <label v-html="$t('employees.position')"/>
        <input id="position" type="text" v-model="position">
      </fieldset>
      <fieldset>
        <label v-html="$t('employees.date_hired')"/>
        <input id="date" type="text" v-model="dateOfHire">
      </fieldset>
      <fieldset>
        <label v-html="$t('employees.status')"/>
        <input id="status" type="text" v-model="status">
      </fieldset>
      <fieldset>
        <button id="addEmployee"  @click="addEmployee()" v-html="$t('employees.add_emp')"/>
        <button name="back" v-on:click="backToList" v-html="$t('employees.back')"/>
      </fieldset>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "employeeForm",
  data() {
    return {
      postBody: ''
    }
  },
  methods: {
    addEmployee() {
      if (!this.employeeName | !this.position
          | !this.dateOfHire | !this.status) {
        alert('Please ensure all fields are filled out.')
      } else {
        axios.post("http://localhost:8080/employees", {
          employeeName: this.employeeName,
          position: this.position,
          dateOfHire: this.dateOfHire,
          status: this.status
        })
            .then(response => {
              this.produce = response.data
              this.$router.push(`/employees`);
            })
      }
    },
    backToList() {
      this.$router.push(`/employees`);
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
