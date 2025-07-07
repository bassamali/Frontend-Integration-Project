<template>
  <div class="container mt-5">
    <!-- Header -->
    <div class="text-center mb-5 p-5 rounded shadow text-white header-gradient">
      <h1 class="display-4 fw-bold">📦 Welcome to JSON API</h1>
      <p class="lead">
        Vue.js integration with real API data using
        <a href="https://jsonplaceholder.typicode.com/" target="_blank" class="text-white text-decoration-underline">
          JSONPlaceholder
        </a>.
      </p>
      <p class="text-light small">Below is the summary of available resources:</p>
    </div>

    <!-- Resource Cards -->
    <div class="row">
      <div
        class="col-md-6 col-lg-4 mb-4"
        v-for="(resource, key) in resources"
        :key="key"
      >
        <div class="p-4 rounded shadow-sm bg-white h-100 border-start border-5" :class="resource.color">
          <div class="mb-2 d-flex align-items-center">
            <i :class="resource.icon" class="fs-2 me-2"></i>
            <h5 class="fw-semibold mb-0">{{ resource.title }}</h5>
          </div>
          <p class="text-muted mb-1">{{ resource.count }} items</p>
          <p class="small text-muted">{{ resource.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      resources: {
        posts: {
          title: 'Posts',
          icon: 'bi bi-file-earmark-text',
          description: 'Blog posts with titles, content, and user associations',
          count: 0,
          link: 'https://jsonplaceholder.typicode.com/posts',
          color: 'border-primary'
        },
        comments: {
          title: 'Comments',
          icon: 'bi bi-chat-dots',
          description: 'User comments linked to specific posts',
          count: 0,
          link: 'https://jsonplaceholder.typicode.com/comments',
          color: 'border-success'
        },
        albums: {
          title: 'Albums',
          icon: 'bi bi-collection',
          description: 'Photo albums grouped by user',
          count: 0,
          link: 'https://jsonplaceholder.typicode.com/albums',
          color: 'border-warning'
        },
        photos: {
          title: 'Photos',
          icon: 'bi bi-image',
          description: 'Images tied to each album',
          count: 0,
          link: 'https://jsonplaceholder.typicode.com/photos',
          color: 'border-danger'
        },
        todos: {
          title: 'Todos',
          icon: 'bi bi-check2-square',
          description: 'User to-do list with completion status',
          count: 0,
          link: 'https://jsonplaceholder.typicode.com/todos',
          color: 'border-info'
        },
        users: {
          title: 'Users',
          icon: 'bi bi-person-circle',
          description: 'Basic information for each user',
          count: 0,
          link: 'https://jsonplaceholder.typicode.com/users',
          color: 'border-dark'
        }
      }
    };
  },
  mounted() {
    for (const key in this.resources) {
      axios.get(`https://jsonplaceholder.typicode.com/${key}`)
        .then(res => {
          this.resources[key].count = res.data.length;
        })
        .catch(err => console.error(`Failed to fetch ${key}`, err));
    }
  }
});
</script>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.header-gradient {
  background: linear-gradient(135deg, #000000, #434343); /* Black to silver gradient */
}
</style>
