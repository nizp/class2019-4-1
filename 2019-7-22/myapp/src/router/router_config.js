import Login from '../login/index';
import App from '../app/index';

const routes = [
    {
        path:'/',
        component:Login,
        exact:true
    },
    {
        path:'/home',
        component:App,
        exact:true
    }
  
];

export default routes;