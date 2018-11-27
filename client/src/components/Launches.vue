<template>
  <div id="loader" v-if="!getAllLaunches.data">
    <h5>Loading...</h5>
  </div>
  <div v-else class="container">
    
    <div class="row">
        <Launch 
        class="card border-primary col-lg-12" 
        :key="launch.flight_number" 
        v-for="launch in getAllLaunches.data.Launches"
        :launch="launch"></Launch>
    </div>
  </div>
</template>

<script>
import Launch from "./Launch.vue";

export default {
  components: {
    Launch
  },
  computed: {
    getAllLaunches() {
      return this.$store.state.launches;
    }
  },
  mounted() {
    this.$store.dispatch("fetchLaunches");
  }
};
</script>

<style scoped>
#loader {
  padding-top: 50px;
}
</style>
