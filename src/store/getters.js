export default {
  getAllTasks: (state) => {
    return state.tasks
  },
  getAllGroups: (state) => {
    return state.groups
  },
  getTaskGroup: (state) => (group) => {
    return state.tasks.filter((task) => {
      return task.group === group
    })
  }
}
