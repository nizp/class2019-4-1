<template>
    <div id="pb" :style="{bottom:onoff?0:'-2rem'}">
        <!-- <router-link to="/songing"> -->
            <div class="ft-left">
                <img 
                    @touchend="geci"
                    onerror="this.onerror=null;this.src='http://m.kugou.com/v3/static/images/index/logo_kugou.png';" 
                    alt="" 
                    class="js-ftImg" 
                    id="ftImg"
                    :src="playmusic.imgUrl?playmusic.imgUrl.replace('{size}','200'):''"
                >
            </div>
        <!-- </router-link> -->
        <div class="ft-center">
            <p class="ft-desc js-ftSongName" id="ftSongName">{{playmusic.songName}}</p>
            <p class="ft-sub-desc js-ftUserName" id="ftUserName">{{playmusic.singerName}}</p>
        </div>
        <div class="au">
            <img src="../images/play_prev.png" class="prev"/>
            <img 
                class="play_pause"
                v-show="isautoplay"
                src="../images/play_pause.png"
                @click="autoplayFn"    
            />
            <img 
                class="play_pause"
                v-show="!isautoplay"
                src="../images/play_play.png"
                @click="autoplayFn"    
            />
            <img 
                src="../images/play_next.png" 
                class="next"
                @click="next"
            />

            <audio 
                ref="au" 
                autoplay 
                :src="playmusic.url"
            />
        </div>
    </div>
</template>
<script>
import { mapState,mapActions,mapMutations} from 'vuex'
export default {
    name:"Pb",
    data(){
        return {
            // autoplay:true,
            num:0
        }
    },
    computed:{
        ...mapState(['hash','onoff','playmusic','isautoplay'])
    },
    methods:{
        ...mapActions(['addmusic']),
        ...mapMutations(['pausePlay']),
        autoplayFn(){
            let {au} = this.$refs;
            if(this.isautoplay){
                au.pause();//暂停
            }else{
                au.play();//开始
            }
            this.pausePlay();
            
            // if(this.autoplay){
            //     this.autoplay = false;
            //     au.pause();//暂停
            // }else{
            //     this.autoplay = true;
            //     au.play();//开始
            // }
        },
        next(){
            let {state:{musicAry}} = this.$store;
            // console.log(this.$store)
            this.num ++;
            if(this.num > musicAry.length-1){
                this.num = 0;
            }
            this.addmusic(musicAry[this.num].hash);
            this.isautoplay = true;
        },
        geci(){
            fetch('/api/app/i/krc.php?cmd=100&keyword=风语咒&hash=382656E087183CE4E605A7ED4B820419&timelength=246')
            .then(e=>e.text())
            .then(d=>{
                console.log(d);
            })
        }
    }   
}
</script>

<style lang="less">
.au{
    float: right;
    width:27%;
    // border: 1px solid #fff;
    height: 100%;
    margin: 0.5rem .8rem 0 0;
    display:flex;
    justify-content: space-around;
    img{
       height:1rem;
    }
}
.prev{
    width:40%;
}
.next{
    width:40%;
}
#pb{
    width: 100%;
    height:2rem;
    position: fixed;
    left: 0;
    bottom: -2rem;
    // bottom:0;
    background: rgba(0, 0, 0, 0.9);
    color: #fff;
    font-size: 0;
    z-index: 999;
    transition: .5s;
}
.ft-left{
    width: 1.75rem;
    height: 1.75rem;
    margin: 0.14rem 0.535rem 0.2143rem 0.2143rem;
    float: left;
    img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
}
.ft-center {
    width: 25%;
    float: left;
}
.ft-desc {
    width: 100%;
    line-height: 2.5;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .4rem;
    color: #fff;
}
.ft-sub-desc {
    line-height: .1rem;
    font-size: .25rem;
    color: #fff;
}
.play_pause{
    width: 50%;

    margin:0 .2rem;
}
</style>