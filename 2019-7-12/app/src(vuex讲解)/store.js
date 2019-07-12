import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const initstate = {
  num:0
};


const aa = {
  state:initstate,
  mutations:{
    add(state){
      state.num++;
    }
  },
  actions:{
    actionAdd(context){
      setTimeout(() => {
        context.commit('add');
      },2000)
    }
  }
}

const bb = {
  state:{
    ary:[1,2,3]
  }
}


export default new Vuex.Store({
  modules:{
    a:aa,
    b:bb
  }
});






// export default new Vuex.Store({
//   state:initstate,
//   mutations:{
//     add(state){
//       // console.log(state);
//       state.num++;
//       // setTimeout(() => {
//       //   state.num++;
//       // }, 2000);
//     }
//   },
//   actions:{
//     actionAdd(context){
//       setTimeout(() => {
//         context.commit('add');
//       },2000)
//     }
//   }
// });












// export default new Vuex.Store({
//   state: {
//     num:0,
//     str:'哈哈'
//   },
//   mutations: {
//     increment(state,n){
//       // console.log(n); //可以传参n
//       state.num ++;
//     }
//   },
//   getters:{
//     todbl(state){
//       return state.num<10?'0'+state.num:''+state.num;
//     }
//   },
//   actions: {

//   }
// })
