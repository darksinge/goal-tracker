<template>
  <div>
    <div class="text-center">
      <h1>AIM</h1>
      <p class="lead">WHAT? HOW? WHO?</p>
    </div>

    <h2 class="text-center">Questions to Help You Focus Your AIM</h2>
    <p class="lead">
      Write your answers in the spaces provided. Find solutions to each question
      <strong>BEFORE</strong> moving on to the next question.
    </p>
    <ol>
      <li>
        <div class="form-group">
          <label id="id-aim-q-1"
            >What tangible items do you need in order to achieve your goal? If
            necessary, what do you need to have or purchase?</label
          >
          <textarea id="id-aim-q-1" class="form-control"></textarea>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    aim: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
