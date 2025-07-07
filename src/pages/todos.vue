<template>
  <div class="container mt-4">
    <!-- Header Row with Title and Progress -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2 class="mb-0">Todos</h2>
      <div v-if="!loading" class="text-end">
        <strong>{{ completedCount }}/{{ todos.length }} Completed</strong>
        <div class="progress mt-1" style="height: 10px; width: 180px;">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            :style="{ width: completionPercent + '%' }"
            :aria-valuenow="completionPercent"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>

    <!-- Filter Dropdown -->
    <div class="d-flex justify-content-end mb-3">
      <select class="form-select w-auto" v-model="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>

    <!-- Loading Spinner -->
    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status"></div>
    </div>

    <!-- Todo List -->
    <div v-else>
      <ul class="list-group">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          v-for="todo in filteredTodos"
          :key="todo.id"
        >
          {{ todo.title }}
          <span
            class="badge"
            :class="todo.completed ? 'bg-success' : 'bg-warning text-dark'"
          >
            {{ todo.completed ? 'Done' : 'Pending' }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Todos',
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all' // Default filter
    };
  },
  computed: {
    completedCount() {
      return this.todos.filter(todo => todo.completed).length;
    },
    completionPercent() {
      return ((this.completedCount / this.todos.length) * 100).toFixed(0);
    },
    filteredTodos() {
      if (this.filter === 'completed') {
        return this.todos.filter(todo => todo.completed);
      } else if (this.filter === 'pending') {
        return this.todos.filter(todo => !todo.completed);
      }
      return this.todos;
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        this.todos = res.data;
        this.loading = false;
      });
  },
};
</script>
