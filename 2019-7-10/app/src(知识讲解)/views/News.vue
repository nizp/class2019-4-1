<template>
  <div>
    <div>news{{$route.query.a}}</div>
    <router-link to="/news/list/1">去list1页</router-link>
    <router-link to="/news/list/2">去list2页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name:'news'
}
</script>
