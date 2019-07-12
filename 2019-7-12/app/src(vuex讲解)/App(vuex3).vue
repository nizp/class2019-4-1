<template>
  <div>
    <button 
      @click=""
    >{{ary}}{{num}}</button>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex';

export default {
    computed: {
      ...mapState({
          ary:(state)=>state.b.ary,
          num:state=>state.a.num
        })
    },
}
</script>

<style scoped>

</style>