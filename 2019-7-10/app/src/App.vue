<template>
  <div id="app">
    <div id="box">
      <NavBar />
      <Nav />
      <Carousel />
      <List />
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import NavBar from './views/navbar';
import Nav from './views/nav';
import Carousel from './views/carousel';
import List from './views/list';
export default {
  components:{
    NavBar,
    Nav,
    Carousel,
    List
  }
}
</script>
<style>
*{
    list-style:none;
    padding:0;
    margin:0;
}
</style>
