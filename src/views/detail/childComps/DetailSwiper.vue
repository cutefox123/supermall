<template>
  <swiper class="detail-swiper">
    <SwiperItem v-for="item in images">
        <img :src="item">
    </SwiperItem>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/swiper"
export default {
  name: "DetailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props: ['images'],
}
</script>

<style scoped>
.detail-swiper{
  height: 300px;
  overflow: hidden;
}
</style>
