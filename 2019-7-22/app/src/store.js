import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    onoff:false,//播放器是否打开
    hash:'',
    playmusic:{},
    musicAry:[],
    isautoplay:false,
    navView:true
  },
  mutations: {
    addhash(state,payload){     
        state.hash = payload.hash; //改变hash
        state.onoff = true;
        state.playmusic = payload.playmusic;
        //只要数据发生了变化（换了一首歌，就让播放按钮打开）
        state.isautoplay = true;
        console.log(payload)
    },
    pausePlay(state){
      state.isautoplay = !state.isautoplay;
    },
    addMusicAry(state,ary){
      state.musicAry = ary;
      console.log( state.musicAry )
    },
    navViewonOff(state,b){
      state.navView = b;
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
