<template>
    <div>
        <mu-carousel>
            <mu-carousel-item>
                <img :src="carouselImg1">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg2">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg3">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg4">
            </mu-carousel-item>
        </mu-carousel>
    </div>
</template>

<script>
import carouselImg1 from '../assets/img/1.jpg';
import carouselImg2 from '../assets/img/2.jpg';
import carouselImg3 from '../assets/img/3.jpg';
import carouselImg4 from '../assets/img/4.jpg';
export default {
  data () {
    return {
      carouselImg1,
      carouselImg2,
      carouselImg3,
      carouselImg4
    }
  }
};
</script>
</script>

<style scoped>
.mu-carousel{
  height:200px;
}
</style>