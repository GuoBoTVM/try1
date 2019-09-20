import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'


// import index from '@/pages/index'
// import about from '@/pages/about'
// import goods from '@/pages/goods'
// import news from '@/pages/news'
// import newsDetail from "@/pages/newsDetail"

import Index from "@/pages/routerHomework/Index"
import GoodsList from "@/pages/routerHomework/GoodsList"
import GoodsSearch from "@/pages/routerHomework/GoodsSearch"
import GoodsType from "@/pages/routerHomework/GoodsType"
import GoodsIndex from "@/pages/routerHomework/GoodsIndex"
import GoodsDetail from "@/pages/routerHomework/GoodsDetail"
import Order from "@/pages/routerHomework/Order"
import Car from "@/pages/routerHomework/Car"



Vue.use(Router)

export default new Router({
  routes: [
    // {//项目默认的主页
    //   path: '/',
    //   name: 'main',
    //   component: main
    // },


    // 路由作业的路径
    {
      path:"/",
      name:"index",
      component:Index,
    },
    {
      path:"/goods",
      name:"goods",
      component:GoodsIndex,
      children:[
        {
          path:"type",
          name:"goodstype",
          alias:"abc",
          component:GoodsType,
        },
        {
          path:"/goods/search",
          name:"goodssearch",
          component:GoodsSearch,
        },
        {
          path:"/goods/list",
          name:"goodslist",
          component:GoodsList,
        },
        {
          path:"/goods/detail",
          name:"goodsdetail",
          component:GoodsDetail,
        },
      ]
    },
    {
      path:"/order",
      name:"order",
      component:Order,
    },
    {
      path:"/car",
      name:"car",
      component:Car,
    },
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
