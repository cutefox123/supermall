<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="@/assets/img/common/back.svg">
      </div>
      <div class="title" slot="center">
        <div :class="{active: currentIndex===index}"
             class="title-item"
             v-for="(item,index) in titles"
             @click="titleClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "@/components/navbar/NavBar";
export default {
  name: "DetailNav",
  components:{
    navBar
  },
  data(){
    return{
      iid:null,
      titles: ['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index;
    },
    backClick(){
      this.$router.back();
    }
  },
}
</script>

<style scoped>
.title{
  display: flex;
}
.title-item{
  flex: 1;
}
.active{
  color:var(--color-high-text);
}
.back img{
  margin-top: 10px;
  margin-left: 20px;
}
</style>
