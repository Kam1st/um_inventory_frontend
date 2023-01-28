<template>
  <div>

    <h2 v-html="$t('login.title')"/>
    <div class="center">
      <button name="loginBtn" v-if="!isAuthenticated && !isLoading" @click="login()">Login</button>
      <button name="loginBtn" v-if="isAuthenticated" @click="logout()">Logout</button>
     <button class="center" v-on:click="redirectToClientForm">Create Client Account</button>
     </div>

    <br>
    <br>
  </div>

</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';
export default {
  name: 'LoginPage',
  setup() {
    const auth0 = useAuth0();

    return {
      isAuthenticated: auth0.isAuthenticated,
      isLoading: auth0.isLoading,
      user: auth0.user,
      login() {
        auth0.loginWithRedirect();
      },
      logout() {
        auth0.logout({
          returnTo: window.location.origin
        })
      }
    }
    },
  methods: {
    redirectToClientForm(){
      this.$router.push(`/clients/new`);
    }
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

button {
  margin: 5px;
}
</style>

