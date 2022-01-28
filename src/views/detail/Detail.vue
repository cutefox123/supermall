<template>
<div id="detail">
<detail-nav></detail-nav>
  <!--必须传一个固定高度还有自己定义的参数-->
  <scroll class="content" :probe-type="3" :pull-up-load="false">
    <DetailSwiper :images="topImages"></DetailSwiper>
    <detail-base-info :base-info="goodsInfo"></detail-base-info>
    <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
    <detail-goods-info :goods-info="detailInfo"></detail-goods-info>
  </scroll>
</div>
</template>

<script>
import DetailNav from "@/views/detail/childComps/DetailNav";
import {getDetail,GoodsInfo,ShopInfo} from "@/network/detail";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import Scroll from "@/components/scroll/Scroll";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
export default {
  name: "Detail",
  components:{
    DetailGoodsInfo,
    Scroll,
    DetailShopInfo,
    DetailBaseInfo,
    DetailNav,
    DetailSwiper
  },
  data(){
    return{
      topImages:[],
      goodsInfo: {},
      shopInfo:{},
      detailInfo:{}
    }
  },
  created() {
    //保存iid
    this.iid = this.$route.params.iid;
    //获取顶部轮播图
    getDetail(this.iid).then((res)=>{
      this.topImages = res.result.itemInfo.topImages;
      this.goodsInfo = new GoodsInfo(res.result.itemInfo, res.result.columns, res.result.shopInfo.services);
      this.shopInfo = new ShopInfo(res.result.shopInfo);
      this.detailInfo = res.result.detailInfo;
      console.log(this.detailInfo);
    })
  }
}
</script>

<style scoped>
.content {
  height: calc(100vh - 44px);
  overflow: hidden;
}
</style>
