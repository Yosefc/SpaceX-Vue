<template>
  <div id="loader" v-if="!getAllLaunches.data">
    <h5>{{ msg }}</h5>
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
  data() {
    return {
      msg: "Loading..."
    };
  },
  components: {
    Launch
  },
  computed: {
    getAllLaunches() {
      if (this.$store.state.launches.response)
        this.msg = "Oh snap! We weren't able to the retrieve data..";
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
