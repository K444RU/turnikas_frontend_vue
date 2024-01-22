<template>
  <form>
    <div class="background-image">
      <Header/>
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col"></div>
          <div class="col">
            <div class="center-container">
              <div class="registration-column font">
                <h1 class="font">Welcome !</h1>
                <p>Enter your firstname</p>
                <input v-model="userRequest.firstName"
                       class="rounded-input" type="text"
                       placeholder="Firstname">
                <p>Enter your lastname</p>
                <input v-model="userRequest.lastName"
                       class="rounded-input" type="text"
                       placeholder="Lastname">
                <label for="birthday">Enter your birthday:</label>
                <input v-model="userRequest.dateOfBirth"
                       class="calendar"
                       type="date"
                       id="birthday"
                       name="birthday">
                <div class="control">
                  <p>Choose Role</p>
                  <label class="radio">
                    <input v-model="userRequest.roleCode"
                           value="1" type="radio"
                           name="answer">
                    Solo player
                  </label>
                  <label class="radio">
                    <input v-model="userRequest.roleCode"
                           value="2" type="radio"
                           name="answer">
                    Role two Example
                  </label>
                </div>
                <br>
                <br>
                <p>What's your email?</p>
                <input v-model="userRequest.email"
                       class="rounded-input"
                       type="text"
                       placeholder="Email">
                <p>Enter password</p>
                <input v-model="userRequest.password"
                       class="rounded-input"
                       type="password"
                       placeholder="Password">
                <p>Repeat password</p>
                <input v-model="userRequest.passwordRepeat"
                       class="rounded-input"
                       type="password"
                       placeholder="Repeat Password">
                <br>
                <button v-on:click="registerNewUser" type="button" class="btn">JOIN</button>
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
    <Footer/>
  </form>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default {
  name: 'JoinView',
  components: {Footer, Header},

  data: function () {
    return {

      userRequest: {
        firstName: '',
        lastName: '',
        dateOfBirth: Date,
        email: '',
        roleCode: 0,
        password: '',
        passwordRepeat: ''

      },
      userResponse: {
        id: 0,
        roleCode: 0
      }
    }
  },
  methods: {
    registerNewUser() {
      this.$http.post("/user/register", this.userRequest)
          .then(response => {
            const {id: userId, roleCode } = response.data
            sessionStorage.setItem("userId", userId);
            sessionStorage.setItem("roleCode", roleCode);
            console.log(response.data);
            this.resetForm();
            this.$router.push({ name: "userProfileRoute" });
          })
          .catch(error => {
            console.log(error);
          });
    },
    resetForm() {
      this.userRequest = {
        roleCode: 0,
        email: '',
        password: '',
        passwordRepeat: ''
      };
    },
  }
}
</script>

<style>

.calendar {
  border-radius: 5px;
  background-color: #181818;
  color: #808080FF;
}

.font {
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 19px;
}

.rounded-input {
  border-radius: 5px; /* Adjust the radius as needed */
  background-color: #181818;
  color: #FFFFFF;
}

.background-image {
  margin-top: 80px;
  background-image: url('../assets/images/LoginPage.jpg');
  background-size: cover;
  height: 1300px;
}

.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh; /* Adjust as needed */
  margin-top: 100px;
}

.registration-column {
  background-color: rgba(255, 255, 255, 0.2); /* White color with opacity */
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  margin-top: 100px;
  width: 400px;
  border-radius: 20px; /* Rounded corners */
}

/* Add additional styles for your input fields, labels, etc. */
.registration-column input {
  margin-bottom: 7px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

.registration-column button {
  padding: 10px 20px;
  background-color: darkseagreen;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 20px;
}

.registration-column button:hover {
  background-color: chartreuse;
}
</style>
