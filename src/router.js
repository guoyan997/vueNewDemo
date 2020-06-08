import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 这个样式必须引入
Vue.use(Router)
// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

const router = new Router({
  routes: [
    // 欢迎页面
    // 访问路由时进行懒加载
    {
      path: '/',
      name: 'welcome',
      component: () => import(/* webpackChunkName: "welcome" */ './views/welcome.vue')
    },
    {
      path: '/market',
      name: 'market',
      component: () => import(/* webpackChunkName: "welcome" */ './views/market.vue')
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import(/* webpackChunkName: "welcome" */ './views/grid.vue')
    },
    {
      path: '/first',
      name: 'first',
      component: () => import(/* webpackChunkName: "first" */ './views/first.vue')
    },
    {
      path: '/second',
      name: 'second',
      component: () => import(/* webpackChunkName: "first" */ './views/second.vue')
    },
    {
      path: '/third',
      name: 'third',
      component: () => import(/* webpackChunkName: "first" */ './views/third.vue')
    },
    // {
    //   path: '/load',
    //   name: 'load',
    //   component: () => import(/* webpackChunkName: "welcome" */ './views/skeletonScreen.vue')
    // },
    // 404页面，放在所有路由的后面
    // 路由级别的代码分割
    // 为路由生成独立的代码块（404.[hash].js）
    // 访问路由时进行懒加载
    {
      path: '*',
      name: 'not-found',
      component: () => import(/* webpackChunkName: "404" */ './views/notFound.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router
