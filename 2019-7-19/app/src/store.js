import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    onoff:false,//播放器是否打开
    hash:'',
    playmusic:{},
    musicAry:[]
  },
  mutations: {
    addhash(state,payload){     
        state.hash = payload.hash; //改变hash
        state.onoff = true;
        state.playmusic = payload.playmusic;
        console.log(payload)
    },
    addMusicAry(state,ary){
      state.musicAry = ary;
      console.log( state.musicAry )
    }

  },
  actions: {
    addmusic(context,hash){
      // console.log(context)
      //如果hash值没变就不请求
      if(context.state.hash !== hash){
        fetch('/api/app/i/getSongInfo.php?cmd=playInfo&hash='+ hash)
        .then(e=>e.json())
        .then(d=>{
          // console.log(hash,d);
          context.commit('addhash',{
            hash,
            playmusic:d
          })
        })
      }
    }
  }
})
