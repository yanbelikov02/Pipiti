import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AudioParser from '@/views/AudioParser.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/parser', component: AudioParser }
];

const router = createRouter({
  history: createWebHistory('/Pipiti/'),
  routes,
});

export default router;