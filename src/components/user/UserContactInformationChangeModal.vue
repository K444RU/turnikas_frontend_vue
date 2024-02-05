<template>
  <div class="modal fade" ref="exampleModal" id="exampleModal"
       tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">EDIT PROFILE</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <input v-model="formFirstName" type="text" class="rounded-input2" aria-label="First Name">
          </div>
          <div class="input-group mb-3">
            <input v-model="formLastName" type="text" class="rounded-input2" aria-label="Last Name">
          </div>
          <div class="input-group mb-3">
            <input
                v-model="formDateOfBirth"
                class="calendar2"
                type="date"
                id="birthday"
                name="birthday">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="close-changes-button" data-bs-dismiss="modal">Close</button>
          <button id="btnSave" @click="saveChangesToDataBase"
                  type="button"
                  class="save-changes-button">Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserContactInformationChangeModal',
  props: {
    formDateOfBirth: {},
    formFirstName: {},
    formLastName: {},
    userContactInfoResponse: {}
  },
  data(){
    return {
      userId: Number(sessionStorage.getItem('userId'))

    }
  },
  methods: {
    //Update user contact information
    saveChangesToDataBase() {
      console.log("form fristname: " + this.formFirstName)
      console.log("form fristname 2 : " + this.userContactInfoResponse.firstName)
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
              // this.getUserContactInfoByUserId();
              this.$emit('getUserContactInfoByUserId')
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
    }
  }
}
</script>
<style>

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

.dropdown-menu a {
  color: black; /* Change link color */
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: block;
}

.dropdown-menu a:hover {
  background-color: rgba(255, 255, 255, 0.34); /* Change hover background color */
}


.calendar2 {
  border-radius: 5px; /* Adjust the radius as needed */
  background-color: #181818;
  color: rgb(255, 255, 255);
  width: 250px;
  height: 40px;
  font-family: 'Bebas Neue', 'Open Sans', 'Permanent Marker', 'Smooch', sans-serif;
  font-size: 20px;
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