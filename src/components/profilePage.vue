<template>
  <div>
    <h2>User Profile</h2>
    <p v-if="isAuthenticated"><b>Nickname:</b> {{ user.nickname }} </p>
    <p v-if="isAuthenticated"><b>Email:</b> {{ user.email }} </p>
    <p v-if="isAuthenticated"><b>Is Email Verified:</b> {{ user.email_verified }} </p>
    <p v-if="isAuthenticated"><b>Last Updated:</b> {{ user.updated_at }} </p>
  </div>
</template>
<script>
import { useAuth0 } from '@auth0/auth0-vue';
export default {
  setup() {
    const { loginWithRedirect, user, isAuthenticated } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      },
      user,
      isAuthenticated
    };
  }
};
</script>