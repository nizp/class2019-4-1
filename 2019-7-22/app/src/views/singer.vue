<template>
  <div class="singer">
    <ul v-for="(val,key) in list">
      <li v-for="i in val">{{i.classname}}</li>
    </ul>
  </div>
</template>

<script>
import {get} from '../fn_api/fn_api.js';
export default {
  data(){
    return {
      list:{}
    }
  },
  created(){
    get('singer/class&json=true').then(d=>{
      // console.log(d);
      let obj = {};
      d.list.forEach(item=>{
        let str = item.classname.substr(0,2);
        obj[str] = obj[str] || [];
        obj[str].push(item);
      })
      this.list = obj;
      // console.log(obj);
    });
  }
}
</script>

<style scoped lang="less">
.singer{
  position:absolute;
  top:2.08rem;
  left:0;
  right:0;
  bottom:0;
  overflow:auto;
  padding:.27rem;
  ul{
    border-radius:.05rem;
    border:1px solid #e4e4e4;
    margin-top:.34rem;
    
    li{
      background:#fbfbfb;
      height:.64rem;
      padding-left:.25rem;
      font-size:.32rem;
      color:#333;
      line-height:.64rem;
      border-bottom:1px solid #e4e4e4;
    }
  }
}
</style>
