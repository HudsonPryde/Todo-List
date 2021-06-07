export default {
  addTask: ({ commit }, payload) => {
    commit('appendTask', payload)
  },
  addGroup: ({ commit }, payload) => {
    commit('appendGroup', payload)
  }
}
