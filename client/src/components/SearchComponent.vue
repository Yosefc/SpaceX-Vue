<template>
<div class="container containerMaxHeight">
  <div class="mb-3">
    <input 
      type="text" 
      class="form-control" 
      placeholder="Search Launches" 
      aria-label="Search Launches" 
      aria-describedby="basic-addon2"
      v-model="word"
    >
    <div v-if="word && results" class="resultsList">
      <result
      v-for="result in results"
      :key="result.flight_number"
      :result="result"
      v-on:click.native="emptySearchResults"
      ></result>
    </div>
  </div>
</div>
</template>

<script>
import Result from "./SearchResults";

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
  },
  components: {
    Result
  }
};
</script>

<style scoped>
input {
  height: 41px;
  font-size: 1.2rem;
}

.containerMaxHeight {
  max-height: 41px;
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
