<template>
  <swiper>
    <SwiperItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
      </a>
    </SwiperItem>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper"
export default {
  name: "HomeSwiper",
  props:['banners'],
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>

</style>
