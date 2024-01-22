<template>
  <div class="player-profile-background" id="playerProfile">
    <div class="player-profile-header player-profile-image">
      <div class="team-profile-logo">
        <TeamProfileHeader class="logo-container"/>
      </div>
    </div>


    <div id="player-profile-container">
      <div id="left">
        <img class="player-profile-container-image" src="@/assets/images/jersey.png" alt="Default Player Image" />
        <font-awesome-icon :icon="['fab', 'square-instagram']" />
        <font-awesome-icon :icon="['fab', 'square-facebook']" />
        <p>Date of birth: </p>
        <p>Name: </p>
        <p>Last Name: </p>
      </div>


      <div id="right">
        <div class="right-box">
          <h2>Right Box 1</h2>
          <p>This is the content of right box 1.</p>
        </div>
        <div class="right-box">
          <h2>Player Profile</h2>
          <p class="text">Blessed with outstanding agility and athleticism, charisma and class also makes him one of the game’s great personalities.
            Born in Poland’s capital city, Szczesny spent his formative years with local side Legia Warsaw before moving to Arsenal as a 16-year-old.
            After finding his feet in London, the Polish international made his debut in September 2009 and, upon returning from a loan spell with Brentford in 2010, he established himself as the Gunners’ first-choice keeper for the next five seasons.
            Szczesny celebrated two FA Cups, a Community Shield and the 2013-14 Premier League Golden Glove Award during his time with Arsenal.
            In 2015, Roma secured Szczesny’s services for a loan spell that ultimately lasted two years, comprising of 72 appearances in Serie A and a further nine in the Champions League, ending the 2016/17 season with the highest number of clean sheets in the league (14).
            Szczesny’s maiden campaign with Juventus (2017/18), saw him concede just nine goals in 21 appearances across all competitions, proving himself as one of Europe’s standout shot-stoppers.
            Now being Juve's first-choice keeper, Szczesny has stepping into his position with confidence and performances to match, estabilishing himself as one of the best keepers in Europe.</p>
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
  name: 'playerProfileRoute',
  components: {TeamProfileHeader, Footer},
  data() {
    return {}
  },
  methods: {}

}
</script>

<style>
.text{
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
  margin-left: 20px;
  color: white;
}

#player-profile-container {
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 40px;
  display: flex;
}

#left {
  margin-left: 50px;
  margin-top: 50px;
  width: 50%;
  background-color: black;
  color: rgba(255, 255, 255, 0.34);
  border-bottom: 1px solid #fff; /* White right border */
}

#right {
  display: flex;
  width: 100%;
  flex-direction: column; /* Stack items vertically */
  color: rgba(255, 255, 255, 0.34);
}

.right-box {
  background-color: black;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #fff; /* White right border */
}




.player-profile-background {
  background-color: black;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
}

.player-profile-header {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: darkseagreen;
}

.player-profile-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.player-profile-container-image{

}
.team-profile-logo {
  width: 80px;
  height: 80px;
  cursor: pointer;
}

</style>