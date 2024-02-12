<template>
  <div class="tournament-list-background" id="tournamentList">
    <div class="tournament-list-header tournament-list-background-image">
      <div class="team-profile-logo">
        <TeamProfileHeader class="logo-container"/>
      </div>
    </div>
    <h1 class="team-profile-roster">TOURNAMENTS</h1>

    <div class="tournament-list-body">
      <div class="tournament-left-nav"></div>


      <div class="tournament-centre-nav">

        <div v-for="tournament in tournamentInfoResponse" :key="tournament.id" class="tournament-box">
          <div class="tournament-left-column"></div>
          <div class="tournament-right-column">
            <p @click="navigateToTournamentPage(tournament.id)" style="color: greenyellow ">Tournament date: {{ tournament.startDate }}</p>
            <p @click="navigateToTournamentPage(tournament.id)" style="color: #4CAF50;">Tournament name: {{ tournament.name }}</p>
            <p @click="navigateToTournamentPage(tournament.id)" style="color: cyan">
              More Information: Tournament status • Tournament category • {{ tournament.playerAmountCode }}/32
              • Tournament City • {{ tournament.prize }}€
            </p>
            <!-- Additional dynamic content for the right column goes here -->
          </div>
        </div>


        <div class="tournament-box">
          <div class="tournament-left-column">

          </div>
          <div class="tournament-right-column">
            <p style="color: #20B2AA">Tournament date</p>
            <p>Tournament name</p>
            <p>Tournament status • Tournament category • 10/32 • Tournament City • 30€</p>
            <!-- Content for the right column goes here -->
          </div>
        </div>


        <div class="tournament-box">
          <div class="tournament-left-column">

          </div>
          <div class="tournament-right-column">
            <p style="color: #20B2AA">Tournament date</p>
            <p>Tournament name</p>
            <p>Tournament status • Tournament category • 10/32 • Tournament City • 30€</p>
            <!-- Content for the right column goes here -->
          </div>
        </div>
        <div class="tournament-box">
          <div class="tournament-left-column">

          </div>
          <div class="tournament-right-column">
            <p style="color: #20B2AA">Tournament date</p>
            <p>Tournament name</p>
            <p>Tournament status • Tournament category • 10/32 • Tournament City • 30€</p>
            <!-- Content for the right column goes here -->
          </div>
        </div>
      </div>

      <div class="tournament-right-nav"></div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import TeamProfileHeader from "@/components/team/TeamProfileHeader";
import Footer from "@/components/common/Footer";

export default {
  name: 'tournamentListRoute',
  components: {Footer, TeamProfileHeader},
  data() {
    return {
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
      }
    }
  },
  methods: {
    getTournamentsInformation() {
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
    navigateToTournamentPage(tournamentId){
      console.log("Navigating to tournament page with tournamentId: ", tournamentId)
      this.$router.push({
        name: 'tournamentRoute',
        query: {
          tournamentId: tournamentId,
        }
      })
    }

  },
  beforeMount() {
    this.getTournamentsInformation()
  }
}
</script>

<style>
.tournament-left-column {
  flex: 1;
  box-sizing: border-box;
  margin-right: 55%;
  background-image: url("../assets/images/tournamentDeafault.jpg");
  background-size: 100% 100%; /* Set background size to cover the entire container */
  background-repeat: no-repeat;
  border-radius: 20px;
  height: 95%;
  margin-top: 5px;
  margin-left: 5px;
}

.tournament-right-column {
  flex: 1;
  box-sizing: border-box;
  margin-left: -45%;
  margin-top: 30px;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
  color: #FFFFFF;
}

* {
  box-sizing: border-box;
}

.tournament-list-background {
  background-color: black;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  position: relative;
}

.tournament-list-background-image {
  position: relative;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 2)), url("https://images.unsplash.com/photo-1521504846809-c3746c1fbf67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.tournament-list-header {
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tournament-list-body {
  display: flex;
  min-height: 100vh;
  margin-bottom: 300px;
}

.tournament-left-nav {
  width: 10%;
  display: flex;
  min-height: 100vh;
}

.tournament-right-nav {
  width: 10%;
  display: flex;
  min-height: 100vh;
}

.tournament-centre-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-left: 5%;
  margin-right: 5%;
  min-height: 100vh;
}

.tournament-box {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  height: 200px;
  width: 100%;
}

.tournament-box:hover {
  background-color: #1d2127;
  border-radius: 20px;
  cursor: pointer;
}


/* Responsive layout - makes the columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .tournament-left-nav, .tournament-right-nav, .tournament-centre-nav {
    width: 100%;
    position: relative;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>



