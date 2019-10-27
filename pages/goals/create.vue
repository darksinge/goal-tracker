<template>
  <div class="container">
    <div class="text-center">
      <h1>Your Goal</h1>
    </div>
    <form>
      <div class="form-group">
        <label for="goal-title">Title</label>
        <input
          id="goal-title"
          v-model="goal.title"
          type="text"
          class="form-control"
          aria-describedby="titleHelp"
          placeholder="My Ultimate Goal!"
        />
      </div>
      <div class="form-group">
        <label for="goal-text">Description</label>
        <textarea
          id="goal-text"
          v-model="goal.text"
          class="form-control"
          placeholder="My goal is..."
          rows="3"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="deadline">Deadline</label>
        <input
          id="deadline"
          v-model="goal.deadline"
          type="date"
          class="form-control"
        />
      </div>
      <GoalPurpose :purpose="purpose" />
      <GoalAIM :aim="aim" />
      <button class="btn btn-primary" type="button" @click="saveGoal">
        Save
      </button>
    </form>
  </div>
</template>

<script>
import models from '@/models'
import GoalPurpose from '@/components/GoalPurpose'
import GoalAIM from '@/components/GoalAIM'

export default {
  components: {
    GoalPurpose,
    GoalAIM
  },
  data() {
    return {
      goal: new models.Goal(),
      purpose: {},
      aim: {}
    }
  },
  methods: {
    saveGoal() {
      this.$store.commit('goals/add', this.goal)
    }
  }
}
</script>
