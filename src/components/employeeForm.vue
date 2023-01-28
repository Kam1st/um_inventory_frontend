<template>
  <h2 class="text-center">Add Employee</h2>
  <div class="center">
    <div class="form-group">
      <fieldset>
        <label>Name</label>
        <input id="name" type="text" v-model="employeeName">
      </fieldset>
      <fieldset>
        <label>Position</label>
        <input id="position" type="text" v-model="position">
      </fieldset>
      <fieldset>
        <label>Date Hired</label>
        <input id="date" type="text" v-model="dateOfHire">
      </fieldset>
      <fieldset>
        <label>Status</label>
        <input id="status" type="text" v-model="status">
      </fieldset>
      <fieldset>
        <input id="addEmployee" type="submit" @click="addEmployee()" value="Add Employee">
        <button name="back" v-on:click="backToList">Back</button>
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
      if(!this.employeeName | !this.position
          | !this.dateOfHire | !this.status){
        alert('Please ensure all fields are filled.')
      }else {
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
