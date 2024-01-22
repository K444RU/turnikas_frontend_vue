<template>
  <div class="YourMagicComponent-background">
    <div class="container text-center">
      <div class="row align-items-center">
        <h1 class="browse-tournament">Browse Tournaments</h1>

        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"></button>
            <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div v-on:click="$router.push('join')" href="#" class="col YourMagicComponent-background-col-1">
                <h1 class="carousel-font">Team Tournaments</h1>
              </div>
            </div>
            <div class="carousel-item">
              <div href="#" class="col YourMagicComponent-background-col-2">
                <h1 class="carousel-font">Solo Tournaments</h1>

              </div>
            </div>

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.carousel-font{
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 80px;
}

.browse-tournament{
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 50px;
}
.YourMagicComponent-background{
  /*background-color: #1D2127; !* White color with opacity *!*/
  margin-top: 100px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
  width: available;
  border-radius: 20px;
  background-size: 700px;
  height: 400px;
  background-repeat: no-repeat;
}
.YourMagicComponent-background-col-1{
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 80px;
  background-color: #252930;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: available;
  height: 500px;
  border-radius: 20px;
  margin-right: 10px;
  margin-left: 0px;
  margin-top: 10px;
  text-shadow: 3px 3px 0px black;
  -webkit-text-stroke: 2px black;
  background-image: url("../../assets/images/footballteam.jpg");
  background-size: cover;
}
.YourMagicComponent-background-col-1:hover {
  cursor: pointer;
}
.YourMagicComponent-background-col-2{
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 80px;
  font-size: 80px;
  background-color: #252930;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: available;
  height: 500px;
  border-radius: 20px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
  text-shadow: 3px 3px 0px black;
  -webkit-text-stroke: 2px black;
  background-image: url("../../assets/images/soloplayer.jpg");
  background-size: cover;
}
.YourMagicComponent-background-col-2:hover {
  cursor: pointer;
}
/*.YourMagicComponent-background-col-3{*/
/*  font-family: 'Open Sans', sans-serif;*/
/*  font-family: 'Permanent Marker', cursive;*/
/*  font-family: 'Smooch', cursive;*/
/*  color: #20B2AA;*/
/*  font-size: 80px;*/
/*  background-color: #252930;*/
/*  padding: 50px;*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  align-items: center;*/
/*  width: available;*/
/*  border-radius: 20px;*/
/*  margin-right: 0px;*/
/*  margin-left: 10px;*/
/*  margin-top: 10px;*/
/*  text-shadow: 3px 3px 0px black;*/
/*  -webkit-text-stroke: 2px black;*/
/*}*/
</style>