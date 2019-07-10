import News from '../../views/News.vue';
const aRouter = [
    {
        path:'/news',
        name:'news',
        component:News,
        children:[
            {
                path:'list/:id', // /news/list    千万不要写成/list 
                component:()=>(import('../../views/newsList.vue'))
            }
        ]
    }
];

export default aRouter;