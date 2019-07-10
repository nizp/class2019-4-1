<template>
    <div class="nav">
        <ul>
            <router-link to="/" tag="li">Home</router-link>
            <router-link to="/about" tag="li">About</router-link>
            <router-link tag="li" :to="{name:'news',query:{a:1}}">news</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

ul{
    width:100px;
}
.nav{
    height:30px;
    line-height: 30px;
    text-align: center;
    color:#fff;
}
</style>