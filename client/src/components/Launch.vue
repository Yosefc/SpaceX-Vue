<template>
    <div>
        <h4 class="card-header">Mission Name: {{ launch.mission_name }}</h4>
        <div class="card-body">
          <div class="card-text text-left">
            <p><span class="header">Flight Number: </span><span>{{ launch.flight_number }}</span></p> 
            <p><span class="header">Details: </span><span>{{ launch.details }}</span></p> 
            <p><span class="header">Launch Date: </span><span>{{ launch.launch_date_local | moment("dddd, MMMM Do YYYY") }}</span></p>
            <p><span class="header">Launch Success: </span>
              <span :class="[launch.launch_success ? successClass : failureClass]">
                {{launchSuccess}}
              </span>
            </p>
          </div>
          <div class="card-text text-right">
            <router-link 
              :to="{ 
                path: 'mission_details', 
                query: { 
                  flight_number: `${launch.flight_number}` 
                  }
                }" 
              class="routerLink">
              <button type="button" class="btn btn-primary">Launch Details</button>
            </router-link>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      successClass: {
        success: "success"
      },
      failureClass: {
        failed: "failed"
      }
    };
  },
  props: {
    launch: {}
  },
  computed: {
    launchSuccess() {
      return this.launch.launch_success ? "Successful" : "Failed";
    }
  }
};
</script>

<style>
</style>
