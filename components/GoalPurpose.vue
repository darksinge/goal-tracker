<template>
  <div>
    <div class="text-center">
      <h1>Purpose</h1>
      <p class="lead">WHY?</p>
    </div>
    <h2 class="text-center">Questions to Help You Find Your Purpose</h2>
    <p class="lead">
      Answer these questions as honestly as possible. Take the necessary time to
      think through each one of them before moving on. This is extremely
      important.
    </p>
    <p><em>Think</em> about questions 1 and 2 without writing them down.</p>
    <ol>
      <li>Why do you want to achieve your Ultimate Goal?</li>
      <li>
        Why is that so important to you or why does THAT matter (in relation to
        your goal)?
      </li>
      <li>
        <div class="form-group">
          <label for="id-question-3">
            Why is your answer to question #2 important to you (in relation to
            your goal)?
          </label>
          <textarea id="id-question-3" class="form-control" rows="3"></textarea>
        </div>
        <p>
          Does this answer fell deep-rooted? Could it go deeper? Ask yourself
          "why" as many times as is needed.
        </p>
      </li>
      <li>
        <div class="form-group">
          <label for="id-question-4">
            Who (besides yourself) could potentially benefit from you reaching
            your goal?
          </label>
          <input id="id-question-4" class="form-control" type="text" />
        </div>
      </li>
      <li>
        <p>
          What are the 3 biggest sacrifices, or things you'll need to give up,
          to achieve your goal?
        </p>
        <ol>
          <li>
            <div class="form-group">
              <input id="id-q5-sacr-1" class="form-control" type="text" />
            </div>
          </li>
          <li>
            <div class="form-group">
              <input id="id-q5-sacr-2" class="form-control" type="text" />
            </div>
          </li>
          <li>
            <div class="form-group">
              <input id="id-q5-sacr-3" class="form-control" type="text" />
            </div>
          </li>
        </ol>
        <div class="form-group">
          <p>Are you willing to sacrifice these things?</p>
          <input
            id="willing-to-sacrifice-cb"
            class="form-check-input"
            type="checkbox"
          />
          <label class="form-check-label" for="willing-to-sacrifice-cb"
            >Yes</label
          >
        </div>
      </li>
      <li>
        <div class="form-group">
          <label for="id-question-6">
            Whether you work hard for you goal or give up halfway through, time
            will keep ticking. How can you prepare your mind now to help you
            through those hard times WHEN they come? What can you focus on when
            you don't want to push forward toward your goal?
          </label>
          <textarea id="id-question-6" class="form-control"></textarea>
        </div>
      </li>
      <li>
        <div class="form-group">
          <label for="id-question-7">
            What feelings can you imagine having if you were to accomplish your
            goal?
          </label>
          <textarea id="id-question-7" class="form-control"></textarea>
        </div>
      </li>
    </ol>
    <p>
      Considering the answers to all of the above questions, with as much detail
      as possible, write down your purpose for wanting to achieve your goal.
    </p>
    <div class="form-group">
      <label for="purpose">Purpose</label>
      <textarea
        id="purpose"
        v-model="purpose.text"
        class="form-control"
        placeholder="My purpose for wanting to achieve my goal is..."
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    purpose: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      //
    }
  }
}
</script>
