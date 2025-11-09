import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PortfoliosView from '@/views/PortfoliosView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/About', component: AboutView },
    { path: '/Portfolios', component: PortfoliosView },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
});

export default router;