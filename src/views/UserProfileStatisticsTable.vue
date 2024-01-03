<template>
  <table class="table table-dark table-hover">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Played</th>
      <th scope="col">Won</th>
      <th scope="col">Lost</th>
      <th scope="col">Draw</th>
      <th scope="col">Goals for</th>
      <th scope="col">Goals against</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">#</th>
      <td>{{ teamStatsResponse.played }}</td>
      <td>{{ teamStatsResponse.won }}</td>
      <td>{{ teamStatsResponse.lost }}</td>
      <td>{{ teamStatsResponse.draw }}</td>
      <td>{{ teamStatsResponse.goalFor }}</td>
      <td>{{ teamStatsResponse.goalAgainst }}</td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'UserProfileStatisticsTable',
  components: {
  },
  props: {
    teamStatsResponse: {}
  },

  data() {
    return {

    }
  },
  methods: {

  }
 }
</script>
<style>
.table {
  background-color: black;
  background-image: linear-gradient(to left, black, gray);
  width: available;
}

.dropdown-menu a {
  color: black; /* Change link color */
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: block;
}

.dropdown-menu a:hover {
  background-color: rgba(255, 255, 255, 0.14); /* Change hover background color */
}

.table {
  border-radius: 20px;
  overflow: hidden;
}

/*.headline-button2 {*/
/*  border-radius: 20px;*/
/*  background-color: #20B2AA;*/
/*  background-image: linear-gradient(to left, mediumspringgreen, #20B2AA);*/
/*  color: #FFFFFF;*/
/*  min-height: 40px;*/
/*  min-width: 80px;*/
/*  margin-bottom: 20px;*/
/*}*/

/*.top-right-user-name {*/
/*  padding: 5px;*/
/*}*/

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


</style>