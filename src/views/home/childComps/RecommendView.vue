<template>
<div class="recommend">
  <div v-for="item in recommends" class="recommend-item">
    <a :href="recommends.link">
      <!--一定要记得加冒号，v-bind绑定！！！-->
      <img :src="item.image">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: "RecommendView",
  props:['recommends']
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 13px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
