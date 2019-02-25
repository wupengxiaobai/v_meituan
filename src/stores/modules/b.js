const state = {
  count: 10
}

const mutations = {
  increment: (state) => {
    state.count+=2
  },
  decrement: (state) => {
    state.count-=2
  }
}

const actions = {
  increment: ({ commit }) => {
    commit('increment')
  },
  decrement: ({ commit }) => {
    commit('decrement')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}