<template>
  <div id="app">
    <h1>API Test</h1>   
    <p>{{ posts }}</p>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: [],
    };
  },

  created() {
    axios.get('/api/test')
      .then((response) => {
      // JSON responses are automatically parsed.
        this.posts = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
