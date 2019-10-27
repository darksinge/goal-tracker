<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <nuxt-link class="navbar-brand" to="/">Goal Tracker</nuxt-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarNav" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <nuxt-link class="nav-link" to="/goals">
            Goals
            <span class="sr-only">(current)</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
