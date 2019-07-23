<template>
  <section id="warp">
        <main class="body_box">
            <section class="body">
                <div class="banner">
                    <!-- <ul>
                        <li>
                            
                        </li>
                    </ul> -->
                    <Carousel autoplay v-model="value1" loop>
                        <CarouselItem v-for="(val,key) in banners">
                            <img :src="val.imgurl"/>
                        </CarouselItem>
                    </Carousel>

                </div>
                <div class="list">
                    <ul>
                        <li 
                            v-for="(val,key) in ary"
                            @click="addmusic(val.hash)"
                        >
                           <p>
                               {{val.filename}}
                           </p>
                            <img src="../images/upload.png" />
                        </li>
                    </ul>
                </div>
            </section>
        </main>
  </section>
</template>

<script>
import { Carousel, CarouselItem} from 'iview';
import { mapMutations,mapActions } from 'vuex'
/*

http://m.kugou.com/api/v1/song/get_song_info?cmd=playInfo&hash=F6D0FAADE23AE7B5398366D201464E52&from=mkugou&apiver=2&mid=85c5b5833160d6192cd9d27d0cbe7dc1&userid=0&platid=5&dfid=3yojs20EgAZj1OvOXT1zIOzL
*/
export default {
    name: 'home',
    data () {
        return {
            value1: 0,
            banners:[],
            ary:[]
        }
    },
   async created(){
        const data = await fetch('/api?json=true').then(e=>e.json())
        this.banners = data.banner;
        this.ary = data.data;
        this.addMusicAry(data.data);
        // console.log(this.addMusicAry)
    },
    components:{
        Carousel, CarouselItem
    },
    methods:{
        ...mapMutations(['addMusicAry']),
        ...mapActions(['addmusic'])
    }

}
</script>
