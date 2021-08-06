import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urls: []
  },
  getters: {

  },
  mutations: {
    saveUrls(state, urls) {
      state.urls = urls;
    }
  },
  actions: {
    saveUrls({commit}, urls) {
      commit('saveUrls', urls);
    }
  }
})