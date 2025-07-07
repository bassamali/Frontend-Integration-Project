<template>
  <div class="container mt-4">
    <!-- Header with count -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0">Comments</h2>
      <small class="text-muted">{{ comments.length }} comments found</small>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status"></div>
    </div>

    <!-- Comments List -->
    <div v-else>
      <div class="list-group">
        <div
          class="list-group-item list-group-item-action flex-column align-items-start"
          v-for="comment in comments"
          :key="comment.id"
        >
          <h5 class="mb-1">{{ comment.name }}</h5>
          <p class="mb-1">{{ comment.body }}</p>
          <small class="text-muted">By: {{ comment.email }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      comments: [],
      loading: true,
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
        this.comments = res.data.slice(0, 500);
        this.loading = false;
      });
  },
};
</script>
