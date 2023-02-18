<template>
  <div>
    <h2>User Profile</h2>
    <br>
    <h4 v-if="isAuthenticated" v-html="$t('profile.nickname')"/> {{ user.nickname }}
    <h4 v-if="isAuthenticated" v-html="$t('profile.email')"/> {{ user.email }}
    <h4 v-if="isAuthenticated" v-html="$t('profile.is_verified')"/> {{ user.email_verified }}
    <h4 v-if="isAuthenticated" v-html="$t('profile.updated')"/> {{ user.updated_at }}
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