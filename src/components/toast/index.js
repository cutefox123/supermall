//学习手动自定义一个插件并安装
import Toast from "@/components/toast/Toast";
const obj = {}
obj.install = function (Vue){
  //1，创建对应组件构造器
  const constructor = Vue.extend(Toast);
  //2.调用构造器生成组件对象
  const toastObj = new constructor();
  //3.将组件对象手动挂载$mount到某div上
  toastObj.$mount(document.createElement('div'));
  //4.将该组件对应div元素append到body上
  document.body.appendChild(toastObj.$el);
  //5.将该组件加入到Vue.prototype上
  Vue.prototype.$toast = toastObj;
};

export default obj;
