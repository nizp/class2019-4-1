import Vue from 'vue'
import App from './app.vue'
import router from './router/index';
import VueRouter from 'vue-router';
Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
