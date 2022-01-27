import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=> import('../views/home/Home');
const Category = ()=> import('../views/category/Category');
const Cart = ()=> import('../views/cart/Cart');
const Profile = ()=> import('../views/profile/Profile');

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
        title:'首页'
      }
    },
    {
      path:'/category',
      component:Category,
      meta:{
        title:'分类'
      }
    },
    {
      path:'/cart',
      component:Cart,
      meta:{
        title: '购物车'
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        title:'我的'
      }
    }
  ]
})
router.beforeEach((to, from,next) => {
  window.document.title = to.meta.title;
  next();
})
export default router;
