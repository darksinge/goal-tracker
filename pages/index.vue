<template>
  <div class="container">
    <div class="header">
      <h1 class="title">Goal Tracker</h1>
      <h2 class="subtitle">
        Goal tracking app based on the PACE Performance Strategy
      </h2>
      <div class="container">
        <nuxt-link class="btn btn-primary" to="/goals">Goals</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    //
  }
}
</script>

<style>
.header {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
