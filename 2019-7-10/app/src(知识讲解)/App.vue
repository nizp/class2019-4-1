<template>
  <div id="app">
    <div id="nav">
     
      <!-- <router-link to="/news">news</router-link> -->
    </div>
    <router-view/>
    <router-view name="left" style="float:left;width:100px;height:500px;background:#000"/>
    <router-view name="right" style="float:right;width:300px"/>
    
  </div>
</template>

<style>
*{
    list-style:none;
    padding:0;
    margin:0;
}
</style>
