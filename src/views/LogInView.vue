<template>
  <div class="login-page-background">
    <Header />
    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col">
        </div>


        <div class="col">
          <div class="kdCHyh ">
            <form @submit.prevent="login">
              <div class="input-container ">
                <h2 class="font">
                  Sign in
                </h2>
                <input v-model="email"
                       type="text"
                       placeholder="Email">
                <input v-model="password"
                       type="password"
                       placeholder="Password">
              </div>
              <button v-on:click="$router.push('/user-profile')"
                      type="submit">Sign In
              </button>
            </form>
          </div>
        </div>


        <div class="col">
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";


export default {
  name: 'LogInView',
  components: { Header },
  data() {
    return {
      email: '',
      password: '',

      loginResponse: {
        userId: 0,
        roleCode: 0,
      }
    }
  },
  methods: {
    login: function () {
      this.$http.post("/login", {
            params: {
              email: this.email,
              password: this.password
            }
          }
      ).then(response => {
        this.loginResponse = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
  }
}
</script>

<style>
.font{
  font-family: 'FF Mark W05', sans-serif;
  color: #FFFFFF;
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
