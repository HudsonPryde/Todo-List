export default {
  appendTask: (state, task) => {
    state.tasks.push(task)
  },
  appendGroup: (state, group) => {
    state.groups.push(group)
  }
}
