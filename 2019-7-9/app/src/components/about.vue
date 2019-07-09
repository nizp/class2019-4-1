<template>
    <div>
        <div>about</div>
        <router-link to="/about/1" tag="button">去1</router-link>
        <router-link to="/about/2" tag="button">去2</router-link>
        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>