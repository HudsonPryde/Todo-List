<template>
    <div>
        <b-list-group flush>
            <b-list-group-item
            v-for="(task, index) in tasks"
            :key="index"
            >
                <Task :task="task" />
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import Task from './Task'
export default {
  name: 'Todo-list',
  components: {
    Task
  },
  props: {
    tasks: Array
  }
}
</script>

<style scoped>
    .list-group-item{
        padding: 1em;
    }
</style>
