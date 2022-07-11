import Vue from 'vue'
import Vuex from 'vuex'

import citycinemabransh from './branch/citycinemabransh'
import nowplayingbransh from './branch/nowplayingbransh'

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
  },
 
  actions: {
  },
 
  mutations: {
  },
  modules: {
    citycinemabransh,
    nowplayingbransh
  }
})
