import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

//  触发 state 数据改变
const mutations = {
  increment(state, params) {
    state.count += params
  },
  decrement(state, params) {
    state.count -= params
  }
}

//  触发 mutations 执行方法
const actions = {
  increment: ({
    commit
  }, params) => {
    commit('increment', params)
  },
  decrement: ({
    commit
  }, params) => {
    commit('decrement', params)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})