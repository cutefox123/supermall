import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
// import fastclick from 'fastclick';
import toast from "@/components/toast";
import lazyload from 'vue-lazyload';

//安装toast插件
Vue.use(toast);
//解决移动端300ms延迟，暂时弃用，换css，详见
//https://www.cnblogs.com/dxzg/p/9378334.html
// fastclick.attach(document.body);
//使用vue-lazyload插件
Vue.use(lazyload,{
  loading:require('@/assets/img/common/placeholder.png')
});

// 添加事件总线对象
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
