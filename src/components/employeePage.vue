<template>
  <br>
  <h1 class="text-center">UNIVERSAL MARKETING CO., LTD</h1>
  <br>
  <hr>
  <br>
  <h2 class="text-center">Employees</h2>

  <div class="center">
    <button name="stockList">Produce List</button>
    <button @click="redirectNewEmployee()">Add employee</button>
  </div>

  <div>
    <table>
      <thead>
      <tr>
        <th>Employee Id</th>
        <th>Name</th>
        <th>Position</th>
        <th>Date Hired</th>
        <th>Status</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in produce" v-bind:key="item.employeeId">
        <td>{{ item.employeeId }}</td>
        <td>{{ item.employeeName }}</td>
        <td>{{ item.position }}</td>
        <td>{{ item.dateOfHire }}</td>
        <td>{{ item.status }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "employeePage",
  data() {
    return {
      produce: [],
      employeeId: ''
    };
  },
  async beforeMount() {
    await this.getEmployees();
  },
  methods: {
    async getEmployees() {
      try {
        const response = await axios.get("http://localhost:8080/employees");
        this.produce = response.data;
      } catch (error) {
        console.error(error);
        alert(error)
      }
    },
    redirectNewEmployee(){
      this.$router.push(`/employees/new`);
}
  }
};
</script>

<style scoped>

button{
  margin: 5px;
}

table, th, td {
  border: 1px solid black;
  border-spacing: 10px;
  padding: 6px;
}
table {
  margin-left:auto;
  margin-right:auto;
}


</style>