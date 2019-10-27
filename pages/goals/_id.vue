<template>
  <Goal :goal="goal" />
</template>

<script>
import Goal from '@/components/Goal'

export default {
  components: {
    Goal
  },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    goal() {
      return this.$store.state.goals[this.id]
    }
  }
}
</script>
