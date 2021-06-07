<template>
  <div style="height: 90%; width: 50%">
    <!-- toggle for popover form -->
    <b-button
      id="newTask-popover"
      variant="success"
      ref="button"
      @click="showForm"
      @show="onShow"
      >
      + New Task
      </b-button>

    <!-- popover form -->
    <b-popover
      target="newTask-popover"
      triggers="click"
      :show.sync="showForm"
      placement="auto"
      container="todo-list-container"
      ref="popover"
    >
      <div>
        <b-form-group
          label="Description"
          label-for="popover-input-1"
          label-cols="6"
          class="mb-1"
          description="Enter something to do"
          invalid-feedback="This field is required"
        >
          <b-form-input
            ref="input1"
            id="popover-input-1"
            v-model="formData.description"
            size="sm"
            @update="checkForm"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Group"
          label-for="popover-input-2"
          label-cols="6"
          class="mb-1"
          description="Add this task to one of your groups"
        >
          <b-form-select
            id="popover-input-2"
            v-model="formData.groupChoice"
            :options="getAllGroups"
            size="sm"
            @change="checkForm"
          ></b-form-select>
          <br>
        </b-form-group>
        <b-container>
            <b-row>
                <b-col cols="2"></b-col>
                <b-col><b-button variant="primary" id="submit-btn" @click="onSubmit" :disabled="!submitReady">Add Task</b-button></b-col>
                <b-col cols="2"></b-col>
            </b-row>
          </b-container>
      </div>
    </b-popover>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'NewTaskForm',
  data: () => {
    return {
      formData: {
        description: '',
        groupChoice: 'Tasks'
      },
      showForm: false,
      submitReady: false
    }
  },
  methods: {
    onSubmit () {
      this.addTask(this.formData)
    },
    toggleForm () {
      this.showForm = !this.showForm
    },
    onShow () {},
    ...mapActions([
      'addTask'
    ]),
    checkForm () {
      if ((this.formData.description !== '') && (this.formData.groupChoice !== '')) {
        this.submitReady = true
      } else {
        this.submitReady = false
      }
    }
  },
  computed: {
    ...mapGetters([
      'getAllGroups'
    ])
  }
}
</script>

<style scoped>
  #newTask-popover{
    position: fixed;
    margin-top: 150px;
    margin-left: 500px;
    background-color: rgb(93, 190, 93);
  }

  #submit-btn{
    font-size: 14px;
  }
</style>
