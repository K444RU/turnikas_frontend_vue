<template>
  <div class="mainHeader" :class="{'scrolling': isScrolling }">
    <div class="logo-container">
      <img v-on:click="$router.push('/')" class="logo" src="../../assets/images/photo_2023-02-22_11-55-37.jpg">
    </div>
    <div class="links">
      <a v-on:click="$router.push('login')" href="#" class="nav-link">LOG IN</a>
      <a v-on:click="$router.push('join')" href="#" class="nav-link">JOIN</a>
      <a v-on:click="$router.push('about')" href="#" class="nav-link">ABOUT</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolling: false
    }
  },
  methods: {
    emitLoginEvent() {
      this.$emit('show-login');
    },
    handleScroll() {
      this.isScrolling = window.scrollY > 0;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

.logo:hover {
  cursor: pointer;
}

.mainHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  background-image: linear-gradient(to left, black, #36454F, black);
  font-size: 20px;
  height: 110px;
  padding: 0 20px; /* Adjust the padding as needed */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease;

}

.mainHeader.scrolling {
  height: 110px; /* Adjust the height as needed */
  background: black;
}

.links {
  display: flex;
  gap: 20px;
}

.mainHeader a {
  padding: 20px 30px;
  color: rgb(255, 255, 255);
  text-align: center;
  text-decoration: none;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 30px;
}

.mainHeader a:hover {
  background: #8fbc8f;
  color: #ffffff;
  border-radius: 10px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 101px;
  border-radius: 10px;
}
</style>
