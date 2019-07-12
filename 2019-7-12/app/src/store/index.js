import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutation';
import getters from './getters';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        ary:[
            {
                time:180,
                yj:128,
                xj:98,
                id:0,
                num:0,
                kc:10
            },
            {
                time:365,
                yj:228,
                xj:199,
                id:1,
                num:0,
                kc:5
            },
            {
                time:730,
                yj:428,
                xj:329,
                id:2,
                num:0,
                kc:9
            },
            {
                time:'终身',
                yj:888,
                xj:666,
                id:3,
                num:0,
                kc:12
            },
        ]
    },
    mutations,
    getters
});



