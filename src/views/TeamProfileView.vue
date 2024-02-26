<template>
  <div class="team-profile-background" id="teamProfileBackground">
    <div class="team-profile-header team-profile-background-image">
      <div class="team-profile-logo">
        <TeamProfileHeader @navigate-to-user-profile="navigateToUserProfile" :teamId = "teamId" class="logo-container" @toggle-menu="toggleMenu"/>
      </div>
      <div v-for="team in teamInfoResponse" :key="team.teamId" class="team-profile-text-container">
        <h1 class="team-profile-font">{{team.teamName }} TEAM PROFILE</h1>
      </div>
    </div>
    <font-awesome-icon @click="openNewTeamPlayerRegistrationModal(teamId)"
                       type="button"
                       data-bs-toggle="modal"
                       data-bs-target="#playerRegisterStaticBackdrop"
                       class="team-players-add-button position-absolute end-0"
                       :icon="['fas', 'square-plus']" />
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal fade" id="playerRegisterStaticBackdrop"
           data-bs-backdrop="static"
           data-bs-keyboard="false"
           tabindex="-1"
           aria-labelledby="staticBackdropLabel"
           aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Register new player</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <p style="color:white;">Enter Players name</p>
                <input v-model="teamPLayersRequest.firstName"
                       type="text"
                       class="rounded-input2"
                       aria-label="First Name">
              </div>
              <div class="input-group mb-3">
                <p style="color:white;">Enter Players Lastname</p>
                <input v-model="teamPLayersRequest.lastName"
                       type="text"
                       class="rounded-input2"
                       aria-label="Last Name">
              </div>
              <div class="input-group mb-3">
                <p style="color:white;">Upload your players photo</p>
              </div>
              <div class="input-group mb-3">
                <button
                    v-model="teamPLayersRequest.teamLogo"
                    type="button"
                    class="tt btn btn-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Tooltip on right"
                >Upload file
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="close-changes-button" data-bs-dismiss="modal">Close</button>
              <button @click="saveNewTeamPlayerToDataBase" type="button" class="save-changes-button">Save player</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h1 class="team-profile-roster">ROSTER</h1>
    <div style="color: #FFFFFF" class="team-players-container">
      <div v-for="(player, index) in teamPlayerResponse" :key="player.id" class="box">
        <img v-if="player.image" :src="player.image" alt="Player Image" />
        <img v-else src="@/assets/images/jersey.png" alt="Default Player Image" />
        <div class="buttons">
          <button @click="navigateToTeamPlayerProfile(player.id)">Profile</button>
          <button>Edit</button>
        </div>
        {{ player.firstName }} {{ player.lastName }}
      </div>
    </div>

    <TeamProfileFooter :teamId="teamId" />
    <Footer/>
  </div>
</template>

<script>
import TeamProfileHeader from "@/components/team/TeamProfileHeader";
import TeamProfileFooter from "@/components/team/TeamProfileFooter";
import Footer from "@/components/common/Footer";
import UserProfileStatisticsTable from "@/components/user/UserProfileStatisticsTable";
export default {
  name: 'teamProfileRoute',
  components: {
    UserProfileStatisticsTable,
    Footer,
    TeamProfileFooter,
    TeamProfileHeader

  },
  data() {
    return {
      teamId: this.$route.query.teamId,

      teamInfoResponse: {
        teamName: '',
        teamCoachName: '',
        categoryCode: 0,
        teamLogo: '',
      },
      //toDo: add fields for players Number and players positions to add a specifications in the future
      //toDo: add fields for players additional information and may be personal stats as well
      teamPLayersRequest:{
        teamId: this.$route.query.teamId,
        firstName: '',
        lastName: ''
      },
      teamStatsResponse: {
        played: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalFor: 0,
        goalAgainst: 0
      },
      teamPlayerResponse: [{
        id: 0,
        teamId: 0,
        firstName: '',
        lastName: ''
      }],
    };
  },

  methods: {
    navigateToTeamPlayerProfile(playerId){
      this.$router.push({
        name: 'playerProfileRoute',
        params: { playerId }
      })
      console.log('Players ID is: ' + playerId)
    },
    navigateToUserProfile() {
      // Replace this with your actual navigation logic to the user profile
      this.$router.push({
        name: 'userProfileRoute',
        params: { userId: this.userId },
      });
    },
    toggleMenu() {
      this.$el.querySelector('.button-container').classList.toggle('change');
    },

    openNewTeamPlayerRegistrationModal(teamId){
      this.teamId = teamId;
      const modal = new bootstrap.Modal(document.getElementById('teamEditStaticBackDrop'));
      modal.show()
    },

    saveNewTeamPlayerToDataBase(){
      this.$http.post("/team/player/register", this.teamPLayersRequest
      ).then(response => {
        this.getTeamPlayerInformationByTeamId();
        this.$router.push({name: 'teamProfileRoute'});

        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },


    getTeamStats(teamId) {
      this.$http.get("/team/stats", {
            params: {
              teamId: teamId,
            }
          }
      ).then(response => {
        this.teamStatsResponse = response.data;
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

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

    getTeamPlayerInformationByTeamId() {
      this.$http
          .get(`team/players/info`, {
            params: {
              teamId: this.teamId,
            },
          })
          .then((response) => {
            this.teamPlayerResponse = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
  mounted() {
    console.log("Mounting to team profile with teamId:", this.teamId);
    this.getTeamInformationByTeamId();

  },
  beforeMount() {
    this.getTeamPlayerInformationByTeamId()

  }
}
</script>

<style>
.team-profile-stats-table{
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 50px;
  border-radius: 10px;
  width: auto; /* Ensure the width adjusts proportionally to the height */
  object-fit: cover; /* Preserve the aspect ratio of the image */
  margin-left: 50px;
}
.team-profile-stats-container {
  flex: 1;
  box-sizing: border-box;
}

.team-profile-stats-column {
  padding: 10px;
}

.stats-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.team-profile-stats-profile{
  margin-left: 40px;
  margin-top: 100px;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 250px;
}

.team-players-add-button{
  color: #FFFFFF;
  height: 40px;
  width: 40px;
  cursor: pointer;
}
.team-profile-roster{
  margin-left: 40px;
  margin-top: 100px;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 200px;
}
.team-players-container {
  display: flex;
  flex-wrap: wrap;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 30px;
}

.box {
  position: relative;
  flex: 0 0 33.33%;
  box-sizing: border-box;
  padding: 100px;
  height: 700px;
  overflow: hidden;
}

.box img {
  width: 100%;
  height: auto;
  transition: filter 0.3s ease;
}
.box:hover img {
  filter: blur(5px);
}
.buttons {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.box:hover .buttons {
  opacity: 1;
}
.buttons button {
  margin: 5px;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.buttons button:hover {
  background-color: #45a049;
}
.box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
}

.container:last-child .box::before{
  display: none;
}
.team-profile-background {
  background-color: black;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
}

#teamProfileBackground .team-profile-background-image {
  background-image: url("../assets/images/pexels-jonathan-petersson-399187.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.team-profile-header {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.team-profile-logo {
  width: 80px;
  height: 80px;
  cursor: pointer;
}
.team-profile-font {
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 100px;
  color: #FFFFFF;
}

.team-profile-text-container {
  text-align: center;
  white-space: nowrap;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,0.8)20%, transparent);
}
</style>
