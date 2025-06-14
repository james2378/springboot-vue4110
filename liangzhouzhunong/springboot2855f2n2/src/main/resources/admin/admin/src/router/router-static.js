import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import nonghu from '@/views/modules/nonghu/list'
    import zhunongshangpin from '@/views/modules/zhunongshangpin/list'
    import discussnongjixuetang from '@/views/modules/discussnongjixuetang/list'
    import discusszhunongtuopin from '@/views/modules/discusszhunongtuopin/list'
    import chanpinfenlei from '@/views/modules/chanpinfenlei/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import wenzhangfenlei from '@/views/modules/wenzhangfenlei/list'
    import discusszhunongshangpin from '@/views/modules/discusszhunongshangpin/list'
    import orders from '@/views/modules/orders/list'
    import nongjixuetang from '@/views/modules/nongjixuetang/list'
    import config from '@/views/modules/config/list'
    import zhunongtuopin from '@/views/modules/zhunongtuopin/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告资讯',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/nonghu',
        name: '农商',
        component: nonghu
      }
      ,{
	path: '/zhunongshangpin',
        name: '助农商品',
        component: zhunongshangpin
      }
      ,{
	path: '/discussnongjixuetang',
        name: '农技学堂评论',
        component: discussnongjixuetang
      }
      ,{
	path: '/discusszhunongtuopin',
        name: '助农脱贫评论',
        component: discusszhunongtuopin
      }
      ,{
	path: '/chanpinfenlei',
        name: '产品分类',
        component: chanpinfenlei
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/wenzhangfenlei',
        name: '文章分类',
        component: wenzhangfenlei
      }
      ,{
	path: '/discusszhunongshangpin',
        name: '助农商品评论',
        component: discusszhunongshangpin
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/nongjixuetang',
        name: '农技学堂',
        component: nongjixuetang
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/zhunongtuopin',
        name: '助农脱贫',
        component: zhunongtuopin
      }
      ,{
	path: '/newstype',
        name: '公告资讯分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
