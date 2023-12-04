<template>
  <div class="backgr">
    <Header/>
    <!-- Fat Headline -->
    <div class="headline">
      <h1 class="headline-inner">Organizing Football Tournaments Made Effortless!</h1>
      <button class="headline-button" @click="$router.push('join')">Join Now</button>
    </div>

    <!-- Brand Mission -->
    <div class="mission mission-background-picture">
      <h1>Our mission is to revolutionize football tournament organization, </h1>
        <h2>providing seamless experiences for players, coaches, and fans.</h2>
    </div>
    <div class="gap-background-picture"></div>
    <!-- Your Magic -->
      <YourMagicComponent />
    <!-- Happy Clients -->
    <HappyClientsComponent />
    <div class="second-gap-background-picture"></div>
    <!-- Your Work -->
    <YourWorkComponent />

    <!-- Say Hello -->
    <SayHelloComponent />
    <Footer/>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginPopup from "@/components/LoginPopup";
import YourMagicComponent from "@/components/YourMagicComponent";
import HappyClientsComponent from "@/components/HappyClientsComponent";



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

.second-gap-background-picture{
  background-image: url("../assets/images/referee.jpg");
  background-size: cover;
  min-height: 1000px;
  background-position: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;

}
.gap-background-picture{
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
.headline{
  background-color: #1D2127; /* White color with opacity */
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 250px;
  width: available;
  border-radius: 20px;
  background-image: url("../assets/images/pngegg.png");
  background-position: left;
  background-size: 700px;
  height: 400px;
  background-repeat: no-repeat;

}
.headline-inner{
  font-family: 'Open Sans', sans-serif;
  font-family: 'Permanent Marker', cursive;
  font-family: 'Smooch', cursive;
  color: #20B2AA;
  font-size: 90px;
  /*background-color: #252930;*/
  /*padding: 50px;*/
  /*display: flex;*/
  /*flex-direction: column;*/
  /*align-items: center;*/
  /*width: available;*/
  /*border-radius: 20px;*/
  /*margin-right: 10px;*/
  /*margin-left: 10px;*/
  /*margin-top: 10px;*/
  text-shadow: 3px 3px 0px black;
  /*-webkit-text-stroke: 2px black;*/
}
.headline-button{
  border-radius: 20px;
  background-color: #20B2AA;
  background-image: linear-gradient(to left, mediumspringgreen, #20B2AA);
  color: #FFFFFF;
  min-height: 75px;
  min-width: 400px;
}

.mission{
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
  font-family: 'Open Sans', sans-serif;
  font-family: 'Permanent Marker', cursive;
  font-family: 'Smooch', cursive;
  color: #20B2AA;
  font-size: 30px;
}
.mission-background-picture{
  background-image: url("../assets/images/missionpng.png");
  background-size: 275px;
  background-position: right;
}

.backgr{
  background-color: black;
}

.backgim {

}

</style>



