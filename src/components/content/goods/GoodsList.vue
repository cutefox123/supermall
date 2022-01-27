<template>
<div class="goods">
  <!--注意一定要绑定啊！！-->
  <GoodsListitem :key="arrayKeys[index]" v-for="(item,index) in goods" :goods-item="item">{{arrayKeys[index]}}</GoodsListitem>
</div>
</template>

<script>
import GoodsListitem from "@/components/content/goods/GoodsListitem";
import shortId from 'shortid'
export default {
  name: "GoodsList",
  props:['goods'],
  components:{
    GoodsListitem
  },
  data(){
    return{
      arrayKeys:[]
    }
  },
  //不知道为什么，没法生效。。好像和生命周期有关系
  mounted(){
    //根据要进行列表渲染的数组元素数量使用shortid.generate()创建对应的数组元素
    this.arrayKeys=this.goods.map(value =>  shortId.generate());
  }
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
