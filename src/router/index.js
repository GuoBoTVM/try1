import Vue from 'vue'
import Router from 'vue-router'
// import main from '@/components/main'

//做路由练习的路径
// import index from '@/pages/index'
// import about from '@/pages/about'
// import goods from '@/pages/goods'
// import news from '@/pages/news'
// import newsDetail from "@/pages/newsDetail"

// 路由作业的路径
// import Index from "@/pages/routerHomework/Index"
// import GoodsList from "@/pages/routerHomework/GoodsList"
// import GoodsSearch from "@/pages/routerHomework/GoodsSearch"
// import GoodsType from "@/pages/routerHomework/GoodsType"
// import GoodsIndex from "@/pages/routerHomework/GoodsIndex"
// import GoodsDetail from "@/pages/routerHomework/GoodsDetail"
// import Order from "@/pages/routerHomework/Order"
// import Car from "@/pages/routerHomework/Car"


//14节练习
import screenHome from "@/components/installComponent/screenHome"

import homeScreen from '@/pages/screen/home'
import clubScreen from '@/pages/screen/club'
import messageScreen from '@/pages/screen/message'
import mineScreen from '@/pages/screen/mine'


Vue.use(Router)

export default new Router({
  routes: [
    // {//项目默认的主页
    //   path: '/',
    //   name: 'main',
    //   component: main
    // },

    {//14节练习
      path:"/",
      name:"screenHome",
      component:screenHome,
    }

    // {//rem练习组件
    //   path:'/',
    //   name:'homeScreen',
    //   component:homeScreen,
    // },
    // {
    //   path:'/club',
    //   name:'clubScreen',
    //   component:clubScreen,
    // },
    // {
    //   path:'/message',
    //   name:'messageScreen',
    //   component:messageScreen,
    // },
    // {
    //   path:'/mine',
    //   name:'mineScreen',
    //   component:mineScreen,
    // }

    // 路由作业的路径
    // {
    //   path:"/",
    //   name:"index",
    //   component:Index,
    // },
    // {
    //   path:"/goods",
    //   name:"goods",
    //   component:GoodsIndex,
    //   children:[
    //     {
    //       path:"type",
    //       name:"goodstype",
    //       alias:"abc",
    //       component:GoodsType,
    //     },
    //     {
    //       path:"/goods/search",
    //       name:"goodssearch",
    //       component:GoodsSearch,
    //     },
    //     {
    //       path:"/goods/list",
    //       name:"goodslist",
    //       component:GoodsList,
    //     },
    //     {
    //       path:"/goods/detail",
    //       name:"goodsdetail",
    //       component:GoodsDetail,
    //     },
    //   ]
    // },
    // {
    //   path:"/order",
    //   name:"order",
    //   component:Order,
    // },
    // {
    //   path:"/car",
    //   name:"car",
    //   component:Car,
    // },

    
    // {//做路由练习的路径
    //   path: '/index',
    //   name: 'index',
    //   component: index,
    //   children:[
    //     {//"关于我们"的页面
    //       path: '/index/about',
    //       name: 'about',
    //       component: about
    //     },
    //     {//"货品"的页面
    //       path: '/index/goods',
    //       name: 'goods',
    //       component: goods
    //     },{
    //       path: '/index/news',
    //       name: 'news',
    //       component: news,
    //       children:[
    //         {
    //           path:"/index/news/:id",
    //           name:"newDetail",
    //           component:newsDetail,
    //         }
    //       ]
    //     }
    //   ]
    // },
        
  ]
})
