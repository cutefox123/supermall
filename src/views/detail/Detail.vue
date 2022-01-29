<template>
<div id="detail">
<detail-nav @titleClick="titleClick" ref="detailnav"></detail-nav>
  <!--必须传一个固定高度还有自己定义的参数-->
  <scroll
    class="content"
    :probe-type="3"
    :pull-up-load="false"
    @scroll="handleScrollContent"
    ref="scroll"
  >
    <DetailSwiper :images="topImages"></DetailSwiper>
    <detail-base-info :base-info="goodsInfo"></detail-base-info>
    <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
    <detail-goods-info @goodsInfoImgLoad="imgLoad" :goods-info="detailInfo"></detail-goods-info>
    <detail-param-info  ref="goodsParams" :param-info="paramInfo"></detail-param-info>
    <detail-comment-info ref="goodsComment" :comment-info="commentInfo"></detail-comment-info>
  </scroll>
  <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
  <!--在我们需要监听一个组件的原生事件时，必须给对应的事件加上.native修饰符-->
  <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top></div>
</template>

<script>
import DetailNav from "@/views/detail/childComps/DetailNav";
import {getDetail,GoodsInfo,ShopInfo,Goodsparam} from "@/network/detail";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import Scroll from "@/components/scroll/Scroll";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";
import BackTop from "@/components/backTop/BackTop";
export default {
  name: "Detail",
  components:{
    BackTop,
    DetailBottomBar,
    DetailCommentInfo,
    DetailParamInfo,
    DetailGoodsInfo,
    Scroll,
    DetailShopInfo,
    DetailBaseInfo,
    DetailNav,
    DetailSwiper
  },
  methods:{
    imgLoad() {
      // 需要在商品详情图片加载完成再获取各个部分的offsetTop
      this.themeTopYs.push(this.$refs.goodsParams.$el.offsetTop-50,this.$refs.goodsComment.$el.offsetTop - 50);
    },
    //处理内容滚动事件
    handleScrollContent(position){
      let positionY = -position.y;
      //backTop的展示
      this.isShowBackTop = -position.y > 1000;
      // console.log(this.themeTopYs);
      if(positionY < this.themeTopYs[0])
        this.$refs.detailnav.currentIndex = 0;
      else if (positionY<this.themeTopYs[1])
        this.$refs.detailnav.currentIndex = 1;
      else
        this.$refs.detailnav.currentIndex = 2;
    },
    titleClick(index) {
      switch (index) {
        case 0:
          this.$refs.scroll.scrollWhere(0, 0);
          break;
        case 1:
          this.$refs.scroll.scrollWhere(0, -this.themeTopYs[0]);
          break;
        case 2:
          this.$refs.scroll.scrollWhere(0, -this.themeTopYs[1]);
          break;
      }
    },
    backTopClick() {
      this.$refs.scroll.scrollWhere(0, 0);
    },
    //商品加入购物车
    addCart(){
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goodsInfo.title;
      product.desc = this.goodsInfo.desc;
      product.price = this.goodsInfo.newPrice;
      product.iid = this.iid;
      product.realPrice = this.goodsInfo.realPrice;
      product.count = 0;
      //默认商品在购物车选中
      product.isSelected = true;
      this.$store.dispatch('addCart', product).then((res)=>{
        // this.$toast.show(res, 2000);
      });
    }
  },
  data(){
    return{
      topImages:[],
      goodsInfo: {},
      shopInfo:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      themeTopYs:[],
      isShowBackTop:false,
      iid:''
    }
  },
  created() {
    //保存iid
    this.iid = this.$route.params.iid;
    //获取顶部轮播图
    getDetail(this.iid).then((res)=>{
      //获取轮播图
      this.topImages = res.result.itemInfo.topImages;
      //获取商品信息等
      this.goodsInfo = new GoodsInfo(res.result.itemInfo, res.result.columns, res.result.shopInfo.services);
      this.shopInfo = new ShopInfo(res.result.shopInfo);
      this.detailInfo = res.result.detailInfo;
      //获取参数信息
      this.paramInfo = new Goodsparam(res.result.itemParams.info, res.result.itemParams.rule);
      //获取评论
      // 2.7.保存评论信息
      if (res.result.rate.list) {
        this.commentInfo = res.result.rate.list[0];
      }
    })
  }
}
</script>

<style scoped>
.content {
  height: calc(100vh - 102px);
  overflow: hidden;
}
</style>
