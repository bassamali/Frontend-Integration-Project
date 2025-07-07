<template>
  <div class="container mt-4">
    <!-- Albums Heading with Count -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0">Albums</h2>
      <small class="text-muted">{{ albums.length }} albums found</small>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status"></div>
    </div>

    <!-- Albums Grid -->
    <div v-else class="row row-cols-1 row-cols-md-3 g-3">
      <div class="col" v-for="album in albums" :key="album.id">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">#{{ album.id }} - {{ album.title }}</h5>
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
      albums: [],
      loading: true,
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(res => {
        this.albums = res.data;
        this.loading = false;
      });
  },
};
</script>
