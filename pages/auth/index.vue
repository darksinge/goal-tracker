<template>
  <div class="container">
    <div class="row">
      <form class="col-md-6 offset-md-3">
        <div class="form-group">
          <label for="id-email">Username or Email Address</label>
          <input
            id="id-email"
            v-model="username"
            type="email"
            class="form-control"
            placeholder="Enter usernmae or email"
          />
        </div>
        <div class="form-group">
          <label for="id-password">Password</label>
          <input
            id="id-password"
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Password"
          />
        </div>
        <button type="button" class="btn btn-primary" @click="login">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log('Clicked login button')
    }
  }
}
</script>
