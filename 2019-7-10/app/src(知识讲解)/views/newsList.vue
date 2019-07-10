<template>
    <div>
        <p v-for="val in arr">{{val}}{{$route.params.id}}</p>
        <router-link to="/" tag="button">去首页</router-link>
    </div>
</template>

<script>
//// $route.params.id
export default {
    //组件一定是复用的情况下才会进beforeRouteUpdate
    beforeRouteUpdate(to,from,next){
        let obj = {
            ['arr'+1]:[1,2,3,4],
            ['arr'+2]:[5,6,6,7]
        }
        this.arr = obj['arr'+to.params.id];
        next();

        
        // console.log(this.$route.params.id);
    },

    beforeRouteLeave (to, from, next) {
        if(to.path === '/'){
            if(true){
                next();
            }else{
                alert('不好意思,你可以权限')
            }
        }
        console.log(to);
    },

    created(){
        let obj = {
            ['arr'+1]:[1,2,3,4],
            ['arr'+2]:[5,6,6,7]
        }
        this.arr = obj['arr'+this.$route.params.id];
    },
    // watch:{
    //     $route(){
    //         let obj = {
    //             ['arr'+1]:[1,2,3,4],
    //             ['arr'+2]:[5,6,6,7]
    //         }
    //         this.arr = obj['arr'+this.$route.params.id];
    //     }
    // },
    data(){
        return {
            // ['arr'+1]:[1,2,3,4],
            // ['arr'+2]:[5,6,6,7]
            arr:[]
        }
    }
}
</script>

<style scoped>

</style>