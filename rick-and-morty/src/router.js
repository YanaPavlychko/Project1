import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import CharacterPage from './pages/CharacterPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/character/:id',
    component: CharacterPage,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 