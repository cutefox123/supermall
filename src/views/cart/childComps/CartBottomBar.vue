<template>
  <div class="bottom-bar">
    <div class="check">
      <check-goods-btn :isSelected="isSelectAllGoods" @click.native="handleSelectAllGoods"/>
      <span>全选</span>
    </div>
    <div class="all-price">合计：￥{{totalPrice}}</div>
    <div class="settle-accounts" @click="handleSettleAccounts">去结算（{{totalNum}}）</div>
  </div>
</template>

<script>
import CheckGoodsBtn from '@/components/checkGoodsBtn/CheckGoodsBtn';

import { mapGetters } from 'vuex';

export default {
  name: 'CartBottomBar',
  components: {
    CheckGoodsBtn,
  },
  computed: {
    ...mapGetters(['cartList', 'cartListLength']),
    isSelectAllGoods(){
      //every是一假为假，some是一真为真，find是返回第一个符合条件元素
      /*
      * 注意： every() 不会对空数组进行检测。
        注意： every() 不会改变原始数组。
       注意：若收到一个空数组，此方法在一切情况下都会返回 true*/
      return !!(this.cartList.length && this.cartList.every(item => item.isSelected));
    },
    totalPrice(){
      return this.cartList.filter(item=>item.isSelected)
        .reduce((prev,curr)=>{
          return prev + curr.realPrice * curr.count;
        }, 0).toFixed(2);
    },
    totalNum(){
      return this.cartList.filter(item=>item.isSelected)
        .reduce((prev,curr)=>{
          return prev + curr.count;
        }, 0);
    }
  },
  methods: {
    handleSelectAllGoods(){
      if(this.isSelectAllGoods){
        this.cartList.map(item => item.isSelected = false);
      }else {
        this.cartList.map(item => item.isSelected = true);
      }
    },
    handleSettleAccounts(){
      this.$toast.show("你的口袋空空。。");
    }
  },
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  text-align: center;
  background: #f6f6f6;
}
.bottom-bar .check{
  width: 70px;
  display: flex;
}
.bottom-bar .check span {
  margin-left: 8px;
}
.bottom-bar .all-price{
  flex: 1;
}
.bottom-bar .settle-accounts {
  width: 120px;
  height: 100%;
  line-height: 40px;
  color: #fff;
  background: red;
}
</style>
