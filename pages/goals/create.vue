<template>
  <div class="container">
    <div>
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
      <div class="form-group">
        <GoalPurpose />
        <label for="purpose">Purpose</label>
        <textarea
          id="purpose"
          v-model="goal.purpose"
          class="form-control"
          placeholder="My purpose for wanting to achieve my goal is..."
        ></textarea>
      </div>
      <button class="btn btn-primary" type="button" @click="saveGoal">
        Save
      </button>
    </div>
  </div>
</template>

<script>
import models from '@/models'
import GoalPurpose from '@/components/GoalPurpose'

export default {
  components: {
    GoalPurpose
  },
  data() {
    return {
      goal: new models.Goal()
    }
  },
  methods: {
    saveGoal() {
      this.$store.commit('goals/add', this.goal)
    }
  }
}
</script>
