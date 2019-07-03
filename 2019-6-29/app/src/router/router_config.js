import Home from '../component/home';
import About from '../component/about';
import List from '../component/list';
import One from '../component/one';
import AA from '../component/AA';

const routes = [
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/list',
        component:List,
        children:[
            {
                path:'/list/one',
                component:One,
                children:[
                    {
                        path:'/list/one/aa',
                        component:AA
                    }
                ]
            }
        ]
    }

];

export default routes;