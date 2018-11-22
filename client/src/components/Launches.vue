<template>
  <div class="container">
    <div class="row">
      <div class="card border-primary col-lg-12" 
          :key="launch.flight_number" 
          v-for="launch in launches.data.Launches"
        >
        <h4 class="card-header">Mission Name: {{ launch.mission_name }}</h4>
        <div class="card-body">
          <div class="card-text text-left">
            <p><span class="header">Flight Number: </span><span>{{ launch.flight_number }}</span></p> 
            <p><span class="header">Details: </span><span>{{ launch.details }}</span></p> 
            <p><span class="header">Launch Date: </span><span>{{ launch.launch_date_local | moment("dddd, MMMM Do YYYY") }}</span></p>
            <p><span class="header">Launch Success: </span>
              <span v-if="launch.launch_success"><span class="success">Success</span></span>
              <span v-if="!launch.launch_success"><span class="failed">Failed</span></span>
            </p>
            
          </div>
           <div class="card-text text-right">
            <button type="button" class="btn btn-primary"> <router-link to="/about" class="routerLink">Launch Details</router-link></button>
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
      launches: {}
    };
  },
  mounted() {
    try {
      axios
        .post("http://localhost:4000/graphql", {
          query: `{
            Launches {
              flight_number
              mission_name
              launch_year
              launch_date_local
              launch_success
              details
            }
          }`
        })
        .then(res => (this.launches = res.data));
    } catch (error) {
      this.launches = error;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin: 5px;
}
.card-text {
  font-size: 1.1rem;
  font-weight: 500;
}

.header {
  font-size: 1.3rem;
}

.success {
  color: green;
}

.failed {
  color: red;
}

.routerLink {
  display: block;
  color: rgb(244, 248, 248);
  font-size: 18px;
  font-weight: 400;
}
</style>
