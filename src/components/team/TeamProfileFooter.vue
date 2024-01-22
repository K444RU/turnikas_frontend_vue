<template>
  <div class="team-profile-footer-background">
    <div class="team-profile-footer-container">
      <div v-for="team in teamInfoResponse" :key="team.teamId" class="team-profile-footer-column">
        <h1 class="team-profile-coach-profile">COACH</h1>
        <p class="team-profile-coach-info">Name: {{ team.teamCoachName }}</p>
      </div>
    </div>

    <div class="team-profile-footer-container">
      <div class="team-profile-footer-column coach-container">
        <img class="team-profile-coach-image" src="@/assets/images/defaultCoach.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TeamProfileFooter',
  props: {
    teamId: Number,

  },
  data() {
    return {
      teamInfoResponse: {
        teamName: '',
        teamCoachName: '',
        categoryCode: 0,
        teamLogo: '',
      },
    };
  },
  methods: {
    getTeamInformationByTeamId() {
      this.$http
          .get(`/team/profile/info`, {
            params: {
              teamId: this.teamId,
            },
          })
          .then((response) => {
            this.teamInfoResponse = response.data;
            console.log("teamId:", this.teamId);
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
  mounted() {
    this.getTeamInformationByTeamId();
    console.log("THE TEAM ID IN PROPS IS: ", this.teamId)
    console.log("teamInfoResponse:", this.teamInfoResponse);
  },
};
</script>
<style scoped>
.team-profile-footer-background {
  background-color: black;
  background-size: cover;
  height: auto;
  width: auto;
  display: flex; /* Make the background a flex container */
}

.team-profile-footer-container {
  flex: 1;
  box-sizing: border-box;
}

.team-profile-footer-column {
  padding: 10px;
}

.coach-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Align items to the right side */
}
.team-profile-coach-profile{
  margin-left: 40px;
  margin-top: 100px;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 250px;
}

.team-profile-coach-image {
  height: 500px;
  width: auto; /* Ensure the width adjusts proportionally to the height */
  object-fit: cover; /* Preserve the aspect ratio of the image */
}
.team-profile-coach-info{
  margin-top: -60px;
  margin-left: 50px;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 50px;
}
</style>
