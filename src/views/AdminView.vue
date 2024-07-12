<!--Admin view-->
<template>
  <div class="admin-view-background" id="adminView">
    <UserProfileHeader/>

    <div class="admin-view-page-body">
      <div class="admin-view-page-left-nav"></div>
      <div class="admin-view-page-centre-nav">
        <div class="admin-view-nav-tabs">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="tournaments-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                      type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Tournaments
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="statistics-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                      type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Statistics
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="tournaments-tab"
                 tabindex="0">
              <div class="find-and-filter-bar">
                <div class="input-group">
                  <!--Find input to look for a tournament-->
                  <input type="text" class="find-tournament-input" placeholder="Find a tournament..." aria-label="Find a tournament"
                         aria-describedby="addon-wrapping">
                </div>
                <!--First filter dropdown of tournament Age category-->
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                    Type
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <!--Second filter dropdown of tournament to Filter by-->
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                    Sort
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <!--Add Tournament button-->
                <button type="button" class="btn btn-success">
                  <font-awesome-icon :icon="['fas', 'plus']"/>
                  New
                </button>
              </div>

              <div class="tournaments-list-body">
                <div class="tournament-info-box">

                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="statistics-tab"
                 tabindex="0">...
            </div>
          </div>
        </div>
      </div>
      <div class="admin-view-page-right-nav"></div>
    </div>
  </div>
</template>

<script>
import UserProfileHeader from "@/components/user/UserProfileHeader";

export default {
  name: 'adminRoute',
  components: {UserProfileHeader},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style>
.admin-view-background {
  background-color: #101720;
  background-position: center;
  background-size: cover;
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.admin-view-page-body {
  display: flex;
  flex: 1;
  overflow: hidden;
  border: 1px solid gray;
  margin-top: 100px;
}

.admin-view-page-left-nav,
.admin-view-page-right-nav {
  width: 2.5%;
  display: flex;
  height: auto;
  border: 1px solid gray;
}

.admin-view-page-centre-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  min-height: auto;
  border: 1px solid gray;
  padding: 0 40px;
}

.admin-view-nav-tabs {
  margin-top: 25px;
  width: 100%;
  font-size: 20px;
}

.find-and-filter-bar {
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  justify-content: center;
  /*border: 1px solid gray;*/
  width: 100%;
  height: 45px;
  box-sizing: border-box;
}

.find-tournament-input {
  flex: 1 1 200px;
  min-width: 150px;
  height: 40px;
  border: 1px solid gray;
  box-shadow: none;
  border-radius: 5px;
  background-color: #101720;
  color: white;
}


.dropdown .btn {
  flex: 1 1 auto;
  min-width: 120px;
  height: 40px;
  border-radius: 5px;
  background-color: #272e36;
}

.btn-success {
  flex: 1 1 auto;
  min-width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: #238636;
  font-size: 20px;
}

.tournaments-list-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  min-height: auto;
  width: 100%;
  /*border: 1px solid gray;*/
  margin-top: 40px;
  box-sizing: border-box;
}

.tournament-info-box {
  width: 100%;
  height: 100px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  cursor: pointer;
}

.tournament-info-box:hover {
  background-color: #333333;
  cursor: pointer;
}

@media (max-width: 768px) {
  .admin-view-page-left-nav,
  .admin-view-page-right-nav {
    display: none;
  }

  .admin-view-page-body {
    margin-top: 120px;
    flex-direction: column;
    align-items: center;
  }

  .find-and-filter-bar {
    flex-wrap: wrap;
    margin-top: 10px;
  }

  .find-tournament-input,
  .dropdown .btn,
  .btn-success {
    margin-top: 10px;
    min-width: 100px;
    flex: 1 1 100%;
  }

  .tournaments-list-body {
    margin-top: 150px;
  }
}
</style>
