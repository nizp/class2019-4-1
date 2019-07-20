<template>
  <div id="rank">
    <ul>
      <router-link :to="{path:'/rank_list',query:{rankid:val.rankid}}" tag="li" v-for="(val,key) in list">>
      <!-- <li v-for="(val,key) in list"> -->
        <div class="rank_l">
          <img :src="val.imgurl?val.imgurl.replace('{size}','400'):''"/>
          <div>{{val.rankname}}</div>
        </div>
        <div class="rank_r"></div>
      <!-- </li> -->
      </router-link>
    </ul>
  </div>
</template>

<script>
import {rankFn} from '../fn_api/fn_api.js';
export default {
  data(){
    return {
      list:[]
    }
  },
  created(){
    rankFn('/rank/list&json=true').then(d=>{
      this.list = d;
      console.log(d);
    });
  }
}
</script>

<style scoped lang="less">
#rank {
    position: absolute;
    top: 2.08rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
  li{
    height:1.95rem;
    border-bottom:1px solid #eee;
    padding:.22rem;
    .rank_l{
      float:left;
      width:4.74rem;
      div{
        float:left;
        font-size: .33rem;
        font-weight:bold; 
        line-height: 1.7rem;
        text-indent: 1em;
      }
    }
    .rank_r{
      float:right;
      width:.58rem;
      height:100%;
      background:url('../images/arrow_icon.png') center center no-repeat;
    }
    img{
      width:1.72rem;
      height:1.72rem;
      float:left;
    }
  }
}
</style>

