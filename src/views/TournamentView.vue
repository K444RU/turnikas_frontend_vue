<template>
  <div class="tournament-profile-background" id="tournamentProfile">
    <div class="tournament-profile-header tournament-profile-background-image">
      <div class="left-tournament-profile-header-info" style="color: white;">
        <div class="left-tournament-header-text">
          <h1 style="font-size: 4.0rem">{{ tournamentInfoResponse.name }}</h1>
          <p>Tournament start date: {{ tournamentInfoResponse.startDate }}</p>
        </div>
      </div>
      <div class="right-tournament-profile-header-info" style="color: white;">
        <div class="right-tournament-header-text">
          <button @click="openTeamTournamentRegistrationModal(tournamentId)"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  title="Join"
                  class="join-tournament-button">join tournament
          </button>
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
                        <font-awesome-icon :icon="['fas', 'city']"/>
                        <h2>City: {{ tournamentInfoResponse.cityName }}</h2>
                      </div>
                      <div class="tournament-left-info-cell">
                        <font-awesome-icon :icon="['fas', 'map-pin']"/>
                        <h2>Stadium: {{ tournamentInfoResponse.stadiumName }}</h2>
                      </div>
                      <div class="tournament-left-info-cell">
                        <font-awesome-icon :icon="['fas', 'people-group']"/>
                        <h2>Slots Available: {{ tournamentInfoResponse.amountName }} </h2>
                      </div>
                      <div class="tournament-left-info-cell">
                        <font-awesome-icon :icon="['fas', 'people-group']"/>
                        <h2>Age Category: {{ tournamentInfoResponse.categoryName }} </h2>
                      </div>
                      <div class="tournament-left-info-cell">
                        <font-awesome-icon :icon="['fas', 'trophy']"/>
                        <h2>Prize pool: {{ tournamentInfoResponse.prize }}</h2>
                      </div>
                      <div class="tournament-left-info-cell">
                        <font-awesome-icon :icon="['fas', 'coins']"/>
                        <h2>Participation prise: {{ tournamentInfoResponse.participationPrise }}€</h2>
                      </div>
                    </div>
                    <h1 style="color: #1d2127" class="team-profile-roster">TOURNAMENT</h1>
                    <h1>Additional information: {{ tournamentInfoResponse.additionalInfo }}</h1>
                    <br>
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
                            <p>{{ registeredTeams.length }}</p>
                          </div>
                          <div class="tournament-right-info-box-header-cols">
                            <h2>

                            </h2>
                          </div>
                          <div class="tournament-right-info-box-header-cols">
                            <h3>Free slots: </h3>
                            <p>{{ tournamentInfoResponse.amountName }}</p>
                          </div>
                        </div>
                        <div class="tournament-right-info-box-body">
                          <div v-for="team in registeredTeams" :key="team.id">
                            <h2>{{ team.teamName }}</h2>
                          </div>
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
                            <h3>Prize: {{ tournamentInfoResponse.prize }}</h3>
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
                            <td><img src="../assets/images/defaultTeamLogo.png"
                                     style="height: 40px; cursor: pointer" alt=""></td>
                            <td>*TEAM NAME*</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td><img src="../assets/images/defaultTeamLogo.png"
                                     style="height: 40px; border-radius: 20px; cursor: pointer" alt=""></td>
                            <td>*TEAM NAME*</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td><img src="../assets/images/defaultTeamLogo.png"
                                     style="height: 40px; border-radius: 20px; cursor: pointer" alt=""></td>
                            <td>*TEAM NAME*</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td><img src="../assets/images/defaultTeamLogo.png"
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
                            <td><img src="../assets/images/defaultTeamLogo.png"
                                     style="height: 40px; border-radius: 20px; cursor: pointer" alt=""></td>
                            <td>*TEAM NAME*</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td><img src="../assets/images/defaultTeamLogo.png"
                                     style="height: 40px; border-radius: 20px; cursor: pointer" alt=""></td>
                            <td>*TEAM NAME*</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td><img src="../assets/images/defaultTeamLogo.png"
                                     style="height: 40px; border-radius: 20px; cursor: pointer" alt=""></td>
                            <td>*TEAM NAME*</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td><img src="../assets/images/defaultTeamLogo.png"
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
                    <div style="margin-top: 100px">
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
                </div>
                <div class="test-tournament-centre-nav-right-info">
                  <h1 class="rotate-font">GROUPS</h1>
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="bracket-tab-pane" role="tabpanel" aria-labelledby="bracket-tab" tabindex="0">
              <h1>TOURNAMENT BRACKETS</h1>
              <div class="test-tournament-list-body">
                <div>

                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="matches-tab-pane" role="tabpanel" aria-labelledby="matches-tab" tabindex="0">
              <div class="test-tournament-list-body">
                <div>

                </div>
              </div>

            </div>
            <div class="tab-pane fade" id="teams-tab-pane" role="tabpanel" aria-labelledby="teams-tab" tabindex="0">
              <h1>TOURNAMENT TEAMS</h1>

              <div class="test-tournament-list-body">
                <div class="test-tournament-centre-nav">
                  <div class="test-tournament-centre-nav-left-info">
                    <div class="tournament-teams-box">
                      <div class="team-image">
                        <img style="height: 90px" src="../assets/images/defaultTeamLogo.png" alt="">
                      </div>
                      <div class="team-name">
                        <h1>TEAM NAME</h1>
                      </div>
                      <div class="team-button">
                        <font-awesome-icon :icon="['fas', 'ellipsis']"/>
                      </div>
                    </div>
                    <div class="tournament-teams-box">
                      <div class="team-image">
                        <img style="height: 90px" src="../assets/images/defaultTeamLogo.png" alt="">
                      </div>
                      <div class="team-name">
                        <h1>TEAM NAME</h1>
                      </div>
                      <div class="team-button">
                        <font-awesome-icon :icon="['fas', 'ellipsis']"/>
                      </div>
                    </div>
                    <div class="tournament-teams-box">
                      <div class="team-image">
                        <img style="height: 90px" src="../assets/images/defaultTeamLogo.png" alt="">
                      </div>
                      <div class="team-name">
                        <h1>TEAM NAME</h1>
                      </div>
                      <div class="team-button">
                        <font-awesome-icon :icon="['fas', 'ellipsis']"/>
                      </div>
                    </div>
                    <div class="tournament-teams-box">
                      <div class="team-image">
                        <img style="height: 90px" src="../assets/images/defaultTeamLogo.png" alt="">
                      </div>
                      <div class="team-name">
                        <h1>TEAM NAME</h1>
                      </div>
                      <div class="team-button">
                        <font-awesome-icon :icon="['fas', 'ellipsis']"/>
                      </div>
                    </div>
                  </div>
                  <div class="test-tournament-centre-nav-right-info">
                    <h1 class="rotate-font">TEAMS</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="prizes-tab-pane" role="tabpanel" aria-labelledby="prizes-tab" tabindex="0">
              <h1>TOURNAMENT PRIZES</h1>
              <div class="test-tournament-list-body">
                <div class="test-tournament-centre-nav">
                  <div class="test-tournament-centre-nav-left-info">
                    <div class="tournament-teams-box">
                      <div class="team-image">
                        #
                      </div>
                      <div class="team-name">
                        <h2>TEAM NAME</h2>
                      </div>
                      <div class="team-button">
                        <h2>PRIZE</h2>
                      </div>
                    </div>
                    <div class="tournament-teams-box">
                      <div class="team-image">
                        <font-awesome-icon style="color: darkgoldenrod;" :icon="['fas', 'trophy']"/>
                        1
                      </div>
                      <div class="team-name">
                        <h2>TEAM NAME To be decided</h2>
                      </div>
                      <div class="team-button">
                        <h2>100€</h2>
                      </div>
                    </div>
                    <div class="tournament-teams-box">
                      <div class="team-image">
                        <font-awesome-icon style="color: silver;" :icon="['fas', 'trophy']"/>
                        2
                      </div>
                      <div class="team-name">
                        <h2>TEAM NAME To be decided</h2>
                      </div>
                      <div class="team-button">
                        <h2>50€</h2>
                      </div>
                    </div>
                    <div class="tournament-teams-box">
                      <div class="team-image">
                        <font-awesome-icon style="color: saddlebrown;" :icon="['fas', 'trophy']"/>
                        3
                      </div>
                      <div class="team-name">
                        <h2>TEAM NAME To be decided</h2>
                      </div>
                      <div class="team-button">
                        <h2>25€</h2>
                      </div>
                    </div>
                  </div>
                  <div class="test-tournament-centre-nav-right-info">
                    <h1 class="rotate-font">PRIZES</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tournament-right-nav">
      </div>


      <!--Scrollable modal for join tournament-->
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div ref="modal" class="modal fade" id="staticBackdrop"
             data-bs-backdrop="static"
             data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Select team to register</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="input-group mb-3">
                  <select v-model="selectedTeamId" class="form-select amount-of-players" aria-label="Default select example">
                    <option selected disabled value="0">Select team to register</option>
                    <option v-for="team in eligibleTeams" :key="team.id" :value="team.id">
                      {{ team.teamName }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="close-changes-button" data-bs-dismiss="modal">Close</button>
                <button @click="saveTeamToTournament" type="button" class="save-changes-button">Join Tournament</button>
              </div>
            </div>
          </div>
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
  name: 'tournamentRoute',
  components: {TeamProfileHeader, Footer},
  data() {
    return {
      tournamentId: this.$route.query.tournamentId,
      userId: this.$route.query.userId,
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
      teamInfoResponse: [],
      selectedTeamId: null,
      registeredTeams: [],
      eligibleTeams: [],
    };
  },
  methods: {
    saveTeamToTournament: async function() {
      if (this.selectedTeamId) {
        const participationRequest = {
          teamId: this.selectedTeamId,
          tournamentId: this.tournamentId
        };

        try {
          const response = await this.$http.post('/participation', participationRequest);
          console.log(response.data);

          await this.getRegisteredTeamsByTournamentId();
          await this.getEligibleTeamsForTournamentRegistration();

          $(this.$refs.modal).modal('hide');

        } catch (error) {
          console.log(error);
        }
      } else {
        console.log('No team selected');
      }
    },


    async getRegisteredTeamsByTournamentId() {
      try {
        const response = await this.$http.get(`/participation/tournament/${this.tournamentId}/teams`);
        this.registeredTeams = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getEligibleTeamsForTournamentRegistration() {
      try {
        const response = await this.$http.get(`/participation/tournament/${this.tournamentId}/eligible-teams`, {
          params: {
            userId: this.userId
          }
        });
        console.log('Eligible Teams Response:', response.data);
        this.eligibleTeams = response.data.map(team => ({
          ...team,
          teamId: team.id
        }));
      } catch (error) {
        console.log(error);
      }
    },

    getAllTeamsByUserId() {
      this.$http.get("/team/info", {
            params: {
              userId: this.userId,
            }
          }
      ).then(response => {
        this.teamInfoResponse = response.data.map(team => ({
          ...team,
          teamId: team.id,
        }));
      })
          .catch(error => {
            console.log(error);
          });
    },
    openTeamTournamentRegistrationModal(tournamentId) {
      this.tournamentId = tournamentId;
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
  },

  async mounted() {
    console.log("Mounting to tournament profile with tournamentId:", this.tournamentId)
    await this.getTournamentInformationByTournamentId()
    console.log("Mounting to tournament profile with userId: ", this.userId)
    await this.getEligibleTeamsForTournamentRegistration()
    await this.getRegisteredTeamsByTournamentId();
  }
}
</script>

<style>
.rotate-font {
  color: #1d2127;
  transform: rotate(270deg);
  margin-top: 200px;
  margin-left: -100px; /* Adjust the margin to fit within the div */
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 200px; /* Adjust the font size as needed */
}

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
  border: 1px solid white;
  min-height: 100vh;
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

.tournament-team-groups-boxes:hover {
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
  border: solid 1px white;
}

.left-tournament-header-text {
  position: absolute;
  margin-top: 330px;
  left: 65%;
  margin-left: -50%;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
  border: solid 1px white;
}

.right-tournament-profile-header-info {
  margin-right: -10px;
  width: 100%;
  height: 400px;
  border: solid 1px white;
}

.right-tournament-header-text {
  position: absolute;
  margin-top: 410px;
  left: 75%;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
  border: solid 1px white;
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


.tournament-teams-box {
  display: grid;
  grid-template-columns: 20% 70% 10%;
  width: 100%;
  height: 100px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;

}

.tournament-teams-box:hover {
  background-color: #1d2127;
  cursor: pointer;
  border-radius: 20px;
}

.team-image {
  border-radius: 20px 0 0 20px;
  display: flex;
  align-items: center;
  text-align: center;
}

.team-name {
  display: flex;
  align-items: center;
  text-align: center;
}

.team-button {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0 20px 20px 0;
  color: white;

}

.team-button button {
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
}

.team-button:hover {
  color: black;
}

/*!* Responsive layout - makes the columns stack on top of each other instead of next to each other *!*/
/*@media screen and (max-width: 600px) {*/
/*  .tournament-left-nav, .tournament-right-nav, .tournament-centre-nav {*/
/*    width: 100%;*/
/*    position: relative;*/
/*    margin-left: 0;*/
/*    margin-right: 0;*/
/*  }*/
/*}*/
</style>

