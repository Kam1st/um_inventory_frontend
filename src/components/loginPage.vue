<template>
  <div>
    <br>
    <div>
      <h2>User Profile</h2>
      <br>
      <h4 v-if="isAuthenticated" v-html="$t('profile.nickname')"/> {{ user.nickname }}
      <h4 v-if="isAuthenticated" v-html="$t('profile.email')"/> {{ user.email }}
      <h4 v-if="isAuthenticated" v-html="$t('profile.is_verified')"/> {{ user.email_verified }}
      <h4 v-if="isAuthenticated" v-html="$t('profile.updated')"/> {{ user.updated_at }}
    </div>
<br>
    <br>
    <div>
      <button name="loginBtn" v-if="isAuthenticated" @click="logout()" v-html="$t('login.logout')"/>
    </div>
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
  }
}
</script>

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

