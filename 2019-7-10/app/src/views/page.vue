<template>
    <div>

    </div>
</template>

<script>
export default {
    created(){
        fetch('/api/'+this.$route.query.id+'clickfrom=channel2018_news_index_newslist&ver=c').
        then(e=>e.text()).
        then(d=>{
            console.log(d);
        })
    }
}
</script>

<style scoped>

</style>