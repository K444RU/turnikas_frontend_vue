<template>
  <div class="tournament-registration-background" id="tournamentRegistration">
    <div class="team-profile-logo">
      <TeamProfileHeader class="logo-container"/>
    </div>
    <div class="middle-panel">
      <div class="tournament-registration-form">
        <form class="tournament-registration-form-table">
          <h1>Create new tournament</h1>
          <table>
            <tr>
              <td align="right">Tournament Name:</td>
              <td align="left"><input v-model="tournamentRequest.name" type="text" name="name" placeholder="name"/></td>
            </tr>
            <tr>
              <td align="right">Tournament Start Date:</td>
              <td align="left"><input v-model="tournamentRequest.startDate" type="date" name="start-date"/></td>
            </tr>
            <tr>
              <td align="right">Tournament End Date:</td>
              <td align="left"><input v-model="tournamentRequest.endDate" type="date" name="end-date"/></td>
            </tr>
            <tr>
              <td align="right">Tournament City:</td>
              <td align="left">
                <select v-model="tournamentRequest.cityId" @change="getTournamentStadium" class="form-select"
                        aria-label="Default select example">
                  <option selected disabled value="0">Select the city:</option>
                  <option v-for="cities in tournamentCityResponse" :value="cities.id">{{ cities.cityName }}</option>
                </select>
              </td>
            </tr>
            <tr>
              <td align="right">Tournament Stadium:</td>
              <td align="left">
                <select v-model="tournamentRequest.stadiumId" class="form-select" aria-label="Default select example">
                  <option selected disabled value="0">Select the stadium:</option>
                  <option v-for="stadium in filteredStadiums"
                      :value="stadium.id">{{ stadium.name }}
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td align="right">Tournament Age category:</td>
              <td align="left">
                <select v-model="tournamentRequest.categoryCode" class="form-select" aria-label="Default select example">
                  <option selected>Select age category:</option>
                  <option selected disabled value="0">Select the category:</option>
                  <option v-for="category in tournamentAgeCategoryResponse" :value="category.categoryCode">{{ category.categoryName }}</option>
                </select>
              </td>
            </tr>
            <tr>
              <td align="right">Team Player Amount:</td>
              <td align="left">
                <select v-model="tournamentRequest.playerAmountCode" class="form-select" aria-label="Default select example">
                  <option selected>Select player amount:</option>
                  <option selected disabled value="0">Select the amount:</option>
                  <option v-for="amount in tournamentPlayerAmountResponse"
                          :value="amount.amountCode">{{ amount.amountName }}
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td align="right">Tournament participation prise:</td>
              <td align="left"><input v-model="tournamentRequest.participationPrise"
                                      type="text"
                                      name="name"
                                      placeholder="prise"/>
              </td>
            </tr>
            <tr>
              <td align="right">Tournament participation prize:</td>
              <td align="left"><input v-model="tournamentRequest.prize"
                                      type="text"
                                      name="name"
                                      placeholder="prize"/>
              </td>
            </tr>
            <tr>
              <td align="right">Additional information :</td>
              <td align="left"><textarea v-model="tournamentRequest.additionalInfo"
                                         class="form-control"
                                         aria-label="With textarea"
                                         placeholder="info"></textarea>
              </td>
            </tr>
          </table>
          <button @click="tournamentRegistration"
                  type="button"
                  class="tournament-registration-button">create tournament
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import TeamProfileHeader from "@/components/team/TeamProfileHeader";

export default {
  name: 'tournamentRegistrationRoute',
  components: {
    TeamProfileHeader
  },
  data() {
    return {
      tournamentRequest: {
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
      selectedCityId: 0,
      tournamentCityResponse: [],
      tournamentStadiumResponse: [],
      tournamentAgeCategoryResponse: [],
      tournamentPlayerAmountResponse: [],
    }
  },
  computed: {
    filteredStadiums() {
      return this.tournamentStadiumResponse.filter(stadium => stadium.cityId === this.tournamentRequest.cityId);
    }
  },
  methods: {
    getTournamentCities() {
      this.$http.get("/tournament/city")
          .then(response => {
            this.tournamentCityResponse = response.data;
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },

    getTournamentStadium() {
      this.$http.get("/tournament/city/stadium", {
        params: {
          cityId: this.tournamentRequest.cityId,
        }
      })
          .then(response => {
            this.tournamentStadiumResponse = response.data;
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },

    getPlayerAmount() {
      this.$http.get("/tournament/player/amount")
          .then(response => {
            this.tournamentPlayerAmountResponse = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },

    getAgeCategory() {
      this.$http.get("/tournament/age-category/info")
          .then(response => {
            this.tournamentAgeCategoryResponse = response.data;
            console.log(this.tournamentAgeCategoryResponse);
          })
          .catch(error => {
            console.log(error);
          });
    },
    tournamentRegistration() {
      this.$http.post("/tournament/register", this.tournamentRequest
      ).then(response => {
        const {id: tournamentId} = response.data
        this.$router.push({name: 'adminRoute'})
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

  },
  beforeMount() {
    this.getTournamentCities();
    this.getPlayerAmount();
    this.getAgeCategory();
  },
}
</script>

<style>
.tournament-registration-background {
  background-color: #101720;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  text-align: center;
}

.middle-panel {
  width: 50%;
  margin: auto;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tournament-registration-form {
  width: 80%;
  margin-top: 110px;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  height: auto;
  background-color: #1d2127;
  color: #FFFFFF;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
}

.tournament-registration-form-table {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tournament-registration-form-table input,
.tournament-registration-form-table textarea,
.tournament-registration-form-table select {
  width: calc(100% - 2px); /* 100% width minus padding */
  margin: 3px 15px; /* Adjust the margin as needed */
  padding: 10px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: #181818;
  color: #FFFFFF;
  font-size: 16px;
}

/* Style for select dropdown arrow */
.tournament-registration-form-table select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-size: 12px; /* Adjust the size of the arrow */
  background-position: right 8px center;
  background-repeat: no-repeat;
  color: #808080FF;
}

.tournament-registration-form-table input[type="date"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-size: 12px; /* Adjust the size of the arrow */
  background-position: right 8px center;
  background-repeat: no-repeat;
  color: #808080FF; /* Initial color */
}

.tournament-registration-form-table input[type="date"]:focus,
.tournament-registration-form-table input[type="date"]::placeholder {
  color: white;
}

.tournament-registration-button {
  margin-top: 10px;
  border-radius: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .middle-panel {
    width: 100%;
    margin: 20px auto;
  }

  .tournament-registration-form {
    width: 100%;
    margin-top: 50px;
    margin-bottom: 10px;
    margin-right: 17%;
  }

  .tournament-registration-form-table {
    width: 100%;
  }

  .tournament-registration-form-table input,
  .tournament-registration-form-table textarea,
  .tournament-registration-form-table select {
    width: calc(100% - 30px);
    margin: 5px 10px;
    padding: 10px;
    font-size: 14px;
  }

  .tournament-registration-button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .middle-panel {
    width: 100%;
    margin: 20px auto;
  }

  .tournament-registration-form {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 10px;
    margin-right: 17%;
  }

  .tournament-registration-form-table input,
  .tournament-registration-form-table textarea,
  .tournament-registration-form-table select {
    width: calc(100% - 20px);
    margin: 5px;
    padding: 8px;
    font-size: 12px;
  }

  .tournament-registration-button {
    width: 100%;
    padding: 8px;
    font-size: 14px;
  }
}

</style>