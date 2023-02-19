<template>
  <h2 class="text-center" v-html="$t('employees.title')"/>

  <div class="center">
    <button @click="redirectNewEmployee()" v-html="$t('employees.add')"/>
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
        <td>
          <button name="employeeDetails" @click="detailsClicked(item.employeeId)" v-html="$t('employees.details')"/>
        </td>
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
},
    async detailsClicked(employeeId) {
      try {
        localStorage.setItem("var2", employeeId);
        this.$router.push(`/employees/employeeDetails`);
      } catch (error) {
        console.error(error);
      }
    },
  }
};
</script>

<style scoped>

button{
  margin: 5px;
}


</style>