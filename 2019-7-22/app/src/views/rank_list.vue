<template>
        <main id="rank_list">
            <section >
                <div class="rank_list_pic">
                    <img 
                        :src="data.info?data.info.imgurl.replace('{size}','400'):''"
                        class="rank_pic"/>
                    <div class="sj_bg">
                        <img 
                            src="../images/goback_icon.png" 
                            class="sj" 
                            @touchend="$router.go(-1)"
                        />
                        <h5>{{data.info.rankname}}</h5>
                    </div>
                    <div class="time">{{data.info.update_frequency}}</div>
                </div>
                <div class="list">
                    <ul>
                        <li 
                            v-for="(val,key) in data.songs.list"
                            @touchend="addmusic(val.hash)"
                        >
                            <span :class="key|cname">{{key+1}}</span>
                            <p>
                                {{val.filename}}
                            </p>
                            <img src="../images/upload.png" />
                        </li>
                    </ul>
                </div>
            </section>
        </main>
</template>

<script>
import {get} from '../fn_api/fn_api.js';
import {mapActions,mapMutations} from 'vuex';
export default {
    created() {
        get('/rank/info/&json=true?rankid='+this.$route.query.rankid)
        .then(d=>{
            this.data = d;
            this.addMusicAry(d.songs.list)
        })
    },
    methods:{
        ...mapActions(['addmusic']),
        ...mapMutations(['addMusicAry'])
    },
    data(){
        return{
            data:{
                info:'',
                songs:''
            }
        }
    },
    filters:{
        cname(val){
            switch (val) {
                case 0:  
                    return 'one';
                case 1:  
                    return 'two';
                case 2:  
                    return 'three';
                default:
                        return '';
            }
        }
    }
}
</script>
<style scoped lang="less">
#rank_list{
    position:absolute;
    top:2.08rem;
    left:0;
    right:0;
    bottom:0;
    overflow:auto;
}
.rank_pic{
    position:absolute;
    left:0;
    z-index:1;
    width:100%;
    top:-1rem;
}
.rank_list_pic{
    position:relative;
    height:3.98rem;
    overflow:hidden;
    .time{
        position:absolute;
        bottom:0;
        left:0;
        z-index:2;
        height:.8rem;
        background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.6));
        font-size:.28rem;
        color:#fff;
        padding:.14rem 0 0 .3rem;
        width:100%;
    }
}
.sj_bg{
    position:absolute;
    top:0;
    left:0;
    z-index:2;
    height:.94rem;
    background: linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,0));
    .sj{
        width:0.3rem;
        float:left;
        margin:.15rem;
    }
    h5{
        width:6.9rem;
        line-height:.94rem;
        float:right;
        font-size:.34rem;
        text-align: center;
        text-indent: -1rem;
        color:#fff;
    }
}

.list {
    li{
        position:relative;
    }
    p{
        margin-left: 0.9rem;
    }
    span{
        padding: 0 0.2rem 0 0.2rem;
        height: .5rem;
        border-radius: 0.5rem;
        position: absolute;
        top: 46%;
        left: 2%;
        margin-top: -.2rem;
        text-align: center;
        font-size: 0.3rem;
        color: #999;
        display: inline-block;
    }
    span.one{
        background: #e80000;
        color: #fff;
    }
    span.two{
        background: #ff7200;
        color: #fff;
    }
    span.three{
        background: #f8b300;
        color: #fff;
    }
}

</style>
