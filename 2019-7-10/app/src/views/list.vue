<template>
    <div>
        <mu-list textline="three-line">
            <mu-sub-header>今天</mu-sub-header>
            <mu-list-item 
                avatar 
                :ripple="false" 
                button v-for="(val,key) in arr"
                :key="key"
                :to="'/page?id='+val.docid"
            >
            <mu-list-item-action>
                <mu-avatar>
                <img :src="val.imgsrc">
                </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
                <mu-list-item-title>{{val.title}}</mu-list-item-title>
                <mu-list-item-sub-title>
                <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
                </mu-list-item-sub-title>
            </mu-list-item-content>
            </mu-list-item>
        <mu-divider></mu-divider>
    </mu-list>
    </div>
</template>

<script>
import jsonp from '../assets/jsonp.js';

console.log(jsonp)
export default {
    data(){
        return {
            arr:[]
        }
    },
    created(){
        let that = this;
        jsonp({
            url: 'https://3g.163.com/touch/reconstruct/article/list/BBM54PGAwangning/0-10.html',
            success(data){
                console.log(data.BBM54PGAwangning)
                that.arr = data.BBM54PGAwangning;
            }
        })
        // https://3g.163.com/touch/reconstruct/article/list/BBM54PGAwangning/0-10.html
    }

}
</script>

<style scoped>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
  overflow: hidden;
}
</style>