<template>
  <div>
    <button 
      @click="actionAdd"
    >{{num}}</button>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex';

export default {
    computed: {
      ...mapState(['num'])
    },
    methods:{
      ...mapMutations(['add']),
      ...mapActions(['actionAdd'])
    }
}
</script>

<style scoped>

</style>