<template>
  <div style="margin-bottom: 48px;">
    <div class="text-center">
      <h1>AIM</h1>
      <p class="lead">WHAT? HOW? WHO?</p>
    </div>

    <h2 class="text-center">Questions to Help You Focus Your AIM</h2>
    <p class="lead">
      Write your answers in the spaces provided. Find solutions to each question
      <strong>BEFORE</strong> moving on to the next question.
    </p>

    <h3>
      Step 1
      <small class="text-muted">Discover what resources you need</small>
    </h3>

    <ol>
      <li>
        <div class="form-group">
          <label id="id-aim-q-1">
            What tangible items do you need in order to achieve your goal? If
            necessary, what do you need to have or purchase?
          </label>
          <textarea id="id-aim-q-1" class="form-control"></textarea>
        </div>
      </li>
      <li>
        <div class="form-group">
          <label id="id-aim-q2">
            Where will the majority of the work towards your goal take place? Is
            this accessible to you or do you need to research a location to
            accomplish this?
          </label>
          <textarea id="id-aim-q2" class="form-control"></textarea>
        </div>
      </li>
      <li>
        <div class="form-group">
          <label id="id-aim-q3"
            >What knowledge might you need in order to achieve your goal?</label
          >
          <textarea id="id-aim-q3" class="form-control"></textarea>
        </div>
      </li>
      <li>
        <div class="form-group">
          <label id="id-aim-q4">
            Who is very successful within the field of your goal? Where can you
            find them or how can you reach to them? What can you do to mimic
            them and their success?
          </label>
          <textarea id="id-aim-q4" class="form-control"></textarea>
        </div>
      </li>
      <li>
        <div class="form-group">
          <label id="id-aim-q5">
            Can you ask someone to help encourage you along the way? To increase
            the strength and accountability, write down someone that can cheer
            you on or even benefit from doing this goal with you.
          </label>
          <input id="id-aim-q5" class="form-control" type="text" />
        </div>
      </li>
    </ol>

    <h3>
      Step 2
      <small class="text-muted">Face your fears</small>
    </h3>

    <p class="lead">
      Now it's time to face
      <strong>your</strong> fears. Take time to think about, or research if
      necessary, any possible solutions to these fears. Be as HONEST as
      possible. It will only be a disservice to you and your goal if you hold
      anything back.
    </p>
    <p>
      In the context of this section,
      <strong>
        FEAR is anything that causes doubts, worries, anxieties, stresses, or
        fears </strong
      >.
    </p>
    <div class="fears-and-solutions">
      <div
        v-for="(fear, index) in aim.fears"
        :key="index"
        class="fear-sol-group"
      >
        <div class="form-group fearsol">
          <label :for="`id-fear-${index}`">Fear #{{ index + 1 }}</label>
          <textarea
            :id="`id-fear-${index}`"
            v-model="fear.fear"
            class="form-control"
          ></textarea>
        </div>
        <div class="form-group fearsol">
          <label :for="`id-sol-${index}`">Solution</label>
          <textarea
            :id="`id-sol-${index}`"
            v-model="fear.solution"
            class="form-control"
          ></textarea>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          @click="removeFearItem(index)"
        >
          x
        </button>
      </div>
      <button type="button" class="btn btn-primary" @click="addFearItem">
        Add Fear
      </button>
    </div>
    <span style="margin-bottom: 32px;"></span>
  </div>
</template>

<script>
import AIM from '@/models/aim'

export default {
  name: 'GoalAIM',
  props: {
    aim: {
      type: AIM,
      default: () => new AIM()
    }
  },
  methods: {
    addFearItem() {
      this.aim.addFear()
    },
    removeFearItem(idx) {
      if (this.aim.fears.length > 1) {
        this.aim.fears.splice(idx, 1)
      }
    }
  }
}
</script>

<style>
.fear-sol-group {
  display: flex;
  justify-content: space-evenly;
}

.fearsol {
  flex: auto;
  margin: 12px;
}

.fear-sol-group button {
  height: 32px;
  width: 32px;
  align-self: center;
}
</style>
