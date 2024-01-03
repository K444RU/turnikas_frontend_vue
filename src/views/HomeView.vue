<template>
  <div class="backgr">
    <Header/>
    <!-- Fat Headline -->
    <div class="headline">
      <h1 class="headline-inner">Organizing Football Tournaments Made</h1>
      <h1 class="headline-inner">Effortless !</h1>
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
<!--          <div class="col-text">-->
<!--            The Evolution of Football Tournaments: A Glorious Journey Through Time-->
<!--            Football tournaments have a rich and captivating history that spans over a century, weaving a narrative of-->
<!--            passion, competition, and sportsmanship. The inception of organized football competitions marked the-->
<!--            beginning of an era that would forever change the landscape of the beautiful game.-->
<!--            The earliest football tournaments were modest affairs, often regional in scope and contested by amateur-->
<!--            clubs with a burning desire to showcase their skills. As the sport gained popularity, these local-->
<!--            tournaments evolved into more structured events, paving the way for the birth of national competitions.-->
<!--            In the late 19th century, the idea of international football tournaments began to take shape. The British-->
<!--            Home Championship, established in 1884, stands as one of the earliest examples of national teams engaging in-->
<!--            friendly yet fiercely competitive matches. This set the stage for what would eventually become the-->
<!--            prestigious international competitions we know today.-->
<!--            The 20th century witnessed the meteoric rise of global football tournaments, with the FIFA World Cup-->
<!--            emerging as the pinnacle of competitive football. The inaugural World Cup took place in Uruguay in 1930,-->
<!--            bringing together nations from around the world in a celebration of unity through sport. Since then, the-->
<!--            World Cup has become a quadrennial spectacle, capturing the hearts of millions and producing iconic moments-->
<!--            that define football history.-->
<!--            Continental competitions, such as the UEFA European Championship and the Copa America, added further layers-->
<!--            of excitement to the football calendar. These tournaments provided a platform for rivalries to flourish and-->
<!--            for players to etch their names into the annals of the sport.-->
<!--            In recent years, club competitions like the UEFA Champions League and the Copa Libertadores have reached-->
<!--            unprecedented levels of popularity. These tournaments showcase the best club teams from different-->
<!--            continents, offering fans a tantalizing glimpse of top-tier football throughout the year.-->
<!--            The history of football tournaments is a story of evolution, innovation, and a relentless pursuit of-->
<!--            excellence. From humble beginnings on local fields to the grandeur of international stadiums, football-->
<!--            tournaments have become a global phenomenon, uniting diverse cultures under the common banner of the world's-->
<!--            most beloved sport. As we eagerly anticipate the next chapter in this ongoing saga, one thing remains-->
<!--            certain – the magic of football tournaments will continue to captivate generations to come.-->
<!--          </div>-->
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
  background-image: url("../assets/images/ballspinn.gif");
  background-size: cover;
  height: 800px;
  background-repeat: no-repeat;

}

.headline-inner {
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 70px;
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

.backgim {

}

</style>



