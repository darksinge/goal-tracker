<template>
  <div class="container">
    <ul v-if="goals.length">
      Goals:
      <li v-for="goal in goals" :key="goal.id">
        <nuxt-link :to="`/goals/${goal.id}`">{{ goal.title }}</nuxt-link>
      </li>
    </ul>
    <div v-else>
      <p class="text-center">You don't have any goals. Go get one!</p>
      <div style="display: flex; justify-content: center;">
        <nuxt-link class="btn btn-primary" to="/goals/create"
          >Create New Goal</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    goals() {
      return this.$store.state.goals
    }
  }
}
</script>
