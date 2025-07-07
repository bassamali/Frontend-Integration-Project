<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a class="navbar-brand" href="#">API Explorer</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
          <li class="nav-item"><router-link to="/posts" class="nav-link">Posts</router-link></li>
          <li class="nav-item"><router-link to="/users" class="nav-link">Users</router-link></li>
          <li class="nav-item"><router-link to="/comments" class="nav-link">Comments</router-link></li>
          <li class="nav-item"><router-link to="/albums" class="nav-link">Albums</router-link></li>
          <li class="nav-item"><router-link to="/photos" class="nav-link">Photos</router-link></li>
          <li class="nav-item"><router-link to="/todos" class="nav-link">Todos</router-link></li>
        </ul>
      </div>
    </nav>

    <router-view />
  </div>
  <!-- <div id="app">
    <router-view />
  </div> -->
</template>

<script setup>
// No additional logic needed
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
</style>
