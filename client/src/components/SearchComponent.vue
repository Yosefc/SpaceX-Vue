<template>
<div class="container">
  <div class="input-group mb-3">
    <input 
      type="text" 
      class="form-control" 
      placeholder="Search Launches" 
      aria-label="Search Launches" 
      aria-describedby="basic-addon2"
      v-model="word"
      >
  </div>
  <div id="results" class="m" v-if="results && word">
    <div class="list-group" v-for="result in results" :key="result.flight_number">
      <h5 class="list-group-item list-group-item-action">
        <router-link id="mlist"
        :to="{ 
          path: 'mission_details', 
          query: { 
            flight_number: `${result.flight_number}` }}">
            {{ result.mission_name }}
        </router-link>
      </h5>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      word: "",
      results: ""
    };
  },
  watch: {
    word: function() {
      this.results = this.$store.state.launches.data.Launches.filter(launch =>
        launch.mission_name.toLowerCase().includes(this.word.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
input {
  height: 41px;
  font-size: 1.2rem;
}

.m {
  position: absolute;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 118px;
  left: 21%;
  right: 21%;
  padding: 0px;
}
</style>

