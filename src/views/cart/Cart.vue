<template>
  <div>
    <h2>购物车</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powCounter}}</h2>
    <p>{{$store.getters.more20Stu}}</p>
    <p>{{$store.getters.moreXStu(18)}}</p>
    <button @click="decre">减少1</button>
    <button @click="incre">增加1</button>
    <button @click="increCount(5)">增加5</button>
    <button @click="aUpdateInfo">异步操作修改</button>
  </div>
</template>

<script>
export default {
  name: "Cart",
  methods:{
    incre(){
      this.$store.commit('increment');
    },
    decre(){
      this.$store.commit('decrement');
    },
    increCount(cnt){
      //payload：负载，其实就是传的参cnt
      this.$store.commit('increCount',cnt);
    },
    aUpdateInfo(){
      this.$store.
      dispatch('aUpdateInfo','我是cart传来的参数').
      then((res)=>{
          console.log(res);
      });
    }
  }
}
</script>

<style scoped>

</style>
