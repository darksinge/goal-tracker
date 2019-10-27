import GoalModel from '../models/goal'

export const state = () => ({
  goals: {}
})

export const mutations = {
  add(state, goal) {
    goal = new GoalModel(goal)
    state.goals[goal.name] = goal
  },
  delete(state, goal) {
    state.list.splice(state.list.indexOf(goal), 1)
  },
  toggle(state, goal) {
    state.goals[goal.name].done = !goal.done
  }
}
