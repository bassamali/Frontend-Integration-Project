<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0">Photos</h2>
      <small class="text-muted">{{ photos.length }} photos found</small>
    </div>

    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status"></div>
    </div>

    <div v-else class="row row-cols-2 row-cols-md-4 g-3">
      <div class="col" v-for="photo in photos" :key="photo.id">
        <div class="card h-100">
          <img :src="photo.thumbnailUrl" class="card-img-top" :alt="photo.title" />
          <div class="card-body">
            <p class="card-text">{{ photo.title }}</p>
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
      photos: [],
      loading: true,
    };
  },
  mounted() {
    //axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        this.photos = res.data;
        this.loading = false;
      });
  },
};
</script>
