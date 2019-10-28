<template>
  <div>
    <div class="text-center">
      <h1>Your Goal</h1>
    </div>
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
        aria-describedby="deadline-help"
      />
      <small id="deadline-help" class="form-text text-muted"
        >Try picking a date within the next 90 days.</small
      >
    </div>
  </div>
</template>

<script>
import Goal from '@/models/goal'

export default {
  props: {
    goal: Goal
  }
}
</script>
