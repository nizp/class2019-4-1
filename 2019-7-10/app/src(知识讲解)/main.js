import Vue from 'vue'
import App from './App.vue'
import router from './routers/index';

Vue.config.productionTip = false
let loginoff = false;
router.beforeEach((to,from,next)=>{
  console.log(to);
  // debugger
  if(loginoff){
    next();
  }else{
    loginoff = true;
    router.history.push('/about/user');
    
  }
  next();
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
