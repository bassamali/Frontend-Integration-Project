<template>
  <div class="container mt-5 text-center">
    <form class="bg-primary text-white p-4 rounded shadow mb-5">
    <h1 class="display-4 mb-3">Welcome to JSON API</h1>
    <p class="lead">
      Vue.js integration with real API data using 
      <a href="https://jsonplaceholder.typicode.com/" target="_blank" class="text-white text-decoration-underline">JSONPlaceholder</a>.
    </p>
    <hr class="my-4 border-white" />
    <!-- <p>Select any resource from the navigation bar above to view and explore the data.</p> -->
     <p class="mb-0">Below is the summary of available resources:</p>
    </form>
    
     <div class="row justify-content-center mt-3">
      <div class="col-md-3 mb-3" v-for="(count, key) in counts" :key="key">
        <div class="card shadow-sm rounded text-center p-3 h-100">
      <div class="resource-icon mb-2">
        <i :class="getIcon(key)"></i>
      </div>
      <h5 class="text-capitalize">{{ key }}</h5>
      <p class="display-6">{{ count }}</p>
    </div>
      </div>
    </div>
  </div>
  <!-- <div class="home">
    <h1>{{ greeting }}</h1>
    
    <button @click="goToUsers" class="btn">{{ buttonText }}</button>
  </div> -->
</template>

<script>
import { defineComponent } from 'vue'
import { ROUTES } from '../constants/routes.js'
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
  
})
</script>

<style scoped>
a {
  color: #007bff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.card-title {
  font-size: 1.25rem;
}
.resource-icon i {
  font-size: 2.5rem;
  color: #0d6efd;
}
.card {
  border-radius: 1rem;
}
</style> 