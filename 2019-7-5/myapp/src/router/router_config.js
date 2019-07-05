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
        component:App
    }
  
];

export default routes;