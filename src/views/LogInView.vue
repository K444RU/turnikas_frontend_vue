<template>
  <div class="login-page-background">
    <Header/>
    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col">
        </div>
        <div class="col">
          <div class="kdCHyh ">
            <form @submit.prevent="login">
              <div class="input-container ">
                <h2 class="sign-up-font">
                  Sign in
                </h2>
                <input v-model="email"
                       type="text"
                       placeholder="Email"
                       class="rounded-input">
                <input v-model="password"
                       type="password"
                       placeholder="Password"
                       class="rounded-input">
              </div>
              <button v-on:click="login"
                      type="submit">Sign in test
              </button>
            </form>
          </div>
        </div>
        <div class="col">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer"


export default {
  name: 'LogInView',
  components: {Header, Footer},
  data() {
    return {
      email: '',
      password: '',

      loginResponse: {
        id: 0,
        roleCode: 0
      }
    }
  },
  methods: {
    login() {
      // Check if the user is already on the new user profile route
      if (this.$route.name === 'newUserProfileRoute') {
        return;
      }

      this.$http
          .post("/user/login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            const {id: userId} = response.data;
            sessionStorage.setItem("userId", userId);
            // Check again before navigating to avoid redundancy
            if (this.$route.name !== 'newUserProfileRoute') {
              this.$router.push({name: 'newUserProfileRoute'});
            }
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }
}
</script>

<style>
.rounded-input {
  border-radius: 5px; /* Adjust the radius as needed */
  background-color: #181818;
  color: #FFFFFF;
}

.sign-up-font {
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 40px;
}

.kdCHyh {
  background-color: rgba(255, 255, 255, 0.2); /* White color with opacity */
  margin-top: 200px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  width: 400px;
  border-radius: 20px; /* Rounded corners */
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Align inputs in the center horizontally */

}

.kdCHyh input {
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  box-shadow: #181818;
}

.kdCHyh button {
  padding: 10px 20px;
  background-color: darkseagreen;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.kdCHyh button:hover {
  background-color: chartreuse;

}

.login-page-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/LoginPage.jpg');
  background-size: cover;
}

</style>
