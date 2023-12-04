<template>
  <div v-if="showLogin" class="login-popup" v-on:click="closeLogin">
    <div class="login-form" v-on:click.stop>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username">

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password">

      <button v-on:click="submitLogin">Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLogin: false,
      username: '',
      password: '',
    };
  },
  methods: {
    closeLogin() {
      this.showLogin = false;
    },
    submitLogin() {
      // Implement your login logic here
      // For demonstration purposes, close the login popup
      this.closeLogin();
    },
  },
};
</script>

<style scoped>
/* Add your styles for the login popup here */
.login-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.login-form {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Add additional styles for your login popup as needed */
</style>
