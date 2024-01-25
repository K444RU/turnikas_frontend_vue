<template>
  <div class="profile-background">
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-8 back">
          <img v-on:click="$router.push('/')"
               class="logo profile-logo"
               src="../assets/images/photo_2023-02-22_11-55-37.jpg" alt="logo">
        </div>
        <div class="col-sm-4 back2">
          <div class="dropdown profile-default-image-corner">
            <a style="font-size: 30px" class="dropdown-toggle dropdown user-profile-font" href="#" role="button"
               data-bs-toggle="dropdown"
               aria-expanded="false" @click="openEditProfileModal(userId)">
              {{ userContactInfoResponse.firstName }} {{ userContactInfoResponse.lastName }}
            </a>
            <ul class="dropdown-menu">
              <li><a v-on:click="$router.push({name: 'home'})" class="dropdown-item" href="#">Home Page</a></li>
              <li>
                <form>
                  <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Edit Profile
                  </a>
                </form>
              </li>
              <li><a class="dropdown-item" href="#">Log Out</a></li>
            </ul>
          </div>
        </div>
        <!-- Scrollable modal for user contact information change -->
        <UserContactInfo rmationChangeModal :form-date-of-birth="formDateOfBirth" :form-first-name="formFirstName"
                                           :form-last-name="formLastName"
                                           :save-changes-to-data-base="saveChangesToDataBase"/>
      </div>

      <div class="row">
        <div class="col-sm profile-box-1">
          <h2 class="user-profile-font">Profile</h2>
          <div class="container">
            <img class="profile-default-image"
                 src="../assets/images/ProfileDefault.png"
                 alt="Profile Image">

            <div class="col-sm-4 profile-default-info font-color container">
              <h1 class="user-profile-font">{{ userContactInfoResponse.firstName }} {{
                  userContactInfoResponse.lastName
                }} </h1>
              <p class="user-profile-font">Age: {{ calculateAge(userContactInfoResponse.dateOfBirth) }}</p>
            </div>
          </div>
        </div>
        <div class="col-sm profile-box-2 user-profile-font">
          <div class="container text-center">
            <div class="row align-items-start">
              <div class="col">
                STATS
              </div>
              <div class="col dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                   :icon="['fas', 'caret-down']">
                SELECT THE TEAM
                <font-awesome-icon/>
                <ul class="dropdown-menu">
                  <li v-for="team in teamInfoResponse" :key="team.teamId">
                    <a v-on:click="getTeamStats(team.teamId)" class="dropdown-item" href="#">{{ team.teamName }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <UserProfileStatisticsTable :team-stats-response="teamStatsResponse"/>
        </div>
      </div>
      <div class="row">
        <div class="col-sm profile-box-3 position-relative">
          <h2 class="user-profile-font">My team</h2>
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
               aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">TEAM SELECTION</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <div>
                SELECT TEAM CATEGORY
              </div>
              <div class="dropdown mt-3">
                <button v-on:click="getAgeCategories()" class="btn btn-secondary dropdown-toggle offcanvas-button"
                        type="button"
                        data-bs-toggle="dropdown">
                  Dropdown button
                </button>
                <ul class="dropdown-menu offcanvas-button">
                  <li v-for="category in ageCategoryResponse" :key="category.categoryCode">
                    <a @click="updateSelectedCategory(category.categoryCode)"
                       class="dropdown-item" href="#">{{ category.categoryName }}</a>
                  </li>

                </ul>
              </div>
            </div>
            <div class="offcanvas-body">
              <div>
                SELECT TEAM
              </div>
              <div class="dropdown mt-3">
                <button class="btn btn-secondary dropdown-toggle offcanvas-button"
                        type="button"
                        data-bs-toggle="dropdown">
                  Dropdown button
                </button>
                <ul class="dropdown-menu mt-3">
                  <li v-for="team in teamInfoResponse" :key="team.teamId">
                    <a class="dropdown-item" href="#">{{ team.teamName }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <font-awesome-icon data-bs-toggle="offcanvas"
                             href="#offcanvasExample"
                             role="button"
                             aria-controls="offcanvasExample"
                             class="team-menu-icon position-absolute start-0 top-0"
                             :icon="['fas', 'bars']"/>

          <font-awesome-icon @click="openNewTeamRegistrationModal(userId)"
                             type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                             class="add-team-icon position-absolute top-0 end-0"
                             :icon="['fas', 'square-plus']"/>

          <!-- Team list by userID -->
          <table class="table table-dark table-hover user-profile-font">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Team Logo</th>
              <th scope="col">Team Name</th>
              <th scope="col">Category</th>
              <th scope="col">Team Coach</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="team in teamInfoResponse" :key="team.teamId">
              <th scope="row">{{ team.sequenceNumber }}</th>
              <td v-if="!team.teamLogo">{{ team.teamLogo }}
                <img @click="navigateToTeamPage(team.teamId)" src="../assets/images/defaultTeamLogo.png"
                     style="height: 70px; border-radius: 20px; cursor: pointer" alt="">
              </td>
              <td v-else>
                <img @click="navigateToTeamPage(team.teamId)" :src="team.teamLogo"
                     style="height: 70px; border-radius: 20px; cursor: pointer" alt="">
              </td>
              <td style="cursor: pointer" @click="navigateToTeamPage(team.teamId)">{{ team.teamName }}</td>
              <td>{{ team.categoryCode }}</td>
              <td>{{ team.teamCoachName }}</td>
              <td>
                <font-awesome-icon @click="openTeamEditModal(team.teamId)"
                                   data-bs-toggle="modal"
                                   data-bs-target="#teamEditStaticBackDrop"
                                   type="button"
                                   :icon="['fas', 'pen']"/>
              </td>
              <td>
                <font-awesome-icon @click="deleteTeam(team.teamId)"
                                   type="button"
                                   :icon="['fas', 'square-minus']"/>
              </td>
            </tr>
            </tbody>
          </table>
          <!--Scrollable modal for team information change-->
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal fade" id="teamEditStaticBackDrop"
                 data-bs-backdrop="static"
                 data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">EDIT TEAM INFORMATION</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="input-group mb-3">
                      <input v-model="formTeamName" type="text" class="rounded-input2" aria-label="First Name">
                    </div>
                    <div class="input-group mb-3">
                      <input v-model="formCoachName" type="text" class="rounded-input2"
                             aria-label="Last Name">
                    </div>
                    <div class="input-group mb-3">
                      <select v-model="formCategoryCode" class=" amount-of-players"
                              aria-label="Default select example">
                        <option selected>Amount of players</option>
                        <option value="1">1</option>
                        <option value="2">11</option>
                      </select>
                    </div>
                    <div class="input-group mb-3">
                    </div>
                    <div class="input-group mb-3">
                      <button
                          v-model="formTeamLogo"
                          type="button"
                          class="tt btn btn-dark"
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          title="Tooltip on right"
                      >Upload file
                      </button>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="close-changes-button" data-bs-dismiss="modal">Close</button>
                    <button @click="saveTeamChangesToDatabase" type="button" class="save-changes-button">Save team
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Scrollable modal for team registration -->
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal fade" id="staticBackdrop"
                 data-bs-backdrop="static"
                 data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Register new team</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="input-group mb-3">
                      <p>Enter team name</p>
                      <input v-model="teamRequest.teamName" type="text" class="rounded-input2" aria-label="First Name">
                    </div>
                    <div class="input-group mb-3">
                      <p>Enter Coach Name</p>
                      <input v-model="teamRequest.teamCoachName" type="text" class="rounded-input2"
                             aria-label="Last Name">
                    </div>
                    <div class="input-group mb-3">
                      <p>Choose amount of players in team</p>
                      <select v-model="teamRequest.categoryCode" class=" amount-of-players"
                              aria-label="Default select example">
                        <option selected>Amount of players</option>
                        <option value="1">1</option>
                        <option value="2">11</option>
                      </select>
                    </div>
                    <div class="input-group mb-3">
                      <p>Upload your team logo</p>
                    </div>
                    <div class="input-group mb-3">
                      <input
                             type="file"
                             @change="handleImage"
                             ref="fileInput"
                             @pictureInputSuccess="setPicture"
                             accept="image/x-png,image/jpeg">

<!--                      <button-->
<!--                          v-model="teamRequest.teamLogo"-->
<!--                          type="button"-->
<!--                          class="tt btn btn-dark"-->
<!--                          data-bs-toggle="tooltip"-->
<!--                          data-bs-placement="right"-->
<!--                          title="Tooltip on right"-->
<!--                          @click="$refs.fileInput.click()"-->
<!--                      >Upload file-->
<!--                      </button>-->
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="close-changes-button" data-bs-dismiss="modal">Close</button>
                    <button @click="saveNewTeamToDataBase" type="button" class="save-changes-button">Save team</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import UserProfileStatisticsTable from "@/components/user/UserProfileStatisticsTable";
import UserContactInformationChangeModal from "@/components/user/UserContactInformationChangeModal";
import Footer from "@/components/common/Footer";


export default {
  name: 'userProfileRoute',
  components: {
    UserContactInformationChangeModal,
    UserProfileStatisticsTable,
    Footer
  },

  data() {
    return {
      userId: Number(sessionStorage.getItem('userId')),
      selectedCategory: 0,
      selectedTeamId: 0,

      ageCategoryResponse: {
        categoryCode: 0,
        categoryName: ''
      },

      teamRequest: {
        userId: Number(sessionStorage.getItem('userId')),
        teamName: '',
        teamCoachName: '',
        categoryCode: 0,
        teamLogo: ''
      },

      teamStatsResponse: {
        played: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalFor: 0,
        goalAgainst: 0
      },

      teamInfoResponse: {
        teamName: '',
        teamCoachName: '',
        categoryCode: 0,
        teamLogo: '',
      },
      formTeamName: '',
      formCoachName: '',
      formCategoryCode: 0,
      formTeamLogo: '',

      userContactInfoResponse: {
        firstName: '',
        lastName: '',
        dateOfBirth: ''
      },
      formFirstName: '',
      formLastName: '',
      formDateOfBirth: ''
    }
  },
  methods: {
    setPicture(picture) {
      this.teamRequest.teamLogo = picture;
    },
    handleImage(event) {
      const selectedImage = event.target.files[0];
      this.createBase64Image(selectedImage);
      console.log("File Name:", selectedImage.name);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = () => {
        this.pictureDataBase64 = reader.result;
        console.log("Base64 Image:", this.pictureDataBase64);
        this.$emit('pictureInputSuccess', this.pictureDataBase64);
      };
      reader.onerror = function (error) {
        alert(error);
      }
      reader.readAsDataURL(fileObject);
    },
    navigateToTeamPage(teamId) {
      console.log("Navigating to team profile with teamId:", teamId);

      this.$router.push({
        name: 'teamProfileRoute',
        query: {
          teamId: teamId,
        }
      });
    },
    //Opens up team Edit Modal
    openTeamEditModal(teamId) {
      this.selectedTeamId = teamId;
      this.getTeamInformation(this.selectedTeamId)
      const selectedTeam = this.teamInfoResponse.find(team => team.teamId === teamId);
      this.formTeamName = selectedTeam.teamName;
      this.formCoachName = selectedTeam.teamCoachName;
      this.formCategoryCode = selectedTeam.categoryCode;
      this.formTeamLogo = selectedTeam.teamLogo;
      const modal = new bootstrap.Modal(document.getElementById('teamEditStaticBackDrop'));
      modal.show();
    },
//Update team information
    saveTeamChangesToDatabase() {
      if (
          this.formTeamName !== this.teamInfoResponse.teamName ||
          this.formCoachName !== this.teamInfoResponse.teamCoachName ||
          this.formTeamLogo !== this.teamInfoResponse.teamLogo ||
          this.formCategoryCode !== this.teamInfoResponse.categoryCode
      ) {
        const updatedTeam = {
          teamName: this.formTeamName,
          teamCoachName: this.formCoachName,
          categoryCode: this.formCategoryCode,
          teamLogo: this.formTeamLogo
        };
        this.$http.put(`/team/update/${this.selectedTeamId}`, updatedTeam)
            .then(response => {
              console.log('Changes saved to the database');
              this.getTeamInformation(this.userId);
              this.$refs.teamEditstaticBackDrop.classList.remove('show');
              const backdrop = document.querySelector('.moodal-backdrop');
              if (backdrop) {
                backdrop.remove();
              }
            })
            .catch(error => {
              console.error('Error while saving', error);
            });
      } else {
        console.log('No changes detected');
      }
    },

    updateSelectedCategory(categoryCode) {
      this.selectedCategory = categoryCode;
      this.filterTeamsByCategory(categoryCode);
    },

    filterTeamsByCategory(categoryCode) {
      this.$http.get("/team/category/filter", {
        params: {
          userId: this.userId,
          categoryCode: categoryCode
        }
      })
          .then(response => {
            this.teamInfoResponse = response.data.map(team => ({
              ...team,
              teamId: team.id,
            }));
            this.$router.push({name: 'userProfileRoute'});
            this.addSequenceNumbers();
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },

    getTeamStats(teamId) {
      this.$http.get("/team/stats", {
            params: {
              teamId: teamId,
            }
          }
      ).then(response => {
        this.teamStatsResponse = response.data;
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    getCategoryNameByCategoryCode() {
      this.$http.get("/team/age/category")
          .then(response => {
            this.ageCategoryResponse = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },

    getAgeCategories() {
      this.$http.get("/team/all/age/category")
          .then(response => {
            this.ageCategoryResponse = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },

    deleteTeam(teamId) {
      if (confirm('Are you sure you want to delete this Team?')) {
        this.$http
            .delete(`/team/delete?teamId=${teamId}`)
            .then(response => {
              console.log(`Team with ID ${teamId} deleted successfully`);
              this.getTeamInformation();
            })
            .catch(error => {
              console.error('Error deleting team:', error);
            });
      }
    },

    addSequenceNumbers: function () {
      let counter = 1;
      this.teamInfoResponse.forEach(value => {
        value.sequenceNumber = counter
        counter++
      });
    },

    getTeamInformation() {
      this.$http.get("/team/info", {
        params: {
          userId: this.userId,
        }
      })
          .then(response => {
            this.teamInfoResponse = response.data.map((team, index) => ({
              ...team,
              teamId: team.id,
              originalOrder: index,
            }));
            this.addSequenceNumbers();
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
    },
    saveNewTeamToDataBase() {
      const originalUserId = this.teamRequest.userId;
      this.$http.post("/team/register", this.teamRequest)
          .then(response => {
            console.log('Team registration successful:', response.data);
            console.log('TEAM REQUEST: ' + this.teamRequest)
            console.log('TEAM REQUEST PHOTO DATA: ' + this.teamRequest.teamLogo)
            const {id: teamId} = response.data;
            sessionStorage.setItem("teamId", teamId);
            this.teamRequest.userId = originalUserId;
            this.resetForm();
            this.getTeamInformation();
            this.addSequenceNumbers();
            $('#staticBackdrop').modal('hide');
            this.$router.push({name: "userProfileRoute"});
          })
          .catch(error => {
            console.log(error);
          });
    },

    resetForm() {
      this.teamRequest = {
        teamName: '',
        teamCoachName: '',
        categoryCode: 0,
        teamLogo: ''
      }
    },

    openNewTeamRegistrationModal(userId) {
      this.userId = userId;
    },

    openEditProfileModal(userId) {
      this.userId = userId;
      this.getUserContactInfoByUserId(userId);
    },


    //Update user contact information
    saveChangesToDataBase() {
      if (
          this.formFirstName !== this.userContactInfoResponse.firstName ||
          this.formLastName !== this.userContactInfoResponse.lastName ||
          this.formDateOfBirth !== this.userContactInfoResponse.dateOfBirth
      ) {
        const updatedContact = {
          firstName: this.formFirstName,
          lastName: this.formLastName,
          dateOfBirth: this.formDateOfBirth
        };

        this.$http.put(`/user/update/${this.userId}`, updatedContact)
            .then(response => {
              console.log('Changes saved to the database');
              this.getUserContactInfoByUserId();
              this.$refs.exampleModal.classList.remove('show');
              const backdrop = document.querySelector('.modal-backdrop');
              if (backdrop) {
                backdrop.remove();
              }
            })
            .catch(error => {
              console.error('Error while saving', error);
            });
      } else {
        console.log('No changes detected');
      }
    },
    //Calucalte the age from date of birth
    calculateAge(dateOfBirth) {
      const dob = new Date(dateOfBirth);
      const now = new Date();
      let age = now.getFullYear() - dob.getFullYear();
      const monthDiff = now.getMonth() - dob.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
        age--;
      }
      return age;
    },
    //Get the user contact information by userId
    getUserContactInfoByUserId() {
      this.$http.get("/user/contact", {
        params: {
          userId: this.userId,
        }
      })
          .then(response => {
            this.userContactInfoResponse = response.data;
            this.formFirstName = this.userContactInfoResponse.firstName;
            this.formLastName = this.userContactInfoResponse.lastName;
            this.formDateOfBirth = this.userContactInfoResponse.dateOfBirth;
          })
          .catch(error => {
            console.error(error);
          });
    },
  },

  beforeMount() {
    this.getUserContactInfoByUserId()
    this.getCategoryNameByCategoryCode()
  },
  mounted() {
    this.getAgeCategories()
    this.getTeamInformation()
  },


}
</script>
<style>
.offcanvas-button {
  width: 200px;
}

.offcanvas-header {
  background-color: #1d2127;
  color: #FFFFFF;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
}

.offcanvas-body {
  background-color: #1d2127;
  color: #FFFFFF;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
}

.table {
  background-color: black;
}

.amount-of-players {
  border-radius: 5px; /* Adjust the radius as needed */
  background-color: #181818;
  color: rgb(255, 255, 255);
  width: 250px;
  height: 40px;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
}

.modal-body {
  background-color: #1d2127 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  width: 300px;
  border-radius: 20px;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 22px;
}

.dropdown-item {
  cursor: pointer;
}

.add-team-icon {
  height: 40px;
  width: 40px;
  color: #FFFFFF;
  margin-right: 30px;
  margin-top: 30px;
  cursor: pointer;
}

.team-menu-icon {
  height: 30px;
  width: 40px;
  color: #FFFFFF;
  margin-left: 30px;
  margin-top: 30px;
  cursor: pointer;
}

.user-profile-font {
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 30px;
}

.dropdown {
  position: relative;
  text-decoration: none;
  color: #FFFFFF;
}

.dropdown-toggle::after {
  content: '\f078'; /* FontAwesome chevron-down icon */
  font-family: 'Font Awesome 5 Free', serif;
  font-weight: 900;
  color: #fff;
  margin-left: 5px; /* Adjust spacing */
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: transparent; /* Set background color to transparent */
  border: none; /* Remove border */
  top: 100%;
  left: 0;
  min-width: 10rem;
  z-index: 1000;
}

.dropdown-menu a {
  color: black; /* Change link color */
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: block;
}

.dropdown-menu a:hover {
  background-color: rgba(255, 255, 255, 0.34); /* Change hover background color */
}

.back {
  background-color: black;
  background-image: linear-gradient(to right, black, #1D2127);
  border-bottom-left-radius: 10px;
}

.back2 {
  background-color: black;
  background-image: linear-gradient(to left, black, #1D2127);
  border-bottom-right-radius: 10px;
}

.profile-logo {
  border-radius: 20px;
}

.profile-default-image {
  width: 150px; /* Adjust this value based on your desired width */
  height: auto; /* This will maintain the aspect ratio */
}

.profile-default-image-corner {
  margin-top: 35px;
}

.row .profile-default-info {
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  width: fit-content;
  margin-top: 20px;
}

.font-color {
  font-style: inherit;
}

.profile-background {
  /*background-image: url('../assets/images/UserProfileBackground.jpg');*/
  background-color: black;
  background-size: cover;
  min-height: 100vh;
  height: available;
  width: auto;
}

.col-sm {
  color: #FFFFFF;
}

.row {
  color: #FFFFFF;
}

.row .profile-box-1 {
  background-color: #1D2127; /* White color with opacity */
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 250px;
  width: available;
  border-radius: 20px;
  background-position: left;
  background-size: 700px;
  height: 400px;
  background-repeat: no-repeat;
}

.row .profile-box-2 {
  background-color: #1D2127; /* White color with opacity */
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 250px;
  width: available;
  border-radius: 20px;
  background-position: left;
  background-size: 700px;
  height: 400px;
  background-repeat: no-repeat;
}

.row .profile-box-3 {
  background-color: #1D2127; /* White color with opacity */
  margin: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
  width: available;
  border-radius: 20px;
  background-position: left;
  background-size: 700px;
  background-repeat: no-repeat;
}


.save-changes-button {
  border-radius: 10px;
  background-color: #20B2AA;
  background-image: linear-gradient(to left, mediumspringgreen, #20B2AA);
  color: #FFFFFF;
  height: 40px;
  width: 120px;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
  margin-left: 10px;
}

.close-changes-button {
  border-radius: 10px;
  background-color: #31363d;
  color: #FFFFFF;
  height: 40px;
  width: 120px;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
  margin-left: 10px;
}

.dropdown-menu a {
  color: black; /* Change link color */
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: block;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
}

.rounded-input2 {
  border-radius: 5px; /* Adjust the radius as needed */
  background-color: #181818;
  color: #FFFFFF;
  width: 250px;
  height: 40px;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
}

.dropdown-menu a:hover {
  background-color: rgba(49, 54, 61, 0.8); /* Change hover background color */
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
}

.modal-title {
  color: whitesmoke;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 45px;
}

.modal-content {
  background-color: #1d2127 !important; /* White color with opacity */
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  margin-top: 200px;
  width: 400px;
  border-radius: 20px; /* Rounded corners */
}


</style>


