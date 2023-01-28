<template>
  <br>
  <h1 class="text-center">UNIVERSAL MARKETING CO., LTD</h1>
  <br>
  <hr>
  <br>
  <h2 class="text-center">Employee Details</h2>
  <br>
  <br>
  <div v-if="currentEmployee" class="edit-form">
    <div class="form-group">
      <fieldset>
        <label>Name</label>
        <input id="name" type="text" v-model="currentEmployee.employeeName">
      </fieldset>
      <fieldset>
        <label>Position</label>
        <input id="position" type="text" v-model="currentEmployee.position">
      </fieldset>
      <fieldset>
        <label>Date Hired</label>
        <input id="date" type="text" v-model="currentEmployee.dateOfHire">
      </fieldset>
      <fieldset>
        <label>Status</label>
        <input id="status" type="text" v-model="currentEmployee.status">
      </fieldset>

      <button name="update" v-on:click="updateEmployee">Update Employee</button>

      <button name="back" v-on:click="backToList">Back</button>

    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "employeeDetails",
  data() {
    return {
      currentEmployee: '',
      message: ''
    };
  },
  computed: {
    employeeId() {
      return localStorage.getItem('var2');
    }
  },
  beforeMount() {
    this.getItem()
  },
  methods: {
    async getItem() {
      try {
        const response = await axios.get(
            `http://localhost:8080/employees/${this.employeeId}`
        );
        console.log(response)
        this.currentEmployee = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    updateEmployee() {
      axios.put(`http://localhost:8080/employees/${this.employeeId}`, {
        employeeName: this.currentEmployee.employeeName,
        position: this.currentEmployee.position,
        dateOfHire: this.currentEmployee.dateOfHire,
        status: this.currentEmployee.status
      })
          .then(response => {
            this.produce=response.data
            this.$router.push(`/employees`);
          })
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