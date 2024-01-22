<template>
  <div class="HappyClientsComponent-background splash splash2">
    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col HappyClientsComponent-background-col-1">
          <div class="first-happy-client">
            <h1>John Doe, Coach at XYZ Academy:</h1>
            <p1>"Impressive! The tournament organization was top-notch. From scheduling to facilities, </p1>
            <p1>everything was perfectly managed. Our team had a fantastic experience."</p1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@300&family=Permanent+Marker&family=Smooch&display=swap');

.first-happy-client {
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 70px;
  /* Other styles */
}
.splash{
  background-image: url("../../assets/images/pinkspalsh.png");
  background-position: right;
}
.splash2{
  background-image: url("../../assets/images/pinkspalsh.png");
  background-position: left;
}


.HappyClientsComponent-background {
  background-image: linear-gradient(to left, #8fbc8f, #1D2127FF);
  margin-top: 300px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: available;
  border-radius: 20px;
  background-size: 700px;
  height: 650px;
  background-repeat: no-repeat;
  background-image: url("../../assets/images/pinkspalsh.png");

}

.HappyClientsComponent-background-col-1 {

  font-size: 80px;
  background-color: #252930;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: available;
  border-radius: 20px;
  margin-right: 10px;
  margin-left: 0px;
  margin-top: 10px;
  /*text-shadow: 3px 3px 0px black;*/
  /*-webkit-text-stroke: 2px black;*/
}
</style>