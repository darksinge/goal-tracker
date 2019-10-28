<template>
  <div class="container" style="margin-bottom: 48px">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <form>
          <GoalDescription :goal="goal" />
          <hr />
          <GoalPurpose :purpose="purpose" />
          <hr />
          <GoalAIM :aim="aim" />
          <button class="btn btn-primary" type="button" @click="saveGoal">
            Save
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import GoalDescription from '@/components/GoalDescription'
import models from '@/models'
import GoalPurpose from '@/components/GoalPurpose'
import GoalAIM from '@/components/GoalAIM'
import AIM from '@/models/aim'

export default {
  components: {
    GoalDescription,
    GoalPurpose,
    GoalAIM
  },
  data() {
    return {
      goal: new models.Goal(),
      purpose: {},
      aim: new AIM()
    }
  },
  methods: {
    saveGoal() {
      this.$store.commit('goals/add', this.goal)
    }
  }
}
</script>

<style>
ol li {
  list-style: decimal outside;
}
</style>
