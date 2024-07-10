<!--new user profile-->
<template>
  <div class="new-user-profile-background" id="newUserProfile">
    <UserProfileHeader/>
    <div class="new-user-profile-header new-user-profile-background-image">
      <div class="new-user-profile-header-info">
        {{ userContactInfoResponse.firstName }}'s USER PROFILE
      </div>
    </div>

    <div class="new-user-profile-body">
      <div class="new-user-left-nav"></div>

      <div class="new-user-centre-nav">
        <div class="new-user-centre-tabs">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="user-overview-tab" data-bs-toggle="tab"
                      data-bs-target="#user-overview-tab-pane"
                      type="button" role="tab" aria-controls="user-overview-tab-pane" aria-selected="true">Overview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="teams-tab" data-bs-toggle="tab" data-bs-target="#teams-tab-pane"
                      type="button" role="tab" aria-controls="teams-tab-pane" aria-selected="false">Teams
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="stats-tab" data-bs-toggle="tab" data-bs-target="#stats-tab-pane"
                      type="button" role="tab" aria-controls="stats-tab-pane" aria-selected="false">Stats
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="tournaments-tab" data-bs-toggle="tab" data-bs-target="#tournaments-tab-pane"
                      type="button" role="tab" aria-controls="tournaments-tab-pane" aria-selected="false">Tournaments
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="user-overview-tab-pane" role="tabpanel"
                 aria-labelledby="user-overview-tab" tabindex="0">
              <div class="user-overview-row">
                <div class="user-overview-left">
                  <h2>PROFILE</h2>
                  <img class="profile-default-image"
                       src="../assets/images/ProfileDefault.png"
                       alt="Profile Image">
                  <h2>{{ userContactInfoResponse.firstName }}</h2>
                  <h2>{{ userContactInfoResponse.lastName }}</h2>
                  <h2>Age: {{ calculateAge(userContactInfoResponse.dateOfBirth) }}</h2>
                </div>
                <div class="user-overview-middle">
                  <div class="user-overview-middle-header ">
                    <div class="user-overview-right-header-cols">
                      <h2>TEAMS: {{teamInfoResponse.length}}</h2>
                    </div>
                    <div class="user-overview-right-header-cols">
                    </div>
                    <div class="user-overview-right-header-cols">
                      <p style="color: blueviolet; cursor: pointer" @click="openTeamsTab">View all</p>
                    </div>
                  </div>
                  <table class="table-font table-borderless">
                    <thead>
                    <tr>
                      <th scope="col" style="color:white;">#</th>
                      <th scope="col" style="color:white;"></th>
                      <th scope="col" style="color:white;">TEAM NAME</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="team in displayedTeams" :key="team.teamId">
                      <th style="color:white;" scope="row">{{ team.sequenceNumber }}</th>
                      <td style="color:white;" v-if="!team.teamLogo">{{ team.teamLogo }}
                        <img @click="navigateToTeamPage(team.teamId)" src="../assets/images/defaultTeamLogo.png"
                             style="height: 50px; border-radius: 20px; cursor: pointer; margin-left: 20px" alt="">
                      </td>
                      <td v-else>
                        <img @click="navigateToTeamPage(team.teamId)" :src="team.teamLogo"
                             style="height: 50px; border-radius: 20px; cursor: pointer; margin-left: 20px" alt="">
                      </td>
                      <td style="cursor: pointer; margin-left: 30px; color: #FFFFFF"
                          @click="navigateToTeamPage(team.teamId)">
                        {{ team.teamName }}
                      </td>
                    </tr>
                    <h2 v-if="teamInfoResponse.length > 5" type="button" style="color: #FFFFFF" @click="viewAllTeams">...</h2>
                    </tbody>
                  </table>
                </div>
                <div class="user-overview-right">
                  <div class="user-overview-middle-header ">
                    <div class="user-overview-right-header-cols">
                      <h2>STATS</h2>
                    </div>
                    <div class="user-overview-right-header-cols">
                    </div>
                    <div class="user-overview-right-header-cols">
                      <p style="color: blueviolet; cursor: pointer" @click="openStatsTab">View all</p>
                    </div>
                  </div>
                  <h1>Select Team</h1>
                  <select style="width: 30%; background-color: #1D2127; color: white" class="form-select"
                          aria-label="Default select example"
                          @change="getTeamStats($event.target.value)">
                    <option selected disabled value="0">TEAM STATS</option>
                    <option v-for="team in teamInfoResponse" :key="team.teamId" :value="team.teamId">{{
                        team.teamName
                      }}
                    </option>
                  </select>
                  <article>
                    <p>PLAYED: {{ teamStatsResponse.played }}</p>
                    <div class="progress bg-black" role="progressbar" aria-label="Success example" aria-valuenow="25"
                         aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-success" :style="{ width: teamStatsResponse.played + '%' }"></div>
                    </div>

                    <p>WON: {{ teamStatsResponse.won }}</p>
                    <div class="progress bg-black" role="progressbar" aria-label="Success example" aria-valuenow="25"
                         aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-success" :style="{ width: teamStatsResponse.won + '%' }"></div>
                    </div>

                    <p>LOST: {{ teamStatsResponse.lost }}</p>
                    <div class="progress bg-black" role="progressbar" aria-label="Success example" aria-valuenow="25"
                         aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-success" :style="{ width: teamStatsResponse.lost + '%' }"></div>
                    </div>
                  </article>
                </div>
              </div>

            </div>
            <div class="tab-pane fade" id="teams-tab-pane" role="tabpanel" aria-labelledby="teams-tab" tabindex="0">
              <div class="full-team-tab">
                <div class="dropdown mt-3">
                  <div class="team-filter">
                    <div class="team-filter-column">
                      <button style="border: 2px solid black" v-on:click="getAgeCategories()"
                              class="btn btn-secondary dropdown-toggle offcanvas-button"
                              type="button"
                              data-bs-toggle="dropdown">
                        By age category
                      </button>
                      <ul class="dropdown-menu offcanvas-button">
                        <li v-for="category in ageCategoryResponse" :key="category.categoryCode">
                          <a @click="updateSelectedCategory(category.categoryCode)"
                             class="dropdown-item" href="#">{{ category.categoryName }}</a>
                        </li>
                      </ul>
                    </div>

                    <button style="border: 2px solid black" @click="updateTeamsByRoleCode(role.roleCode)"
                            v-for="role in roleResponse"
                            :key="role.roleCode" type="button" class="btn btn-secondary">
                      {{ role.roleName }}
                    </button>

                    <div class="team-filter-column">
                      <button style="border: 2px solid black" @click="getAllTeamsByUserId" type="button"
                              class="btn btn-secondary">clear filters
                      </button>

                    </div>


                  </div>

                </div>

                <table class="table table-dark table-hover user-profile-font">
                  <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Team Logo</th>
                    <th scope="col">Team Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Team Coach</th>
                    <th scope="col">
                      <button @click="openNewTeamRegistrationModal(userId)"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              title="Add"
                              class="cssbuttons-io-button">
                        <svg height="25" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
                        </svg>
                        <span>Add</span>
                      </button>
                    </th>
                    <th scope="col"></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="team in teamInfoResponse" :key="team.teamId">
                    <th scope="row">{{ team.sequenceNumber }}</th>
                    <td v-if="!team.teamLogo">{{ team.teamLogo }}
                      <img @click="navigateToTeamPage(team.teamId)" src="../assets/images/defaultTeamLogo.png"
                           style="height: 70px; border-radius: 20px; cursor: pointer" alt="">
                    </td>
                    <td v-else>
                      <img @click="navigateToTeamPage(team.teamId)" :src="team.teamLogo"
                           style="height: 70px; border-radius: 20px; cursor: pointer" alt="">
                    </td>
                    <td style="cursor: pointer" @click="navigateToTeamPage(team.teamId)">{{ team.teamName }}</td>
                    <td>{{ getCategoryNameByCategoryCode2(team.categoryCode) }}</td>
                    <td>{{ team.teamCoachName }}</td>
                    <td>
                      <button @click="openTeamEditModal(team.teamId)"
                              data-bs-toggle="modal"
                              data-bs-target="#teamEditStaticBackDrop"
                              type="button" class="edit-button">
                        <svg class="edit-svgIcon" viewBox="0 0 512 512">
                          <path
                              d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4
                             10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7
                             6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4
                             3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16
                             16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3
                             22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144
                             144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0
                             22.6z">
                          </path>
                        </svg>
                      </button>
                    </td>
                    <td>
                      <button @click="deleteTeam(team.teamId)" type="button" class="delete-button">
                        <svg class="delete-svgIcon" viewBox="0 0 448 512">
                          <path
                              d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  </tbody>
                </table>

              </div>

            </div>
            <div class="tab-pane fade" id="stats-tab-pane" role="tabpanel" aria-labelledby="stats-tab" tabindex="0">
              <div class="full-team-stats">
                <div class="full-team-stats-body-header">
                  <select style="width: 20%; background-color: #1D2127; color: white; height: 100%; font-size: 20px"
                          class="form-select" aria-label="Default select example"
                          v-model="selectedTeamId"
                          @change="getTeamStats(selectedTeamId)">
                    <option selected disabled value="0">SELECT TEAM</option>
                    <option v-for="team in teamInfoResponse" :key="team.teamId" :value="team.teamId">
                      {{ team.teamName }}
                    </option>
                  </select>
                </div>
                <div class="full-team-stats-body">
                  <div class="full-team-stats-body-row1">
                    <div class="full-team-stats-body-row1-logo-cols">
                      <img src="../assets/images/defaultTeamLogo.png"
                           style="height: 45px; border-radius: 20px; cursor: pointer" alt="">
                    </div>
                    <div class="full-team-stats-body-row1-team-name-cols">
                      <h2 v-if="selectedTeamId">
                        {{ teamInfoResponse.find(team => team.teamId === selectedTeamId).teamName }}</h2>
                      <h2 v-else>Team name</h2>
                    </div>
                  </div>
                  <div class="full-team-stats-body-row2">
                    <article>
                      <p>PLAYED: {{ teamStatsResponse.played }}</p>
                      <div class="progress bg-black" role="progressbar" aria-label="Success example" aria-valuenow="25"
                           aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" :style="{ width: teamStatsResponse.played + '%' }"></div>
                      </div>

                      <p>WON: {{ teamStatsResponse.won }}</p>
                      <div class="progress bg-black" role="progressbar" aria-label="Success example" aria-valuenow="25"
                           aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" :style="{ width: teamStatsResponse.won + '%' }"></div>
                      </div>

                      <p>LOST: {{ teamStatsResponse.lost }}</p>
                      <div class="progress bg-black" role="progressbar" aria-label="Success example" aria-valuenow="25"
                           aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" :style="{ width: teamStatsResponse.lost + '%' }"></div>
                      </div>

                      <p>DRAW: {{ teamStatsResponse.draw }}</p>
                      <div class="progress bg-black" role="progressbar" aria-label="Success example" aria-valuenow="25"
                           aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" :style="{ width: teamStatsResponse.draw + '%' }"></div>
                      </div>

                      <p>Goals Against: {{ teamStatsResponse.goalAgainst }}</p>
                      <div class="progress bg-black" role="progressbar" aria-label="Success example" aria-valuenow="25"
                           aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success"
                             :style="{ width: teamStatsResponse.goalAgainst + '%' }"></div>
                      </div>

                      <p>Goals For: {{ teamStatsResponse.goalFor }}</p>
                      <div class="progress bg-black" role="progressbar" aria-label="Success example" aria-valuenow="25"
                           aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" :style="{ width: teamStatsResponse.goalFor + '%' }"></div>
                      </div>

                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="tournaments-tab-pane" role="tabpanel" aria-labelledby="tournaments-tab"
                 tabindex="0">
              <div class="team-filter">
                <div class="team-filter-column">
                  <button style="border: 2px solid black" v-on:click="getAgeCategories()"
                          class="btn btn-secondary dropdown-toggle offcanvas-button"
                          type="button"
                          data-bs-toggle="dropdown">
                    By age category
                  </button>
                  <ul class="dropdown-menu offcanvas-button">
                    <li v-for="category in ageCategoryResponse" :key="category.categoryCode">
                      <a @click="updateSelectedCategory(category.categoryCode)"
                         class="dropdown-item" href="#">{{ category.categoryName }}</a>
                    </li>
                  </ul>
                </div>
                <div class="team-filter-column">
                  <button style="border: 2px solid black" v-on:click="getAllPlayerAmounts()"
                          class="btn btn-secondary dropdown-toggle offcanvas-button"
                          type="button"
                          data-bs-toggle="dropdown">
                    By age category
                  </button>
                  <ul class="dropdown-menu offcanvas-button">
                    <li v-for="amount in playerAmountResponse" :key="amount.playerAmountCode">
                      <a @click="updatePlayerAmount(amount.playerAmountCode)"
                         class="dropdown-item" href="#">{{ amount.amountName }}</a>
                    </li>
                  </ul>
                </div>
                <div class="team-filter-column">
                  <button @click="getAllTournaments">Clear filters</button>
                </div>
                <div class="team-filter-column">
                  <button @click="navigateToTournamentsListPage()">View all tournaments</button>
                </div>

              </div>
              <div class="full-team-tournaments-body">
                <div v-for="tournament in tournamentInfoResponse" :key="tournament.id" class="tournaments-tabs-rows">
                  <div class="tournaments-tabs-rows-left-column">
                    <img @click="navigateToTournamentPage(tournament.id)" src="../assets/images/tournamentDeafault.jpg"
                         style="
                         width: 100%;
                         height: 100%;
                         object-fit: cover;">
                  </div>
                  <div class="tournaments-tabs-rows-right-column">
                    <div class="tournaments-tabs-rows-right-column-rows">
                      <h2 @click="navigateToTournamentPage(tournament.id)">Tournament name: {{ tournament.name }}</h2>
                    </div>
                    <div class="tournaments-tabs-rows-right-column-rows">
                      <h2>Tournament city: {{ tournament.cityId ? getCityName(tournament.cityId) : 'City Not Found' }}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="new-user-right-nav"></div>
    </div>

    <!--Scrollable modal for team information change-->
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal fade" id="teamEditStaticBackDrop"
           data-bs-backdrop="static"
           data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">EDIT TEAM INFORMATION</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <p style="color:white;">Team name: </p>
                <input v-model="formTeamName" type="text" class="rounded-input2" aria-label="First Name">
              </div>
              <div class="input-group mb-3">
                <p style="color:white;">Team coach: </p>
                <input v-model="formCoachName" type="text" class="rounded-input2" aria-label="Team Coach">
              </div>
              <div class="input-group mb-3">
              </div>
              <div class="input-group mb-3">
                <p style="color:white;">Team logo: </p>
                <button
                    v-model="formTeamLogo"
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
              <button @click="saveTeamChangesToDatabase" type="button" class="save-changes-button">Save team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Scrollable modal for team registration-->
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal fade" id="staticBackdrop"
           data-bs-backdrop="static"
           data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Register new team</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <p style="color:white;">Enter team name</p>
                <input v-model="teamRequest.teamName" type="text" class="rounded-input2" aria-label="First Name">
              </div>
              <div class="input-group mb-3">
                <p style="color:white;">Enter Coach Name</p>
                <input v-model="teamRequest.teamCoachName" type="text" class="rounded-input2"
                       aria-label="Last Name">
              </div>
              <div class="input-group mb-3">
                <p style="color:white;">Choose team age category</p>
                <select v-model="teamRequest.categoryCode" class=" amount-of-players"
                        aria-label="Default select example">
                  <option selected>Select team age category</option>
                  <option selected disabled value="0">Select category:</option>
                  <option v-for="category in ageCategoryResponse"
                          :value="category.categoryCode">{{ category.categoryName }}
                  </option>
                </select>
              </div>
              <div class="input-group mb-3">
                <p style="color:white;">Select amount of players</p>
                <select v-model="teamRequest.roleCode" class=" amount-of-players"
                        aria-label="Default select example">
                  <option selected>Select amount of players</option>
                  <option selected disabled value="0">Select amount:</option>
                  <option v-for="role in filteredRoles"
                          :value="role.roleCode">{{ role.roleName }}
                  </option>
                </select>
              </div>
              <div class="input-group mb-3">
                <p style="color:white;">Upload your team logo</p>
              </div>
              <div class="input-group mb-3">
                <input
                    type="file"
                    @change="handleImage"
                    ref="fileInput"
                    @pictureInputSuccess="setPicture"
                    accept="image/x-png,image/jpeg">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="close-changes-button" data-bs-dismiss="modal">Close</button>
              <button @click="saveNewTeamToDataBase" type="button" class="save-changes-button">Save team</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="new-user-profile-footer"></div>
  </div>
</template>

<script>
import UserProfileHeader from "@/components/user/UserProfileHeader";

export default {
  name: 'newUserProfileRoute',
  components: {UserProfileHeader},
  data() {
    return {
      userId: Number(localStorage.getItem('userId')),
      selectedRole: 0,
      selectedCategory: 0,
      selectedTeamId: 0,
      selectedTeamRoleCode: 0,

      ageCategoryResponse: [],
      playerAmountResponse:[],

      roleResponse: {
        roleCode: 0,
        roleName: ''
      },
      tournamentInfoResponse: {
        id: 0,
        ageCategoryCode: 0,
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

      cityNames: {},

      teamRequest: {
        userId: Number(localStorage.getItem('userId')),
        teamName: '',
        teamCoachName: '',
        categoryCode: 0,
        roleCode: 0,
        teamLogo: ''
      },

      teamStatsResponse: {
        played: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalFor: 0,
        goalAgainst: 0
      },

      teamInfoResponse: {
        teamName: '',
        teamCoachName: '',
        categoryCode: 0,
        teamLogo: '',
      },
      formTeamName: '',
      formCoachName: '',
      formCategoryCode: 0,
      formTeamLogo: '',

      userContactInfoResponse: {
        firstName: '',
        lastName: '',
        dateOfBirth: ''
      },
      formFirstName: '',
      formLastName: '',
      formDateOfBirth: ''
    }
  },
  computed: {
    filteredRoles() {
      return Object.values(this.roleResponse).filter(role => role.roleCode === 2 || role.roleCode === 3);
    },
    displayedTeams() {
      return this.teamInfoResponse.slice(0, 5);
    }
  },

  methods: {
    getAllTournaments() {
      this.$http.get("/tournament/all")
          .then(response => {
            this.tournamentInfoResponse = response.data.map(tournament => ({
              ...tournament,
              tournamentId: tournament.id,
            }));
            this.$router.push({name: 'newUserProfileRoute'}).catch(() => {
            });
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },
    getTournamentsInformation2() {
      this.$http.get("/tournament/all")
          .then(response => {
            console.log(response.data)
            this.tournamentInfoResponse = response.data.map((tournament) => ({
              ...tournament,
              tournamentId: tournament.id
            }));
          })
          .catch(error => {
            console.log(error)
          })
    },

    getCityName(cityId) {
      if (this.cityNames[cityId]){
        return this.cityNames[cityId];
      }

      this.$http.get(`/tournament/city/info?cityId=${cityId}`)
          .then(response =>{
            const cityName = response.data.cityName
            this.$set(this.cityNames, cityId, cityName);
          })
          .catch(error => {
            console.log(error);
            this.$set(this.cityNames, cityId, 'City Not Found');
          });
      return this.cityNames[cityId];
    },
    navigateToTournamentPage(tournamentId) {
      const userId = Number(localStorage.getItem('userId'));
      if (userId) {
        console.log("Navigating to tournament page with tournamentId: ", tournamentId, " and userId: ", userId);
        this.$router.push({
          name: 'tournamentRoute',
          query: {
            tournamentId: tournamentId,
            userId: userId,
          }
        });
      } else {
        console.error('User ID is not found in sessionStorage.');
      }
    },
    navigateToTournamentsListPage(){
      this.$router.push({
        name: 'tournamentListRoute'
      })
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
        this.$router.push({name: 'newUserProfileRoute'}).catch(() => {
        });
        this.addSequenceNumbers();
        console.log(response.data);
      })
          .catch(error => {
            console.log(error);
          });
    },
    updateTeamsByRoleCode(roleCode) {
      this.selectedRole = roleCode;
      this.filterTeamsByRoleCode(roleCode)
    },
    updateSelectedCategory(categoryCode) {
      this.selectedCategory = categoryCode;
      this.filterTeamsByCategory(categoryCode);
      this.filterTournamentsByCategory(categoryCode);
    },
    updatePlayerAmount(playerAmountCode){
      this.filterTournamentsByPlayersAmount(playerAmountCode)
    },
    filterTeamsByCategory(categoryCode) {
      this.$http.get("/team/category/filter", {
        params: {
          userId: this.userId,
          categoryCode: categoryCode
        }
      })
          .then(response => {
            this.teamInfoResponse = response.data.map(team => ({
              ...team,
              teamId: team.id,
            }));
            this.$router.push({name: 'newUserProfileRoute'}).catch(() => {
            });
            this.addSequenceNumbers();
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },
    filterTournamentsByPlayersAmount(playerAmountCode) {
      this.$http.get("/player-amount-code/filter", {
            params: {
              playerAmountCode: playerAmountCode
            }
          }
      ).then(response => {
        this.tournamentInfoResponse = response.data.map(tournament => ({
          ...tournament,
          tournamentId: tournament.id,
        }));
        this.$router.push({name: 'newUserProfileRoute'}).catch(() => {
        });
        console.log(response.data);
      })
          .catch(error => {
            console.log(error);
          });
    },
    filterTournamentsByCategory(categoryCode){
      this.$http.get("/tournament/age-category/filter", {
        params: {
          categoryCode: categoryCode
        }
      })
          .then(response => {
            this.tournamentInfoResponse = response.data.map(tournament => ({
              ...tournament,
              tournamentId: tournament.id,
            }));
            this.$router.push({name: 'newUserProfileRoute'}).catch(() => {
            });
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },
    filterTeamsByRoleCode(roleCode) {
      this.$http.get("/team/role/filter", {
            params: {
              userId: this.userId,
              roleCode: roleCode
            }
          }
      ).then(response => {
        this.teamInfoResponse = response.data.map(team => ({
          ...team,
          teamId: team.id,
        }));
        this.$router.push({name: 'newUserProfileRoute'}).catch(() => {
        });
        this.addSequenceNumbers();
        console.log(response.data);
      })
          .catch(error => {
            console.log(error);
          });
    },
    getAllTeamRoles() {
      this.$http.get("/team/role")
          .then(response => {
            this.roleResponse = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },

    getAgeCategories() {
      this.$http.get("/team/all/age/category")
          .then(response => {
            this.ageCategoryResponse = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },

    getUserContactInfoByUserId() {
      this.$http.get("/user/contact", {
        params: {
          userId: this.userId,
        }
      })
          .then(response => {
            this.userContactInfoResponse = response.data;
            this.formFirstName = this.userContactInfoResponse.firstName;
            this.formLastName = this.userContactInfoResponse.lastName;
            this.formDateOfBirth = this.userContactInfoResponse.dateOfBirth;
          })
          .catch(error => {
            console.error(error);
          });
    },
    calculateAge(dateOfBirth) {
      const dob = new Date(dateOfBirth);
      const now = new Date();
      let age = now.getFullYear() - dob.getFullYear();
      const monthDiff = now.getMonth() - dob.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
        age--;
      }
      return age;
    },
    getTeamInformation() {
      this.$http.get("/team/info", {
        params: {
          userId: this.userId,
        }
      })
          .then(response => {
            this.teamInfoResponse = response.data.map((team, index) => ({
              ...team,
              teamId: team.id,
              originalOrder: index,
            }));
            this.addSequenceNumbers();
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
    },
    addSequenceNumbers: function () {
      let counter = 1;
      this.teamInfoResponse.forEach(value => {
        value.sequenceNumber = counter
        counter++
      });
    },
    navigateToTeamPage(teamId) {
      console.log("Navigating to team profile with teamId:", teamId);

      this.$router.push({
        name: 'teamProfileRoute',
        query: {
          teamId: teamId,
        }
      });
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
    getAllPlayerAmounts() {
      this.$http.get("/tournament/player/amount")
          .then(response => {
            this.playerAmountResponse = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },

    getAllTeamAgeCategories() {
      this.$http.get("/team/all/age/category")
          .then(response => {
            this.ageCategoryResponse = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
    getCategoryNameByCategoryCode2(categoryCode) {
      const category = this.ageCategoryResponse.find(cat => cat.categoryCode === categoryCode);
      return category ? category.categoryName : 'Unknown';
    },
    openNewTeamRegistrationModal(userId) {
      this.userId = userId;
    },
    openTeamEditModal(teamId) {
      this.selectedTeamId = teamId;
      this.getTeamInformation(this.selectedTeamId)
      const selectedTeam = this.teamInfoResponse.find(team => team.teamId === teamId);

      if (selectedTeam.roleCode === 1) {
        this.formTeamName = selectedTeam.teamName;
        this.formTeamLogo = selectedTeam.teamLogo;
      } else {
        this.formTeamName = selectedTeam.teamName;
        this.formCoachName = selectedTeam.teamCoachName;
        this.formCategoryCode = selectedTeam.categoryCode;
        this.formTeamLogo = selectedTeam.teamLogo;
      }

      const modal = new bootstrap.Modal(document.getElementById('teamEditStaticBackDrop'));
      modal.show();
    },
    saveTeamChangesToDatabase() {
      if (
          this.formTeamName !== this.teamInfoResponse.teamName ||
          this.formCoachName !== this.teamInfoResponse.teamCoachName ||
          this.formTeamLogo !== this.teamInfoResponse.teamLogo ||
          this.formCategoryCode !== this.teamInfoResponse.categoryCode
      ) {
        const updatedTeam = {
          teamName: this.formTeamName,
          teamCoachName: this.formCoachName,
          categoryCode: this.formCategoryCode,
          teamLogo: this.formTeamLogo
        };
        this.$http.put(`/team/update/${this.selectedTeamId}`, updatedTeam)
            .then(response => {
              console.log('Changes saved to the database');
              this.getTeamInformation(this.userId);
              this.$refs.teamEditstaticBackDrop.classList.remove('show');
              const backdrop = document.querySelector('.moodal-backdrop');
              if (backdrop) {
                backdrop.remove();
              }
            })
            .catch(error => {
              console.error('Error while saving', error);
            });
      } else {
        console.log('No changes detected');
      }
    },
    deleteTeam(teamId) {
      if (confirm('Are you sure you want to delete this Team?')) {
        this.$http
            .delete(`/team/delete?teamId=${teamId}`)
            .then(response => {
              console.log(`Team with ID ${teamId} deleted successfully`);
              this.getTeamInformation();
            })
            .catch(error => {
              console.error('Error deleting team:', error);
            });
      }
    },
    openTeamsTab() {
      const teamsTabButton = document.getElementById('teams-tab');
      if (teamsTabButton) {
        teamsTabButton.click();
      }
    },
    openStatsTab() {
      const statsTabButton = document.getElementById('stats-tab');
      if (statsTabButton) {
        statsTabButton.click();
      }
    },
    setPicture(picture) {
      this.teamRequest.teamLogo = picture;
    },
    handleImage(event) {
      const selectedImage = event.target.files[0];
      this.createBase64Image(selectedImage);
      console.log("File Name:", selectedImage.name);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = () => {
        this.pictureDataBase64 = reader.result;
        console.log("Base64 Image:", this.pictureDataBase64);
        this.$emit('pictureInputSuccess', this.pictureDataBase64);
      };
      reader.onerror = function (error) {
        alert(error);
      }
      reader.readAsDataURL(fileObject);
    },
    saveNewTeamToDataBase() {
      const originalUserId = this.teamRequest.userId;
      this.$http.post("/team/register", this.teamRequest)
          .then(response => {
            const {id: teamId} = response.data;
            sessionStorage.setItem("teamId", teamId);
            this.resetForm();
            this.teamRequest.userId = originalUserId;
            this.getTeamInformation();
            this.addSequenceNumbers();
            $('#staticBackdrop').modal('hide');
            this.$router.push({name: "newUserProfileRoute"});
          })
          .catch(error => {
            console.log(error);
          });
    },
    resetForm() {
      this.teamRequest = {
        teamName: '',
        teamCoachName: '',
        categoryCode: 0,
        teamLogo: ''
      }
    },

    viewAllTeams() {
      const userProfileTeamsTabButton = document.getElementById('teams-tab');
      if (userProfileTeamsTabButton) {
        userProfileTeamsTabButton.click();
      }
    }

  },
  beforeMount() {
    this.getUserContactInfoByUserId()
    this.getCategoryNameByCategoryCode2()
    this.getAllTeamAgeCategories()
    this.getAllTeamRoles()
    this.getTournamentsInformation2()
  },
  mounted() {
    this.getAgeCategories()
    this.getTeamInformation()
  },


}
</script>

<style>
.new-user-profile-background {
  background-color: black;
  background-position: center;
  background-size: cover;
  width: 100%;
  position: relative;
  min-height: 100vh;
}

.new-user-profile-header {
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #2b0055;
}

.new-user-profile-background-image {
  position: relative;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 0) 90%,
      rgba(0, 0, 0, 0.6) 95%,
      rgba(0, 0, 0, 0.8) 100%)
}

.new-user-profile-header-info {
  /*border: 1px solid white;*/
  width: 83%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  color: #36454F;
  font-size: 150px;
}

.new-user-profile-body {
  display: flex;
  height: auto;
  /*border: 1px solid white;*/
  overflow: hidden;
}

.new-user-left-nav {
  width: 10%;
  display: flex;
  height: auto;
  /*border: 1px solid white;*/
}

.new-user-right-nav {
  width: 10%;
  display: flex;
  height: auto;
  /*border: 1px solid white;*/
}

.new-user-centre-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: auto;
  /*border: 1px solid white;*/
}

.new-user-centre-tabs {
  width: 100%;
  margin-top: 20px;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 25px;
  /*border: 1px solid white;*/
}

.user-overview-row {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #181818;
}

.user-overview-left {
  width: 20%;
  background-color: #1D2127;
  margin: 10px;
  border-radius: 20px;
  height: 500px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.user-overview-middle {
  width: 35%;
  background-color: #1D2127;
  border-radius: 20px;
  height: 500px;
  margin: 10px;
  /*border: 1px solid white;*/
  color: white;
}

.user-overview-middle-header {
  flex-direction: column;
  height: 15%;
  flex: 0 0 50%;
  /*border-bottom: 1px solid white;*/
}

.user-overview-right {
  width: 45%;
  background-color: #1D2127;
  border-radius: 20px;
  height: 500px;
  margin: 10px;
  /*border: 1px solid white;*/
  color: white;
}

.user-overview-right-header-cols {
  float: left;
  width: 33.33%;
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
  /*border: 1px solid white;*/
  color: white;
}

.bg-black {
  background-color: #1D2127;
}

.new-user-profile-footer {
  background-color: black;
  background-position: center;
  background-size: cover;
  width: 100%;
  position: relative;
  min-height: 20vh;
}

.table-font {
  color: #181818;
}

/*Stats CSS*/

.full-team-stats {
  /*border: 1px solid white;*/
  width: 100%;
  height: 600px;
  background-color: black;
  border-radius: 20px;
}

.full-team-stats-body-header {
  /*border: 1px solid white;*/
  width: 95%;
  height: 50px;
  margin-top: 20px;
  margin-left: 10px;
  color: white;
}

.full-team-stats-body {
  /*border: 1px solid white;*/
  width: 95%;
  height: 500px;
  margin-top: 20px;
  margin-left: 10px;
  flex-direction: row;
  background-color: #1d2127;
}

.full-team-stats-body-row1 {
  /*border: 1px solid white;*/
  height: 50px;
}

.full-team-stats-body-row1-logo-cols {
  float: left;
  width: 5%;
  box-sizing: border-box;
  height: 100%;
  /*border: 1px solid white;*/
}

.full-team-stats-body-row1-team-name-cols {
  float: left;
  width: 30%;
  box-sizing: border-box;
  height: 100%;
  /*border: 1px solid white;*/
  color: #FFFFFF;
}

.full-team-stats-body-row2 {
  /*border: 1px solid white;*/
  height: 450px;
  color: #FFFFFF;
}

/*add button*/
.cssbuttons-io-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .2em;
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  padding: .5em 1.5em;
  color: white;
  background: linear-gradient(0deg, rgb(0, 150, 60), rgb(100, 250, 150));
  border: none;
  outline: none;
  border-bottom: 3px solid rgb(0, 130, 40);
  box-shadow: 0 .5em .5em -.4em rgb(0, 0, 0, .5);
  letter-spacing: 0.08em;
  border-radius: 20em;
  cursor: pointer;
  transition: .5s;
}

.cssbuttons-io-button:hover {
  filter: brightness(1.2);
  color: rgb(0, 0, 0, .5);
}

.cssbuttons-io-button:active {
  transition: 0s;
  transform: rotate(-10deg);
}

/*edit button css*/
.edit-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  position: relative;
  text-decoration: none !important;
}

.edit-svgIcon {
  width: 17px;
  transition-duration: 0.3s;
}

.edit-svgIcon path {
  fill: white;
}

.edit-button:hover {
  width: 120px;
  border-radius: 50px;
  transition-duration: 0.3s;
  background: linear-gradient(0deg, rgb(0, 150, 60), rgb(100, 250, 150));
  align-items: center;
}

.edit-button:hover .edit-svgIcon {
  width: 20px;
  transition-duration: 0.3s;
  transform: translateY(60%);
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
}

.edit-button::before {
  display: none;
  content: "Edit";
  color: white;
  transition-duration: 0.3s;
  font-size: 2px;
}

.edit-button:hover::before {
  display: block;
  padding-right: 10px;
  font-size: 13px;
  opacity: 1;
  transform: translateY(0px);
  transition-duration: 0.3s;
}

/*delete team button*/
.delete-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  position: relative;
}

.delete-svgIcon {
  width: 15px;
  transition-duration: 0.3s;
}

.delete-svgIcon path {
  fill: white;
}

.delete-button:hover {
  width: 90px;
  border-radius: 50px;
  transition-duration: 0.3s;
  background-color: rgb(255, 69, 69);
  align-items: center;
}

.delete-button:hover .delete-svgIcon {
  width: 20px;
  transition-duration: 0.3s;
  transform: translateY(60%);
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
}

.delete-button::before {
  display: none;
  content: "Delete";
  color: white;
  transition-duration: 0.3s;
  font-size: 2px;
}

.delete-button:hover::before {
  display: block;
  padding-right: 10px;
  font-size: 13px;
  opacity: 1;
  transform: translateY(0px);
  transition-duration: 0.3s;
}

.full-team-tab {
  /*border: 1px solid white;*/
  width: 100%;
  min-height: 650px;
  background-color: black;
  border-radius: 20px;
}

.team-filter {
  margin: 40px;
  display: flex;
  justify-content: space-between; /* Adjust as needed: space-around, space-evenly */
  box-sizing: border-box;
  /*border: 1px solid white;*/
  color: white;
  width: 90%;
}

.team-filter-column {
  align-items: center;
  text-align: center;
  width: 33.33%;
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
  /*border: 1px solid white;*/
  color: white;
}

/*TOURNAMENTS TAB*/

.full-team-tournaments-body {
  /*border: 1px solid white;*/
  width: 100%;
  height: 600px; /* or height: auto; */
  background-color: black;
  border-radius: 20px;
  overflow-y: auto; /* Enable vertical scrolling */
}

.tournaments-tabs-rows {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  height: 120px;
  width: 99%;
  /*border: 1px solid white;*/
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

.tournaments-tabs-rows:hover {
  background-color: #1d2127;
  border-radius: 20px;
  cursor: pointer;
}

.tournaments-tabs-rows-left-column {
  flex: 1;
  box-sizing: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  height: 90%;
  margin-top: 5px;
  margin-left: 5px;
  /*border: 1px solid white;*/
  width: 30%;
  overflow: hidden; /* Ensure the image doesn't overflow the container */
}

.tournaments-tabs-rows-right-column {
  flex: 1;
  box-sizing: border-box;
  /*border: 1px solid white;*/
  margin-left: -65%;
  border-radius: 20px;
  height: 90%;
  margin-top: 5px;
  display: grid;
}

.tournaments-tabs-rows-right-column-rows {
  flex: 1;
  /*border: 1px solid white;*/
  margin: 5px;
  color: #FFFFFF;
}
</style>