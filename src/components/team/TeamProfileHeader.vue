<!-- TransparentHeader.vue -->
<template>
  <div class="transparent-header" :class="{ 'scrolling': isScrolling }">
    <div class="toggle-menu-button" @click="toggleMenu">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>

    <div class="side-nav" :class="{'open': isMenuOpen }">
      <a href="#">User Profile</a>
      <a href="#">Register new player</a>

    </div>


    <div class="logo-container">
      <img @click="navigateToUserProfile"  src="@/assets/images/LOGOPNG.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolling: false,
      isMenuOpen: false
    };
  },
  methods: {
    navigateToUserProfile() {
      this.$emit('navigate-to-user-profile');
    },
    toggleMenu() {
      this.$el.querySelector('.toggle-menu-button').classList.toggle('change');
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      this.isScrolling = window.scrollY > 0;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.toggle-menu-button {
  position: absolute;
  left: 20px;
  top: 30px;
  cursor: pointer;
}

.side-nav {
  position: fixed;
  top: 0;
  left: -250px; /* Hide the menu off-screen initially */
  width: 250px;
  height: 100%;
  background-color: #333;
  padding-top: 20px;
  transition: left 0.3s ease;
}

.side-nav a {
  display: block;
  color: white;
  padding: 15px;
  text-decoration: none;
}

.side-nav.open {
  left: 0;
}

.content {
  margin-left: 250px; /* Adjust to the width of your side navigation menu */
  transition: margin-left 0.3s ease;
}

.transparent-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  z-index: 1000;
  background: transparent;
  transition: background-color 0.3s ease;
}

.transparent-header.scrolling {
  height: 80px;
  background: black;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-container img {
  width: 80px;
  height: 80px;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 2px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  transform: translate(0, 11px) rotate(-45deg);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  transform: translate(0, -11px) rotate(45deg);
}
</style>