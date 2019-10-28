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
        <li :class="['nav-item', $route.path === '/goals' ? 'active' : '']">
          <nuxt-link class="nav-link" to="/goals">
            Goals
            <span class="sr-only">(current)</span>
          </nuxt-link>
        </li>
        <li :class="['nav-item', $route.path === '/editor' ? 'active' : '']">
          <nuxt-link class="nav-link" to="/editor">
            Editor
            <span class="sr-only">(current)</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <form class="form-inline my-2 my-lg-0">
      <nuxt-link class="btn btn-success my-2 my-sm-0" to="/auth"
        >Login</nuxt-link
      >
    </form>
  </nav>
</template>

<script>
export default {
  //
}
</script>
