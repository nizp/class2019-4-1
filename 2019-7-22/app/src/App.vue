<template>
  <div id="app">
        <header>
            <h1>
                酷狗音乐
                <img src="./images/logo.png" alt="酷狗音乐">
            </h1>
            <router-link to="/search" class="search" tag="div">
                <img src="./images/search.png" alt="">
            </router-link>
            <!-- <div >
                
            </div>          -->
        </header>
        <nav v-show="$store.state.navView">
            <ul class="nav">
                <li class="active">
                   <router-link to="/">新歌</router-link>
                    <!-- <a href="javascript:;">
                        
                    </a> -->
                </li>
                <li>
                    <!-- <a href="javascript:;">
                        排行
                    </a> -->
                    <router-link to="/rank">排行</router-link>
                </li>
                <li>
                    <!-- <a href="javascript:;">
                        歌单
                    </a> -->
                    <router-link to="/plist">歌单</router-link>
                </li>
                <li>
                  <router-link to="/singer">歌手</router-link>
                    <!-- <a href="javascript:;">
                        歌手
                    </a> -->
                </li>
            </ul>
        </nav>
        <Playboy />
        
    <router-view/>
  </div>
</template>


<script>
import './css/index.css';
import Playboy from './components/playboy.vue';



export default {
  name: 'app',
  components:{
      Playboy
  }
}
</script>
<style>

</style>
