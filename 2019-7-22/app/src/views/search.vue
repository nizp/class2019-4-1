<template>
    <div class="search">
        <div class="nav">搜索</div>
        <div class="search_box">
            <input 
                placeholder="搜索的功能" 
                type="text" 
                class="search_txt"
                v-model="val"
            />
            <button class="search_btn"
                @touchend="searchFn"
            >搜索</button>
        </div>
        <ul class="search_list">
            <li v-for="val in list" v-show="val.keyword">{{val.keyword}}</li>
            <li 
                v-for="val in list" 
                v-show="val.filename"
                @touchend="addmusic(val.hash)"  
            >{{val.filename}}</li>
        </ul>
    </div>
</template>

<script>
import jsonp from 'fetch-jsonp';
import {mapActions } from 'vuex'
console.log(jsonp);
export default {
    data(){
        return {
            val:'',
            list:[]
        }
    },
   
    methods:{
        ...mapActions(['addmusic']),
        searchFn(){
            jsonp('http://mobilecdn.kugou.com/api/v3/search/song?format=jsonp&keyword='+ this.val +'&page=1&pagesize=30&showtype=1',{
                jsonpCallback:'callback'
            }).then(e=>e.json())
            .then(d=>{
                console.log(d);
                this.list = d.data.info
            })
            
        }
    },
    created(){
        jsonp('http://mobilecdn.kugou.com/api/v3/search/hot?format=jsonp&plat=0&count=30',{jsonpCallback:'callback'})
        .then(e=>e.json())
        .then(d=>{
            this.list = d.data.info;
            // console.log(d);
        })
    }
}
</script>

<style scoped lang="less">
.search{
    position:absolute;
    top:1.08rem;
    left:0;
    right:0;
    bottom:0;
    overflow:auto;

    .nav{
        height:.85rem;
        background:#fff;
        text-align:center;
        font-size:.3rem;
        line-height:.85rem;
    }

    .search_box{
        height:1.02rem;
        background:#fbfbfb;
        .search_txt{
            width:4.28rem;
            border-radius:.05rem;
            border:1px solid #eee;
            height:.54rem;
            margin: .25rem 0 0 1.5rem;
            padding-left: .5rem;
        }
        .search_btn{
            width:.94rem;
            height:.55rem;
            font-size:.3rem;
        }
    }

    .search_list{
        background:#fff;
        li{
            height:.94rem;
            border-bottom:1px solid #ccc;
            line-height:.94rem;
            font-size:.34rem;
            overflow:hidden;
        }
    }
} 

</style>