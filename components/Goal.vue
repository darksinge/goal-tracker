<template>
  <div>
    <ul>
      <strong>{{ goal.title }}</strong>
      <li>Purpose: {{ goal.purpose }}</li>
      <li>Deadline: {{ goal.deadline }}</li>
      <li>Goal: {{ goal.text }}</li>
    </ul>
  </div>
</template>

<script>
import { Goal } from '@/models'

export default {
  name: 'Goal',
  props: {
    goal: Goal
  }
}
</script>
