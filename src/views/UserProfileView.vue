<template>
  <div class="profile-background">
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-8 back">
          <img  v-on:click="$router.push('/')"
                class="logo profile-logo"
                src="../assets/images/photo_2023-02-22_11-55-37.jpg">
        </div>



        <div class="col-sm-4 back2">
          <img class="profile-default-image-corner"
               src="../assets/images/ProfileDefault.png"
               alt="Profile Image"
               width="50"
               height="50">

          <b class="top-right-user-name">Firstname</b>
          <b class="top-right-user-name">Lastname</b>
          <font-awesome-icon :icon="['fas', 'chevron-down']" />

        </div>
      </div>


      <div class="row">
        <div class="col-sm profile-box-1">
          <h2>Profile</h2>
        <div class="container">
          <img class="profile-default-image"
               src="../assets/images/ProfileDefault.png"
               alt="Profile Image">
          <h1>user NAME</h1>
          <div style="color: black" class="col-sm-4 profile-default-info">
            <p>Here is gonna be a user information and edit button</p>
          </div>
        </div>



        </div>
        <div class="col-sm profile-box-2" ><h2>My stats</h2></div>

      </div>
      <div class="row">
        <div class="col-sm profile-box-3"><h2>My team</h2></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',

}
</script>
<style>
.top-right-user-name{
  padding: 5px;
}
.back{
  background-color: black;
  background-image: linear-gradient(to right, black, cyan);
  border-bottom-left-radius: 10px;
}
.back2{
  background-color: black;
  background-image: linear-gradient(to left, black, cyan);
  border-bottom-right-radius: 10px;
}
.profile-logo{
  border-radius: 20px;
}
.profile-default-image {
  width: 150px; /* Adjust this value based on your desired width */
  height: auto; /* This will maintain the aspect ratio */
}

.profile-default-image-corner{
  margin-top: 20px;
}

/*.profile-default-info{*/
/*  background-color: rgb(255, 255, 255); !* White color with opacity *!*/
/*  margin-top: 10px;*/
/*  padding: 40px;*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  align-items: center;*/
/*  min-height: 50px;*/
/*  width: 500px;*/
/*  border-radius: 20px; !* Rounded corners *!*/
/*}*/

.row .profile-default-info{
  background-color: rgb(255, 255, 255, 1);
  margin-top: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
  width: 545px;
  border-radius: 20px;
}
.profile-background{
  background-image: url('../assets/images/UserProfileBackground.jpg');
  background-size: cover;
  height: 130vh;
  width: auto;
}
.col-sm{
  color: #FFFFFF;
}
.row{
  color: #FFFFFF;
}

.row .profile-box-1 {
  background-color: rgba(0, 0, 0, 0.7); /* White color with opacity */
  margin-top: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 250px;
  width: 400px;
  border-radius: 20px; /* Rounded corners */
}
.row .profile-box-2 {
  background-color: rgba(0, 0, 0, 0.7); /* White color with opacity */
  margin-top: 20px;
  margin-left: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /*min-height: 250px;*/
  width: 400px;
  border-radius: 20px; /* Rounded corners */
}
.row .profile-box-3 {
  background-color: rgba(0, 0, 0, 0.7); /* White color with opacity */
  margin-top: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /*min-height: 250px;*/
  width: 400px;
  border-radius: 20px; /* Rounded corners */

}


</style>


