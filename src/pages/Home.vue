<template>
  <div class="container mt-5 text-center">
    <!-- Header Section -->
    <form class="header-box text-white p-5 rounded shadow mb-5">
      <h1 class="display-4 mb-3 fw-bold">📦 Welcome to JSON API</h1>
      <p class="lead mb-2">
        Vue.js integration with real API data using
        <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSONPlaceholder</a>.
      </p>
      <p class="mb-0 small text-light">Below is the summary of available resources:</p>
    </form>

    <!-- Cards Section -->
    <div class="row justify-content-center mt-3">
      <div
        class="col-sm-6 col-md-4 col-lg-3 mb-4"
        v-for="(count, key) in counts"
        :key="key"
      >
        <div class="card resource-card text-center p-4 h-100 border-0 shadow-sm">
          <div class="resource-icon mb-3">
            <i :class="getIcon(key)"></i>
          </div>
          <h5 class="text-capitalize fw-semibold">{{ key }}</h5>
          <p class="display-6 fw-bold text-primary">{{ count }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'Home',
  data() {
    return {
      counts: {
        posts: 0,
        comments: 0,
        albums: 0,
        photos: 0,
        todos: 0,
        users: 0,
      }
    };
  },
  mounted() {
    const endpoints = Object.keys(this.counts);
    endpoints.forEach(async (endpoint) => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${endpoint}`);
        this.counts[endpoint] = response.data.length;
      } catch (err) {
        console.error(`Failed to fetch ${endpoint}`, err);
      }
    });
  },
  methods: {
    getIcon(resource) {
      const icons = {
        posts: 'bi bi-file-earmark-text',
        comments: 'bi bi-chat-dots',
        albums: 'bi bi-collection',
        photos: 'bi bi-image',
        todos: 'bi bi-check2-square',
        users: 'bi bi-person-circle',
      };
      return icons[resource] || 'bi bi-box';
    }
  }
});
</script>

<style scoped>
/* Gradient Header */
.header-box {
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  transition: box-shadow 0.3s ease;
}
.header-box:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Link Styling */
a {
  color: #ffe;
  font-weight: 500;
  text-decoration: underline;
}
a:hover {
  color: #fff;
}

/* Icon Styling */
.resource-icon i {
  font-size: 2.8rem;
  color: #0d6efd;
  transition: transform 0.3s ease, color 0.3s ease;
  text-shadow: 1px 1px 3px rgba(13, 110, 253, 0.4);
}
.resource-card:hover .resource-icon i {
  transform: scale(1.2);
  color: #6610f2;
}

/* Card Design */
.resource-card {
  border-radius: 1rem;
  background: #f8f9fa;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}
</style>
