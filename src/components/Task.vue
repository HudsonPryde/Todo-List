<template>
    <b-container>
        <b-row>
            <b-col @click="toggleCompleted" id='task-check' sm="1"><b-icon id="checkIcon" :icon="taskIcon" scale="2.5" /></b-col>
            <b-col sm="10" id='task-item' :class="completed ? 'completed' : ''">
                <h5>{{ task.description }}</h5>
                <small>{{ task.group }}</small>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
  name: 'Task',
  data: () => {
    return {
      taskIcon: 'check',
      completed: false
    }
  },
  methods: {
    toggleCompleted () {
      this.completed = !this.completed
      if (this.completed) {
        this.taskIcon = 'check-circle'
      } else {
        this.taskIcon = 'check'
      }
    }
  },
  props: {
    task: Object
  }
}
</script>

<style>
#task-item{
    text-align: left;
}

#checkIcon{
    vertical-align: -0.85em;
}

#task-check:hover{
    cursor: pointer;
}

.completed{
    text-decoration: line-through;
}
</style>
