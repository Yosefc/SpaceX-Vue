import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    launches: ""
  },
  mutations: {
    updateLaunches(state, data) {
      state.launches = data;
    }
  },
  actions: {
    fetchLaunches({ commit }) {
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
          .then(res => commit("updateLaunches", res.data));
      } catch (error) {
        commit("updateLaunches", error);
      }
    }
  }
});
