<template>
  <TabBar>
    <TabBarItem path="/home" ActiveColor="blue">
      <!--@写法是路径src别名。详见build/webpack.base.conf.js,在VueCLi3，采用vue.config.js-->
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg">
      <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category">
      <img slot="item-icon" src="@/assets/img/tabbar/category.svg">
      <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart">
      <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg">
      <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/profile.svg">
      <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar";
import TabBarItem from "@/components/tabbar/TabBarItem";

export default {
  name: "MainTabbar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
