<template>
  <div class="editor">
    <textarea :value="input" @input="update"></textarea>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import marked from 'marked'
import _ from 'lodash'

export default {
  data() {
    return {
      input: '# hello'
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input)
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value
    }, 300)
  }
}
</script>

<style>
.editor {
  display: flex;
  flex-direction: row;
}

.editor div,
.editor textarea {
  flex: auto;
  margin: 5px;
}
textarea {
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
</style>
