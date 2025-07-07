import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import posts from '../pages/posts.vue';
import comments from '../pages/comments.vue';
import users from '../pages/users.vue';
import photos from '../pages/photos.vue';
import albums from '../pages/albums.vue';
import todos from '../pages/todos.vue';
import { ROUTES, ROUTE_NAMES } from '../constants/routes.js'

const routes = [
  {
    path: ROUTES.HOME,
    name: ROUTE_NAMES.HOME,
    component: Home
  },
  {
    path: ROUTES.POSTS,
    name: ROUTE_NAMES.POSTS,
    component: posts
  },
  {
    path: ROUTES.COMMENTS,
    name: ROUTE_NAMES.COMMENTS,
    component: comments
  },
  {
    path: ROUTES.PHOTOS,
    name: ROUTE_NAMES.PHOTOS,
    component: photos
  },
  {
    path: ROUTES.ALBUMS,
    name: ROUTE_NAMES.ALBUMS,
    component: albums
  },
  {
    path: ROUTES.TODOS,
    name: ROUTE_NAMES.TODOS,
    component: todos
  },
  {
    path: ROUTES.USERS,
    name: ROUTE_NAMES.USERS,
    component: users
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 