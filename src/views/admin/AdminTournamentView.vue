<template>
  <div class="admin-tournament-view-background" id="adminTournamentView">
    <UserProfileHeader/>

    <div class="admin-tournament-view-body">
      <div class="admin-tournament-view-left-nav"></div>
      <div class="admin-tournament-view-centre-nav">
        <div class="admin-tournament-view-centre-grid">
          <div class="admin-tournament-view-left-grid-col">
            <div class="tournament-info-tab">
              <div class="tournament-image">
                <!-- Future tournament image goes here -->
                <img :src="require('@/assets/images/tournamentDeafault.jpg')" alt="Tournament Image" class="image"/>
              </div>
              <div class="tournament-info">
                <!-- Future tournament info goes here -->
                <ul>
                  <li>City: {{ tournamentInfoResponse.cityName }}</li>
                  <li>Stadium: {{ tournamentInfoResponse.stadiumName }}</li>
                  <li>Prize pool: {{ tournamentInfoResponse.prize }}</li>
                  <li>Age Category: {{ tournamentInfoResponse.categoryName }}</li>
                  <li>Slots available: {{ remainingSlots }} / {{ tournamentInfoResponse.amountName }}</li>
                  <li>Tournament name: {{ tournamentInfoResponse.name }}</li>
                  <li>Participation prise: {{ tournamentInfoResponse.participationPrise }}$</li>
                  <li>Tournament format: Single elimination</li>
                </ul>
              </div>
              <div class="tournament-edit-button">
                <!-- Future button to edit all that goes here -->
                <button>Edit</button>
              </div>
            </div>
          </div>
          <div class="admin-tournament-view-right-grid-col">
            <div class="tournament-action-tab">
              <div class="tournament-buttons">
                <div class="shuffle-tournament-groups-button">
                  <button @click="shuffleTournamentGroups(tournamentId)" class="shuffle-button">Shuffle groups</button>
                </div>
                <div class="start-tournament-button">
                  <button class="start-button">Start tournament</button>
                </div>
                <div class="end-tournament-button">
                  <button class="end-button">End tournament</button>
                </div>
              </div>
              <div class="tournament-teams-list-name">Teams Registered:</div>
              <div v-for="team in registeredTeams" :key="team.id" class="tournament-teams-list">
                <div class="admin-tournament-team-logo">
                  <img v-if="team.teamLogo" :src="team.teamLogo" alt="Team Logo">
                  <img v-else src="@/assets/images/defaultTeamLogo.png"
                       alt="Default Team Logo" class="image">
                  <!--                  <img :src="require('@/assets/images/defaultTeamLogo.png')" alt="Tournament Image" class="image"/>-->
                </div>
                <div class="admin-tournament-team-name">{{ team.teamName }}</div>
                <div class="admin-team-edit-button">
                  <button class="admin-edit-button">
                    <font-awesome-icon :icon="['fas', 'pen-to-square']"/>
                    Edit
                  </button>
                </div>
                <div class="admin-team-remove-button">
                  <button class="admin-remove-button">
                    <font-awesome-icon :icon="['fas', 'square-minus']"/>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <strong class="me-auto">Notification: </strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            {{ toastMessage }}
          </div>
        </div>
      </div>
      <div class="admin-tournament-view-right-nav"></div>
    </div>
  </div>
</template>

<script>
import UserProfileHeader from "@/components/user/UserProfileHeader";
import Home from "@/views/HomeView";
import {Toast} from 'bootstrap';

export default {
  name: 'adminTournamentRoute',
  components: {Home, UserProfileHeader},
  data() {
    return {
      tournamentId: this.$route.query.tournamentId,
      tournamentInfoResponse: {
        cityName: '',
        stadiumName: '',
        categoryName: '',
        amountName: '',
        id: 0,
        categoryCode: 0,
        playerAmountCode: 0,
        cityId: 0,
        stadiumId: 0,
        name: '',
        startDate: Date,
        endDate: Date,
        participationPrise: 0,
        prize: '',
        additionalInfo: ''
      },
      registeredTeams: [],
      toastMessage: '',
    }
  },
  computed: {
    remainingSlots() {
      return this.tournamentInfoResponse.amountName - this.registeredTeams.length;
    },
  },
  methods: {
    showToast(message) {
      this.toastMessage = message;
      const toastEl = document.getElementById('liveToast');
      const toast = new Toast(toastEl);
      toast.show();
    },
    shuffleTournamentGroups(tournamentId) {
      this.$http.post(`/participation/tournament/${tournamentId}/groups`)
          .then(response => {
            console.log(response.data);
            this.showToast("Groups have been created successfully!");
          })
          .catch(error => {
            if (error.response && error.response.status === 400) {
              this.showToast("Groups have already been created for this tournament.");
            } else {
              this.showToast("An error occurred while creating groups.");
            }
          });
    },

    async getTournamentInformationByTournamentId() {
      try {
        const response = await this.$http.get("/tournament/info", {
          params: {
            tournamentId: this.tournamentId,
          },
        });
        this.tournamentInfoResponse = response.data;
        await this.getCityNameByCityId(this.tournamentInfoResponse.cityId);
        await this.getStadiumNameByCityId(this.tournamentInfoResponse.cityId);
        await this.getAgeCategoryByCode(this.tournamentInfoResponse.categoryCode);
        await this.getPlayerAmountById(this.tournamentInfoResponse.playerAmountCode);
        this.$forceUpdate();
        console.log("Response City Name:", this.tournamentInfoResponse.cityName);
        console.log("Response Stadium Name:", this.tournamentInfoResponse.stadiumName);
        console.log("Response Age Category:", this.tournamentInfoResponse.ageCategory);
        console.log("Response Player Amount:", this.tournamentInfoResponse.amountName);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async getCityNameByCityId(cityId) {
      try {
        const response = await this.$http.get("/tournament/city/info", {
          params: {
            cityId: cityId,
          },
        });
        console.log("City API Response:", response.data);
        this.tournamentInfoResponse.cityName = response.data.cityName;
        console.log("City Name:", this.tournamentInfoResponse.cityName);
      } catch (error) {
        console.log("Error fetching City data:", error);
      }
    },
    async getStadiumNameByCityId(cityId) {
      try {
        const response = await this.$http.get("/tournament/city/stadium", {
          params: {
            cityId: cityId,
          },
        });
        if (response.data.length > 0) {
          this.tournamentInfoResponse.stadiumName = response.data[0].name;
          console.log("Stadium Name:", this.tournamentInfoResponse.stadiumName);
        } else {
          console.error("Stadium data is empty.");
        }
        console.log("Stadium Name:", response.data.name);
        console.log("Stadium Name:", this.tournamentInfoResponse.stadiumName);
      } catch (error) {
        console.log(error);
      }
    },
    async getAgeCategoryByCode(ageCategoryCode) {
      try {
        const response = await this.$http.get("/tournament/age-category", {
          params: {
            ageCategoryCode: ageCategoryCode,
          },
        });
        const ageCategoryData = response.data;
        this.tournamentInfoResponse.ageCategory = ageCategoryData.categoryName;
        this.tournamentInfoResponse.categoryName = ageCategoryData.categoryName;
        console.log("Age Category:", this.tournamentInfoResponse.ageCategory);
        console.log("Category Name:", this.tournamentInfoResponse.categoryName);
      } catch (error) {
        console.log(error);
      }
    },
    async getPlayerAmountById(amountCode) {
      try {
        const response = await this.$http.get("/tournament/player/amount/info", {
          params: {
            amountCode: amountCode,
          },
        });
        const playerAmountData = response.data;
        this.tournamentInfoResponse.playerAmount = playerAmountData.amountName;
        this.tournamentInfoResponse.amountName = playerAmountData.amountName;
        console.log("Player Amount:", this.tournamentInfoResponse.playerAmount);
        console.log("Amount Name:", this.tournamentInfoResponse.amountName);
      } catch (error) {
        console.log(error);
      }
    },

    async getRegisteredTeamsByTournamentId() {
      try {
        const response = await this.$http.get(`/participation/tournament/${this.tournamentId}/teams`);
        this.registeredTeams = response.data;
        console.log("Registered Teams: ", this.registeredTeams);
      } catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    console.log("Mounting to tournament profile with tournamentId:", this.tournamentId)
    await this.getTournamentInformationByTournamentId()
    console.log("Mounting to tournament profile with userId: ", this.userId)
    console.log("Registered teams: ", this.registeredTeams);
    await this.getRegisteredTeamsByTournamentId();
  }

}
</script>

<style>
.admin-tournament-view-background {
  background-color: #101720;
  background-position: center;
  background-size: cover;
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.admin-tournament-view-body {
  display: flex;
  flex: 1;
  overflow: hidden;
  margin-top: 100px;
  /*border: 1px solid grey;*/
}

.admin-tournament-view-left-nav,
.admin-tournament-view-right-nav {
  width: 2.5%;
  display: flex;
  height: auto;
  /*border: 1px solid grey;*/
}

.admin-tournament-view-centre-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  min-height: auto;
}

.admin-tournament-view-centre-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 25% 75%;
  /*border: 1px solid #0bb848;*/
  margin-top: 20px;
}

.admin-tournament-view-left-grid-col {
  /*border: 1px solid #efcc59;*/
  padding: 5px;
  height: auto;
}

.tournament-info-tab {
  height: auto;
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 5px;
  box-sizing: border-box;
}

.tournament-image {
  text-align: center;
}

.tournament-image .image {
  width: 100%;
  height: auto;
  border-radius: 20px;
}

.tournament-info {
  color: whitesmoke;
  padding: 10px;
}

.tournament-edit-button {
  text-align: center;
}

.tournament-edit-button button {
  background-color: #272e36;
  color: whitesmoke;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.tournament-edit-button button:hover {
  background-color: rgba(255, 255, 255, 0.14);
}

.admin-tournament-view-right-grid-col {
  /*border: 1px solid #efcc59;*/
  padding: 5px;
  height: auto;
}

.tournament-action-tab {
  /*border: 1px solid #ff6bec;*/
  padding: 5px;
  height: auto;
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 5px;
  box-sizing: border-box;
}

.tournament-buttons {
  /*border: 1px solid orangered;*/
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  box-sizing: border-box;
}

.shuffle-tournament-groups-button,
.start-tournament-button,
.end-tournament-button {
  text-align: center;
  padding: 10px;
}

.shuffle-button {
  border-radius: 10px;
  width: 100%;
  height: 75px;
  background-color: #4493f8;
  color: whitesmoke;
  font-size: 20px;
}

.start-button {
  border-radius: 10px;
  width: 100%;
  height: 75px;
  background-color: #4CAF50;
  color: whitesmoke;
  font-size: 20px;
}

.end-button {
  border-radius: 10px;
  width: 100%;
  height: 75px;
  background-color: #e7234c;
  color: whitesmoke;
  font-size: 20px;
}

.tournament-teams-list-name {
  /*border: 1px solid #9d9d9d;*/
  width: 100%;
  color: whitesmoke;
  padding: 5px;
  font-size: 20px;
  font-weight: bold;
}

.tournament-teams-list {
  border-top: #333333 3px solid;
  padding: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: 50px auto 9% 15%;
  gap: 5px;
  box-sizing: border-box;
  border-radius: 10px;
}

.admin-tournament-team-logo {
  text-align: start;
  /*border: 1px solid darkred;*/
}

.admin-tournament-team-logo .image {
  width: 45px;
  height: 45px;
}

.admin-tournament-team-name {
  text-align: start;
  width: 100%;
  /*border: 1px solid darkred;*/
  align-content: center;
  color: whitesmoke;
  font-size: 25px;
  font-weight: normal;
}

.admin-team-edit-button {
  text-align: center;
  width: 100%;
  /*border: 1px solid darkred;*/
  align-content: center;
}

.admin-team-remove-button {
  text-align: center;
  width: 100%;
  /*border: 1px solid darkred;*/
  align-content: center;
}

.admin-edit-button {
  width: 100%;
  border-radius: 5px;
  height: 100%;
  background-color: #4CAF50;
  color: whitesmoke;
}

.admin-remove-button {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #e7234c;
  color: whitesmoke;
}

/* Media Queries for Mobile View */
@media (max-width: 768px) {
  .admin-tournament-view-body {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .admin-tournament-view-left-nav,
  .admin-tournament-view-right-nav {
    display: none;
  }

  .admin-tournament-view-centre-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .admin-tournament-view-left-grid-col,
  .admin-tournament-view-right-grid-col {
    width: 100%;
  }

  .tournament-info-tab {
    margin-top: 100px;
    grid-template-rows: auto auto auto;
    gap: 20px;
  }

  .tournament-image .image {
    width: 100%;
    height: auto;
  }

  .tournament-info {
    width: 100%;
  }

  .tournament-edit-button {
    width: 100%;
  }

  .tournament-action-tab {
    grid-template-rows: auto auto auto auto;
    gap: 10px;
  }

  .tournament-buttons {
    grid-template-columns: 1fr;
  }

  .shuffle-tournament-groups-button,
  .start-tournament-button,
  .end-tournament-button {
    width: 100%;
  }

  .tournament-teams-list {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .tournament-teams-list {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  .admin-tournament-team-logo,
  .admin-tournament-team-name,
  .admin-team-edit-button,
  .admin-team-remove-button {
    width: 100%;
  }

  .admin-tournament-team-logo {
    text-align: center;
  }

  .admin-tournament-team-logo .image {
    width: 120px;
    height: 120px;
  }

  .admin-tournament-team-name {
    text-align: center;
  }

  .tournament-teams-list {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .admin-edit-button,
  .admin-remove-button {
    width: 48%;
    margin: 0;
  }
}

/* Scrollbar styles for Webkit browsers (Chrome, Safari) */
::-webkit-scrollbar {
  width: 12px; /* Width of the entire scrollbar */
}

::-webkit-scrollbar-track {
  background: #101720; /* Color of the track */
}

::-webkit-scrollbar-thumb {
  background-color: #272e36; /* Color of the thumb */
  border-radius: 10px; /* Rounded corners */
  border: 3px solid #101720; /* Padding around thumb */
}

/* Scrollbar styles for Firefox */
* {
  scrollbar-width: thin; /* Width of the scrollbar */
  scrollbar-color: #272e36 #101720; /* Color of the thumb and track */
}

/* Optional: Hide scrollbar in IE/Edge */
body {
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

.toast-container {
  z-index: 1050;
}

</style>