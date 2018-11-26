<template>
  <div id="loader" v-if="!launches.data">
    <h5>Loading.....</h5>
  </div>
  <div v-else class="container">
    <div class="row">
        <Launch 
        class="card border-primary col-lg-12" 
        :key="launch.flight_number" 
        v-for="launch in launches.data.Launches"
        :launch="launch"></Launch>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Launch from "./Launch.vue";

export default {
  components: {
    Launch
  },
  data() {
    return {
      launches: ""
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
#loader {
  padding-top: 50px;
}
</style>
