<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-show="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-show="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="ActiveStyle" :class="{active:isActive}">
    <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props:{
    path:String,
    ActiveColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {
      // isActive: true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1;
    },
    ActiveStyle(){
      return this.isActive ? {color:this.ActiveColor}:{};
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path);
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;/*去掉图片下间隙*/
  margin-bottom: 2px;
}
.tab-bar-item .active{
  color: #fd5771;
}
</style>
