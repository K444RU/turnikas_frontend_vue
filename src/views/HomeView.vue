<template>
  <div class="backgr">
    <Header/>
    <!-- Fat Headline -->
    <div class="headline">
      <h1 class="headline-inner">Organizing Football Tournaments Made Effortless !</h1>
      <button class="headline-button" @click="$router.push('join')">Join Now</button>
    </div>

    <!-- Brand Mission -->
    <div class="mission mission-background-picture">
      <h1>Our mission is to revolutionize football tournament organization, </h1>
      <h2>providing seamless experiences for players, coaches, and fans.</h2>
    </div>
    <div class="gap-background-picture gap-background-picture-font">
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col"></div>
          <div class="col"></div>
        </div>
      </div>
    </div>
    <!-- Your Magic -->
    <YourMagicComponent/>
    <!-- Happy Clients -->
    <HappyClientsComponent/>
    <div class="second-gap-background-picture"></div>
    <!-- Your Work -->
    <YourWorkComponent/>
    <!-- Say Hello -->
    <SayHelloComponent/>
    <Footer/>
  </div>
</template>
<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LoginPopup from "@/components/common/LoginPopup";
import YourMagicComponent from "@/components/home/YourMagicComponent";
import HappyClientsComponent from "@/components/home/HappyClientsComponent";

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    LoginPopup,
    YourMagicComponent,
    HappyClientsComponent
  },
  data() {
    return {
      showLogin: false,
    };
  },
  methods: {
    toggleLogin() {
      this.showLogin = !this.showLogin;
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Permanent+Marker&family=Smooch&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@300&family=Permanent+Marker&family=Smooch&display=swap');

.col-text{
  width: 400px;
}
.gap-background-picture-font {
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
  color: #FFFFFF;
  text-align: center;
  text-shadow: goldenrod;
}

.second-gap-background-picture {
  background-image: url("../assets/images/referee.jpg");
  background-size: cover;
  min-height: 1000px;
  background-position: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
}

.gap-background-picture {
  background-image: url("../assets/images/stadiumpng.png");
  background-size: cover;
  min-height: 900px;
  background-position: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.headline {
  background-color: #1D2127;
  margin-top: 80px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 250px;
  width: available;
  border-radius: 20px;
  background-image: url("../assets/images/ballspinn.gif");
  background-size: cover;
  height: 800px;
  background-repeat: no-repeat;
}

.headline-inner {
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  color: #20B2AA;
  font-size: 90px;
  flex-direction: column;
  align-items: center;
  width: available;
  border-radius: 20px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
  text-shadow: 3px 3px 0px black;
}

.headline-button {
  border-radius: 20px;
  background-color: #20B2AA;
  background-image: linear-gradient(to left, mediumspringgreen, #20B2AA);
  color: #FFFFFF;
  min-height: 75px;
  min-width: 400px;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 50px;
}

.mission {
  background-color: #1d2127; /* White color with opacity */
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: available;
  border-radius: 20px;
  background-size: 700px;
  height: 200px;
  background-repeat: no-repeat;
  color: #FFFFFF;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 70px;
  color: #ffffff;
  font-size: 30px;
}
/*.mission-background-picture{*/
/*  background-image: url("../assets/images/missionpng.png");*/
/*  background-size: 275px;*/
/*  background-position: left;*/
/*}*/
.backgr {
  background-color: black;
}
</style>



