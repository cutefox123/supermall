import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=> import('../views/home/Home');
const Category = ()=> import('../views/category/Category');
const Cart = ()=> import('../views/cart/Cart');
const Profile = ()=> import('../views/profile/Profile');
const Detail = ()=> import('../views/detail/Detail');

Vue.use(Router)

const router = new Router({
  mode:'history',//改为history模式
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home,
      meta:{
        title:'首页',
        footShow: true
      }
    },
    {
      path:'/category',
      component:Category,
      meta:{
        title:'分类',
        footShow: true
      }
    },
    {
      path:'/cart',
      component:Cart,
      meta:{
        title: '购物车',
        footShow: true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        title:'我的',
        footShow: true
      }
    },
    {
      //动态路由法传参
      path:'/detail/:iid',
      component:Detail,
      meta:{
        title:'商品详情',
        footShow: false
      }
    },
  ]
})
router.beforeEach((to, from,next) => {
  window.document.title = to.meta.title;
  next();
})
export default router;
