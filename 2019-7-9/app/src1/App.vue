<template>
  <div>
    <div>你好Vue</div>
    {{num}}
    <hr />
    <HD />
  </div>
</template>
<script>
import HD from './components/HelloWorld';
export default {
  name:"apps",
  data(){
    return {
      num:0
    }
  },
  components:{
    HD
  }
}
</script>