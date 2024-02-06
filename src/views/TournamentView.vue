<template>
  <div class="tournament-profile-background" id="tournamentProfile">
    <div class="tournament-profile-header tournament-profile-background-image">
      <div class="left-tournament-profile-header-info" style="color: white;">
        <div class="left-tournament-header-text">
          <h1 style="font-size: 4.0rem">Tournament name</h1>
          <p>Tournament start date</p>
        </div>
      </div>
      <div class="right-tournament-profile-header-info" style="color: white;">
        <div class="right-tournament-header-text">
          <p>Starts in: </p>
        </div>
      </div>
      <div class="team-profile-logo">
        <TeamProfileHeader class="logo-container"/>
      </div>
    </div>
    <div class="tournament-list-body">
      <div class="tournament-left-nav">

      </div>
      <div class="tournament-centre-nav">
        <div class="centre-nav-tabs">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview-tab-pane"
                      type="button" role="tab" aria-controls="overview-tab-pane" aria-selected="true">OVERVIEW
              </button>

            <li class="nav-item" role="presentation">
              <button class="nav-link" id="groups-tab" data-bs-toggle="tab" data-bs-target="#groups-tab-pane"
                      type="button" role="tab" aria-controls="groups-tab-pane" aria-selected="false">GROUPS
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="bracket-tab" data-bs-toggle="tab" data-bs-target="#bracket-tab-pane"
                      type="button" role="tab" aria-controls="bracket-tab-pane" aria-selected="false">BRACKET
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="matches-tab" data-bs-toggle="tab" data-bs-target="#matches-tab-pane"
                      type="button" role="tab" aria-controls="matches-tab-pane" aria-selected="false">MATCHES
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="teams-tab" data-bs-toggle="tab" data-bs-target="#teams-tab-pane"
                      type="button" role="tab" aria-controls="teams-tab-pane" aria-selected="false">TEAMS
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="prizes-tab" data-bs-toggle="tab" data-bs-target="#prizes-tab-pane"
                      type="button" role="tab" aria-controls="prizes-tab-pane" aria-selected="false">PRIZES
              </button>
            </li>

          </ul>
          <div style="color: white;" class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab"
                 tabindex="0">
              <div class="test-tournament-list-body">
                <div class="test-tournament-centre-nav">
                  <div class="test-tournament-centre-nav-left-info">
                    <h2>Format</h2>
                    <div class="tournament-left-info-grid">
                      <div class="tournament-left-info-cell">
                        <font-awesome-icon :icon="['fas', 'ranking-star']"/>
                        <h2>Tournament format: </h2>
                        <p>Single elimination</p>
                      </div>
                      <div class="tournament-left-info-cell">
                        <font-awesome-icon :icon="['fas', 'people-group']"/>
                        <h2>Team size: 11 players</h2>
                      </div>
                      <div class="tournament-left-info-cell">
                        <font-awesome-icon :icon="['fas', 'trophy']"/>
                        <h2>Prize pool: 200$</h2>
                      </div>
                      <div class="tournament-left-info-cell">
                        <font-awesome-icon :icon="['fas', 'trophy']"/>
                        <h2>Prize pool: 200$</h2>
                      </div>
                    </div>
                    <h1 style="color: #1d2127" class="team-profile-roster">TOURNAMENT</h1>
                    <h1>Tournament info: </h1>
                    <p>Overview:
                      Welcome to the Championship Cup 2024, a premier football tournament that brings together
                      teams from around the world to compete for glory. This event promises exciting matches,
                      exceptional skills, and unforgettable moments on the field.</p>
                    <br>
                    <h1>Tournament Format:</h1>
                    <li>Type: Knockout Stage followed by Group Stage</li>
                    <li>Number of Teams: 16</li>
                    <li>Matches: Single Elimination (Knockout), Group Stage Round Robin</li>
                    <li>Finals: Best of 3</li>
                    <br>
                    <h1>Venue:</h1>
                    All matches will be held at the state-of-the-art Championship Stadium, known for its electrifying
                    atmosphere and top-notch facilities.
                    The stadium is equipped to host football enthusiasts and provide an unparalleled viewing experience.

                  </div>

                  <div class="test-tournament-centre-nav-right-info">
                    <h2>Teams</h2>
                    <div class="tournament-right-info-cell">
                      <div class="tournament-right-info-box">
                        <div class="tournament-right-info-box-header">
                          <div class="tournament-right-info-box-header-cols">
                            <h3>Registered: </h3>
                            <p>4</p>
                          </div>
                          <div class="tournament-right-info-box-header-cols">
                            <h2>

                            </h2>
                          </div>
                          <div class="tournament-right-info-box-header-cols">
                            <h3>Free slots: </h3>
                            <p>28</p>
                          </div>
                        </div>
                        <div class="tournament-right-info-box-body">
                          <h2>AAAAAAAAA</h2>

                        </div>
                      </div>
                    </div>
                    <h2>Standings</h2>
                    <div class="tournament-right-info-cell">
                      <div class="tournament-right-info-box">
                        <div class="tournament-right-info-box-header">
                          <div class="tournament-right-info-box-header-cols">
                            <h3>place# </h3>
                          </div>
                          <div class="tournament-right-info-box-header-cols">
                            <h2>
                              Team:
                            </h2>
                          </div>
                          <div class="tournament-right-info-box-header-cols">
                            <h3>Prize: </h3>
                          </div>
                        </div>

                        <div class="tournament-right-info-box-body">
                          <table class="table-dark">
                            <thead>
                            <tr>
                              <font-awesome-icon style="color:goldenrod" :icon="['fas', 'trophy']"/>
                              1

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <font-awesome-icon style="color: silver" :icon="['fas', 'trophy']"/>
                              2

                            </tr>
                            <tr>
                              <font-awesome-icon style="color: saddlebrown" :icon="['fas', 'trophy']"/>
                              3
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="groups-tab-pane" role="tabpanel" aria-labelledby="groups-tab" tabindex="0">
              <h1 style="color: #1d2127; margin-top: -10px" class="team-profile-roster">GROUPS</h1>
              <div class="test-tournament-list-body">
                <div class="test-tournament-centre-nav-left-info">
                  <div class="tournament-team-groups">
                    <div class="tournament-team-groups-boxes">
                      <div class="tournament-team-groups-header">
                        GROUP A
                      </div>

                      <div class="tournament-team-groups-body">
                        <table class="table-dark">

                          <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td><img  src="../assets/images/defaultTeamLogo.png"
                                      style="height: 40px; cursor: pointer" alt=""></td>
                            <td>*TEAM NAME*</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td><img  src="../assets/images/defaultTeamLogo.png"
                                      style="height: 40px; border-radius: 20px; cursor: pointer" alt=""></td>
                            <td>*TEAM NAME*</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td><img  src="../assets/images/defaultTeamLogo.png"
                                      style="height: 40px; border-radius: 20px; cursor: pointer" alt=""></td>
                            <td>*TEAM NAME*</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td><img  src="../assets/images/defaultTeamLogo.png"
                                      style="height: 40px; border-radius: 20px; cursor: pointer" alt=""></td>
                            <td>*TEAM NAME*</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="tournament-team-groups-boxes">
                      <div class="tournament-team-groups-header">
                        GROUP B
                      </div>

                      <div class="tournament-team-groups-body">
                        <table class="table-dark">

                          <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td><img  src="../assets/images/defaultTeamLogo.png"
                                      style="height: 40px; border-radius: 20px; cursor: pointer" alt=""></td>
                            <td>*TEAM NAME*</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td><img  src="../assets/images/defaultTeamLogo.png"
                                      style="height: 40px; border-radius: 20px; cursor: pointer" alt=""></td>
                            <td>*TEAM NAME*</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td><img  src="../assets/images/defaultTeamLogo.png"
                                      style="height: 40px; border-radius: 20px; cursor: pointer" alt=""></td>
                            <td>*TEAM NAME*</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td><img  src="../assets/images/defaultTeamLogo.png"
                                      style="height: 40px; border-radius: 20px; cursor: pointer" alt=""></td>
                            <td>*TEAM NAME*</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="tournament-team-groups-boxes">
                      <div class="tournament-team-groups-header">
                        GROUP C
                      </div>

                      <div class="tournament-team-groups-body">

                      </div>
                    </div>
                    <div class="tournament-team-groups-boxes">
                      <div class="tournament-team-groups-header">
                        GROUP D
                      </div>

                      <div class="tournament-team-groups-body">

                      </div>
                    </div>
                    <div class="tournament-team-groups-boxes">
                      <div class="tournament-team-groups-header">
                        GROUP E
                      </div>

                      <div class="tournament-team-groups-body">

                      </div>
                    </div>

                  </div>

                </div>

                <div class="test-tournament-centre-nav-right-info">
                  <h1>TEAMS</h1>
                </div>
              </div>
              <div style="margin-top: -100px">
                <h1>Group Stage in Football Tournaments</h1>
                <p>The group stage is a pivotal phase in football tournaments,
                  serving as the initial round where participating teams are organized into distinct groups.
                  This format is widely employed in major football competitions,
                  such as the FIFA World Cup and UEFA Champions League.
                  The primary objective of the group stage is to determine
                  which teams advance to the knockout rounds based on their performance
                  within their assigned groups.</p>
              </div>
              </div>

            <div class="tab-pane fade" id="bracket-tab-pane" role="tabpanel" aria-labelledby="bracket-tab" tabindex="0">
              <h1>TOURNAMENT BRACKETS</h1>

            </div>
            <div class="tab-pane fade" id="matches-tab-pane" role="tabpanel" aria-labelledby="matches-tab" tabindex="0">
              <h1>TOURNAMENT MATCHES</h1>

            </div>
            <div class="tab-pane fade" id="teams-tab-pane" role="tabpanel" aria-labelledby="teams-tab" tabindex="0">
              <h1>TOURNAMENT TEAMS</h1>

            </div>
            <div class="tab-pane fade" id="prizes-tab-pane" role="tabpanel" aria-labelledby="prizes-tab" tabindex="0">
              <h1>TOURNAMENT PRIZES</h1>

            </div>

          </div>
        </div>

      </div>

      <div class="tournament-right-nav">

      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import TeamProfileHeader from "@/components/team/TeamProfileHeader";
import Footer from "@/components/common/Footer";


export default {
  name: 'tournamentRoute',
  components: {TeamProfileHeader, Footer},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.tournament-right-info-box-header-cols {
  float: left;
  width: 33.33%;
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
}

.tournament-right-info-box-header {
  flex-direction: column;
  height: 30%;
  flex: 0 0 50%;
  border-bottom: 1px solid #1d2127;
}

.tournament-right-info-box-body {
  flex-direction: column;
  height: 70%;
  flex: 0 0 50%;
  border-radius: 10px;
}

.tournament-right-info-box {
  width: 400px;
  height: 300px;
  border: 3px solid #1d2127;
  border-radius: 10px;
}

.tournament-right-info-cell {
  display: grid;
  margin-bottom: 150px;
}

.tournament-left-info-grid {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 150px;
}

.tournament-left-info-cell {
  position: relative;
  flex: 0 0 32%; /* Adjust the flex-basis to make each cell take approximately one-third of the width */
  height: 150px;
  background-color: #1d2127;
  overflow: hidden;
  border-radius: 10px;
  box-sizing: border-box; /* Include padding and border in the width calculation */
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
  border: 1px solid white;
}


.test-tournament-list-body {
  margin-top: 40px;
  display: flex;
  margin-bottom: 300px;
  /*border: 1px solid white;*/

}

.test-tournament-centre-nav {
  display: flex;
  flex-direction: row;
  align-items: stretch; /* Ensure both children stretch vertically */
  justify-content: space-between; /* Place children at the ends */
  width: 100%;
  min-height: 100vh;
  /*border: solid 1px white;*/
}

.test-tournament-centre-nav-left-info {
  flex: 0 0 70%; /* Initial, no grow, fixed 60% width */
  border: solid 1px white;
  min-height: 100vh;
}

.test-tournament-centre-nav-right-info {
  flex: 0 0 25%; /* Initial, no grow, fixed 40% width */
  min-height: 100vh;
  margin-left: 30px;
  border: solid 1px white;
}


.tournament-team-groups {
  display: flex;
  flex-wrap: wrap;
}

.tournament-team-groups-boxes {
  position: relative;
  flex: 0 0 32%;
  box-sizing: border-box;
  padding: 10px; /* Adjust padding as needed */
  height: 300px;
  overflow: hidden;
  border: 2px solid #1d2127;
  margin-bottom: 10px;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 10px;
}
.tournament-team-groups-boxes:hover{
  background-color: #1d2127;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid white;
}

.tournament-team-groups-header {
  flex-direction: column;
  height: 15%;
  border-bottom: 2px solid #1d2127;
  flex: 0 0 50%;
}

.tournament-team-groups-body {
  flex-direction: column;
  height: 85%;
  border-radius: 10px;
  flex: 0 0 50%;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
}
.row:hover {
  background-color: #1d2127;
  border-radius: 20px;
  cursor: pointer;
}


.tournament-profile-background {
  background-color: black;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  position: relative;
}

.tournament-profile-header {
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #242635;
}

.tournament-profile-background-image {
  position: relative;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 0) 90%,
      rgba(0, 0, 0, 0.6) 95%,
      rgba(0, 0, 0, 0.8) 100%
  ),
  url("~@/assets/images/tournamentDeafault.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.left-tournament-profile-header-info {
  margin-left: 20px;
  width: 100%;
  height: 400px;
}

.left-tournament-header-text {
  position: absolute;
  margin-top: 330px;
  left: 65%;
  margin-left: -50%;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
}

.right-tournament-profile-header-info {
  margin-right: -10px;
  width: 100%;
  height: 400px;
}

.right-tournament-header-text {
  position: absolute;
  margin-top: 410px;
  left: 85%;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
}


.tournament-list-body {
  display: flex;
  min-height: auto;
  margin-bottom: 300px;
}

.tournament-left-nav {
  width: 10%;
  display: flex;
  min-height: auto;
}

.tournament-right-nav {
  width: 10%;
  display: flex;
  min-height: auto;
}

.tournament-centre-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-left: 5%;
  margin-right: 5%;
  min-height: auto;
}

.centre-nav-tabs {
  width: 100%;
  margin-top: 50px;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 25px;
}

.nav-link {
  color: white !important;
  background-color: transparent !important;
  border: none !important;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  font-weight: bold;
}

/* Optional: Change the active tab color */
.nav-link.active {
  background-color: #1d2127 !important;
  color: white !important;
  border: none !important;
}
</style>

