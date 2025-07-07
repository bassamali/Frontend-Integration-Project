<template>
  <div class="container mt-4">
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0">Posts</h2>
      <small class="text-muted">{{ posts.length }} posts found</small>
    </div>

    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status"></div>
      <p>Loading posts...</p>
    </div>

    <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div class="col" v-for="post in posts" :key="post.id">
        <div class="card h-100">
          <div class="card-body text-center">
            <div class="avatar-circle mx-auto mb-2">
              U{{ post.userId }}
            </div>
            <h6 class="mb-0">User {{ post.userId }}</h6>
            <small class="text-muted mb-3 d-block">Post #{{ post.id }}</small>
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
          </div>
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
      posts: [],
      loading: true,
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        this.posts = res.data;
        this.loading = false;
    });
  },
};
</script>
<style scoped>
.avatar-circle {
  width: 40px;
  height: 40px;
  background-color: #6c757d;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
}
</style>