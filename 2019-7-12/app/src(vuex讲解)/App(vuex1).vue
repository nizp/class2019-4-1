<template>
  <div id="app">
    <!-- <button 
      @click="$store.commit('increment',5)"
    >{{$store.state.num}}</button> -->
    <!-- <button 
      @click="$store.commit('increment')"
    >{{$store.getters.todbl}}</button> -->
    <!-- <button 
      @click="$store.commit('increment')"
    >{{todbl}}</button> -->
    <button 
      @click="increment"
    >{{todbl}}</button>
    <div>{{str}}!!!</div>
    <!-- <div>{{ss}}</div>
    <div>{{njn}}</div> -->
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations } from 'vuex'

export default {
  name: 'app',
  created(){
    console.log(this.$store.state.num);
  },
  data(){
    return {
      
    }
  },
  methods:{
    ...mapMutations(['increment'])
  },
  computed:{
    ...mapGetters(['todbl']),
    ...mapState(['str','num']),
    todou(){
      // console.log(this.num);
      return this.num<10?'0'+this.num:''+this.num;
    }
    // todou(){
    //   return this.num<10?'0'+this.num:''+this.num;
    // }
  }

  // computed:mapState({
  //   // nn:state => state.num,
  //   nn:'num',
  //   ss:'str',
  //   njn(state){
  //     return state.num + this.num;
  //   }
  // })
}


</script>


