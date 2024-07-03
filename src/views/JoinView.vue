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
                       placeholder="Firstname"
                       :class="{'error-border': errors.firstName}">
                <span v-if="errors.firstName" class="error-message">Please complete this required field.</span>

                <p>Enter your lastname</p>
                <input v-model="userRequest.lastName"
                       class="rounded-input" type="text"
                       placeholder="Lastname"
                       :class="{'error-border': errors.lastName}">
                <span v-if="errors.lastName" class="error-message">Please complete this required field.</span>

                <label for="birthday">Enter your birthday:</label>
                <input v-model="userRequest.dateOfBirth"
                       class="calendar"
                       type="date"
                       id="birthday"
                       name="birthday"
                       :class="{'error-border': errors.dateOfBirth}">
                <span v-if="errors.dateOfBirth" class="error-message">Please complete this required field.</span>

                <p>What's your email?</p>
                <input v-model="userRequest.email"
                       class="rounded-input"
                       type="text"
                       placeholder="Email"
                       :class="{'error-border': errors.email}">
                <span v-if="errors.email" class="error-message">Please complete this required field.</span>

                <p>Enter password</p>
                <input v-model="userRequest.password"
                       class="rounded-input"
                       type="password"
                       placeholder="Password"
                       :class="{'error-border': errors.password}">
                <span v-if="errors.password" class="error-message">Please complete this required field.</span>

                <p>Repeat password</p>
                <input v-model="userRequest.passwordRepeat"
                       class="rounded-input"
                       type="password"
                       placeholder="Repeat Password"
                       :class="{'error-border': errors.passwordRepeat}">
                <span v-if="errors.passwordRepeat" class="error-message">Please complete this required field.</span>

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
        dateOfBirth: '',
        email: '',
        password: '',
        passwordRepeat: ''
      },
      errors: {
        firstName: false,
        lastName: false,
        dateOfBirth: false,
        email: false,
        password: false,
        passwordRepeat: false
      },
      userResponse: {
        id: 0,
        roleCode: 0
      }
    }
  },
  methods: {
    registerNewUser() {
      this.clearErrors();

      let hasError = false;

      if (!this.userRequest.firstName) {
        this.errors.firstName = true;
        hasError = true;
      }
      if (!this.userRequest.lastName) {
        this.errors.lastName = true;
        hasError = true;
      }
      if (!this.userRequest.dateOfBirth || isNaN(new Date(this.userRequest.dateOfBirth).getTime())) {
        this.errors.dateOfBirth = true;
        hasError = true;
      }
      if (!this.userRequest.email) {
        this.errors.email = true;
        hasError = true;
      }
      if (!this.userRequest.password) {
        this.errors.password = true;
        hasError = true;
      }
      if (!this.userRequest.passwordRepeat) {
        this.errors.passwordRepeat = true;
        hasError = true;
      }

      if (hasError) {
        return;
      }

      this.$http.post("/user/register", this.userRequest)
          .then(response => {
            const {id: userId, roleCode} = response.data
            sessionStorage.setItem("userId", userId);
            sessionStorage.setItem("roleCode", roleCode);
            console.log(response.data);
            this.$router.push({name: "newUserProfileRoute"});
          })
          .catch(error => {
            console.log(error);
          });
    },
    clearErrors() {
      this.errors = {
        firstName: false,
        lastName: false,
        dateOfBirth: false,
        email: false,
        password: false,
        passwordRepeat: false
      };
    }
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

.error-message {
  color: #e7234c;
  font-size: 12px;
}

.error-border {
  border: 2px solid #e7234c;
}
</style>
