<template>
  <div class="container mt-4">
    <!-- Header Row with count -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0">Users</h2>
      <small class="text-muted">{{ users.length }} users found</small>
    </div>

    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status"></div>
    </div>

    <div v-else class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="user in users" :key="user.id">
        <div class="card h-100">
          <div class="card-body">
            <!--circle avatar-->
            <div class="d-flex align-items-center mb-3">
              <div class="avatar-circle me-3">
                {{ user.name.charAt(0).toUpperCase() }}
              </div>
              <div>
                <h5 class="mb-0">{{ user.name }}</h5>
                <small class="text-muted">@{{ user.username }}</small>
              </div>
            </div>
            <p class="card-text"><strong>Email:</strong> {{ user.email }}</p>
            <p class="card-text"><strong>Company:</strong> {{ user.company.name }}</p>
            <p class="card-text"><strong>City:</strong> {{ user.address.city }}</p>
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
      users: [],
      loading: true,
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.users = res.data;
        this.loading = false;
      });
  },
};
</script>

<style scoped>
.avatar-circle {
  width: 40px;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>