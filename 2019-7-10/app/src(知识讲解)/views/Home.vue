<template>
  <div class="home">
    <button @click="fn">去news页</button>
    Home
  </div>
</template>

<script>

export default {
  name: 'home',
  created(){
    // console.log(this.$route);
    // console.log(this.$router);
   
  },
  methods:{
    fn(){
      // console.log(this.$router);
      this.$router.push('/news');
    }
  }
}
</script>
