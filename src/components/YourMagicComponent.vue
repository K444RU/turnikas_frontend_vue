<template>
  <div class="YourMagicComponent-background">
    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col YourMagicComponent-background-col-1">
          One of three columns 1
        </div>
        <div class="col YourMagicComponent-background-col-2">
          One of three columns 2
        </div>
        <div class="col YourMagicComponent-background-col-3">
          One of three columns 3
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
.YourMagicComponent-background{
  background-color: #1D2127; /* White color with opacity */
  margin-top: -70px;
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
  font-family: 'Open Sans', sans-serif;
  font-family: 'Permanent Marker', cursive;
  font-family: 'Smooch', cursive;
  color: #20B2AA;
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
  text-shadow: 3px 3px 0px black;
  -webkit-text-stroke: 2px black;
}
.YourMagicComponent-background-col-2{
  font-family: 'Open Sans', sans-serif;
  font-family: 'Permanent Marker', cursive;
  font-family: 'Smooch', cursive;
  color: #20B2AA;
  font-size: 80px;
  background-color: #252930;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: available;
  border-radius: 20px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
  text-shadow: 3px 3px 0px black;
  -webkit-text-stroke: 2px black;
}
.YourMagicComponent-background-col-3{
  font-family: 'Open Sans', sans-serif;
  font-family: 'Permanent Marker', cursive;
  font-family: 'Smooch', cursive;
  color: #20B2AA;
  font-size: 80px;
  background-color: #252930;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: available;
  border-radius: 20px;
  margin-right: 0px;
  margin-left: 10px;
  margin-top: 10px;
  text-shadow: 3px 3px 0px black;
  -webkit-text-stroke: 2px black;
}
</style>