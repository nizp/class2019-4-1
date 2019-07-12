//引vue
//引vuex
//引组件

import Vue from 'vue';
import App from './views/index.vue';
import store from './store/index';


new Vue({
    store,
    render:h=>h(App)
}).$mount('#app')
