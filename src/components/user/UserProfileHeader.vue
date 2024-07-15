<!-- TransparentHeader.vue -->
<template>
  <div class="user-profile-header" :class="{'scrolling': isScrolling}">
    <img class="logo"
         src="@/assets/images/LOGOPNG.png"
         alt=""
         @click="handleLogoClick">
    <div class="circle-user">
        <font-awesome-icon class="dropdown-toggle"
                           type="button"
                           data-bs-toggle="dropdown"
                           aria-expanded="false"
                           :icon="['fas', 'street-view']"/>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Edit profile</a></li>
        <li><a class="dropdown-item" href="#">Home Page</a></li>
        <li><a @click="logout" class="dropdown-item" href="#">Log out</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolling: false,
      isDropdownOpen: false,
      userIsLoggedIn: false,
      userId: null,
      userEmail: null
    };
  },
  methods: {
    handleScroll() {
      this.isScrolling = window.scrollY > 0;
    },

    closeDropdown(event) {
      if (!this.$el.contains(event.target) && !event.target.matches('.dropbtn')) {
        this.isDropdownOpen = false;
      }
    },

    checkIfLoggedIn() {
      const userId = localStorage.getItem("userId");
      const userEmail = localStorage.getItem("email");
      if (userId) {
        this.userIsLoggedIn = true;
        this.userId = userId;
        this.userEmail = userEmail;
      }
    },
    handleLogoClick() {
      if (this.userIsLoggedIn) {
        if (this.userEmail === 'admin@turnikas.com') {
          this.$router.push({name: 'adminRoute'});
        } else {
          this.$emit('navigate-to-user-profile');
        }
      }
    },

    logout() {
      if(confirm('Sure you want to log out?')) {
        localStorage.removeItem('userId');
        localStorage.removeItem('email');
        this.userIsLoggedIn = false;
        this.$router.push('/');
      }
    },

  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('click', this.closeDropdown);
    this.checkIfLoggedIn();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('click', this.closeDropdown);
  }
};
</script>

<style>
.user-profile-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  z-index: 9999;
  transition: background-color 0.3s ease;
}

.circle-user {
  position: fixed;
  right: 20px;
  display: flex;
  color: #FFFFFF;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  font-size: 1.5rem;
  z-index: 9999;
  cursor: pointer;
  background: transparent;
}

.user-profile-header.scrolling {
  height: 85px;
  background: black;
}

.logo img {
  width: 80px;
  height: 80px;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  right: 0;
  top: 30px; /* Adjust this value if needed */
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  z-index: 10000;
}

.dropdown-menu a {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #000;
}

.dropdown-menu a:hover {
  background-color: #f0f0f0;
}
</style>
