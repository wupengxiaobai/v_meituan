const state = {
  navbar: ['菜单', '关注']
}

const mutations = {
  add: (state, text) => {
    state.push(text)
  }
}

const actions = {
  add: ({
    commit
  }, text) => {
    commit(add, text)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
