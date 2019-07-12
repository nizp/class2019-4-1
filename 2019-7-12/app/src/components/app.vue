<template>
    <div>
        <ul class="clearfix">
　　　　    <li><span>{{time}}</span>天会员卡</li>
    　　　　<li class="old-price" >原价:￥{{yj}}</li>
    　　　　<li class="now-price" data-val="1">现价¥{{xj}}</li>
    　　　　<li class="add-number clearfix">
    　　　　　　　<button class="minus"
                    @click="$store.commit('DELE',{id})"
                >-</button>
    　　　　　　  <input class="number-input" :value="num"/>
    　　　　　　  <button 
                    class="add"
                    @click="clickfn({id})"
                >+</button>
    　　　　</li>
    　　　　<li><span class="now-total-price">小计¥{{count}}</span><span > 库存:{{cknum}}</span></li>
    </ul>
    </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex';
export default {
    props:{
        time:[String,Number],
        yj:[Number],
        xj:[Number],
        num:[Number],
        id:[Number],
        kc:[Number]
    },
    methods: {
        ...mapMutations(['ADD']),
        clickfn(id){
            if(this.cknum > 0){
                this.$store.commit('ADD',id)
            }else{
                alert('你真有钱，不卖了')
            }
        }
    },
    computed: {
        count(){
            return this.num * this.xj;
        },
        cknum(){
            return this.kc - this.num;
        }
    },
}
</script>

<style scoped>

</style>