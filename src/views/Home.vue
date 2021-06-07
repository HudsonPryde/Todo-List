<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col sm="4" rowspan="2">
        </b-col>
        <b-col>
          <div id="list-header">
            <h1 id="list-title">To Do</h1>
            <NewTaskForm />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-container id="todo-list-container">
          <b-row>
            <b-col sm="4">
            </b-col>
            <b-col>
              <TodoList :tasks="getAllTasks"/>
            </b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '../components/TodoList'
import NewTaskForm from '../components/NewTaskForm'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data: () => {
    return {}
  },
  components: {
    TodoList,
    NewTaskForm
  },
  computed: {
    ...mapGetters([
      'getAllTasks'
    ])
  },
  methods: {}
}
</script>

<style scoped>
  #list-header {
  background-image: linear-gradient(90deg, rgba(201, 86, 236, 0.979), rgb(78, 136, 223));
  height: 200px;
  color: rgb(243, 236, 222);
  }

  #list-title {
    position: fixed;
    text-align: left;
    padding-left: 20px;
    margin-top: 120px;
    font-size: 65px;
  }
</style>
