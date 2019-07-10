<template>
  <div>
    <input type="text"/>
  </div>
</template>

<script>

export default {
  //页面离开的时候
  beforeRouteLeave(to, from, next){
    let c = confirm('确定离开么?');
    if(c){
      next();
    }
  }
}
</script>
