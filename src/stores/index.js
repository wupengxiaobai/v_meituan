import Vue from 'vue'
import Vuex from 'vuex'

import vuexA from './modules/a'
import vuexB from './modules/b'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    vuexA,
    vuexB
  }
})