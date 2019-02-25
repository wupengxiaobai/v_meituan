const state = {
  count: 0
}

const mutations = {
  increment: (state) => {
    state.count++
  },
  decrement: (state) => {
    state.count--
  }
}

const actions = {
  increment: ({
    commit
  }) => {
    commit('increment')
  },
  decrement: ({
    commit
  }) => {
    commit('decrement')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}