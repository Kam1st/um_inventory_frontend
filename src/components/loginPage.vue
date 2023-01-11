<template>
  <div class="hello">
    <br>
    <h1 class="text-center">UNIVERSAL MARKETING CO., LTD</h1>
    <br>
    <hr>
    <br>
    <h2 v-html="$t('login.title')"/>
    <div class="center"><button name="loginBtn">Login</button></div>
    <br>
    <br>
  </div>

</template>

<script>
export default {
  name: 'LoginPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>