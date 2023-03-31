// 导入vue
import Vue from "vue"
//导入Vue-router
import VueRouter from "vue-router"
// 注册路由
Vue.use(VueRouter)

// 配置路由规则
const routes = [
    {
        path: '/',
        // 路由重定向,重定向之后的访问地址
        redirect: '/home'
    },
    {
        // 路由名称
        name: 'home',
        // 指定访问的地址
        path: '/home',
        // 指定访问路径 -- 路由懒加载模式书写
        component: () => import('../pages/HomeView'),
        // 路由元信息
        meta: {
            title: '英雄联盟全新官方网站-腾讯游戏'
        }
    },
    {
        // 404 错误
        path: '*',
        component: () => import('../pages/FourView')
    }
]

// 根据路由规则创建路由实例对象
const router = new VueRouter({
    // 引用路由规则
    routes,
    // 路由模式 history表示访问页面路径不带#
    mode: "history"
})

// 全局路由导航守卫
router.beforeEach((to, form, next) => {
    // 动态设置网页标题
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})




// 导出路由
export default router