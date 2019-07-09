<template>
    <div>
        <!-- <div id="box" :style="{background:($route.params.id*1===1?'red':'green')}">{{$route.params.id}}</div> -->

        <div class="box1" v-if="$route.params.id*1===1"></div>
        <div class="box2" v-else-if="$route.params.id*1===2"></div>

    </div>
</template>

<script>

    /*
        {{num}}

        this.num ++
    */

    export default {
        data(){
            return {
                
            }
        },
        // updated() {
        //     console.log(this.$route.params.id)
        // },
    }
</script>

<style scoped>
/* #box{
    width:100px;
    height:100px;
    border:1px solid #000;
} */

.box1{
    width:100px;
    height:100px;
    border:1px solid #000;
}
.box2{
    width:400px;
    height:100px;
    border:1px solid green;
}
</style>