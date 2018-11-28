import Vue from "vue";
import Vuex from "vuex";
import singleLaunchService from "./services/LaunchService";

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
    async fetchLaunches({ commit }) {
      try {
        commit("updateLaunches", await singleLaunchService.allLaunches());
      } catch (error) {
        commit("updateLaunches", error);
      }
    }
  }
});
