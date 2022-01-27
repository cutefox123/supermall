<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  data(){
    return {
      scroll:null
    }
  },
  props:{
    //用对象形式的时候才能设置default值
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,//让content里的div的click事件有效
      probeType:this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    //监听滚动位置
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scroll',position);
    })
    //监听上拉事件
    this.scroll.on('pullingUp',()=>{
      // console.log('上拉加载更多');
      this.$emit('pullingUp');
    })

  },
  methods:{
    scrollWhere(x,y,time=500){
      this.scroll?.scrollTo(x,y,time);
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    }
  }
}
</script>

<!--scoped是限定作用域只在该组件-->
<style scoped>

</style>
