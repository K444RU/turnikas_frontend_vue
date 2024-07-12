<!--Admin view-->
<template>
  <div class="admin-view-background" id="adminView">
    <UserProfileHeader/>


  </div>
</template>

<script>
import UserProfileHeader from "@/components/user/UserProfileHeader";

export default {
  name: 'adminRoute',
  components: {UserProfileHeader},
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style>
.admin-view-background{
  background-color: #101720;
  background-position: center;
  background-size: cover;
  position: relative;
  width: 100%;
  min-height: 100vh;
}
</style>