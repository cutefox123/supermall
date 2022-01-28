<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <scroll
    @scroll="contentScroll"
    ref="scroll"
    class="content"
    :probe-type="3"
    :pull-up-load="true"
    @pullingUp="loadMore"
  >
    <!--注意这里必须要加：不然传的是字符串而不是数字-->
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recommends="recommends"></recommend-view>
  <FeatureView></FeatureView>
  <tab-control class="tab-control" :titles="['流行','新款','精选']" @TabClick="TabClick"></tab-control>
  <goods-list :goods="goods[currentType].list"></goods-list>
  </scroll>
  <!--在我们需要监听一个组件的原生事件时，必须给对应的事件加上.native修饰符-->
  <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
</div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";
import TabControl from "@/components/tabControl/TabControl";
import GoodsList from "@/components/goods/GoodsList";
import {getHomeMultidata,getHomeGoods} from "@/network/home";
import Scroll from "@/components/scroll/Scroll";
import BackTop from "@/components/backTop/BackTop";
export default {
  name: "Home",
  components:{
    Scroll,
    FeatureView,
    HomeSwiper,
    NavBar,
    RecommendView,
    TabControl,
    GoodsList,
    BackTop
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isShowBackTop:false,
      arrartest:[0,1,2,3,4,5,6,7,8,9,10]
    }
  },
  methods:{
    //防抖函数的封装,返回值是一个函数
    debounce(func,delay){
      let timer = null;
      return function (...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
          func.apply(this,args);
        },delay);
      }
    },
    getHomeMultidata(){
      getHomeMultidata().then((res)=>{
        //注意，箭头函数里的this和一般函数不一样
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      //这里只是个局部变量用来传参，去请求分页数据
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then((res)=>{
        //...是ES6语法，是对数组的解构,然后再结合push自带的可变参数功能
        this.goods[type].list.push(...res.data.list);
        //这里才是真正增加页码
        this.goods[type].page += 1;
      })
    },
    TabClick(index){
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },
    backTopClick(){
      this.$refs.scroll.scrollWhere(0,0);
    },
    contentScroll(position){
      this.isShowBackTop = -position.y > 1000;
    },
    loadMore(){
      // console.log('hhhh');
      this.getHomeGoods(this.currentType);
      //必须要调用finish方法才能触发下一次pullUp
      this.$refs.scroll.finishPullUp();
      //强制重新计算可滚动区域高度
      this.$refs.scroll.scroll.refresh();
    }
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  }
}
</script>

<style scoped>
.home-nav{
  box-shadow: 0 2px 4px #d5465f;
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;/*防止遮挡*/
}
#home{
  padding-top: 44px;
}
.tab-control{
  position: sticky;
  top: 44px;
  z-index: 2;
}
.content{
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>
