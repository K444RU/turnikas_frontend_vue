<!--Admin view-->
<template>
  <div class="admin-view-background" id="adminView">
    <UserProfileHeader/>

    <div class="admin-view-page-body">
      <div class="admin-view-page-left-nav"></div>
      <div class="admin-view-page-centre-nav">
        <div class="admin-view-nav-tabs">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="tournaments-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                      type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Tournaments
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="statistics-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                      type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Statistics
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="tournaments-tab"
                 tabindex="0">
              <div class="find-and-filter-bar">
                <div class="input-group">
                  <!--Find input to look for a tournament-->
                  <input type="text" class="find-tournament-input" placeholder="Find a tournament..."
                         aria-label="Find a tournament"
                         aria-describedby="addon-wrapping">
                </div>
                <!--First filter dropdown of tournament Age category-->
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                    Type
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <!--Second filter dropdown of tournament to Filter by-->
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                    Sort
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <!--Add Tournament button-->
                <button type="button" class="btn btn-success">
                  <font-awesome-icon :icon="['fas', 'plus']"/>
                  New
                </button>
              </div>

              <div v-for="tournament in tournamentInfoResponse" :key="tournament.id" class="tournaments-list-body" >
                <div class="tournament-info-box">
                  <div class="tournament-left-info">
                    <div class="tournament-name-and-type">
                      <h3>
                        <a class="tournament-name">{{ tournament.name }}</a>
                        <span></span>
                        <span class="tournament-type">{{ getCategoryNameByCategoryCode2(tournament.categoryCode)}}</span>
                      </h3>
                    </div>
                    <div class="tournament-dates">{{ tournament.startDate }} - {{ tournament.endDate }}</div>
                  </div>
                  <div class="tournament-right-info">
                    <button class="tournament-details-button">Details...</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="statistics-tab"
                 tabindex="0">...
            </div>
          </div>
        </div>
      </div>
      <div class="admin-view-page-right-nav"></div>
    </div>
  </div>
</template>

<script>
import UserProfileHeader from "@/components/user/UserProfileHeader";

export default {
  name: 'adminRoute',
  components: {UserProfileHeader},
  data() {
    return {
      tournamentInfoResponse: [],
      ageCategoryResponse: [],
      playerAmountResponse:[],
      cityNameResponse:[],
      cityNames: {},
    };
  },
  computed: {
    remainingSlots() {
      return this.tournamentInfoResponse.amountName - this.registeredTeams.length;
    },
  },
  methods: {
    getTournamentsInformation() {
      this.$http.get("/tournament/all")
          .then(response => {
            console.log(response.data);
            this.tournamentInfoResponse = response.data.map(tournament => ({
              ...tournament,
              tournamentId: tournament.id
            }));
          })
          .catch(error => {
            console.log(error);
          });
    },
    getCityName(cityId) {
      if (this.cityNames[cityId]) {
        return this.cityNames[cityId];
      }

      this.$http.get(`/tournament/city/info?cityId=${cityId}`)
          .then(response => {
            const cityName = response.data.cityName || 'City Not Found';
            this.$set(this.cityNames, cityId, cityName);
          })
          .catch(error => {
            console.log(error);
            this.$set(this.cityNames, cityId, 'City Not Found');
          });

      return this.cityNames[cityId] || 'Loading...';
    },
    navigateToTournamentPage(tournamentId) {
      console.log("Navigating to tournament page with tournamentId: ", tournamentId);
      this.$router.push({
        name: 'tournamentRoute',
        query: {
          tournamentId: tournamentId,
        },
      });
    },
    getAllTournamentCities() {
      this.$http.get("/tournament/city")
          .then(response => {
            this.cityNameResponse = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
    getCityNames(cityId){
      const city = this.cityNameResponse.find(c => c.id === cityId);
      return city ? city.cityName : 'Unknown';
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
    getPlayerAmountNames(amountCode){
      const amount = this.playerAmountResponse.find(a => a.amountCode === amountCode);
      return amount ? amount.amountName : 'Unknown';
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
    getCategoryNameByCategoryCode2(categoryCode) {
      const category = this.ageCategoryResponse.find(cat => cat.categoryCode === categoryCode);
      return category ? category.categoryName : 'Unknown';
    },
  },
  beforeMount() {
    this.getTournamentsInformation()
  },
  mounted() {
    this.getAgeCategories()
    this.getAllPlayerAmounts()
    this.getAllTournamentCities()
  }
}
</script>

<style>
.admin-view-background {
  background-color: #101720;
  background-position: center;
  background-size: cover;
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.admin-view-page-body {
  display: flex;
  flex: 1;
  overflow: hidden;
  /*border: 1px solid gray;*/
  margin-top: 100px;
}

.admin-view-page-left-nav,
.admin-view-page-right-nav {
  width: 2.5%;
  display: flex;
  height: auto;
  /*border: 1px solid gray;*/
}

.admin-view-page-centre-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  min-height: auto;
  /*border: 1px solid gray;*/
  padding: 0 40px;
}

.admin-view-nav-tabs {
  margin-top: 25px;
  width: 100%;
  font-size: 20px;
}

.find-and-filter-bar {
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  justify-content: center;
  /*border: 1px solid gray;*/
  width: 100%;
  height: 45px;
  box-sizing: border-box;
}

.find-tournament-input {
  flex: 1 1 200px;
  min-width: 150px;
  height: 40px;
  border: 1px solid gray;
  box-shadow: none;
  border-radius: 5px;
  background-color: #101720;
  color: white;
}


.dropdown .btn {
  flex: 1 1 auto;
  min-width: 120px;
  height: 40px;
  border-radius: 5px;
  background-color: #272e36;
}

.btn-success {
  flex: 1 1 auto;
  min-width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: #238636;
  font-size: 20px;
}

.tournaments-list-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  min-height: auto;
  width: 100%;
  /*border: 1px solid gray;*/
  margin-top: 40px;
  box-sizing: border-box;
}

.tournament-info-box {
  width: 100% !important;
  height: 70px;
  border-top: 1px solid gray;
  justify-content: space-between !important;
  display: flex;
  color: whitesmoke;
}

.tournament-name-and-type {
  display: inline-block !important;
  color: whitesmoke;
  box-sizing: border-box;
}

.tournament-name {
  word-break: break-all !important;
  color: #4493f8;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
}

h3 {
  font-size: 20px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
}

a {
  color: #4493f8;
  text-decoration: none;
  background-color: transparent;
}

.tournament-type {
  border: 1px solid gray;
  border-radius: 2em;
  display: inline-block;
  padding: 0 7px;
  line-height: 18px;
  font-size: small;
  margin-left: 5px;
}

.tournament-dates {
  color: #8d96a0 !important;
  font-size: 13px;
}

.tournament-left-info {
  /*border: 1px solid gray;*/
  display: inline-block;
  width: 83%;
  box-sizing: border-box;
}

.tournament-right-info {
  /*border: 1px solid gray;*/
  display: flex;
  align-items: flex-end !important;
  justify-content: space-around !important;
  flex-direction: column !important;
  width: 17%;
  box-sizing: border-box;
}

.tournament-details-button {
  min-width: 100px;
  height: 40px;
  border-radius: 5px;
  background-color: #272e36;
  border: 1px solid gray;
  box-shadow: none;
  color: #FFFFFF;
  font-size: 14px;
}

.tournament-details-button:hover {
  background-color: rgba(255, 255, 255, 0.14);
}

@media (max-width: 768px) {
  .admin-view-page-left-nav,
  .admin-view-page-right-nav {
    display: none;
  }

  .admin-view-page-body {
    margin-top: 150px;
    flex-direction: column;
    align-items: center;
  }

  .find-and-filter-bar {
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 160px;
  }

  .find-tournament-input,
  .dropdown .btn,
  .btn-success {
    margin-top: 10px;
    min-width: 100px;
    flex: 1 1 100%;
  }

  .tournaments-list-body {
    margin-top: 50px;
    flex-direction: column;
    align-items: flex-start;
  }

  .tournament-right-info {
    align-items: flex-start;
    justify-content: flex-start;
  }

  .tournament-details-button {
    width: 100%;
    text-align: center;
  }
}
</style>
