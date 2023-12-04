<template>
  <div class="background-image2">
    <Header/>
    <div class="text-container">
      <h1>
        HELLOOOOO SUKA
      </h1>
      <p>
        The Evolution of Football Tournaments: A Glorious Journey Through Time
        Football tournaments have a rich and captivating history that spans over a century, weaving a narrative of passion, competition, and sportsmanship. The inception of organized football competitions marked the beginning of an era that would forever change the landscape of the beautiful game.
        The earliest football tournaments were modest affairs, often regional in scope and contested by amateur clubs with a burning desire to showcase their skills. As the sport gained popularity, these local tournaments evolved into more structured events, paving the way for the birth of national competitions.
        In the late 19th century, the idea of international football tournaments began to take shape. The British Home Championship, established in 1884, stands as one of the earliest examples of national teams engaging in friendly yet fiercely competitive matches. This set the stage for what would eventually become the prestigious international competitions we know today.
        The 20th century witnessed the meteoric rise of global football tournaments, with the FIFA World Cup emerging as the pinnacle of competitive football. The inaugural World Cup took place in Uruguay in 1930, bringing together nations from around the world in a celebration of unity through sport. Since then, the World Cup has become a quadrennial spectacle, capturing the hearts of millions and producing iconic moments that define football history.
        Continental competitions, such as the UEFA European Championship and the Copa America, added further layers of excitement to the football calendar. These tournaments provided a platform for rivalries to flourish and for players to etch their names into the annals of the sport.
        In recent years, club competitions like the UEFA Champions League and the Copa Libertadores have reached unprecedented levels of popularity. These tournaments showcase the best club teams from different continents, offering fans a tantalizing glimpse of top-tier football throughout the year.
        The history of football tournaments is a story of evolution, innovation, and a relentless pursuit of excellence. From humble beginnings on local fields to the grandeur of international stadiums, football tournaments have become a global phenomenon, uniting diverse cultures under the common banner of the world's most beloved sport. As we eagerly anticipate the next chapter in this ongoing saga, one thing remains certain – the magic of football tournaments will continue to captivate generations to come.
      </p>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

.column {
  width: 300px;
  float: left;
  margin-left: 250px;
}

.walkerProfileBackground {
  background-image: url("https://www.bil-jac.com/media/4hdctnny/trainyourdogtowalkonaleash.jpg?anchor=center&mode=crop&width=1024&height=512");
  overflow-x: hidden;
  width: 100%;
  background-size: cover;
}

.background-image2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/desktop-wallpaper-epic-soccer-background-indoor-soccer.jpg');
  background-size: cover; /* Adjust as needed */
}

.text-container {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  background-color: rgb(169, 140, 31); /* Semi-transparent black background */
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px); /* Adjust the blur radius as needed */
}

.text-container h1 {
  font-size: 36px;
  font-family: 'Permanent Marker', cursive;
}

.text-container p {
  font-size: 18px;
}
</style>
