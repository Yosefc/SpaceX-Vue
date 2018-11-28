<template>
  <div class="container">
    <div id="loader" v-if="!launchDetails.data">
      <h5>{{ msg }}</h5>
    </div>
    <div class="row">
      <div class="card border-primary col-lg-12" 
          :key="launch.flight_number" 
          v-for="launch in launchDetails.data"
        >
        <h4 class="card-header">Mission Name: {{ launch.mission_name }}</h4>
        <div class="card-body">
          <div class="card-text text-left">
            <div>
              <img v-show="launch.links.mission_patch != null" class="mission_patch" :src="launch.links.mission_patch" alt="Mission Patch" width="150" height="150" align="right">
            </div>
            <p><span class="header">Details: </span><span>{{ launch.details }}</span></p> 
            <p><span class="header">Launch Date: </span><span>{{ launch.launch_date_local | moment("dddd, MMMM Do YYYY") }}</span></p>
            <p>
              <span class="header">Launch Success: </span>
              <span :class="[launch.launch_success ? successClass : failureClass]">
                <span v-if="launch.launch_success">
                  Successful
                </span>
                <span v-else>
                  Failed
                </span>
              </span>
            </p>
            <hr>
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
import singleLaunchService from "../services/LaunchService";

export default {
  data() {
    return {
      launchDetails: "",
      successClass: {
        success: "success"
      },
      failureClass: {
        failed: "failed"
      },
      msg: "Loading.."
    };
  },
  async created() {
    try {
      this.launchDetails = await singleLaunchService.singleLaunch(this.$route.query.flight_number);
    } catch (error) {
      this.msg = "Oh snap! We weren't able to the retrieve data..";
    }
  }
};
</script>

<style scoped>
hr {
  background-color: white;
}

.mission_patch {
  padding-bottom: 25px;
}

#loader {
  padding-top: 50px;
}

@media only screen and (max-width: 750px) {
  .mission_patch {
    width: 100px;
    height: 100px;
  }
}
</style>
