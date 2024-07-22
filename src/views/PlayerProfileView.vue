<template>
  <div class="player-profile-background" id="playerProfile">
    <div class="player-profile-header player-profile-image">
      <div class="team-profile-logo">
        <TeamProfileHeader class="logo-container"/>
      </div>
    </div>

    <div id="player-profile-container">
      <div id="left">
        <img class="player-profile-container-image" src="@/assets/images/jersey.png" alt="Default Player Image" />
        <font-awesome-icon :icon="['fab', 'square-instagram']" />
        <font-awesome-icon :icon="['fab', 'square-facebook']" />
        <p>Date of birth: </p>
        <p>Name: {{ teamPlayerResponse.firstName }}</p>
        <p>Last Name: {{ teamPlayerResponse.lastName }}</p>
      </div>

      <div id="right">
        <div class="right-box">
          <h2>Right Box 1</h2>
          <p>This is the content of right box 1.</p>
        </div>
        <div class="right-box">
          <h2>Player Profile</h2>
          <p class="text">...</p>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import TeamProfileHeader from "@/components/team/TeamProfileHeader";
import Footer from "@/components/common/Footer";

export default {
  name: 'playerProfileRoute',
  components: { TeamProfileHeader, Footer },
  data() {
    return {
      playerId: this.$route.params.playerId,
      teamPlayerResponse: {
        id: 0,
        teamId: 0,
        firstName: '',
        lastName: ''
      },
    };
  },
  methods: {
    getTeamPlayerInformationByPlayerId() {
      this.$http
          .get(`team/player/info`, {
            params: {
              playerId: this.playerId
            },
          })
          .then((response) => {
            console.log('API response:', response.data);
            this.teamPlayerResponse = response.data;
          })
          .catch((error) => {
            console.error('API error:', error);
          });
    },
  },
  mounted() {
    console.log("PLAYER ID from route: " + this.$route.params.playerId);
    this.playerId = this.$route.params.playerId;
    this.getTeamPlayerInformationByPlayerId();
  }
}
</script>

<style>
.text{
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
  margin-left: 20px;
  color: white;
}

#player-profile-container {
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 40px;
  display: flex;
}

#left {
  margin-left: 50px;
  margin-top: 50px;
  width: 50%;
  background-color: black;
  color: rgba(255, 255, 255, 0.34);
  border-bottom: 1px solid #fff; /* White right border */
}

#right {
  display: flex;
  width: 100%;
  flex-direction: column; /* Stack items vertically */
  color: rgba(255, 255, 255, 0.34);
}

.right-box {
  background-color: black;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #fff; /* White right border */
}




.player-profile-background {
  background-color: black;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
}

.player-profile-header {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: darkseagreen;
  background-image: url("https://images.unsplash.com/photo-1602472097151-72eeec7a3185?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

}

.player-profile-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.player-profile-container-image{

}
.team-profile-logo {
  width: 80px;
  height: 80px;
  cursor: pointer;
}

</style>