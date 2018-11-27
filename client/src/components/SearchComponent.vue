<template>
<div class="container">
  <div class="mb-3">
    <input 
      type="text" 
      class="form-control" 
      placeholder="Search Launches" 
      aria-label="Search Launches" 
      aria-describedby="basic-addon2"
      v-model="word"
      >
        <div id="results" class="resultsList" v-if="results && word">
    <div class="list-group" v-for="result in results" :key="result.flight_number">
      <h5 class="list-group-item list-group-item-action">
        <router-link id="mlist"
        v-on:click.native="emptySearchResults"
        :to="{ 
          path: 'mission_details', 
          query: { 
            flight_number: `${result.flight_number}` }}"
            >
            {{ result.mission_name }}
        </router-link>
      </h5>
    </div>
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
  methods: {
    emptySearchResults: function() {
      this.word = "";
      this.results = "";
    }
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

.resultsList {
  height: 50px;
  line-height: 50px;
  font-size: 30px;
  padding-left: 10px;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 99;
  left: 21%;
  right: 21%;
}
</style>
