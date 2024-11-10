import { createRouter, createWebHistory } from 'vue-router';
import MainBody from '@/components/MainBody.vue';
import NorthSide from '@/components/Categories/NorthSide.vue';
import MidSide from '@/components/Categories/MidSide.vue';
import SouthSide from '@/components/Categories/SouthSide.vue';
import PostDetail from '@/components/PostDetail.vue';
import ArticleManagement from '@/components/ArticleManagement.vue';


const routes = [
    { path:'/', component: MainBody},
    { path: '/Categories/NorthSide', component: NorthSide},
    { path: '/Categories/MidSide', component: MidSide},
    { path: '/Categories/SouthSide', component: SouthSide},
    { path: '/PostDetail', component: PostDetail},
    { path: '/ArticleManagement', component: ArticleManagement}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;