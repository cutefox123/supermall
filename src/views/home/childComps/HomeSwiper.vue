<template>
  <swiper>
    <SwiperItem v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" @load="imgLoad">
      </a>
    </SwiperItem>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/swiper"

export default {
  name: "HomeSwiper",
  props: ['banners'],
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      flag: false
    }
  },
  methods: {
    imgLoad() {
      if (!this.flag) {
        this.$emit('SwiperImgLoad');
        // console.log('----');
        this.flag = true;
      }
    }
  }
}
</script>

<style scoped>

</style>
