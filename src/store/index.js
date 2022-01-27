import Vue from "vue";
import Vuex from 'vuex'

//1.安装插件（use方法会内部调用install
Vue.use(Vuex);
//2.创建对象
const store = new Vuex.Store({
  state:{
      counter:100,
      students: [
        {name:'qaqaqa',age:21},
        {name:'huahua',age:20},
        {name:'test',age:19},
        {name:'hahaha',age:18}
      ]
  },
  mutations:{
    //state是直接被传进来的
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    increCount(state,cnt){
      state.counter+= cnt;
    },
    updateInfo(state){
      state.students[0].name = '华子'
    }

  },
  getters:{
      powCounter(state){
        return state.counter * state.counter;
      },
      more20Stu(state){
        return state.students.filter(s=>{
          return s.age>=20;
        })
      },
      more20Length(state,getters){
          return getters.more20Stu.length;
      },
      moreXStu(state){
          return (age)=>{
            return state.students.filter(s=>{
              return s.age>=age;
            })
          }
      }
  },
  actions:{
    aUpdateInfo(context,payload){
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          context.commit('updateInfo');
          console.log(payload);
          resolve('我是resolve传来的参数');
        },1000);
      })
    }
  },
  modules:{

  }
});
//3.导出store自定义对象
export default store;
//4.去main.js里导入并挂载

