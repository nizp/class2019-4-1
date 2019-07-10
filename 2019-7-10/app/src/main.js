import Vue from 'vue'
import App from './App.vue'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);
import router from './routers/index';

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
