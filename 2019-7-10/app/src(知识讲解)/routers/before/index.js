import Home from '../../views/Home.vue';
import About from '../../views/About.vue';
import Left from '../../views/left.vue';
const bRouter = [
    {
        path:'/',
        // component:Home
        components:{
            left:Left,
            right:Home
        }
    },
    {
        path:'/about',
        redirect:'/about/user',
        // component:()=>(import('../../views/About.vue'))
        components:{
            left:Left,
            right:()=>(import('../../views/About.vue'))
        },
        children:[
            {
                path:'/about/user',
                component:()=>(import('../../views/user.vue'))
            },
            {
                path:'/about/all',
                component:()=>(import('../../views/all.vue'))
            }
        ]
    },
    {
        path:'*',
        component:()=>(import('../../views/404.vue'))
    }
];

export default bRouter;