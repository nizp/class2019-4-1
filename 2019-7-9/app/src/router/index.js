import VueRouter from 'vue-router';

import Home from '../components/home.vue';
import About from '../components/about.vue';
import About1 from '../components/about1.vue';

const routes = [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/about',
        component:About,
        children:[
            {
                path:'/about/:id',
                component:About1
            }
        ]
    }
];

const router = new VueRouter({
    mode:"history",
    routes
});

export default router;
