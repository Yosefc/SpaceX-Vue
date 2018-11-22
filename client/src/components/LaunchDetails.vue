<template>
  <div class="container">
    <div class="row">
      <div class="card border-primary col-lg-12" 
          :key="launch.flight_number" 
          v-for="launch in launchDetails.data"
        >
        <h4 class="card-header">Mission Name: {{ launch.mission_name }}</h4>
        <div class="card-body">
          <div class="card-text text-left">
            <!-- <p><span class="header">Flight Number: </span><span>{{ launch.flight_number }}</span></p>  -->
            <div>
              <img v-show="launch.links.mission_patch != null" class="mission_patch" :src="launch.links.mission_patch" alt="Mission Patch" height="150" width="150" align="right">
            </div>
            <p><span class="header">Details: </span><span>{{ launch.details }}</span></p> 
            <p><span class="header">Launch Date: </span><span>{{ launch.launch_date_local | moment("dddd, MMMM Do YYYY") }}</span></p>
            <p><span class="header">Launch Success: </span>
              <span v-if="launch.launch_success"><span class="success">Successful</span></span>
              <span v-if="!launch.launch_success"><span class="failed">Failed</span></span>
            </p>
            <hr style="background-color: white;">
            <div class="text-center"><p><span class="header">Rocket Details </span></p></div>
            <p><span class="header">Rocket Id: </span><span>{{ launch.rocket.rocket_id }}</span></p>
            <p><span class="header">Rocket Type: </span><span>{{ launch.rocket.rocket_type }}</span></p>
            <p v-show="launch.links.wikipedia != null"><a :href="launch.links.wikipedia" class="header" target="_blank">Read More</a></p>  
          </div>
          <div class="text-right">
            <router-link to="/" class="routerLink"><button type="button" class="btn btn-primary">Back</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      launchDetails: {}
    };
  },
  mounted() {
    try {
      axios
        .post("http://localhost:4000/graphql", {
          query: `{
          Launch(flight_number: ${this.$route.query.flight_number}) {
            flight_number
            mission_name
            launch_success
            launch_date_local
            details
            rocket {
              rocket_id
              rocket_type
            }
            links {
              mission_patch
              wikipedia
            }
          }
        }`
        })
        .then(res => (this.launchDetails = res.data));
    } catch (error) {
      this.launchDetails = error;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mission_patch {
  padding-bottom: 25px;
}
</style>
