<template>
  <div class="nav">
    <img v-on:click="$router.push('/')" class="logo" src="../assets/images/photo_2023-02-22_11-55-37.jpg">
    <div class="links">
      <a v-on:click="$router.push('login')" class="nav-link">LOG IN</a>
      <a v-on:click="$router.push('join')" href="#" class="nav-link">JOIN</a>
      <a v-on:click="$router.push('about')" href="#" class="nav-link">ABOUT</a>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    emitLoginEvent() {
      this.$emit('show-login');
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');


.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  background-image: linear-gradient(to left,black, #030F54, black, #053B00);
  overflow: hidden;
  font-size: 20px;
  height: 110px;
  padding: 0 20px; /* Adjust the padding as needed */
}

.links {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: goldenrod;
  text-decoration: none;
  font-family: 'Permanent Marker', cursive;
}

.nav-link:hover {
  background: #0bb848;
  color: floralwhite;
}

.nav a {
  padding: 20px 30px;
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 15px;
  text-decoration: none;
  font-family: 'Permanent Marker', cursive;


}

.nav a:hover {
  background: #8fbc8f;
  color: #ffffff;
  border-radius: 10px;
}

.logo {
  float: left;
  margin-left: 6px;
  height: 101px;
  margin-top: 3px;
  margin-bottom: 5px;
  border-radius: 10px;
}


</style>