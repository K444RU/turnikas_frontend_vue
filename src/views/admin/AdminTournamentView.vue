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
                  <li>City:</li>
                  <li>Stadium:</li>
                  <li>Team size:</li>
                  <li>Prize pool:</li>
                  <li>Age Category:</li>
                  <li>Slots available:</li>
                  <li>Tournament name:</li>
                  <li>Participation prise:</li>
                  <li>Tournament format:</li>
                  <li>Additional information:</li>
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
                <div class="shuffle-tournament-groups-button"><button class="shuffle-button">Shuffle groups</button></div>
                <div class="start-tournament-button"><button class="start-button">Start tournament</button></div>
                <div class="end-tournament-button"><button class="end-button">End tournament</button></div>
              </div>
              <div class="tournament-teams-list-name">Teams Registered: </div>
              <div class="tournament-teams-list">
                <div class="admin-tournament-team-logo"><img :src="require('@/assets/images/defaultTeamLogo.png')" alt="Tournament Image" class="image"/>
                </div>
                <div class="admin-tournament-team-name">Team name</div>
                <div class="admin-team-edit-button"><button class="admin-edit-button"><font-awesome-icon :icon="['fas', 'pen-to-square']" />Edit</button></div>
                <div class="admin-team-remove-button"><button class="admin-remove-button"><font-awesome-icon :icon="['fas', 'square-minus']" /> Remove</button></div>
              </div>
            </div>
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

export default {
  name: 'adminTournamentRoute',
  components: {Home, UserProfileHeader},
  data() {
    return {}
  },
  computed: {},
  methods: {},
  mounted() {

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
  border: #333333 3px solid;
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
</style>