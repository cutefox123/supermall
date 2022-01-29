<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{ cartListLength }})</div>
    </nav-bar>
    <scroll ref="scroll" class="content">
      <cart-list :cartList="cartList"></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import {mapGetters} from 'vuex'
import CartList from "@/views/cart/childComps/CartList";
import Scroll from "@/components/scroll/Scroll";
import CartBottomBar from "@/views/cart/childComps/CartBottomBar";

export default {
  name: "Cart",
  components: {
    CartBottomBar,
    Scroll,
    CartList,
    NavBar
  },
  data() {
    return {
      isSelectAllGoods: false,
    }
  },
  computed: {
    ...mapGetters(['cartListLength', 'cartList'])
  },
  methods: {
    handleSelectAllGoods() {
      this.isSelectAllGoods = !this.isSelectAllGoods;
      console.log(this.isSelectAllGoods)
      this.cartList.map(item => {
        item.isSelected = this.isSelectAllGoods;
      })
    }
  },
  //必须要重新计算，不然可拉取高度不够
  activated() {
    this.$refs.scroll.scroll.refresh();
  },
}
</script>

<style scoped>
.cart-nav {
  background: var(--color-tint);
  color: #fff;
}

.cart {
  height: 100vh;
}
.content {
  height: calc(100% - 49px - 44px - 40px);
  overflow: hidden;
}
</style>
